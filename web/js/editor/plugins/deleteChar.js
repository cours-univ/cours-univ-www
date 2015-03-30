/**
 * Create by Armya on 28//03/15
 */

define(function(){
	
	var deleteChar = {};

	deleteChar.deleteRight = function(self){
	    var beforeSelection = self.value.substring(0, self.selectionStart);
	    var selection = self.value.substring(self.selectionStart+1, self.selectionEnd+1);
	    var afterSelection = self.value.substring(self.selectionEnd+1);
	    self.value = beforeSelection + selection + afterSelection;
	    self.setSelectionRange(beforeSelection.length, beforeSelection.length + selection.length);
	};

	return deleteChar;
})