class Ship {
  length;

  hitCount;

  sunk;

  constructor(length, hitCount = 0, sunk = false) {
    this.length = length;
    this.hitCount = hitCount;
    this.sunk = sunk;
  }

  hit() {
    if (this.isSunk()) {
      return;
    }
    this.hitCount += 1;
  }

  isSunk() {
    return this.hitCount >= this.length;
  }
}

export default Ship;
