import { observable } from 'mobx';

const apiRoot = 'http://127.0.0.1:8080';
function fetchWrapper(url, options) {
  return fetch(`${apiRoot}${url}`, options).then(resp => resp.json());
}

const api = {
  config() {
    return fetchWrapper('/api/config');
  },
  files() {
    return fetchWrapper('/api/files?skipProcessing=false');
  },
};

export default class ReptarStore {
  @observable files = [];
  @observable config = {};

  async sync() {
    const [config, files] = await Promise.all([api.config(), api.files()]);
    this.files = files.reverse();
    this.config = config;

    this.filesMap = this.files.reduce((acc, file) => {
      acc[file.id] = file;
      return acc;
    }, {});
  }
}
