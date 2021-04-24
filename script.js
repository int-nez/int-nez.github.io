$(function(){
    function sleep(waitSec, callbackFunc) {
        var spanedSec = 0;
        var id = setInterval (function(){
            spanedSec ++;
            if (spanedSec >= waitSec) {
                clearInterval(id);

                if (callbackFunc) callbackFunc();
            }
        }, 100);
    }

    var loadingComplete = false;

    $(window).scroll(function(){ 
        // $('p').text($(this).scrollTop());
        if (loadingComplete) {
            for (var i = 0; i < $('li').length; i++) {
                
                $tweet = $('li').eq(i);
                if (!$tweet.hasClass('active') && $tweet.offset().top < $(window).scrollTop()+$(window).height()/2) {
                    // $tweet.hide();
                    // $tweet.css('opacity', '0.5');
                    // $tweet.hide();
                    $tweet.animate(
                        {'opacity': 1},
                        {queue: false, duration: 400}
                    );
                    $tweet.addClass('active');
                }
            }
        }
    });
    
    var $tweet;        
    // var i = 0;
    sleep(30, function(){
        // i++;
        // while (i < $('li').length) {
        // }
        
            
        // }
    
        for (var i = 0; i < $('li').length; i++) {
            $tweet = $('li').eq(i);
            if ($tweet.offset().top < $(window).scrollTop()+$(window).height()/2) {
                // $tweet.hide();
                $tweet.animate(
                    {'opacity': 1},
                    {queue: false, duration: 400}
                );
                $tweet.addClass('active');
            }
        }
        loadingComplete = true;
        $('h2').animate({
            'opacity': 0
        });
    });
    
    // var i = 0;
        // sleep(40, function(){
        //     $tweet = $('li').eq(i);
        //     $tweet.animate({
        //         'opacity': 1
        //     }, 500);
        //     // $tweet.slideDown(500);
        //     $('p').text(i);
        //     i ++;
        // });
    // }
    
});