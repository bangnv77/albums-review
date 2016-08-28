import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('album', params.album_id);
  },

  actions: {
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var album = params.album;
      album.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        console.log(album);
        return album.save();
      });
    }
  }
});
