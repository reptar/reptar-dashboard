import { observable } from 'mobx';
import api from '../utils/api';

export default class ReptarStore {
  @observable hasLoaded = false;
  @observable files = [];
  @observable config = {};

  async sync() {
    const [config, rawFiles] = await Promise.all([api.config(), api.files()]);
    const files = rawFiles.map(file => {
      file.displayId = file.id; // eslint-disable-line no-param-reassign
      file.id = encodeURIComponent(file.id); // eslint-disable-line no-param-reassign

      return file;
    });

    this.files = files.reverse();
    this.config = config;

    this.filesMap = this.files.reduce((acc, file) => {
      acc[file.id] = file;
      return acc;
    }, {});

    this.hasLoaded = true;
  }
}
