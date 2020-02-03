const Article = require("./Article.js");

let article = new Article(
  {
    title: "Thing Happened! Much important!",
    author: "John Murray",
    text: "This is the text!"
  }
);
let article2 = new Article(
  {
    title: "Thing Happened! Much important!",
    author: "Jack Frost",
    text: "This is the new text!"
  }
);

console.log(article.render() );
console.log(article2.render() );
