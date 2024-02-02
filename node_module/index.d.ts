export namespace htmlparser
{
	export class CssSelector
	{
		type : string;
		tagNameLC : string;
		id : string;
		classes : string[];
		index : number;
		static parse(selector:string) : htmlparser.CssSelector[][];
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
		parent : htmlparser.HtmlNodeElement;
		remove() : void;
		getPrevSiblingNode() : htmlparser.HtmlNode;
		getNextSiblingNode() : htmlparser.HtmlNode;
		toString() : string;
		toText() : string;
	}
	
	export class HtmlNodeElement extends htmlparser.HtmlNode
	{
		constructor(name:string, attributes:htmlparser.HtmlAttribute[]);
		name : string;
		attributes : htmlparser.HtmlAttribute[];
		nodes : htmlparser.HtmlNode[];
		children : htmlparser.HtmlNodeElement[];
		getPrevSiblingElement() : htmlparser.HtmlNodeElement;
		getNextSiblingElement() : htmlparser.HtmlNodeElement;
		addChild(node:htmlparser.HtmlNode, beforeNode?:htmlparser.HtmlNode) : void;
		addChildren(nodesToAdd:htmlparser.HtmlNode[], beforeNode?:htmlparser.HtmlNode) : void;
		toString() : string;
		getAttribute(name:string) : string;
		setAttribute(name:string, value:string) : void;
		removeAttribute(name:string) : void;
		hasAttribute(name:string) : boolean;
		innerHTML : string;
		protected get_innerHTML() : string;
		protected set_innerHTML(value:string) : string;
		innerText : string;
		protected get_innerText() : string;
		protected set_innerText(text:string) : string;
		/**
		 * Replace all inner nodes to the text node w/o escaping and parsing.
		 */
		fastSetInnerHTML(html:string) : void;
		toText() : string;
		find(selector:string) : htmlparser.HtmlNodeElement[];
		replaceChild(node:htmlparser.HtmlNode, newNode:any) : void;
		removeChild(node:htmlparser.HtmlNode) : void;
		getAttributesAssoc() : Map<string, string>;
		getAttributesObject() : any;
	}
	
	export class HtmlDocument extends htmlparser.HtmlNodeElement
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
	
	export class HtmlNodeText extends htmlparser.HtmlNode
	{
		constructor(text:string);
		text : string;
		toString() : string;
		toText() : string;
	}
	
	export class HtmlParser
	{
		parse(str:string, tolerant?:boolean) : htmlparser.HtmlNode[];
		static SELF_CLOSING_TAGS_HTML : any;
		static run(str:string, tolerant?:boolean) : htmlparser.HtmlNode[];
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
		static getAttr(node:htmlparser.HtmlNodeElement, attrName:string, defaultValue?:any) : any;
		static getAttrString(node:htmlparser.HtmlNodeElement, attrName:string, defaultValue?:string) : string;
		static getAttrInt(node:htmlparser.HtmlNodeElement, attrName:string, defaultValue?:number) : number;
		static getAttrFloat(node:htmlparser.HtmlNodeElement, attrName:string, defaultValue?:number) : number;
		static getAttrBool(node:htmlparser.HtmlNodeElement, attrName:string, defaultValue?:boolean) : boolean;
		static findOne(node:htmlparser.HtmlNodeElement, selector:string) : htmlparser.HtmlNodeElement;
	}
	
	export class HtmlTools
	{
		static escape(text:string, chars?:string) : string;
		static unescape(text:string) : string;
	}
	
	type XmlAttribute = htmlparser.HtmlAttribute;
	
	export class XmlBuilder
	{
		constructor(indent?:string, newLine?:string);
		xml : htmlparser.XmlDocument;
		begin(tag:string, attrs?:{ value : any; name : string; }[]) : htmlparser.XmlBuilder;
		end() : htmlparser.XmlBuilder;
		attr(name:string, value:any, defValue?:any) : htmlparser.XmlBuilder;
		content(s:string) : htmlparser.XmlBuilder;
		toString() : string;
	}
	
	export class XmlNodeElement extends htmlparser.HtmlNodeElement
	{
		constructor(name:string, attributes:htmlparser.HtmlAttribute[]);
	}
	
	export class XmlDocument extends htmlparser.XmlNodeElement
	{
		constructor(str?:string);
	}
	
	type XmlNode = htmlparser.HtmlNode;
	
	type XmlNodeText = htmlparser.HtmlNodeText;
	
	export class XmlParser extends htmlparser.HtmlParser
	{
		constructor();
		static run(str:string) : htmlparser.HtmlNode[];
	}
}