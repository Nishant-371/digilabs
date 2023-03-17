const person ={
    "Name":"nishant",
    "surname":"taliwal"
};

let personAsString =JSON.stringify(person);
localStorage.setItem('person',personAsString);


personAsString=localStorage.getItem('person');
const personAsObject=JSON.parse(personAsString);
console.log(personAsObject);