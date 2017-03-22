import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    updatePost(post, params) {
      console.log('Post:');
      console.log(post);
      console.log('Params:');
      console.log(params);
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('/post/' + post.id);
    }
  }
});
