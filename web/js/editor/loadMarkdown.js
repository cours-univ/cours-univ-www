define(['text!raccourcis.md', 'plugins/compiler', 'jquery'], function(text, compiler, $)
{
	compiler.compile(text, $("#shortcuts .content .text"))
});