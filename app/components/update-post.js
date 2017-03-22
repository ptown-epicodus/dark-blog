import Ember from 'ember';

export default Ember.Component.extend({
  showingUpdate: false,
  actions: {
    updatePost(post) {
      var params = {
        title: this.get('title'),
        body: this.get('body')
      };
      this.sendAction('updatePost', post, params);
      this.set('showingUpdate', false);
    },
    showUpdate() {
      this.set('showingUpdate', true);
    }
  }
});
