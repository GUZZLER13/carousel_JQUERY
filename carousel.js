$(document).ready(function() {
    let interval;

    function slider() {
        interval = setInterval(function() {
            var $first = $('.carousel ul li:first-child');
            $first.animate({ 'margin-left': '-1900px' }, 800, function() {
                $first.remove().css({ 'margin-left': '0px' });
                $('.carousel ul li:last-child').after($first);
            });
        }, 3800);
    };
    slider();


    $(".next").click(function() {
        clearInterval(interval);
        var $first = $('.carousel ul li:first-child');
        $first.animate({ 'margin-left': '-1900px' }, 800, function() {
            $first.remove().css({ 'margin-left': '0px' });
            $('.carousel ul li:last-child').after($first);
        });
        slider();
    });

    $(".prev").click(function() {
        clearInterval(interval);
        var $last = $('.carousel ul li:last-child');
        $last.remove().css({ 'margin-left': '-1900px' });
        $('.carousel ul li:first-child').before($last);
        $last.animate({ 'margin-left': '0px' }, 800);
        slider();
    });
});
