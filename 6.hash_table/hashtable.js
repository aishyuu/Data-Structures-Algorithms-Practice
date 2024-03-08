// Hashmap implementation
class HashMap {
  constructor() {
    this.data = new Array(16);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= this.data.length;
    }
    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);
    if (this.data[hashCode] != null) {
      console.log(
        `Overwriting data: {${this.data[hashCode].key}, ${this.data[hashCode].value}}`
      );
    }
    this.data[hashCode] = { key: key, value: value };
  }

  get(key) {
    const hashCode = this.hash(key);
    if (this.data[hashCode] == null) {
      return null;
    }
    if (this.data[hashCode].key == key) {
      return this.data[hashCode].value;
    }
    return null;
  }

  has(key) {
    const hashCode = this.hash(key);
    if (this.data[hashCode] == null) {
      return false;
    }
    if (this.data[hashCode].key == key) {
      return true;
    }
    return false;
  }

  remove(key) {
    const hashCode = this.hash(key);
    if (this.data[hashCode] == null) {
      return false;
    }
    if (this.data[hashCode].key == key) {
      this.data[hashCode] = null;
      return true;
    }
    return false;
  }

  length() {
    let result = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] != null) {
        result += 1;
      }
    }
    return result;
  }

  clear() {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] = null;
    }
  }

  keys() {
    let result = [];
    for (let i = 0; i < this.data.length; i++) {
      result.push(this.data[i].key);
    }
    return result;
  }

  values() {
    let result = [];
    for (let i = 0; i < this.data.length; i++) {
      result.push(this.data[i].value);
    }
    return result;
  }

  entries() {
    let result = [];
    for (let i = 0; i < this.data.length; i++) {
        result.push([this.data[i].key, this.data[i].value])
    }
    return result;
  }
}

const test = new HashMap();
console.log(test.hash("Hello There"));
test.set("Hello There", 2314);
console.log(test.data);
test.set("Hello There", 2555);
console.log(test.data);
console.group(test.length());
