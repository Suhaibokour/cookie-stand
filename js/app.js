'use strict';


let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// seattle ............ 

let shopLocations = [];

// this is from w3Schooles

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//...







// main object or structure ...


let shops = [];


function Cookie(location, min, max, avg) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.totalCookiesForLocal = 0;
    this.randomCustomers = [];
    this.avgCookiesperHour = [];




    // shopLocations.push(this);
    shops.push(this);
    console.log(shops)
}











// these prototype methos are shared with all objects...


Cookie.prototype.numOfCustomers = function () {
    for (let j = 0; j < workingHours.length; j++) {
        this.randomCustomers.push(random(this.min, this.max));

    }

}

Cookie.prototype.cookiesAvg = function () {
    for (let v = 0; v < this.randomCustomers.length; v++) {
        this.avgCookiesperHour.push(Math.floor(this.randomCustomers[v] * this.avg));
        this.totalCookiesForLocal += this.avgCookiesperHour[v];

    }

}




let seattle = new Cookie('seattle', 23, 65, 6.3);

let tokyo = new Cookie('tokyo', 3, 24, 1.2);

let dubai = new Cookie('dubai', 11, 38, 3.7);

let paris = new Cookie('paris', 20, 38, 2.3);

let lima = new Cookie('lima', 2, 16, 4.6);





// if you want 2 call method use [...name.method'sname();...]



// global vars ...


let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);

// standing alone functios...


function headerRow() {
    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);
    let emptyCell = document.createElement('th');
    headingRow.appendChild(emptyCell);
    emptyCell.textContent='Name';
    for (let i = 0; i < workingHours.length; i++) {
        let thElement = document.createElement('th');
        headingRow.appendChild(thElement);
        thElement.textContent = workingHours[i];
    }
    let lastTh = document.createElement('th');
    headingRow.appendChild(lastTh);
    lastTh.textContent = ' Daily Location Total';
}


// another shared functions ...



Cookie.prototype.render = function () {
    

    
    let localData = document.createElement('tr');
    table.appendChild(localData);
    let nameTd=document.createElement('td');
    localData.appendChild(nameTd);
    nameTd.textContent=this.location;



    //...i got this way of showing names of locations from a TA (it is commneted below) and my way of solving it is the previous one.

    // let localInfo = document.createElement('td');
    // localRow.appendChild(localInfo);
    // localInfo.textContent = this.location;


    // let array = seattle.avgCookiesperHour;
    // let sum = 0;

    // for (let i = 0; i < array.length; i++) {
    //     sum += array[i];

    // }



    // let totalInfo = document.createElement('td');
    // localData.appendChild(totalInfo);
    // // totalInfo.textContent = sum;
    for (let k = 0; k < workingHours.length; k++) {


        let cookiesTd = document.createElement('td');
        localData.appendChild(cookiesTd);
        cookiesTd.textContent = this.avgCookiesperHour[k];





    }
    let totalInfo = document.createElement('td');
    localData.appendChild(totalInfo);
    totalInfo.textContent = this.totalCookiesForLocal;



}



function makefooter() {
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);
    let finalTh = document.createElement('th');
    footerRow.appendChild(finalTh);
    finalTh.textContent = "Totals";


    let totalOfTotals = 0;
    for (let i = 0; i < workingHours.length; i++) {
        let totalForEachHourAlone = 0;
        for (let j = 0; j < shops.length; j++) {

            totalForEachHourAlone += shops[j].avgCookiesperHour[i];

            totalOfTotals += shops[j].avgCookiesperHour[i];
        }
        let whateverTh = document.createElement('th');
        footerRow.appendChild(whateverTh);
        whateverTh.textContent = totalForEachHourAlone;


    }


    let anotherTH = document.createElement('th');
    footerRow.appendChild(anotherTH);
    anotherTH.textContent = totalOfTotals;






}




// last calls for functions here ...




headerRow();


for (let h=0;h<shops.length;h++){
    shops[h].numOfCustomers();
    shops[h].cookiesAvg();
    shops[h].render();
    console.log(shops[h]);
}





let form=document.getElementById('form');

form.addEventListener('submit',submitter);

function submitter(event){
    event.preventDefault();
    // console.log(event.target.nameField.value);
    // console.log(event.target.minField.value);
    // console.log(event.target.maxField.value);
    // console.log(event.target.avgField.value);


    let newLocal=event.target.nameField.value;
    let newMin=parseInt(event.target.minField.value);
    let newMax=parseInt(event.target.maxField.value);
    let newAvg=parseFloat(event.target.avgField.value);


    let addedShops=new Cookie(newLocal,newMin,newMax,newAvg);


    addedShops.numOfCustomers();
    addedShops.cookiesAvg();
    addedShops.render();
    
function makefooter2() {
    let footerRow2 = document.createElement('tr');
    table.appendChild(footerRow2);
    let finalTh = document.createElement('th');
    footerRow2.appendChild(finalTh);
    finalTh.textContent = "New Totals";


    let totalOfTotals = 0;
    for (let i = 0; i < workingHours.length; i++) {
        let totalForEachHourAlone = 0;
        for (let j = 0; j < shops.length; j++) {

            totalForEachHourAlone += shops[j].avgCookiesperHour[i];

            totalOfTotals += shops[j].avgCookiesperHour[i];
        }
        let whateverTh = document.createElement('th');
        footerRow2.appendChild(whateverTh);
        whateverTh.textContent = totalForEachHourAlone;


    }


    let anotherTH = document.createElement('th');
    footerRow.appendChild(anotherTH);
    anotherTH.textContent = totalOfTotals;






}
    makefooter2();
    
}




if(submitter===true){
    submitter();
    document.getElementById("footerRow").deleteRow(0);
    
}else{
    makefooter();
    
}


// makefooter();


// seattle.numOfCustomers();
// seattle.cookiesAvg();
// seattle.render();

// tokyo.numOfCustomers();
// tokyo.cookiesAvg();
// tokyo.render();

// dubai.numOfCustomers();
// dubai.cookiesAvg();
// dubai.render(); 

// paris.numOfCustomers();
// paris.cookiesAvg();
// paris.render();

// lima.numOfCustomers();
// lima.cookiesAvg();
// lima.render();
















    //...i got this way of showing names of locations from a TA (it is commneted below) and my way of solving it is the previous one.

    // let localInfo = document.createElement('td');
    // localRow.appendChild(localInfo);
    // localInfo.textContent = this.location;


// backup code ...
// Cookie.prototype.render = function () {
//     let localRow = document.createElement('tr');
//     table.appendChild(localRow);



//     document.getElementById('table');
//     let localData = document.createElement('tr');
//     table.appendChild(localData);
//     for (let y = 0; y < shops.length; y++) {

//         localData.textContent = shops[y].location;


//     }





//     for (let k = 0; k < workingHours.length; k++) {


//         let localAvg = document.createElement('td');
//         localData.appendChild(localAvg);
//         localAvg.textContent = this.avgCookiesperHour[k];





//     }
//     let totalInfo = document.createElement('td');
//     localData.appendChild(totalInfo);
//     totalInfo.textContent = this.totalCookiesForLocal;



// }

// ends here

















// Cookie.prototype.sum = function () {
//     let array = this.avgCookiesperHour;
//         let sum = 0;

//         for (let i = 0; i < array.length; i++) {
//             sum += array[i];

//         }
//     document.getElementById('table');
//     let totalData = document.createElement('tr');
//     table.appendChild(totalData);
//     for (let z = 0; z < shopLocations.length; z++) {

//         totalData.textContent = shopLocations[z].sum


//     }
// }




// finished main codes and will call functions down below....





// calling functions here ... 
// let seattle = new Cookie
//     ('seattle', 23, 65, 6.3)

// let array = seattle.avgCookiesperHour;
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//     console.log( 'hi')
// }
//     let ulElement2 = document.createElement('ul');
//     child.appendChild(ulElement2);
//     let liElement2 = document.createElement('li');
//         ulElement2.appendChild(liElement2);
//         liElement2.textContent =`total number of cookies is ${sum} `;



// seattle.numOfCustomers();
// seattle.cookiesAvg();
// seattle.render();
// seattle.sum();


// let tokyo = new Cookie
//     ('tokyo', 3, 24, 1.2)


// tokyo.numOfCustomers();
// tokyo.cookiesAvg();
// tokyo.render();



// let dubai = new Cookie
//     ('dubai', 11, 38, 3.7)


// dubai.numOfCustomers();
// dubai.cookiesAvg();
// dubai.render();



// let paris = new Cookie
//     ('paris', 20, 38, 2.3)


// paris.numOfCustomers();
// paris.cookiesAvg();
// paris.render();





// let lima = new Cookie
//     ('lima', 2, 16, 4.6)


// lima.numOfCustomers();
// lima.cookiesAvg();
// lima.render();













// // old code....



// let seattle = {
//     location: 'seattle',
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     randomCustomers: [],
//     avgCookiesperHour: [],





//     //method for generating arandom num of customers each hour
//     numOfCustomers: function () {
//         // this.randomCustomers = random(23, 65)
//         for (let j = 0; j < workingHours.length; j++) {
//             this.randomCustomers.push(random(this.min, this.max));

//         }



//         // console.log(this.randomCustomers);


//     },
//     cookiesAvg:function(){
//         for(let v=0;v<this.randomCustomers.length;v++){
//             this.avgCookiesperHour.push(Math.floor(this.randomCustomers[v]*this.avg));
//             console.log(this.avgCookiesperHour);
//         }
//     }

//     // randomCustomers.push(numOfCustomers()); ,

//     //method for avgCOOKIES



// }





// seattle.render = function () {
//     // this.numOfCustomers();





//     // method for rendering:


//     let container = document.getElementById('parent');

//     let child = document.createElement('article');

//     container.appendChild(child);
//     // console.log(child);


//     let h1Element = document.createElement('h1');
//     child.appendChild(h1Element);
//     h1Element.textContent = ('Salmon Cookies shop');

//     let h2element = document.createElement('h2');
//     child.appendChild(h2element)

//     // i should make a render method for seattle so we dont have to change the name everytime.

//     h2element.textContent = this.location;

//     let ulElement = document.createElement('ul');
//     child.appendChild(ulElement);


//     // ask TAs how to show them in browser!!!

//     for (let i = 0; i < this.randomCustomers.length; i++) {
//         let liElement = document.createElement('li');
//         ulElement.appendChild(liElement);
//       liElement.textContent =`${workingHours[i]}:  Number of customers is  ${this.randomCustomers[i]} and number of Cookies is: ${this.avgCookiesperHour[i]}`;



//     }



//     const array = this.avgCookiesperHour;
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];

//     }
//     let ulElement2 = document.createElement('ul');
//     child.appendChild(ulElement2);
//     let liElement2 = document.createElement('li');
//         ulElement2.appendChild(liElement2);
//         liElement2.textContent =`total number of cookies is ${sum} `;



// }


// seattle.numOfCustomers();
// seattle.cookiesAvg();
// seattle.render();

// // tokyo ........

// let tokyo = {
//     location: 'tokyo',
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     randomCustomers: [],
//     avgCookiesperHour: [],

//      //method for generating arandom num of customers each hour
//     numOfCustomers: function () {
//         // this.randomCustomers = random(23, 65)
//         for (let j = 0; j < workingHours.length; j++) {
//             this.randomCustomers.push(random(this.min, this.max));

//         }



//         console.log(this.randomCustomers);


//     },
//     cookiesAvg:function(){
//         for(let v=0;v<this.randomCustomers.length;v++){
//             this.avgCookiesperHour.push(Math.floor(this.randomCustomers[v]*this.avg));

//         }
//         console.log(this.avgCookiesperHour);
//     }

//     // randomCustomers.push(numOfCustomers()); ,

//     //method for avgCOOKIES



// }
// tokyo.render = function () {

//     // this.numOfCustomers();
//     // this.cookiesAvg();
//     // for (let i = 0; i < this.numOfCustomers.length; i++) {

//     // }



//     // method for rendering:


//     let container = document.getElementById('parent');

//     let child = document.createElement('article');

//     container.appendChild(child);
//     console.log(child);


//     let h1Element = document.createElement('h1');
//     child.appendChild(h1Element);
//     h1Element.textContent = ('Salmon Cookies shop');

//     let h2element = document.createElement('h2');
//     child.appendChild(h2element)

//     // i should make a render method for seattle so we dont have to change the name everytime.

//     h2element.textContent = this.location;

//     let ulElement = document.createElement('ul');
//     child.appendChild(ulElement);


//     // ask TAs how to show them in browser!!!

//     for (let i = 0; i < this.randomCustomers.length; i++) {
//         let liElement = document.createElement('li');
//         ulElement.appendChild(liElement);
//         liElement.textContent =`${workingHours[i]}:  Number of customers is  ${this.randomCustomers[i]} and number of Cookies is: ${this.avgCookiesperHour[i]}`;

//     }

//     const array = this.avgCookiesperHour;
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];

//     }
//     let ulElement2 = document.createElement('ul');
//     child.appendChild(ulElement2);
//     let liElement2 = document.createElement('li');
//         ulElement2.appendChild(liElement2);
//         liElement2.textContent =`total number of cookies is ${sum} `;






// }


// tokyo.numOfCustomers();
// tokyo.cookiesAvg();
// tokyo.render();


// // dubai......
// let dubai = {
//     location: 'dubai',
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     randomCustomers: [],
//     avgCookiesperHour: [],

//      //method for generating arandom num of customers each hour
//      numOfCustomers: function () {
//         // this.randomCustomers = random(23, 65)
//         for (let j = 0; j < workingHours.length; j++) {
//             this.randomCustomers.push(random(this.min, this.max));

//         }



//         console.log(this.randomCustomers);


//     },
//     cookiesAvg:function(){
//         for(let v=0;v<this.randomCustomers.length;v++){
//             this.avgCookiesperHour.push(Math.floor(this.randomCustomers[v]*this.avg));
//             console.log(this.avgCookiesperHour);
//         }
//     }

//     // randomCustomers.push(numOfCustomers()); ,

//     //method for avgCOOKIES



// }
// dubai.render = function () {

//     // this.numOfCustomers();




//     // method for rendering:


//     let container = document.getElementById('parent');

//     let child = document.createElement('article');

//     container.appendChild(child);
//     console.log(child);


//     let h1Element = document.createElement('h1');
//     child.appendChild(h1Element);
//     h1Element.textContent = ('Salmon Cookies shop');

//     let h2element = document.createElement('h2');
//     child.appendChild(h2element)

//     // i should make a render method for seattle so we dont have to change the name everytime.

//     h2element.textContent = this.location;

//     let ulElement = document.createElement('ul');
//     child.appendChild(ulElement);


//     // ask TAs how to show them in browser!!!

//     for (let i = 0; i < this.randomCustomers.length; i++) {
//         let liElement = document.createElement('li');
//         ulElement.appendChild(liElement);
//       liElement.textContent =`${workingHours[i]}:  Number of customers is  ${this.randomCustomers[i]} and number of Cookies is: ${this.avgCookiesperHour[i]}`;


//     }

//     const array = this.avgCookiesperHour;
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];

//     }
//     let ulElement2 = document.createElement('ul');
//     child.appendChild(ulElement2);
//     let liElement2 = document.createElement('li');
//         ulElement2.appendChild(liElement2);
//         liElement2.textContent =`total number of cookies is ${sum} `;








// }


// dubai.numOfCustomers();
// dubai.cookiesAvg();
// dubai.render();

// // paris ......

// let paris = {
//     location: 'paris',
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     randomCustomers: [],
//     avgCookiesperHour: [],

//    //method for generating arandom num of customers each hour
//    numOfCustomers: function () {
//     // this.randomCustomers = random(23, 65)
//     for (let j = 0; j < workingHours.length; j++) {
//         this.randomCustomers.push(random(this.min, this.max));

//     }



//     console.log(this.randomCustomers);


// },
// cookiesAvg:function(){
//     for(let v=0;v<this.randomCustomers.length;v++){
//         this.avgCookiesperHour.push(Math.floor(this.randomCustomers[v]*this.avg));
//         console.log(this.avgCookiesperHour);
//     }
// }

// // randomCustomers.push(numOfCustomers()); ,

// //method for avgCOOKIES



// }
// paris.render = function () {

//     // this.numOfCustomers();




//     // method for rendering:


//     let container = document.getElementById('parent');

//     let child = document.createElement('article');

//     container.appendChild(child);
//     console.log(child);


//     let h1Element = document.createElement('h1');
//     child.appendChild(h1Element);
//     h1Element.textContent = ('Salmon Cookies shop');

//     let h2element = document.createElement('h2');
//     child.appendChild(h2element)

//     // i should make a render method for seattle so we dont have to change the name everytime.

//     h2element.textContent = this.location;

//     let ulElement = document.createElement('ul');
//     child.appendChild(ulElement);


//     // ask TAs how to show them in browser!!!

//     for (let i = 0; i < this.randomCustomers.length; i++) {
//         let liElement = document.createElement('li');
//         ulElement.appendChild(liElement);
//         liElement.textContent =`${workingHours[i]}:  Number of customers is  ${this.randomCustomers[i]} and number of Cookies is: ${this.avgCookiesperHour[i]}`;

//     }




//     const array = this.avgCookiesperHour;
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];

//     }
//     let ulElement2 = document.createElement('ul');
//     child.appendChild(ulElement2);
//     let liElement2 = document.createElement('li');
//         ulElement2.appendChild(liElement2);
//         liElement2.textContent =`total number of cookies is ${sum} `;




// }


// paris.numOfCustomers();
// paris.cookiesAvg();
// paris.render();

// // lima ....

// let lima = {
//     location: 'lima',
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     randomCustomers: [],
//     avgCookiesperHour: [],

//      //method for generating arandom num of customers each hour
//      numOfCustomers: function () {
//         // this.randomCustomers = random(23, 65)
//         for (let j = 0; j < workingHours.length; j++) {
//             this.randomCustomers.push(random(this.min, this.max));

//         }



//         console.log(this.randomCustomers);


//     },
//     cookiesAvg:function(){
//         for(let v=0;v<this.randomCustomers.length;v++){
//             this.avgCookiesperHour.push(Math.floor(this.randomCustomers[v]*this.avg));
//             console.log(this.avgCookiesperHour);
//         }
//     }

//     // randomCustomers.push(numOfCustomers()); ,

//     //method for avgCOOKIES



// }
// lima.render = function () {

//     // this.numOfCustomers();




//     // method for rendering:


//     let container = document.getElementById('parent');

//     let child = document.createElement('article');

//     container.appendChild(child);
//     console.log(child);


//     let h1Element = document.createElement('h1');
//     child.appendChild(h1Element);
//     h1Element.textContent = ('Salmon Cookies shop');

//     let h2element = document.createElement('h2');
//     child.appendChild(h2element)

//     // i should make a render method for seattle so we dont have to change the name everytime.

//     h2element.textContent = this.location;

//     let ulElement = document.createElement('ul');
//     child.appendChild(ulElement);


//     // ask TAs how to show them in browser!!!

//     for (let i = 0; i < this.randomCustomers.length; i++) {
//         let liElement = document.createElement('li');
//         ulElement.appendChild(liElement);
//         // liElement.textContent =workingHours[i]+', Number of customers is '+ this.randomCustomers[i]+' and number of Cookies is: '+ this.avgCookiesperHour[i];
//         liElement.textContent =`${workingHours[i]}:  Number of customers is  ${this.randomCustomers[i]} and number of Cookies is: ${this.avgCookiesperHour[i]}`;

//     }



//     const array = this.avgCookiesperHour;
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];

//     }
//     let ulElement2 = document.createElement('ul');
//     child.appendChild(ulElement2);
//     let liElement2 = document.createElement('li');
//         ulElement2.appendChild(liElement2);
//         liElement2.textContent =`total number of cookies is ${sum} `;






// }


// lima.numOfCustomers();
// lima.cookiesAvg();
// lima.render();




// // let workingHours=['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// //     for (let j = 0; j < workingHours.length; j++) {
// //         this.randomCustomers.push(workingHours[j]);
// //     
