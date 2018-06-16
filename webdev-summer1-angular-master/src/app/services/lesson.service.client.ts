export class LessonServiceClient {
  findLessonsForModule(moduleId,courseId) {
    console.log("In lesson service client:"+moduleId);
    console.log("In lesson service client:"+courseId);
    return fetch('http://localhost:8080/api/course/'+ courseId+ '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
