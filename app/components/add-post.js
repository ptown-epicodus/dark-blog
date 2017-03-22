import Ember from 'ember';
import moment from 'moment';
var currentTime = function() {
  return moment().format('YYYY-MM-DD hh:mm:ss');
};

export default Ember.Component.extend({
  actions: {
    createPost() {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        time: currentTime()
      };
      this.sendAction('savePost', params);
      $('.showForm').toggle();
      $('.showBTN').toggle();
    },
    showForm(){
      $('.showForm').toggle();
      $('.showBTN').toggle();
    }
  }
});
