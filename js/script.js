$( document ).ready(function() {
    // Side-bar Scroll Function
    $(".side-button").click(function(){
        if($(this.hash).height() > $(window).height()) {
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top-25
            }, 1000);
        } else {
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top-(($(window).height() - $(this.hash).innerHeight())/2)
            }, 1000);
        }
        return false;
    });
    
    // Setting the active on the side buttons
    $(window).scroll(function(){
        if ($(window).scrollTop() >= $('#bottomSection').offset().top - $(window).height()/2) {
            $('.side-button').removeClass('active');
            $('#bottomButton').addClass('active');
        } else if ($(window).scrollTop() >= $('#fourthSection').offset().top - $(window).height()/2 ) {
            $('.side-button').removeClass('active');
            $('#fourthButton').addClass('active');
        } else if ($(window).scrollTop() >= $('#thirdSection').offset().top - $(window).height()/2 ) {
            $('.side-button').removeClass('active');
            $('#thirdButton').addClass('active');
        } else if ($(window).scrollTop() >= $('#hipsterSection').offset().top - $(window).height()/2 ) {
            $('.side-button').removeClass('active');
            $('#hipsterButton').addClass('active');
        } else if ($(window).scrollTop() >= $('#topSection').offset().top - $(window).height()/2 ) {
            $('.side-button').removeClass('active');
            $('#topButton').addClass('active');
        }
    });
    
    //Hipster selector function
    $('.hipster-selector-link').click(function(){
        // Setting the active class for the link
        $('.hipster-selector-link').removeClass('active');
        $(this).addClass('active');
        
        // Changing the active content box
        $('.selection-box').removeClass('active');
        $(this.hash).addClass('active');    
        
        // Changing the image on the left side
        if(this.hash == "#chillwaveBox"){
            $('.hipster-left-half').css('background', 'black');
        } else if(this.hash == "#photographyBox"){
            $('.hipster-left-half').css('background', 'green');
        } else if(this.hash == "#styleBox"){
            $('.hipster-left-half').css('background', 'ivory');
        } else if(this.hash == "#yoloBox"){
            $('.hipster-left-half').css('background', 'red');
        };
        
        return false;
    });
    
    // Third section menu button function
    $('#menuButton').on('change', function() {
        if ($('#menuButton').is(':checked')) {
            $('.inner-content-container').css('left', '-280px');
            $('.inner-content-container').css('right', '280px');
        } else {
            $('.inner-content-container').css('left', '0px');
            $('.inner-content-container').css('right', '0px');
        }
    });
    
});