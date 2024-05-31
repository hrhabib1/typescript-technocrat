{
    // instanceof guard
    class Animal{
        constructor(public name: string, public species: string){}
        makeSound(){
            console.log('I am making sound')
        }
    };

    class Dog extends Animal{
        constructor(name: string, species: string){
            super(name, species)
        }
        makeBark(){
            console.log('I am barking gew gew')
        }
    };
    class Cat extends Animal{
        constructor(name: string, species: string){
            super(name, species)
        }
        makeMew(){
            console.log('I am mawing mew mew')
        }
    };

    const isDog = (animal: Animal): animal is Dog =>{
        return animal instanceof Dog
    };
    const isCat = (animal: Animal): animal is Cat =>{
        return animal instanceof Cat
    };

    const getAnimal = (animal: Animal)=>{
        if(isDog(animal)){
            animal.makeBark();
        } else if(isCat(animal)){
            animal.makeMew
        } else{
            animal.makeSound
        }
    };

    const dog = new Dog('Tommy', 'Dog');
    const cat = new Cat('Brawni', 'Cat');
    
    getAnimal(dog);
    getAnimal(cat);
    
    dog.makeSound()
 









    // 
}