let isPresentacion = true;
const presentationContent=[{time:15,type:'presentacionPersonal'},{time:15,type:'presentacionCurso'}]
const regularContent=[{time:30,type:'standup'}]
const inicio = isPresentacion?presentationContent:regularContent;
let doMasterClass = (doRecording) => {return 'knowledge'}
const principal = () => { doMasterClass(true); return {time:60,type:'learnNewTopics'}}
const prepareNextLesson = {time:30,type:'flushKnowledge'}
let result = [...inicio,principal(),prepareNextLesson]
const NUM_LESSONS = 5
const HOUR_VALUE = 60
let totalLessonTime = 0
result.forEach(aux=>{ totalLessonTime+= aux.time;})
console.log(`Total time per lesson is ${totalLessonTime} minutes`)
console.log(`Total in-person time is ${totalLessonTime*NUM_LESSONS}
            minutes (${(totalLessonTime*NUM_LESSONS)/HOUR_VALUE}h)`)