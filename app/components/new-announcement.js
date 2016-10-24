import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    saveAnnouncement1() {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        date: this.get('date'),
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveAnnouncement2', params);
    }
  }
});
