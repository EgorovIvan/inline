
$(document).ready(function(){
    let owl = $('.owl-carousel');
    owl.owlCarousel({
        touchDrag: true,
        nav: false,
        autoWidth:true,
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1,
            },
            751:{
                items:4,
            }
        }
    });
});
