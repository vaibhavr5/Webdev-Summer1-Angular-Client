export class WidgetServiceClient {
  findWidgetsForTopic(topicId) {
    console.log("Widget service client:"+topicId);
    return fetch('https://course-mgmt-sys.herokuapp.com/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}
