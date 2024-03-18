const forumListing = [

];

const names = ['Alice', 'Bob', 'Carol', 'Raven', 'Jakob', 'Arely', 'Ricardo', 'Ella', 'Jakobe', 'Ahmed', 'Zara', 'Ashlie', 'Isiah', 'Halie', 'Estevan', 'Kaylin', 'Logan', 'Fernando', 'Jesse', 'Ileana', 'Bryn', 'Moses', 'Isaiah', 'Elyse', 'Kyron', 'Antwan', 'Caley', 'Ken', 'Charity', 'Daquan', 'Racheal', 'Chester', 'Trae', 'Jordy', 'Keaton', 'Brynn', 'Roxana', 'Alicia', 'Aryanna', 'Conor', 'Mickayla', 'Clara', 'Dustin', 'Emalee', 'Ezra', 'Haylie', 'Blake', 'Shannon', 'Madeline', 'Alisha', 'Jayde', 'Tayler', 'Deisy'];
const occupations = ['Teacher', 'Programmer', 'Writer', 'Artist', 'CoolOccupation1', 'CoolOccupation2', 'CoolOccupation3']; //couldn't think of anymore occupations lol

const initial = () => { //initial block of code that runs to generate two names at start
  for (let count = 0; count < 2; count++) { //runs block of code twice
    let newObject = { //variable for new object with a random name, occupation, and starting price
      name: names[Math.floor(Math.random() * names.length)],
      occupation: occupations[Math.floor(Math.random() * occupations.length)],
      price: Math.floor(10 + (Math.random() * 90)),
    }
    forumListing.push(newObject);//put the two new names (objects) into the forumListing array
  }
}

initial(); //probably does't need to be a function but i am too lazy to change it

const render = () => { //function which should be reran every time a new freelancer is added

  let namesArray = forumListing.map((currentObject) => { // create a names array
    let nameSlot = document.createElement("li"); //create an empty list item for every object iteration
    nameSlot.append(currentObject.name); //put the current name into the list item
    return nameSlot; //return the list item with the name inside
  })
  const namesHtml = document.querySelector("#names"); //get the location to store relevent list items
  namesHtml.replaceChildren(...namesArray); //replace all of the current names with the old + new names

  let occupationArray = forumListing.map((currentObject) => { //see above
    let occupationSlot = document.createElement("li");
    occupationSlot.append(currentObject.occupation);
    return occupationSlot;
  })
  let occupationsHtml = document.querySelector("#occupations")
  occupationsHtml.replaceChildren(...occupationArray);

  let priceArray = forumListing.map((currentObject) => { //see above
    let priceSlot = document.createElement('li');
    priceSlot.append(`$${currentObject.price}`); //return the current price along with a $ sign
    return priceSlot;
  })
  let priceHtml = document.querySelector("#startingPrices");
  priceHtml.replaceChildren(...priceArray);

  const getAverage = () => { // fuunction which gets average
    let startingPriceArray = forumListing.map((currentObject) => {// make an array with all of the current freelancer's prices
      return currentObject.price; //return the price from the current object in the iteration
    })
    
    let total; //create a variable named total
    total = 0; //set total to zero so average can be calculated with new numbers
    for (let count = 0; count < startingPriceArray.length; count++) { //run through the price array and add all prices into the 'total' variable.
      total += startingPriceArray[count];
    }
    let average = Math.ceil(total / startingPriceArray.length); //round up the average (total of prices in price array added together divided by the total amount of freelancers in the list)
    return average; //getAverage now equals the average
  }
  let averageHtml = document.querySelector('#average'); //get the position where we need to put the average
  averageHtml.replaceChildren(getAverage()); //replace whatever is currently set as for the average starting price in the html with the new average

  console.log(forumListing); //console.log it all so that it is easier to tell that everthing is working
}

const createFreelancer = () => { //creates a freelancer with a random name, occupation, and price
  let newObject = {
    name: names[Math.floor(Math.random() * names.length)],
    occupation: occupations[Math.floor(Math.random() * occupations.length)],
    price: Math.floor(10 + (Math.random() * 90)),
  }
  forumListing.push(newObject);
  render(); //calls the "render" function, which will display new addition
}

const addNewFreelancer = setInterval(createFreelancer, (1000 * 8)); // calls the createFreelancer every 8 seconds

console.log(forumListing); //console.log current forum listing to see that initalization worked

render(); //calls the "render" function, which will display new addition (that being the initialization)