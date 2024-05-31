{
    // class and objects

    class Animal{
        name: string;
        species: string;
        sound: string;

        constructor(name: string, species: string, sound: string){
            this.name= name;
            this.species= species;
            this.sound= sound
        }

        makeSound(){
            console.log(`The ${this.name} sayes ${this.sound}`);
        }

    };

    class Animal1{
       public name: string;
       public species: string;
       public sound: string;

        constructor(name: string, species: string, sound: string){
            this.name= name;
            this.species= species;
            this.sound= sound
        }
        makeSound(){
            console.log(`The ${this.name} sayes ${this.sound}`);
        }
    };

    // use perameter properties
    class Animal2{

        constructor(public name: string, public species: string, public sound: string){ }
        makeSound(){
            console.log(`The ${this.name} sayes ${this.sound}`);
        }
    };

    const dog = new Animal('Tommy','Dog', 'Gew gew....');
    const cat = new Animal1('Brawni','Cat', 'Meaw Meaw....');
    const bird = new Animal2('Moina','Bird', 'moina....');

     dog.makeSound();
     cat.makeSound();
     bird.makeSound();

    // 
}