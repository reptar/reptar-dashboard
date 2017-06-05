import { computed } from 'mobx';
import { matchPath } from 'react-router-dom';

export default class UiStore {
  constructor({ reptar, routing }) {
    this.reptar = reptar;
    this.routing = routing;
  }

  @computed
  get selected() {
    if (!this.routing.location.pathname.startsWith('/post')) {
      return null;
    }

    const match = matchPath(this.routing.location.pathname, {
      path: '/post/:id',
    });

    if (match && this.reptar.hasLoaded) {
      return this.reptar.filesMap[match.params.id];
    }

    return null;
  }

  @computed
  get selectedId() {
    return this.selected ? this.selected.id : null;
  }
}
