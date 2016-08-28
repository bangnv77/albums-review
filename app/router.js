import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('albums');
  this.route('about');
  this.route('contact');
  this.route('album', {path: '/album/:album_id'});
  this.route('admin');
});

export default Router;
