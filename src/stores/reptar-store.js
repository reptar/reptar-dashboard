import { observable } from 'mobx';
import api from '../utils/api';

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
