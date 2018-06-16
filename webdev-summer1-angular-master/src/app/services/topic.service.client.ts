export class TopicServiceClient {
  findTopicsForLesson(lessonId,moduleId,courseId) {
    console.log("In topic service client:"+moduleId);
    console.log("In topic service client:"+courseId);
    console.log("In topic service client:"+lessonId);
    return fetch('http://localhost:8080/api/course/'+ courseId+ '/module/' + moduleId + '/lesson/'+lessonId+'/topic')
      .then(response => response.json());
  }
}
