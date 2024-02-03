export class CssSelector
{
	type : string;
	tagNameLC : string;
	id : string;
	classes : string[];
	index : number;
	static parse(selector:string) : CssSelector[][];
}

export class HtmlAttribute
{
	constructor(name:string, value:string, quote:string);
	name : string;
	value : string;
	quote : string;
	toString() : string;
}

export class HtmlNode
{
	parent : HtmlNodeElement;
	remove() : void;
	getPrevSiblingNode() : HtmlNode;
	getNextSiblingNode() : HtmlNode;
	toString() : string;
	toText() : string;
}

export class HtmlNodeElement extends HtmlNode
{
	constructor(name:string, attributes:HtmlAttribute[]);
	name : string;
	attributes : HtmlAttribute[];
	nodes : HtmlNode[];
	children : HtmlNodeElement[];
	getPrevSiblingElement() : HtmlNodeElement;
	getNextSiblingElement() : HtmlNodeElement;
	addChild(node:HtmlNode, beforeNode?:HtmlNode) : void;
	addChildren(nodesToAdd:HtmlNode[], beforeNode?:HtmlNode) : void;
	toString() : string;
	getAttribute(name:string) : string;
	setAttribute(name:string, value:string) : void;
	removeAttribute(name:string) : void;
	hasAttribute(name:string) : boolean;
	innerHTML : string;
	innerText : string;
	/**
	 * Replace all inner nodes to the text node w/o escaping and parsing.
	 */
	fastSetInnerHTML(html:string) : void;
	toText() : string;
	find(selector:string) : HtmlNodeElement[];
	replaceChild(node:HtmlNode, newNode:any) : void;
	removeChild(node:HtmlNode) : void;
	getAttributesObject() : any;
}

export class HtmlDocument extends HtmlNodeElement
{
	constructor(str?:string, tolerant?:boolean);
}

type HtmlLexem =
{
	all : string;
	allPos : number;
	attrs : string;
	close : string;
	comment : string;
	elem : string;
	script : string;
	scriptAttrs : string;
	scriptText : string;
	style : string;
	styleAttrs : string;
	styleText : string;
	tagClose : string;
	tagCloseLC : string;
	tagEnd : string;
	tagOpen : string;
	tagOpenLC : string;
}

export class HtmlNodeText extends HtmlNode
{
	constructor(text:string);
	text : string;
	toString() : string;
	toText() : string;
}

export class HtmlParser
{
	parse(str:string, tolerant?:boolean) : HtmlNode[];
	static SELF_CLOSING_TAGS_HTML : any;
	static run(str:string, tolerant?:boolean) : HtmlNode[];
}

export class HtmlParserException
{
	constructor(message:string, pos:{ column : number; length : number; line : number; });
	message : string;
	line : number;
	column : number;
	length : number;
	toString() : string;
}

export class HtmlParserTools
{
	static getAttr(node:HtmlNodeElement, attrName:string, defaultValue?:any) : any;
	static getAttrString(node:HtmlNodeElement, attrName:string, defaultValue?:string) : string;
	static getAttrInt(node:HtmlNodeElement, attrName:string, defaultValue?:number) : number;
	static getAttrFloat(node:HtmlNodeElement, attrName:string, defaultValue?:number) : number;
	static getAttrBool(node:HtmlNodeElement, attrName:string, defaultValue?:boolean) : boolean;
	static findOne(node:HtmlNodeElement, selector:string) : HtmlNodeElement;
}

export class HtmlTools
{
	static escape(text:string, chars?:string) : string;
	static unescape(text:string) : string;
}

type XmlAttribute = HtmlAttribute;

export class XmlBuilder
{
	constructor(indent?:string, newLine?:string);
	xml : XmlDocument;
	begin(tag:string, attrs?:{ value : any; name : string; }[]) : XmlBuilder;
	end() : XmlBuilder;
	attr(name:string, value:any, defValue?:any) : XmlBuilder;
	content(s:string) : XmlBuilder;
	toString() : string;
}

export class XmlNodeElement extends HtmlNodeElement
{
	constructor(name:string, attributes:HtmlAttribute[]);
}

export class XmlDocument extends XmlNodeElement
{
	constructor(str?:string);
}

type XmlNode = HtmlNode;

type XmlNodeText = HtmlNodeText;

export class XmlParser extends HtmlParser
{
	constructor();
	static run(str:string) : HtmlNode[];
}