'use strict';
function removeFilter() {
    var i = 0,
        elements = document.getElementsByClassName('text'),
        length = elements.length;

    for(i; i < length; i++) {
        if(elements[i]) {
            var children = elements[i].children;
            for(var j = 0; j < children.length; j++) {
                if(children[j]) {
                    var fs = parseInt(children[j].style.fontSize);
                    if(fs < 8) {
                        children[j].style.fontSize = 'inherit';
                    }
                }
            }
        }
    }
}

removeFilter();