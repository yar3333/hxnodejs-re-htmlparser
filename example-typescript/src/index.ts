import { HtmlDocument } from "re-htmlparser";

var doc = new HtmlDocument("<a>InA</a>");

console.log("Test!");
console.log(doc.toString());
console.log(doc.innerHTML);
console.log(doc.children.length);
console.log(doc.children[0].name);
doc.innerHTML = "<b>InB</b>";
console.log(doc.children.length);
console.log(doc.children[0].name);
