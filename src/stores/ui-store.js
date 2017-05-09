import { observable, action } from 'mobx';

export default class UiStore {
  constructor(reptar) {
    this.reptar = reptar;
  }

  @observable selected;

  @action setSelected = id => {
    this.selected = this.reptar.filesMap[id];
  };
}
