$(".answer-holder").slideUp();

$(".question-holder img").on("click", function() {

    var answerOpener = $(this).attr("class");
    console.log(answerOpener);
    $(".answer"+ answerOpener).slideToggle();

    if($("." + answerOpener).attr("src") === "./assets/images/icon-plus.svg"){
        $("." + answerOpener).attr("src","./assets/images/icon-minus.svg")
    }else if($("." + answerOpener).attr("src") === "./assets/images/icon-minus.svg"){
        $("." + answerOpener).attr("src","./assets/images/icon-plus.svg")
    }

});

