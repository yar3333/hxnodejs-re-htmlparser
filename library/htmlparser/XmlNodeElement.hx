package htmlparser;

@:jsRequire("re-htmlparser", "XmlNodeElement") extern class XmlNodeElement extends htmlparser.HtmlNodeElement {
	function new(name:String, attributes:Array<htmlparser.HtmlAttribute>):Void;
}