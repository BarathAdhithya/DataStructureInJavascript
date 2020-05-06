class Myarray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return "success";
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[length - 1];
    this.length--;
    return lastItem;
  }

  shiftItems(index) {
    for (let i = index; i <= this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}

const newArray = new MyArray();
newArray.push("R");
