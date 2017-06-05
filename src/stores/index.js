import ReptarStore from './reptar-store';
import UiStore from './ui-store';

export default class Stores {
  constructor(additionalStores) {
    Object.assign(this, additionalStores);
    this.reptar = new ReptarStore();
    this.ui = new UiStore(this);
  }

  static create(stores) {
    return new Stores(stores);
  }
}
