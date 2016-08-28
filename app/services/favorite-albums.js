import Ember from 'ember';

export default Ember.Service.extend({
  albums: [],

  add(album) {
    this.get('albums').pushObject(album);
  }
});
