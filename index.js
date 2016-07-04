/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-admin-lte',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/admin-lte/dist/css/AdminLTE.min.css');
    app.import(app.bowerDirectory + '/admin-lte/dist/css/skins/_all-skins.min.css');
  },

  isDevelopingAddon: function() {
    return true;
  }
};
