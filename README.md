# hxnodejs-re-htmlparser #

Light and fast HTML/XML parser with a jQuery-like find() method. Also, contains a helper class to XML creating.

Use this library if you want to use precompiled npm module from typescript or haxe.

## Using from typescript ##

```shell
npm install re-htmlparser
```
```typescript
import { HtmlDocument } from "re-htmlparser";

var doc = new HtmlDocument("<a>InA</a>");

console.log("Test!");
console.log(doc.toString());
console.log(doc.innerHTML);
console.log(doc.children[0].name);
doc.innerHTML = "<b>InB</b>";
console.log(doc.children[0].name);
```

## Using from haxe ##

```shell
npm install re-htmlparser
haxelib install hxnodejs-re-htmlparser
```
```haxe
import htmlparser.HtmlParser;

void main()
{
	var html = new HtmlDocument(File.getContent("myfile.html"));
	trace(titles[0].innerHTML);
	titles[0].innerHTML = "My New Title";
	File.saveContent("myfile2.html", html.toString());
}
```

## Details ##

#### Tolerant Mode ####

To parse bad HTML you can use "tolerant" parser's mode:
```haxe
var html1 = new HtmlDocument("<div><a>Link</div></a>", true); // wrong close tags sequence
var html2 = new HtmlDocument("<div><a>Link</div>", true); // missing '</a>'
```

### Parsing XML ###
In XML mode parser is more strict: there are no self-closed tags allowed.
```haxe
var xml = new XmlDocument(File.getContent("myfile.xml"));
var contents = xml.find(">root>items>content");
trace(contents[0].innerHTML);
contents[0].innerHTML = "New content for first item";
File.saveContent("myfile2.xml", xml.toString());
```


### XML building ###
```haxe
var doc = new XmlBuilder();
doc.begin("html");
    doc.begin("head");
        doc.begin("title").content("This is a title").end();
        doc.begin("meta")
				.attr("content", "text/html; charset=UTF-8")
				.attr("http-equiv", "content-type")
			.end;
    doc.end();
doc.end();

trace(doc.xml.find(">html>head").length); // direct access to created XmlDocument
trace(doc.toString()); // equals to `doc.xml.toString()`
```