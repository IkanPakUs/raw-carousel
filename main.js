let $window = $(window);

$(document).ready(function(){
    carousel()
});

function carousel(){
    
    "use strict"
    
    $('.box').each(function(){
        let box = $(this);
        console.log(box);
        setInterval(function(){
            let pos = box.offset().left;
            let coor = box.offset() 
            if(coor.left <= 1640){
                pos++;
                box.offset({ left : pos });
            } else {
                pos = -360;
                box.offset({ left : pos });
            }
        }, 20);
    });

}