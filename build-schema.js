const fs = require('fs');
const pkg = require('./package.json');

const mapConfig = {
  'europe': {
    key: 'ISO3'
  },
  'european-union': {
    key: 'ISO3'
  },
  'france-academies': {
    key: 'id'
  },
  'france-departements-outre-mer': {
    key: 'code'
  },
  'france-departements-simplified': {
    key: 'code'
  },
  'france-departements': {
    key: 'code'
  },
  'france-regions-metropole-simplified': {
    key: 'code'
  },
  'france-regions-metropole': {
    key: 'code'
  }
};

for (item in mapConfig) {
  mapConfig[item].path = `https://cdn.jsdelivr.net/npm/@alter-eco/geo@^${pkg.version}/dist/${item}.json`;
}

fs.writeFileSync('./schema.json', JSON.stringify(mapConfig));
