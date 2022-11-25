
// function hasParent(element, className){
//     if(element.parentNode.tagName !== 'BODY'){
//         if(element.parentNode.classList.contains(className)){
//             return true;
//         }else{
//             if(hasParent(element.parentNode, className)){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// function hasChildren(element, className){
//     for(var i = 0; i < element.children.length; i++){
//         if(element.children[i].classList.contains(className)){
//             return true;
//         }else{
//             if(hasChildren(element.children[i], className)){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// function findChild(element, className){
//     if(hasChildren(element, className)){
//         for(var i = 0; i < element.children.length; i++){
//             if(element.children[i].classList.contains(className)){
//                 return element.children[i];
//             }else{
//                 if(findChild(element.children[i], className)){
//                     return findChild(element.children[i], className);
//                 }
//             }
//         }
//     }else{
//         return null;
//     }
// }

// function findParent(element, className){
//     if(hasParent(element, className)){
//         if(element.parentNode.classList.contains(className)){
//             return element.parentNode;
//         }else{
//             if(findParent(element.parentNode, className)){
//                 return findParent(element.parentNode, className);
//             }
//         }
//     }else{
//         return null;
//     }
// }

// function dropableSelects(items){
//     function handleClick(e){
//         for(var i = 0; i < items.length; i++){
//             if(items[i].dataset.to == this.parentNode.dataset.to){
//                 continue;
//             }
//             if(items[i].classList.contains('active')){
//                 var parent = items[i];
//                 parent.classList.remove('active');
//                 findChild(parent, 'options').style.height = 0;
//                 findChild(parent, 'options').style.zIndex = -1;
//             }
//         }
//         var parent = findParent(this, 'dropable-select');
//         if(parent.classList.contains('active')){
//             parent.classList.remove('active');
//             findChild(parent, 'options').style.height = 0;
//             findChild(parent, 'options').style.zIndex = -1;
//         }else{
//             parent.classList.add('active');
//             findChild(parent, 'options').style.height = (findChild(parent, 'options').children[0].offsetHeight + 20) + 'px';

//             findChild(parent, 'options').style.zIndex = 40;
//         }
//     };

//     for(var i = 0; i < items.length; i++){
//         findChild(items[i], 'selected').addEventListener('click', handleClick);
//     }

//     function buttonsClick(items){
//         for(var i = 0; i < items.length; i++){
//             items[i].addEventListener('click', function(e){
//                 e.preventDefault();
//                 var to = findParent(this, 'dropable-select');
//                 document.querySelector('input[name="'+to.dataset.to+'"]').value = this.dataset.value;
//                 var parent = findParent(this, 'dropable-select');
//                 parent.classList.remove('active');
//                 findChild(findChild(parent, 'selected'), 'value').innerText = this.innerText;
//                 findChild(parent, 'options').style.height = 0;
//             });
//         }
//     }

//     buttonsClick(document.querySelectorAll('.dropable-select button'));
// }

// function checkboxLie(items){
//     function change(e){
//         if(e){
//             e.preventDefault();
//         }
//         var item = findChild(this.parentNode, 'checkbox-lie');
//         if(this.checked === false){
//             item.classList.remove('active');
//         }else{
//             item.classList.add('active');
//         }
//     }
//     function _change(input){
//         var item = findChild(input.parentNode, 'checkbox-lie');
//         if(input.checked === false){
//             item.classList.remove('active');
//         }else{
//             item.classList.add('active');
//         }
//     }

//     for(var i = 0; i < items.length; i++){
//         items[i].addEventListener('click', function(e){
//             e.preventDefault();

//             document.querySelector('input[name="'+this.dataset.to+'"]').click();
//             // if(this.classList.contains('active')){
//             //     this.classList.remove('active');
//             // }else{
//             //     this.classList.add('active');
//             // }
//         });

//         _change(document.querySelector('input[name="'+items[i].dataset.to+'"]'));
//         document.querySelector('input[name="'+items[i].dataset.to+'"]').addEventListener('change', change)
//     }
// }

// function dateLie(items){
//     for(var i = 0; i< items.length; i++){
//         console.log(items[i]);
//         var target = findChild(findParent(items[i], 'date-lie'), 'date-lie-input');

//         target.addEventListener('input', function(e){
//             e.preventDefault();
//             var _target = findChild(findParent(this, 'date-lie'), 'date-input');
//             _target.value = this.value;
//         })
//     }
// }

// function radioLie(items){
//     for(var i = 0; i < items.length; i++){
//         items[i].addEventListener('click',function(e){
//             e.preventDefault();
//             var target = document.getElementById(this.dataset.id);
//             target.click();
//         });
//         document.getElementById(items[i].dataset.id).addEventListener('change', function(e){
//             e.preventDefault();
//             var _items = findParent(this,'profile-radios-right').children;
//             for(var q = 0; q < _items.length; q++){
//                 _items[q].classList.remove('active');
//             }
//             if(this.checked){
//                 this.parentNode.classList.add('active');
//             }else{
//                 this.parentNode.classList.add('active');
//             }
//         });
//     }
// }

// void function(){
//     window.onload = function() {
//           if (navigator.userAgent.indexOf("Firefox") > 0 ||navigator.userAgent.indexOf("Safari") > 0 ) {
//             var items = document.querySelectorAll('.bold, b');
//             for(var i = 0; i < items.length; i++){
//                 items[i].classList.add('not-bold');
//             }
//           }
//       }

//       let _t;
//       window.addEventListener('resize', function(){
//         _t = setTimeout(function(){
//             var main = document.querySelector('main.c-main');
//             if(main){
//                 var height = document.querySelector('.c-header').offsetHeight + document.querySelector('.c-post-header').offsetHeight + document.querySelector('.c-footer').offsetHeight;
//                 main.style.minHeight = window.innerHeight - height + 10 + 'px';
//             }
//         }, 800);
//       })

//     var main = document.querySelector('main.c-main');
//     if(main){
//             var height = document.querySelector('.c-header').offsetHeight + document.querySelector('.c-post-header').offsetHeight + document.querySelector('.c-footer').offsetHeight;
//             main.style.minHeight = window.innerHeight - height + 10 + 'px';
//     }

//     function removePressed(callback){
//         var pressedItems = document.querySelectorAll('.pressed');
//         for(var i = 0; i < pressedItems.length; i++){
//             pressedItems[i].classList.remove('pressed');
//         }
//     }

//     function searchSelects(items){
//         var options = {
//         };

//         for(var i = 0; i < items.length; i++){
//             items[i].addEventListener('click', function(e){
//                 if(e.target.classList.contains('select-top')){
//                     e.preventDefault();

//                     if(this.classList.contains('pressed')){
//                         this.classList.remove('pressed');
//                         findChild(this, 'select-content').style.height = 0;
//                     }else{
//                         this.classList.add('pressed');
//                         var content = findChild(this, 'select-content');
//                         content.style.height = findChild(content, 'select-content-wrap').offsetHeight + 24 + 'px';
//                         // findChild(this, 'select-content-filter-input').focus();
//                     }
//                 }
//             });
//             if(options[findChild(items[i], 'search-hidden-input').name]){
//                 continue;
//             }
//             var optionsList = findChild(items[i], 'select-content-list').children[0].children;
//             options = {
//                 ...options,
//                 [findChild(items[i], 'search-hidden-input').name]: [
//                 ]
//             };
//             for(var q = 0; q < optionsList.length; q++){
//                 options[findChild(items[i], 'search-hidden-input').name].push(
//                     {
//                         value: optionsList[q].children[0].dataset.value,
//                         text: optionsList[q].children[0].innerText
//                     }
//                 );
//             }
//         }

//         function searchSelectsButtons(buttons){
//             for(var i = 0; i < buttons.length; i++){
//                 buttons[i].addEventListener('click', function(e){
//                     e.preventDefault();
//                     var _sw = findParent(this, 'search-input-wrap');
//                     findChild(_sw, 'search-hidden-input').value = this.dataset.value;
//                     findChild(findChild(_sw, 'select-top'), 'text').innerText = this.innerText;

//                     findParent(this, 'search-input-wrap').classList.remove('pressed');
//                     findParent(this, 'select-content').style.height = 0;
//                     // document.querySelector('.c-post-header form.search').submit();
//                     findParent(this, 'search').submit();
//                 })
//             }
//         }

//         function updateSearchSelectButtons(keyword, container, optionKey){
//             var items = options[optionKey].filter(option => option.text.indexOf(keyword) !== -1);
//             var btntext = '<li> not found </li>';
//             if(items.length !== 0){
//                 btntext = '';
//                 for(var i = 0; i < items.length; i++){
//                     btntext += "<li><button data-value='"+items[i].value+"'>"+items[i].text+"</button";
//                 }
//             }
//             container.innerHTML = btntext;
//             searchSelectsButtons(document.querySelectorAll('.search-input-wrap.select .select-content-list ul >li button'));
//         }

//         function activateSearchFilter(element){
//             for(var i = 0; i < element.length; i++){
//                 element[i].addEventListener('input', function(e){
//                     updateSearchSelectButtons(e.target.value, findChild(findParent(this, 'select-content-wrap'), 'select-content-list-list'), findChild(findParent(this, 'search-input-wrap'), 'search-hidden-input').name);
//                 });
//             }
//         }

//         document.querySelector('body').addEventListener('click', function(e){
//             try{
//                 if(!hasParent(e.target, 'search-input-wrap') && !e.target.classList.contains('select-top')){
//                     var selects = document.querySelectorAll('.search-input-wrap.select');
//                     for(var i = 0; i < selects.length; i++){
//                         if(selects[i].classList.contains('pressed')){
//                             selects[i].classList.remove('pressed');
//                             findChild(selects[i], 'select-content').style.height = 0;
//                         }
//                     }
//                 }
//             }catch{

//             }
//         });

//         searchSelectsButtons(document.querySelectorAll('.search-input-wrap.select .select-content-list ul >li button'));
//         activateSearchFilter(document.querySelectorAll('.select-content-filter'));
//     }

//     try{
//         searchSelects(document.querySelectorAll('.select'));
//     }catch{

//     }

//     function moreButton(){
//         var button = document.querySelector('.c-post-header .row-items li._bars >a');
//         var drop = document.querySelector('.c-post-header .row-items .drop');
//         var dropped = false;

//         button.addEventListener('click', function(e){
//             e.preventDefault();

//             if(!dropped){
//                 drop.style.height = drop.children[0].offsetHeight + 'px';
//                 setTimeout(function(){
//                     drop.style.height = 'auto';
//                 }, 300);
//                 findParent(drop, 'row-items').classList.add('dropped');
//                 dropped = true;
//             }else{
//                 var pressedItems = document.querySelectorAll('.search-input-wrap.select.pressed');
//                 for(var i = 0; i < pressedItems.length; i++){
//                     pressedItems[i].classList.remove('pressed');
//                     findChild(pressedItems[i], 'select-content').style.height = 0;
//                 }
//                 setTimeout(function(){
//                     drop.style.height = drop.children[0].offsetHeight + 'px';
//                     setTimeout(function(){
//                         drop.style.height = 0;
//                         findParent(drop, 'row-items').classList.remove('dropped');
//                         dropped = false;
//                     }, pressedItems.length == 0 ? 0 : 300);
//                 }, 300);
//             }
//         });
//     }

//     function searchToggler(){
//         document.querySelector('.c-post-header .search_icon_').parentNode.addEventListener('click', function(e){
//             e.preventDefault();
//             if(!this.classList.contains('active')){
//                 document.querySelector('.c-post-header .drop .search-input-wrap.text').classList.add('active');
//             }
//             if(!document.querySelector('.c-post-header .row-items').classList.contains('dropped')){
//                 document.querySelector('.row-items li._bars >a.detail').click()
//             }
//             setTimeout(function(){
//                 document.querySelector('.c-post-header .drop .search-input-wrap.text .search-input').focus();
//             }, 600);
//         });
//         document.querySelector('.c-post-header .drop .search-input-wrap.text .search-input').addEventListener('blur', function(){
//             document.querySelector('.c-post-header .search_icon_').classList.remove('active');
//             this.parentNode.classList.remove('active');
//         });
//     }

//     try{
//         moreButton();
//         searchToggler();
//     }catch{

//     }
// }()


'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function hasParent(element, className) {
    if (element.parentNode.tagName !== 'BODY') {
        if (element.parentNode.classList.contains(className)) {
            return true;
        } else {
            if (hasParent(element.parentNode, className)) {
                return true;
            }
        }
    }
    return false;
}

function hasChildren(element, className) {
    for (var i = 0; i < element.children.length; i++) {
        if (element.children[i].classList.contains(className)) {
            return true;
        } else {
            if (hasChildren(element.children[i], className)) {
                return true;
            }
        }
    }
    return false;
}

function findChild(element, className) {
    if (hasChildren(element, className)) {
        for (var i = 0; i < element.children.length; i++) {
            if (element.children[i].classList.contains(className)) {
                return element.children[i];
            } else {
                if (findChild(element.children[i], className)) {
                    return findChild(element.children[i], className);
                }
            }
        }
    } else {
        return null;
    }
}

function findParent(element, className) {
    if (hasParent(element, className)) {
        if (element.parentNode.classList.contains(className)) {
            return element.parentNode;
        } else {
            if (findParent(element.parentNode, className)) {
                return findParent(element.parentNode, className);
            }
        }
    } else {
        return null;
    }
}

function dropableSelects(items) {
    function handleClick(e) {
        for (var i = 0; i < items.length; i++) {
            if (items[i].dataset.to == this.parentNode.dataset.to) {
                continue;
            }
            if (items[i].classList.contains('active')) {
                var parent = items[i];
                parent.classList.remove('active');
                findChild(parent, 'options').style.height = 0;
                findChild(parent, 'options').style.zIndex = -1;
            }
        }
        var parent = findParent(this, 'dropable-select');
        if (parent.classList.contains('active')) {
            parent.classList.remove('active');
            findChild(parent, 'options').style.height = 0;
            findChild(parent, 'options').style.zIndex = -1;
        } else {
            parent.classList.add('active');
            findChild(parent, 'options').style.height = findChild(parent, 'options').children[0].offsetHeight + 20 + 'px';

            findChild(parent, 'options').style.zIndex = 40;
        }
    };

    for (var i = 0; i < items.length; i++) {
        findChild(items[i], 'selected').addEventListener('click', handleClick);
    }

    function buttonsClick(items) {
        for (var i = 0; i < items.length; i++) {
            items[i].addEventListener('click', function (e) {
                e.preventDefault();
                var to = findParent(this, 'dropable-select');
                document.querySelector('input[name="' + to.dataset.to + '"]').value = this.dataset.value;
                var parent = findParent(this, 'dropable-select');
                parent.classList.remove('active');
                findChild(findChild(parent, 'selected'), 'value').innerText = this.innerText;
                findChild(parent, 'options').style.height = 0;
            });
        }
    }

    buttonsClick(document.querySelectorAll('.dropable-select button'));
}

function checkboxLie(items) {
    function change(e) {
        if (e) {
            e.preventDefault();
        }
        var item = findChild(this.parentNode, 'checkbox-lie');
        if (this.checked === false) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    }
    function _change(input) {
        var item = findChild(input.parentNode, 'checkbox-lie');
        if (input.checked === false) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    }

    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector('input[name="' + this.dataset.to + '"]').click();
            // if(this.classList.contains('active')){
            //     this.classList.remove('active');
            // }else{
            //     this.classList.add('active');
            // }
        });

        _change(document.querySelector('input[name="' + items[i].dataset.to + '"]'));
        document.querySelector('input[name="' + items[i].dataset.to + '"]').addEventListener('change', change);
    }
}

function dateLie(items) {
    for (var i = 0; i < items.length; i++) {
        // console.log(items[i]);
        var target = findChild(findParent(items[i], 'date-lie'), 'date-lie-input');

        target.addEventListener('input', function (e) {
            e.preventDefault();
            var _target = findChild(findParent(this, 'date-lie'), 'date-input');
            _target.value = this.value;
        });
    }
}

function radioLie(items) {
    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.getElementById(this.dataset.id);
            target.click();
        });
        document.getElementById(items[i].dataset.id).addEventListener('change', function (e) {
            e.preventDefault();
            var _items = findParent(this, 'profile-radios-right').children;
            for (var q = 0; q < _items.length; q++) {
                _items[q].classList.remove('active');
            }
            if (this.checked) {
                this.parentNode.classList.add('active');
            } else {
                this.parentNode.classList.add('active');
            }
        });
    }
}

void function () {
    window.onload = function () {
        if (navigator.userAgent.indexOf("Firefox") > 0 || navigator.userAgent.indexOf("Safari") > 0) {
            var items = document.querySelectorAll('.bold, b');
            for (var i = 0; i < items.length; i++) {
                items[i].classList.add('not-bold');
            }
        }
    };

    var _t = void 0;
    window.addEventListener('resize', function () {
        _t = setTimeout(function () {
            var main = document.querySelector('main.c-main');
            if (main) {
                var height = document.querySelector('.c-header').offsetHeight + document.querySelector('.c-post-header').offsetHeight + document.querySelector('.c-footer').offsetHeight;
                main.style.minHeight = window.innerHeight - height + 10 + 'px';
            }
        }, 800);
    });

    var main = document.querySelector('main.c-main');
    if (main) {
        var height = document.querySelector('.c-header').offsetHeight + document.querySelector('.c-post-header').offsetHeight + document.querySelector('.c-footer').offsetHeight;
        main.style.minHeight = window.innerHeight - height + 10 + 'px';
    }

    function removePressed(callback) {
        var pressedItems = document.querySelectorAll('.pressed');
        for (var i = 0; i < pressedItems.length; i++) {
            pressedItems[i].classList.remove('pressed');
        }
    }

    function searchSelects(items) {
        var options = {};

        for (var i = 0; i < items.length; i++) {
            items[i].addEventListener('click', function (e) {
                if (e.target.classList.contains('select-top')) {
                    e.preventDefault();

                    if (this.classList.contains('pressed')) {
                        this.classList.remove('pressed');
                        findChild(this, 'select-content').style.height = 0;
                    } else {
                        this.classList.add('pressed');
                        var content = findChild(this, 'select-content');
                        content.style.height = findChild(content, 'select-content-wrap').offsetHeight + 24 + 'px';
                        // findChild(this, 'select-content-filter-input').focus();
                    }
                }
            });
            if (options[findChild(items[i], 'search-hidden-input').name]) {
                continue;
            }
            var optionsList = findChild(items[i], 'select-content-list').children[0].children;
            options = _extends({}, options, _defineProperty({}, findChild(items[i], 'search-hidden-input').name, []));
            for (var q = 0; q < optionsList.length; q++) {
                options[findChild(items[i], 'search-hidden-input').name].push({
                    value: optionsList[q].children[0].dataset.value,
                    text: optionsList[q].children[0].innerText
                });
            }
        }

        function searchSelectsButtons(buttons) {
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener('click', function (e) {
                    e.preventDefault();
                    var _sw = findParent(this, 'search-input-wrap');
                    findChild(_sw, 'search-hidden-input').value = this.dataset.value;
                    findChild(findChild(_sw, 'select-top'), 'text').innerText = this.innerText;

                    findParent(this, 'search-input-wrap').classList.remove('pressed');
                    findParent(this, 'select-content').style.height = 0;
                    // document.querySelector('.c-post-header form.search').submit();
                    findParent(this, 'search').submit();
                });
            }
        }

        function updateSearchSelectButtons(keyword, container, optionKey) {
            var items = options[optionKey].filter(function (option) {
                return option.text.indexOf(keyword) !== -1;
            });
            var btntext = '<li> not found </li>';
            if (items.length !== 0) {
                btntext = '';
                for (var i = 0; i < items.length; i++) {
                    btntext += "<li><button data-value='" + items[i].value + "'>" + items[i].text + "</button";
                }
            }
            container.innerHTML = btntext;
            searchSelectsButtons(document.querySelectorAll('.search-input-wrap.select .select-content-list ul >li button'));
        }

        function activateSearchFilter(element) {
            for (var i = 0; i < element.length; i++) {
                element[i].addEventListener('input', function (e) {
                    updateSearchSelectButtons(e.target.value, findChild(findParent(this, 'select-content-wrap'), 'select-content-list-list'), findChild(findParent(this, 'search-input-wrap'), 'search-hidden-input').name);
                });
            }
        }

        document.querySelector('body').addEventListener('click', function (e) {
            try {
                if (!hasParent(e.target, 'search-input-wrap') && !e.target.classList.contains('select-top')) {
                    var selects = document.querySelectorAll('.search-input-wrap.select');
                    for (var i = 0; i < selects.length; i++) {
                        if (selects[i].classList.contains('pressed')) {
                            selects[i].classList.remove('pressed');
                            findChild(selects[i], 'select-content').style.height = 0;
                        }
                    }
                }
            } catch (error) {
                console.error(error);
                // expected output: ReferenceError: nonExistentFunction is not defined
                // Note - error messages will vary depending on browser
            }
        });

        searchSelectsButtons(document.querySelectorAll('.search-input-wrap.select .select-content-list ul >li button'));
        activateSearchFilter(document.querySelectorAll('.select-content-filter'));
    }

    try {
        searchSelects(document.querySelectorAll('.select'));
    } catch (e) {}

    function moreButton() {
        var button = document.querySelector('.c-post-header .row-items li._bars >a');
        var drop = document.querySelector('.c-post-header .row-items .drop');
        var dropped = false;

        button.addEventListener('click', function (e) {
            e.preventDefault();

            if (!dropped) {
                drop.style.height = drop.children[0].offsetHeight + 'px';
                setTimeout(function () {
                    drop.style.height = 'auto';
                }, 300);
                findParent(drop, 'row-items').classList.add('dropped');
                dropped = true;
            } else {
                var pressedItems = document.querySelectorAll('.search-input-wrap.select.pressed');
                for (var i = 0; i < pressedItems.length; i++) {
                    pressedItems[i].classList.remove('pressed');
                    findChild(pressedItems[i], 'select-content').style.height = 0;
                }
                setTimeout(function () {
                    drop.style.height = drop.children[0].offsetHeight + 'px';
                    setTimeout(function () {
                        drop.style.height = 0;
                        findParent(drop, 'row-items').classList.remove('dropped');
                        dropped = false;
                    }, pressedItems.length == 0 ? 0 : 300);
                }, 300);
            }
        });
    }

    function searchToggler() {
        document.querySelector('.c-post-header .search_icon_').parentNode.addEventListener('click', function (e) {
            e.preventDefault();
            if (!this.classList.contains('active')) {
                document.querySelector('.c-post-header .drop .search-input-wrap.text').classList.add('active');
            }
            if (!document.querySelector('.c-post-header .row-items').classList.contains('dropped')) {
                document.querySelector('.row-items li._bars >a.detail').click();
            }
            setTimeout(function () {
                document.querySelector('.c-post-header .drop .search-input-wrap.text .search-input').focus();
            }, 600);
        });
        document.querySelector('.c-post-header .drop .search-input-wrap.text .search-input').addEventListener('blur', function () {
            document.querySelector('.c-post-header .search_icon_').classList.remove('active');
            this.parentNode.classList.remove('active');
        });
    }

    try {
        moreButton();
        searchToggler();
    } catch (e) {}
}();
