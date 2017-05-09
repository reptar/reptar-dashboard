import ReptarStore from './reptar-store';
import UiStore from './ui-store';

export default class Stores {
  constructor() {
    this.reptar = new ReptarStore();
    this.ui = new UiStore(this.reptar);
  }

  static create() {
    return new Stores();
  }
}
