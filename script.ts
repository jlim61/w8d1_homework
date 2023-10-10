/*
Question #1

Create a type to represent the following instances of `CTStudent` Also declare three 3 students below as type `CTStudent` and set their values

let student1 = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

let student2= {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}

let student3 = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
} 
*/

type CTStudent = {
    id: string,
    name: string,
    age: number,
    isTired: boolean,
    projectsCompleted: string[],
    pet?: string
}

let student1: CTStudent = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

let student2= {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}

let student3 = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
} 

//   ========================================================================================================================================================


/* 
Question #2

Write a function that will accept a an object of type `Fruit`, the object of type Fruit could also be `null`.  If their is a Fruit print the color of the fruit, otherwise print `You ate my fruit already` be sure to annoate the return type of the function

type Fruit={
    color:string,
    shape:string
  }
  
  let apple:Fruit={color:"red", shape:"sphere"}
  let eaten:Fruit|null=null

  */

  type Fruit={
    color:string,
    shape:string
  }

  let apple:Fruit={color:"red", shape:"sphere"}
  let eaten:Fruit|null=null

  function fruitFunction(object: Fruit | null):void {
    if (object) {
        console.log(object.color)
    } else console.log('You ate my fruit already')
  }

fruitFunction(apple)
fruitFunction(eaten)
  

//   ========================================================================================================================================================


  /* 
Question #3

Create a Union Type named `Ebook` for `Book` and `DigitalBook` and create one instance of the new union type
type Book={
    isbn:string,
    title:string,
    author:string
  }
  
  type DigitalBook={
    fileType:string,
  }
  
  */

type Book = {
    isbn: string,
    title: string,
    author: string
}

type DigitalBook = {
    fileType: string
}

type Ebook = Book & DigitalBook

const TheHungerGames: Ebook = {
    isbn: '9780545229937',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    fileType: 'pdf'
}

console.log(TheHungerGames)

//   ========================================================================================================================================================

  /* 
Question #4

Create a Type to represent a `ShopItem` that will fit the following rules. You may need to create additional structures

- All ShopItems have an numeric id that can not be edited 
- All ShopItems have a price
- All ShopItems have a description
- Some ShopItems have a color
- All ShopItems have a Category represented with an enum 
    - Possible Categories are `Shirts` `Shoes` `Pants` `Hats`
- All ShopItems have a list of keywords used to help search for the ShopItem 
    - For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]

After Creating the `ShopItem` type create 3 items using this type
*/

enum clothingType {
    Shirts = 'Shirts',
    Shoes = 'Shoes',
    Pants = 'Pants',
    Hats = 'Hats'
}

type ShopItem = {
    readonly id: number,
    price: string,
    description: string,
    color?: string,
    category: clothingType,
    keyWords: string[]
}

const ironManShirt: ShopItem = {
    id: 1,
    price: '$24.99',
    description: 'A must have Marvel shirt for any fan of Iron Man.',
    color: 'Red and Yellow',
    category: clothingType.Shirts,
    keyWords: ['Marvel', 'Endgame', 'Ironman', 'Character Tees', 'Tony Stark']
}

const ashKetchumHat: ShopItem = {
    id: 2,
    price: '$18.99',
    description: 'A replica of Ash\'s iconic hat in the Pokemon Anime Series',
    color: 'Red and White',
    category: clothingType.Hats,
    keyWords: ['Pokemon', 'Ash Ketchum', 'Anime']
}

const squarePants: ShopItem = {
    id: 3,
    price: '$45.00',
    description: 'Be like Sponebob and get your very own pair of square pants!',
    category: clothingType.Pants,
    keyWords: ['Nickelodeon', 'Spongebob', 'Cartoon', 'Squarepants', 'Sponge']
}

console.log(ironManShirt)
console.log(ashKetchumHat)
console.log(squarePants)