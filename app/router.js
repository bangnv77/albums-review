import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('album', {path: '/album/:album_id'});
  this.route('admin');
  this.route('favorites');
});

export default Router;
