export class Storage {
  static save(key: string, value: string) {
    return localStorage.setItem(key, value);
  }

  static load(key: string) {
    return localStorage.getItem(key);
  }

  static remove(key: string) {
    return localStorage.removeItem(key);
  }

  static clear() {
    return localStorage.clear();
  }
}
