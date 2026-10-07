class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}


class Trie {
    constructor() {
        // Root doesn't represent a character.
        this.root = new TrieNode();
    }


    // ============================================
    // 1. INSERT
    // ============================================

    insert(word) {

        let current = this.root;

        for (const char of word) {

            // Character doesn't exist.
            // Create a new node.
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }

            // Move to the next node.
            current = current.children.get(char);
        }

        // The complete word ends here.
        current.isEnd = true;
    }


    // ============================================
    // 2. SEARCH
    // ============================================

    search(word) {

        const node = this.findNode(word);

        // Node must exist AND it must represent
        // the end of a complete word.
        return node !== null && node.isEnd;
    }


    // ============================================
    // 3. STARTS WITH
    // ============================================

    startsWith(prefix) {

        const node = this.findNode(prefix);

        return node !== null;
    }


    // ============================================
    // 4. GET WORDS WITH PREFIX
    // ============================================

    getWordsWithPrefix(prefix) {

        // First find the node representing prefix.
        const node = this.findNode(prefix);

        // Prefix doesn't exist.
        if (node === null) {
            return [];
        }

        const result = [];

        // DFS from this node.
        this.collectWords(
            node,
            prefix,
            result
        );

        return result;
    }


    // ============================================
    // 5. DELETE
    // ============================================

    delete(word) {

        this.deleteRecursive(
            this.root,
            word,
            0
        );
    }


    // ============================================
    // HELPER: FIND NODE
    // ============================================

    findNode(word) {

        let current = this.root;

        for (const char of word) {

            if (!current.children.has(char)) {
                return null;
            }

            current = current.children.get(char);
        }

        return current;
    }


    // ============================================
    // HELPER: COLLECT WORDS
    // ============================================

    collectWords(
        node,
        currentWord,
        result
    ) {

        // A complete word ends here.
        if (node.isEnd) {
            result.push(currentWord);
        }

        // Explore all children.
        for (const [char, childNode]
            of node.children) {

            this.collectWords(
                childNode,
                currentWord + char,
                result
            );
        }
    }


    // ============================================
    // HELPER: DELETE
    // ============================================

    deleteRecursive(
        node,
        word,
        index
    ) {

        // We reached the end of the word.
        if (index === word.length) {

            // Word doesn't exist.
            if (!node.isEnd) {
                return false;
            }

            // Word no longer ends here.
            node.isEnd = false;

            // If there are no children,
            // this node can be deleted.
            return node.children.size === 0;
        }


        const char = word[index];

        // Character doesn't exist.
        if (!node.children.has(char)) {
            return false;
        }


        const childNode =
            node.children.get(char);


        // Recursively delete the rest.
        const shouldDeleteChild =
            this.deleteRecursive(
                childNode,
                word,
                index + 1
            );


        // Remove child if no longer needed.
        if (shouldDeleteChild) {
            node.children.delete(char);
        }


        // Current node can be removed if:
        //
        // 1. No word ends here
        // 2. It has no children
        //
        return (
            !node.isEnd &&
            node.children.size === 0
        );
    }
}