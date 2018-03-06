import { version } from './package.json';

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
    key: 'code',
    projection: 'geoConicConformalFrance'
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

export default function getConfig() {
  for (let item in mapConfig) {
    mapConfig[item].path = `https://cdn.jsdelivr.net/npm/@alter-eco/geo@^${version}/dist/${item}.json`;
  }

  return mapConfig;
};
