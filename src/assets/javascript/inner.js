
void function(){
    function hidePops(items){
        function onClick(e){
            if(e.target.classList.contains('popup-reg-wrap') || e.target.classList.contains('popup-accept')){
                e.target.classList.remove('active');
            }
        }
        for(var i = 0; i < items.length; i++){
            items[i].addEventListener('click', onClick);
        }
    }

    hidePops(document.querySelectorAll('.popup-reg-wrap, .popup-accept'));
}();