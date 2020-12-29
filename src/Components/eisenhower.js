$(function() {
    (document).ready(function() {
    ('.inner_box').hover(function() {
        alert('yes');
        (this).addClass('hover');
        ('.inner_box:not(.hover)').addClass('sliding');
    
    }, function() {
        (this).removeClass('hover');
        ('.inner_box').removeClass('sliding');
    });
});

});