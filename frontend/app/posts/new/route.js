import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('post');
  },
  actions: {
    save: function() {
      this.currentModel.save().then(() => {
        this.transitionTo('posts');
      });
    }
  }
});
