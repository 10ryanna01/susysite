


//  =====================
// unified open close function 
// woohoo
//  =====================



$(document).ready(function () {
    $(".box-content").hide();
console.log('ready to rock!');
// https://jsfiddle.net/arunpjohny/Huvak/
    $(".open-close").click(function () {
        $(this).next(".box-content").finish().slideToggle("slow");
    });
});





