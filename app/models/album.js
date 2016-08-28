import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  artist: DS.attr(),
  genre: DS.attr(),
  year: DS.attr(),
  artworkUrl: DS.attr(),
  reviews: DS.hasMany('review', { async: true })
});
