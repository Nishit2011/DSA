/**
 * Problem: Given meeting intervals, check if a person can attend all meetings (no overlap).
 * Trick: Sort by start time, then check if any meeting starts before the previous one ends.
 * Time: O(n log n) | Space: O(1)
 */
function canAttendMeetings(intervals){

    intervals.sort((a,b)=> a[0] - b[0])

    for(let i=1;i<intervals.length;i++){
        const previousMeeting = intervals[i-1]
        const currentMeeting = intervals[i]

        if(currentMeeting<previousMeeting){
            return false
        }
    }

    return true
}