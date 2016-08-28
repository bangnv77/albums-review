import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveAlbum(params) {
      var newAlbum = this.store.createRecord('album', params);
      newAlbum.save();
      this.transitionTo('album', newAlbum.id);
    }
  }
});
