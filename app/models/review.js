import DS from 'ember-data';

export default DS.Model.extend({
  userName: DS.attr(),
  rating: DS.attr(),
  comment: DS.attr(),
  album: DS.belongsTo('album', { async: true })
});
