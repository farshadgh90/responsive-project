$(function () {
    $("a").on('click', function(event) {
        if (this.hash !== "" && this.hash !== "comment_"){
            event.preventDefault();
            var hash = this.hash;
             $('html ,body').animate({
                 scrollTop: $(hash).offset().top -55
             }, 900);
        }
    });

    function changeCss () {
        var elm = $('#about');
        var elmTop = elm.offset().top;
        // var elmBottom = elmTop + elm.height();
        var elm_two = $('#comment');
        var elmTop_two = elm_two.offset().top;
        if (this.scrollY > elmTop){
            $("#feature").css({"opacity" : "1"})
        }
        if (this.scrollY > elmTop_two){
            $("#Prices").css({"opacity" : "1"})
        }
      }
    window.addEventListener("scroll", changeCss , false);

    function changeCss_navbar () {
        var elm = $('#about');
        var about = elm.offset().top - 65;
        var elm = $('#feature');
        var feature = elm.offset().top - 65;
        var elm = $('#gallery');
        var gallery = elm.offset().top - 65;
        var elm = $('#comment');
        var comment = elm.offset().top - 65;
        var elm = $('#Prices');
        var prices = elm.offset().top - 65;

        if (this.scrollY > about && this.scrollY < feature ){
            $(".nav_about").css({"background-color" : "rgb(100, 100, 100)"})
        }
        else{
            $(".nav_about").css({"background-color" : "rgb(49, 49, 49)"})
        }
        if (this.scrollY > feature && this.scrollY < gallery ){
            $(".nav_feature").css({"background-color" : "rgb(100, 100, 100)"})
        }
        else{
            $(".nav_feature").css({"background-color" : "rgb(49, 49, 49)"})
        }
        if (this.scrollY > gallery && this.scrollY < comment ){
            $(".nav_gallery").css({"background-color" : "rgb(100, 100, 100)"})
        }
        else{
            $(".nav_gallery").css({"background-color" : "rgb(49, 49, 49)"})
        }
        if (this.scrollY > comment && this.scrollY < prices ){
            $(".nav_comment").css({"background-color" : "rgb(100, 100, 100)"})
        }
        else{
            $(".nav_comment").css({"background-color" : "rgb(49, 49, 49)"})
        }
        if (this.scrollY > prices){
            $(".nav_prices").css({"background-color" : "rgb(100, 100, 100)"})
        }
        else{
            $(".nav_prices").css({"background-color" : "rgb(49, 49, 49)"})
        }
      }
    window.addEventListener("scroll", changeCss_navbar , false);

});