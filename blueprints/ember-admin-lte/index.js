/*jshint node:true*/
module.exports = {
  description: '',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  normalizeEntityName: function() {},

  afterInstall: function() {
    // Perform extra work here.
    return this.addBowerPackageToProject('admin-lte');
  }
};
