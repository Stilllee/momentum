const quotes = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "Despite the forecast, live like it’s spring.",
    author: "Lilly Pulitzer",
  },
  {
    quote: "All progress takes place outside the comfort zone.",
    author: "Michael John Bobak",
  },
  {
    quote: "If you can not fly then run. If you cannot run, then walk. And, if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you‘re not doing a tour of gas stations.",
    author: "Tim O’Reilly",
  },
  {
    quote: "The only thing worse than starting something and failing … is not starting something.",
    author: "Seth Godin",
  },
  {
    quote: "Courage doesn’t always roar. Sometimes courage is the little voice at the end of the day that says \"I'll try again tomorrow.\"",
    author: "Mary Anne",
  },
  {
    quote: "All great changes are preceded by chaos.",
    author: "Deepak Chopra",
  },
  {
    quote: "You’re braver than you believe, and stronger than you seem, and smarter than you think.",
    author: "A.A Milne",
  },
  {
    quote: "And still, I rise.",
    author: "Maya angelou",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


