(function() {
    "use strict";

   // var $currentRating = $(".rating-points-current")//$(".ratings-points-current");
   // console.log("current rating", $currentRating);
    var $star = $(".fa-star-o");


    // adds changes empty star to filled
    // it gets the index of clicked star then removes any colored stars, keeps empty stars
    // then iterates over the array of stars and fills them in until the checked star is filled
    var addStar = function() {
        var $dataIndex = $(this).parent().parent().data("index");
        var $stars = $("[data-index="+$dataIndex+"].ratings-row").find(".fa");
        var index = $stars.index(this);
        var rating = index +1;

        var $currentRating = $(this).parent().parent().next().find("[data-index="+$dataIndex+"].rating-points-current");
    //debugger

        if(index >= 0){
            $stars.removeClass("fa-star");
            $stars.addClass("fa-star-o", true);
            console.log("current rating", $currentRating);

            $($currentRating).text(index +1);
            for(var i = 0; i <= index; i++) {
                var $el = $stars.get(i);
                console.log("el", $el);
                $($el).removeClass("fa-star-o");
                $($el).addClass("fa-star");
                console.log("i", i );
                console.log("this", this);
            }
        }

        //$(this).toggleClass("fa-star-o fa-star");
        console.log(index);

    };
    //
    $star.on("click", addStar);


})();