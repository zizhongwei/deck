'use strict';

const angular = require('angular');

module.exports = angular.module('spinnaker.oraclebmcs.ocid.component', [
  require('./truncateOcid.filter.js').name
])
  .component('ocid', {
    templateUrl: require('./ocid.template.html'),
    bindings: {
      ocid: '=',
      showOcid: '@'
    }
});
