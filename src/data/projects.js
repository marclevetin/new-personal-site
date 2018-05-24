const projects = [
  {
    id: 1,
    project: "Class Superlatives",
    liveurl: "https://unh-best-of-bootcamp.herokuapp.com/",
    codeurl: "https://github.com/marclevetin/class-superlatives",
    imageurl:
      "https://s3.us-east-2.amazonaws.com/marc-biography-site/class_superlative.png",
    description: "A virtual Yearbook for UNH Coding Bootcamp.",
    tech: ["React", "Mongo", "Bootstrap 3"]
  },
  {
    id: 2,
    project: "Portsmouth Randomizer",
    liveurl: "https://portsmouth-randomizer.herokuapp.com/",
    codeurl: "https://github.com/marclevetin/portsmouth-randomizer",
    imageurl:
      "https://s3.us-east-2.amazonaws.com/marc-biography-site/randomizer.png",
    description:
      "A collection of tools that make running the UNH Coding Bootcamp simpler.",
    tech: ["React", "Ruby", "Sinatra"]
  },
  {
    id: 3,
    project: "My Ukulele Info",
    liveurl: "https://my-ukulele-info.herokuapp.com/",
    codeurl: "https://github.com/marclevetin/myukuleleinfo",
    imageurl:
      "https://s3.us-east-2.amazonaws.com/marc-biography-site/ukulele.png",
    description:
      "Tracks ukulele collections online with pictures, instrument details, and video.  Exports collection to a popular Ukulele bulletin board.",
    tech: ["React", "Ruby on Rails", "AWS S3"]
  },
  {
    id: 4,
    project: "Dad Jokes",
    liveurl: "https://marclevetin.github.io/dad-jokes/",
    codeurl: "https://github.com/marclevetin/dad-jokes",
    imageurl:
      "https://s3.us-east-2.amazonaws.com/marc-biography-site/dad_jokes.png",
    description:
      "Get a random Dad Joke from an API with a click of a button or a search.  ",
    tech: ["React", "Materialize CSS"]
  },
  {
    id: 5,
    project: "Hangman",
    liveurl: "https://marclevetin.github.io/hangman-game/",
    codeurl: "https://github.com/marclevetin/hangman-game",
    imageurl:
      "https://s3.us-east-2.amazonaws.com/marc-biography-site/hangman.png",
    description: "Guess the word before you spell HANGMAN.  Javascript",
    tech: ["Javascript"]
  },
  {
    id: 6,
    project: "Twitter Bot",
    liveurl: "#",
    codeurl: "https://github.com/marclevetin/twitter-bot-node",
    imageurl:
      "https://s3.us-east-2.amazonaws.com/marc-biography-site/twitter.png",
    description: "Node app that tweets out a random dad joke.",
    tech: ["Node", "Twitter", "Heroku Scheduler"]
  },
  {
    id: 7,
    project: "Disney API CLI",
    liveurl: "https://portsmouth-randomizer.herokuapp.com/",
    codeurl: "https://github.com/marclevetin/portsmouth-randomizer",
    imageurl:
      "https://s3.us-east-2.amazonaws.com/marc-biography-site/disney.png",
    description:
      "Node app to get the weather and wait times at Walt Disney World.",
    tech: ["Node", "Inquirer", "Themeparks API", "Weather JS"]
  },
  {
    id: 8,
    project: "This site",
    liveurl: "https://marclevetin.github.io/",
    codeurl: "https://github.com/marclevetin/new-personal-site",
    imageurl: "https://s3.us-east-2.amazonaws.com/marc-biography-site/duck.jpg",
    description:
      "Everyone needs a personal slice of the internet.  This is mine, with a bunch of ducks.",
    tech: ["React", "Material-UI", "AWS S3"]
  },
  {
    id: 9,
    project: "PHP Blackjack",
    liveurl: "",
    codeurl: "https://github.com/marclevetin/php-blackjack",
    imageurl:
      "https://s3.us-east-2.amazonaws.com/marc-biography-site/php-blackjack.png",
    description:
      "I wanted to learn a bit about PHP, so I wrote a command line game.",
    tech: ["PHP"]
  },
  {
    id: 10,
    project: "AngularJS Star Wars",
    liveurl: "",
    codeurl: "https://github.com/marclevetin/angularjs-star-wars",
    imageurl:
      "https://s3.us-east-2.amazonaws.com/marc-biography-site/angularjsstarwars.jpg",
    description:
      "Long ago, in a galaxy far, far away, I built a thing with AngularJS.",
    tech: ["AngularJS", "Star Wars API"]
  }
];

module.exports = {
  allTheThings: projects
}
