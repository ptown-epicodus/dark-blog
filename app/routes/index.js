import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('post').then(function(res){return res.slice(0,5)});
  },
  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});
