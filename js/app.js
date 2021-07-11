'use strict';


let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// seattle ............


// this is from w3Schooles
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





let seattle = {
    location: 'seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    randomCustomers: [],
    avgCookiesperHour: [],





    //method for generating arandom num of customers each hour
    numOfCustomers: function () {
        // this.randomCustomers = random(23, 65)
        for (let j = 0; j < workingHours.length; j++) {
            this.randomCustomers.push(random(this.min, this.max));

        }



        console.log(this.randomCustomers);


    },
    cookiesAvg:function(){
        for(let v=0;v<this.randomCustomers.length;v++){
            this.avgCookiesperHour.push(Math.floor(this.randomCustomers[v]*6.3));
            console.log(this.avgCookiesperHour);
        }
    }

    // randomCustomers.push(numOfCustomers()); ,

    //method for avgCOOKIES



}





seattle.render = function () {
    // this.numOfCustomers();

 



    // method for rendering:


    let container = document.getElementById('parent');

    let child = document.createElement('article');

    container.appendChild(child);
    console.log(child);


    let h1Element = document.createElement('h1');
    child.appendChild(h1Element);
    h1Element.textContent = ('Salmon Cookies shop');

    let h2element = document.createElement('h2');
    child.appendChild(h2element)

    // i should make a render method for seattle so we dont have to change the name everytime.

    h2element.textContent = this.location;

    let ulElement = document.createElement('ul');
    child.appendChild(ulElement);



    // ask TAs how to show them in browser!!!

    for (let i = 0; i < this.randomCustomers.length; i++) {
        let liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = this.randomCustomers[i];

    }








}

seattle.render();
seattle.numOfCustomers();
seattle.cookiesAvg();


// tokyo ........

let tokyo = {
    location: 'tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    randomCustomers: [],
    avgCookiesperHour: [],

     //method for generating arandom num of customers each hour
    numOfCustomers: function () {
        // this.randomCustomers = random(23, 65)
        for (let j = 0; j < workingHours.length; j++) {
            this.randomCustomers.push(random(this.min, this.max));

        }



        console.log(this.randomCustomers);


    },
    cookiesAvg:function(){
        for(let v=0;v<this.randomCustomers.length;v++){
            this.avgCookiesperHour.push(Math.floor(this.randomCustomers[v]*1.2));
            
        }
        console.log(this.avgCookiesperHour);
    }

    // randomCustomers.push(numOfCustomers()); ,

    //method for avgCOOKIES



}
tokyo.render = function () {

    // this.numOfCustomers();
    // this.cookiesAvg();
    // for (let i = 0; i < this.numOfCustomers.length; i++) {

    // }



    // method for rendering:


    let container = document.getElementById('parent');

    let child = document.createElement('article');

    container.appendChild(child);
    console.log(child);


    let h1Element = document.createElement('h1');
    child.appendChild(h1Element);
    h1Element.textContent = ('Salmon Cookies shop');

    let h2element = document.createElement('h2');
    child.appendChild(h2element)

    // i should make a render method for seattle so we dont have to change the name everytime.

    h2element.textContent = this.location;

    let ulElement = document.createElement('ul');
    child.appendChild(ulElement);

    
    // ask TAs how to show them in browser!!!

    for (let i = 0; i < this.randomCustomers.length; i++) {
        let liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = this.randomCustomers[i];

    }






}

tokyo.render();
tokyo.numOfCustomers();
tokyo.cookiesAvg();


// dubai......
let dubai = {
    location: 'dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    randomCustomers: [],
    avgCookiesperHour: [],

     //method for generating arandom num of customers each hour
     numOfCustomers: function () {
        // this.randomCustomers = random(23, 65)
        for (let j = 0; j < workingHours.length; j++) {
            this.randomCustomers.push(random(this.min, this.max));

        }



        console.log(this.randomCustomers);


    },
    cookiesAvg:function(){
        for(let v=0;v<this.randomCustomers.length;v++){
            this.avgCookiesperHour.push(Math.floor(this.randomCustomers[v]*3.7));
            console.log(this.avgCookiesperHour);
        }
    }

    // randomCustomers.push(numOfCustomers()); ,

    //method for avgCOOKIES



}
dubai.render = function () {

    // this.numOfCustomers();
    



    // method for rendering:


    let container = document.getElementById('parent');

    let child = document.createElement('article');

    container.appendChild(child);
    console.log(child);


    let h1Element = document.createElement('h1');
    child.appendChild(h1Element);
    h1Element.textContent = ('Salmon Cookies shop');

    let h2element = document.createElement('h2');
    child.appendChild(h2element)

    // i should make a render method for seattle so we dont have to change the name everytime.

    h2element.textContent = this.location;

    let ulElement = document.createElement('ul');
    child.appendChild(ulElement);

    
    // ask TAs how to show them in browser!!!

    for (let i = 0; i < this.randomCustomers.length; i++) {
        let liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = this.randomCustomers[i];

    }








}

dubai.render();
dubai.numOfCustomers();
dubai.cookiesAvg();

// paris ......

let paris = {
    location: 'paris',
    min: 20,
    max: 38,
    avg: 2.3,
    randomCustomers: [],
    avgCookiesperHour: [],

   //method for generating arandom num of customers each hour
   numOfCustomers: function () {
    // this.randomCustomers = random(23, 65)
    for (let j = 0; j < workingHours.length; j++) {
        this.randomCustomers.push(random(this.min, this.max));

    }



    console.log(this.randomCustomers);


},
cookiesAvg:function(){
    for(let v=0;v<this.randomCustomers.length;v++){
        this.avgCookiesperHour.push(Math.floor(this.randomCustomers[v]*2.3));
        console.log(this.avgCookiesperHour);
    }
}

// randomCustomers.push(numOfCustomers()); ,

//method for avgCOOKIES



}
paris.render = function () {

    // this.numOfCustomers();
    



    // method for rendering:


    let container = document.getElementById('parent');

    let child = document.createElement('article');

    container.appendChild(child);
    console.log(child);


    let h1Element = document.createElement('h1');
    child.appendChild(h1Element);
    h1Element.textContent = ('Salmon Cookies shop');

    let h2element = document.createElement('h2');
    child.appendChild(h2element)

    // i should make a render method for seattle so we dont have to change the name everytime.

    h2element.textContent = this.location;

    let ulElement = document.createElement('ul');
    child.appendChild(ulElement);

    
    // ask TAs how to show them in browser!!!

    for (let i = 0; i < this.randomCustomers.length; i++) {
        let liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = this.randomCustomers[i];

    }







}

paris.render();
paris.numOfCustomers();
paris.cookiesAvg();

// lima ....

let lima = {
    location: 'lima',
    min: 2,
    max: 16,
    avg: 4.6,
    randomCustomers: [],
    avgCookiesperHour: [],

     //method for generating arandom num of customers each hour
     numOfCustomers: function () {
        // this.randomCustomers = random(23, 65)
        for (let j = 0; j < workingHours.length; j++) {
            this.randomCustomers.push(random(this.min, this.max));

        }



        console.log(this.randomCustomers);


    },
    cookiesAvg:function(){
        for(let v=0;v<this.randomCustomers.length;v++){
            this.avgCookiesperHour.push(Math.floor(this.randomCustomers[v]*4.6));
            console.log(this.avgCookiesperHour);
        }
    }

    // randomCustomers.push(numOfCustomers()); ,

    //method for avgCOOKIES



}
lima.render = function () {

    // this.numOfCustomers();
    



    // method for rendering:


    let container = document.getElementById('parent');

    let child = document.createElement('article');

    container.appendChild(child);
    console.log(child);


    let h1Element = document.createElement('h1');
    child.appendChild(h1Element);
    h1Element.textContent = ('Salmon Cookies shop');

    let h2element = document.createElement('h2');
    child.appendChild(h2element)

    // i should make a render method for seattle so we dont have to change the name everytime.

    h2element.textContent = this.location;

    let ulElement = document.createElement('ul');
    child.appendChild(ulElement);

    
    // ask TAs how to show them in browser!!!

    for (let i = 0; i < this.randomCustomers.length; i++) {
        let liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = this.randomCustomers[i];

    }








}

lima.render();
lima.numOfCustomers();
lima.cookiesAvg();




// let workingHours=['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//     for (let j = 0; j < workingHours.length; j++) {
//         this.randomCustomers.push(workingHours[j]);
//     }
