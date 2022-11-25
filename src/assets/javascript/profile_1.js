

void function(){

    function get_LeftHeight(){
        var _items = document.querySelector('._right').children;
        var height = 0;
        for(var i = 0; i < _items.length; i++){
            height += _items[i].offsetHeight;
        }
        return height - 30;
    }

    function initChecksList(){
        findChild(document.querySelector('._left'), 'checks_list').style.height = get_LeftHeight() + 'px';
    }
    
    initChecksList();
    
    var _rs;
    window.addEventListener('resize', function(){
        clearTimeout(_rs);
        _rs = setTimeout(function(){
            initChecksList();
        }, 300);
    })
    
    dropableSelects(document.querySelectorAll('.dropable-select'));

    function disabledInputs(){
        document.querySelector('input#c_addr').addEventListener('change', function(e){
            if(e.target.checked){
                document.querySelector('.toggler').classList.add('closed');
            }else{
                document.querySelector('.toggler').classList.remove('closed');
            }
        })
    }

    disabledInputs();

    function editImage(button, image){
        var input = document.querySelector('.hidden-edit-image-input');
        button.addEventListener('click', function(e){
            e.preventDefault();
            input.click();
            // image.parentNode.classList.add('loading');

            input.addEventListener('change', function(e){
                e.preventDefault();

    
                if(input.files && input.files[0]){
                    var reader = new FileReader();
    
                    var src = URL.createObjectURL(input.files[0]);
    
                    image.style.backgroundImage = 'url('+src+')';
    
                    // setTimeout(function(){
                    //     image.parentNode.classList.remove('loading');
                    // }, 300);
                }
            });
        });
        // button.addEventListener('blur', function(e){
        //     e.preventDefault();

        //     console.log(e.target);
            
        //     if(!e.target.classList.contains('profile-image-button')){
        //         image.parentNode.classList.remove('loading');
        //     }
        // });
    }

    editImage(document.querySelector('.profile-image-button'), document.querySelector('.profile-image'));
    

    checkboxLie(document.querySelectorAll('.checkbox-lie'));
}();