package htmlparser;

@:jsRequire("re-htmlparser", "htmlparser.XmlParser") extern class XmlParser extends htmlparser.HtmlParser {
	function new():Void;
	static function run(str:String):Array<htmlparser.HtmlNode>;
}