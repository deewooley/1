class Animal {
  constructor(name, eats, sound){
      this.name = name;
      this.eats = eats;
      this.sound = sound;
    
  }
  chooseAnimal(){
      console.log("The " + this.name + " eats " + this.eats + " and says " + this.sound +".");
  }
}
let dog = new Animal("Chicken","Kibble", "Woof");
dog.chooseAnimal();
let cat = new Animal ("Cat", "Tuna", "Meow");
cat.chooseAnimal();

let chicken = new Animal("Chicken", "Chicken Food", "Bock, Bock")
chicken.chooseAnimal();
