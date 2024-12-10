const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'where-to-now',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

