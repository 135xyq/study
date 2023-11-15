type CallBack<K, V> = (key: K, value: V) => void

export class Dictionary<K, V> {
  private keys: K[] = [];
  private values: V[] = [];

  get size(): number {
    return this.keys.length
  }

  set(key: K, value: V): void {
    const index = this.keys.indexOf(key);
    if (index >= 0) {
      this.values[index] = value;
    } else {
      this.keys.push(key);
      this.values.push(value);
    }
  }

  forEach(callback: CallBack<K, V>): void {
    this.keys.forEach((key, index) => {
      callback(key, this.values[index]);
    });
  }

  delete(key: K): void {
    const index = this.keys.indexOf(key);
    if (index >= 0) {
      this.keys.splice(index, 1);
      this.values.splice(index, 1);
    }
  }

  get(key: K): V | undefined {
    const index = this.keys.indexOf(key);
    return index >= 0 ? this.values[index] : undefined;
  }

  has(key: K) {
    return this.keys.indexOf(key)
  }

  clear() {
    this.keys = []
    this.values = []
  }
}
