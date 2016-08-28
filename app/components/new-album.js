import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAlbum() {
      var params = {
        title: this.get('title'),
        artist: this.get('artist'),
        genre: this.get('genre'),
        year: this.get('year'),
        artworkUrl: this.get('artworkUrl')
      };
      if (params.title !== undefined && params.artist !== undefined && params.genre !== undefined && params.year !== undefined && params.artworkUrl !== undefined) {
        this.sendAction('saveAlbum', params);
        this.set('title', '');
        this.set('artist', '');
        this.set('genre', '');
        this.set('year', '');
        this.set('artworkUrl', '');
      }
    }
  }
});
