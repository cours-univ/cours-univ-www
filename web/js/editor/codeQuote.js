//function which add ``` <enter> ``` when user use keybind ctrl + alt + c
function addCodeQuote(self, actualKey, e, selection){
    var altKey = (e || window.event).altKey;
    var ctrlKey = (e || window.event).ctrlKey;
    if(actualKey === 67 && altKey && ctrlKey){
        e.preventDefault();

        var enterString = String.fromCharCode(13);
        var beforeSelection = self.value.substring(0, self.selectionStart);
        var afterSelection = self.value.substring(self.selectionEnd);
        var bonus = '';


        var addRight = enterString + '```';

        if(beforeSelection.length > 0){
            var addLeft = enterString + enterString + '```';
            if(selection.length > 0){
                var bonus = enterString;
            }
        }
        else{
            addLeft = '```';
        }
        self.value = beforeSelection + addLeft + bonus + selection + addRight+ afterSelection;
        self.setSelectionRange(beforeSelection.length + addLeft.length, beforeSelection.length + addLeft.length);
    }
}

