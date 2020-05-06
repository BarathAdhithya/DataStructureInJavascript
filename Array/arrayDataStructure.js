//reference type

//context vs scope
//instantiation

class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`hi i am ${this.name}, I am a ${this.type}`);
  }
}

class Wizarrd extends Player {
  constructor(name, type) {
    super(type);
  }
  play() {
    console.log(`we are ${this.type}`);
  }
}

const wizz = new Wizarrd("barath", "destroyer");
