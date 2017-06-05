const apiRoot = 'http://127.0.0.1:8080';
function fetchWrapper(url, options) {
  return fetch(`${apiRoot}${url}`, options).then(resp => resp.json());
}

export default {
  config() {
    return fetchWrapper('/api/config');
  },
  files() {
    return fetchWrapper('/api/files?skipProcessing=false');
  },
};
