import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveReview() {
      var params = {
        userName: this.get('userName'),
        rating: this.get('rating'),
        comment: this.get('comment'),
        album: this.get('album')
      };
      if (params.userName !== undefined && params.rating !== undefined && params.comment !== undefined) {
        this.sendAction('saveReview', params);
        this.set('userName', '');
        this.set('rating', '');
        this.set('comment', '');
      }
    }
  }
});
