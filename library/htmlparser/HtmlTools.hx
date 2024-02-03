package htmlparser;

@:jsRequire("re-htmlparser", "HtmlTools") extern class HtmlTools {
	static function escape(text:String, ?chars:String):String;
	static function unescape(text:String):String;
}