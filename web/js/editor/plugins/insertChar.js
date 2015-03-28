/**
 * Create by Armya on 28//03/15
 */
 
define(function(){

	var insertChar = {};

	insertChar.insertBoth = function(self, charLeft, selection, charRight){
	    var beforeSelection = self.value.substring(0, self.selectionStart);
	    var afterSelection = self.value.substring(self.selectionEnd);
	    self.value = beforeSelection + charLeft + selection + (charRight || '') + afterSelection;
	    self.setSelectionRange((beforeSelection.length + charLeft.length), (beforeSelection.length + charLeft.length + selection.length));
	};

	return insertChar;
})