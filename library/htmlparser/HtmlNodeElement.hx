package htmlparser;

@:build(JsProp.marked()) @:jsRequire("re-htmlparser", "htmlparser.HtmlNodeElement") extern class HtmlNodeElement extends htmlparser.HtmlNode {
	function new(name:String, attributes:Array<htmlparser.HtmlAttribute>):Void;
	var name : String;
	var attributes : Array<htmlparser.HtmlAttribute>;
	var nodes : Array<htmlparser.HtmlNode>;
	var children : Array<htmlparser.HtmlNodeElement>;
	function getPrevSiblingElement():htmlparser.HtmlNodeElement;
	function getNextSiblingElement():htmlparser.HtmlNodeElement;
	function addChild(node:htmlparser.HtmlNode, ?beforeNode:htmlparser.HtmlNode):Void;
	function addChildren(nodesToAdd:Array<htmlparser.HtmlNode>, ?beforeNode:htmlparser.HtmlNode):Void;
	override function toString():String;
	function getAttribute(name:String):String;
	function setAttribute(name:String, value:String):Void;
	function removeAttribute(name:String):Void;
	function hasAttribute(name:String):Bool;
	@:property
	var innerHTML : String;
	private function get_innerHTML():String;
	private function set_innerHTML(value:String):String;
	@:property
	var innerText : String;
	private function get_innerText():String;
	private function set_innerText(text:String):String;
	/**
		
			 * Replace all inner nodes to the text node w/o escaping and parsing.
			 
	**/
	function fastSetInnerHTML(html:String):Void;
	override function toText():String;
	function find(selector:String):Array<htmlparser.HtmlNodeElement>;
	function replaceChild(node:htmlparser.HtmlNode, newNode:haxe.extern.EitherType<htmlparser.HtmlNode, Array<htmlparser.HtmlNode>>):Void;
	function removeChild(node:htmlparser.HtmlNode):Void;
	function getAttributesAssoc():Map<String, String>;
	function getAttributesObject():Dynamic<String>;
}