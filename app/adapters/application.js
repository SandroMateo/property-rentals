import FirebaseAdapter from 'emberfire/adapters/firebase';

export default FirebaseAdapter.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      announcements: this.store.findAll('announcement')
    });
  },

  setupController(controller, models) {
   controller.set('rentals', models.rentals);
   controller.set('announcements', models.announcements);
  }
});
