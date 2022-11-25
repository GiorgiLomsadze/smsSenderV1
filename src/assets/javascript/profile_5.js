
function fileUploads(items){
    for(var i = 0; i< items.length; i++){
        var input = findChild(findParent(items[i], '_file-lie'), 'input');

        input.addEventListener('click', function(e){
            e.preventDefault();

            findChild(findParent(this, '_file-lie'), 'input-file').click();
        });
        items[i].addEventListener('change', function(){
            var value = this.value;
            value = value.toString();
            value = value.substring((
                value.lastIndexOf('/') == -1 ? value.lastIndexOf('\\') : value.lastIndexOf('/')
            ) + 1);
            findChild(findParent(this, '_file-lie'), 'input').value = value;
        })
    }
}

void function(){
    dropableSelects(document.querySelectorAll('.dropable-select'));
    checkboxLie(document.querySelectorAll('.checkbox-lie'));
    dateLie(document.querySelectorAll('.date-lie .date-input'));
    radioLie(document.querySelectorAll('.radio-wrap-wrap'));

    fileUploads(document.querySelectorAll('.input-file'));
}();