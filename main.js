const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

//https://gist.github.com/cford-14/0ff506149b60856cbc48e5e3c1d231ce

class Field{
    constructor(array){
    this.array = array;
    this.maxWidth=array[0].length
    this.maxHeight=array.length
    this.playableField=array.length*array[0].length
    }
print(){
for(let i=0;i<this.array.length;i++){
    console.log(this.array[i].join(''))
}
}

outOfBounds(lat,long,arr){
if(lat<=-1 || long<=-1 || lat >= arr.length || long >= arr[1].length){
    console.log('Out of bounds. try again.')
    return false;
}
}

playGame(){

let latitude=0;
let longitude=0;

while(this.array[latitude][longitude]===fieldCharacter || this.array[latitude][longitude]===pathCharacter){
    
    console.log('\n\nYour field: ')
    this.print()
let direction = prompt('Which direction do you want to move?: ')

if(direction === 'r'){
    longitude+=1
    if(this.outOfBounds(latitude,longitude,this.array)===false){
        longitude-=1
    }
    
}else if(direction === 'l'){
    longitude-=1
    if(this.outOfBounds(latitude,longitude,this.array)===false){
        longitude+=1
    }
}else if(direction === 'u'){
 latitude-=1
 if(this.outOfBounds(latitude,longitude,this.array)===false){
    latitude+=1
}
}else if(direction === 'd'){
    latitude+=1
    if(this.outOfBounds(latitude,longitude,this.array)===false){
        latitude-=1
    }
} else {
    console.log('incorrect direction. Enter r,l,u or, d')
}

if (this.array[latitude][longitude] === hat) {
    console.log('You found the hat! You win!')
  } else if (this.array[latitude][longitude] === hole) {
    console.log('You fell in a hole. Game Over')
  } else {
    this.array[latitude][longitude] = pathCharacter;

}
}


}
}

const myField = new Field([
    ['*','░', '░', 'O', '░', 'O', '░'],
    ['░','░', 'O', '░', '░', '░', 'O'],
    ['░','O', '^', '░', 'O', '░', '░'],
    ['░','░', 'O', 'O', '░', '░', 'O'],
    ['░','░', 'O', '░', 'O', '░', 'O'],
    ['░','░', '░', '░', '░', '░', '░'],

])

myField.playGame()

