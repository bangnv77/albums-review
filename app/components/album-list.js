import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['title:asc'],
  sortedAlbums: Ember.computed.sort('model', 'sortBy')
});
