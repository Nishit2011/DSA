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