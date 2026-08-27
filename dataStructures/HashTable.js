class HashTable {
    constructor(size = 10) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash * 31 + key.charCodeAt(i)) % this.size;
        }

        return hash;
    }

    set(key, value) {
        const index = this.hash(key);

        if (!this.table[index]) {
            this.table[index] = [];
        }

        // Update existing key
        for (const pair of this.table[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        // Insert new key
        this.table[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);

        if (!this.table[index]) {
            return undefined;
        }

        for (const [storedKey, value] of this.table[index]) {
            if (storedKey === key) {
                return value;
            }
        }

        return undefined;
    }

    delete(key) {
        const index = this.hash(key);

        if (!this.table[index]) {
            return false;
        }

        const bucket = this.table[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return true;
            }
        }

        return false;
    }
}