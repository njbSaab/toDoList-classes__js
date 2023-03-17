// class Box{
//    _age = 0

//    constructor(name, age){
//       console.log('create class');

//       this.name = name
//       this.age = age
//    }

//    sayHi(){
//     console.log('hi ' + this.name);
//    }

//    set age(val) {
//       this._age = val
//       console.log(2023 - this._age);
//    }
//    get age(){
//       return this._age
//    }
// }
// let myBox = new Box( "NJ", 31)

// let myBox2 = new Box("Jain", 23)

// let myBox3 = new Box("Naijel", 25)

// console.log(Box);
// console.log(myBox.name);

// myBox.sayHi()
// myBox.age = 21

// console.log(myBox instanceof Box);//true

import{ToDo} from "./ToDo.js"


let app = new ToDo(document.getElementById('app'))
app.addUser('my deal', 'my')

document.getElementById('action').addEventListener('click', function(){
   app.addUser(prompt('name user'), 'sad')
  
})

// document.getElementById('action').addEventListener('click', function(){
//    let newNote = new Note(document.getElementById("app"), prompt('deal'));
// })