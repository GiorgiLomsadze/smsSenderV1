
void function(){
    function cardToggle(cards){
        var item;
        var _timer;

        function init(){
            for(var i = 0; i < cards.length; i++){
                item = cards[i];
                if(item.classList.contains('active')){
                    findChild(item, 'data-content-mobile-content').style.height = findChild(item, 'data-content-mobile-content').children[0].offsetHeight + 'px';
                }else{
                    findChild(item, 'data-content-mobile-content').style.height = 0 + 'px';
                }
            }
        };
        init();

        window.addEventListener('resize', function(){
            clearInterval(_timer);
            _timer = setInterval(init(), 900);
        })
        for(var i = 0; i < cards.length; i++){
            findChild(cards[i], '_toggle').addEventListener('click', function(e){
                e.preventDefault();
                item = findParent(this, 'c-main-box-mobile');
                if(item.classList.contains('active')){
                    item.classList.remove('active');
                    findChild(item, 'data-content-mobile-content').style.height = 0 + 'px';
                }else{
                    item.classList.add('active');
                    findChild(item, 'data-content-mobile-content').style.height = findChild(item, 'data-content-mobile-content').children[0].offsetHeight + 'px';
                }
            })
        }
    }

    cardToggle(document.querySelectorAll('.c-main .c-main-box-mobile'));

    function favourites(items){
        function onClick(e){
            e.preventDefault();
            alert('icon click');
        }
        for(var i = 0; i < items.length; i++){
            items[i].addEventListener('click', onClick);
        }
    }


    favourites(document.querySelectorAll('.favourites'));
}();