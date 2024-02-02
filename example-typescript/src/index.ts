import { htmlparser  } from "re-htmlparser";

var doc = new htmlparser.HtmlDocument("<a>InA</a>");

console.log("Test!");
console.log(doc.toString());