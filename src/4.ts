class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}
class Key {
  private quantity: number = Math.random();
  getQuantity(): number {
    return this.quantity;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
