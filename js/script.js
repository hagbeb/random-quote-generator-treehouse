/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// array of objects to store quotes
const quotes = [
  {
    quote: "I just kind of wake up with a new idea and new dreams every day, and I follow that dream, as they say.",
    source: "Dolly Parton",
    tags: '#music'
  },
  {
    quote: "I thought I'd begin by reading a poem by Shakespeare, but then I thought, why should I? He never reads any of mine.",
    source: "Spike Milligan",
    tags: '#humour'
  },
  {
    quote: "On occasions I have been big-headed. I think most people are when they get in the limelight. I call myself Big Head just to remind myself not to be.",
    source: "Brian Clough",
    tags: '#sport'
  },
  {
    quote: "When Alexander of Macedonia was 33, he cried salt tears because there were no more worlds to conquer... Eric Bristow's 27.",
    source: "Sid Waddell",
    tags: '#sport'
  },
  {
    quote: "When the seagulls follow the trawler, it is because they think sardines will be thrown into the sea.",
    source: "Eric Cantona",
    year: "1995",
    tags: '#sport'
  },
  {
    quote: "The effects and rhythms you hear on my songs, I got 'em from the trains that passed by my house. Like 'Lucille' came from a train - Dadas-dada-dada-dada, I got that from the train.",
    source: "Little Richard",
    citation: "Mojo Magazine",
    year: "1999",
    tags: '#music'
  }
];

// create a function to get a random quote from the quotes array
function getRandomQuote() {
  // get a random number between 0 and 5
  const randomNumber = Math.floor(Math.random() * 6);
  // select a quote from the quotes array using the random number, and return it
  const quoteObject = quotes[randomNumber];
  return quoteObject;
}

// create a function to generate a random colour, which we will use to add a background colour
function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `
    rgb(${red}, ${green}, ${blue})
  `
}
// function to print one of the quotes in the getRandomQuote array to the screen
function printQuote() {
  // get a random quote
  const randomQuote = getRandomQuote();
  // build the string we will print. Add the 'quote' and 'source' properties
  let quoteString = `
    <p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}
  `
  // if the quote has a 'citation' property, then add that to the string
  if (randomQuote.citation) {
    quoteString += `
      <span class="citation">${randomQuote.citation}</span>
    `
  }
  // if the quote has a 'year' property, then add that to the string
  if (randomQuote.year) {
    quoteString += `
      <span class="year">${randomQuote.year}</span>
    `
  }
  // if the quote has a 'tags' property, then add that to the string
  if (randomQuote.tags) {
    quoteString += `
      <span class="year">${randomQuote.tags}</span>
    `
  }
  // close the string
  quoteString += `</p>`;
  // update the page with the new quote using the string we just built
  document.getElementById('quote-box').innerHTML = quoteString; 
  // change the page to a random background colourusing the getRandomColor function
  document.body.style.backgroundColor = getRandomColor(); 
}

// use setInterval function to print a quote every 10 seconds
setInterval(printQuote, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);