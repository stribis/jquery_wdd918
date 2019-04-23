jQuery(function($) {
// 0 Onload function that waits for the site to be loaded.

// 1 Define Variables

// Button variables (2 arrows & checkbox)
var prevBtn = $('a.button_zurueck'),
nextBtn = $('a.button_weiter'),
checkbox = $('#toggle_animation');

// Slideshow variables 
var slider = $('#slideshow'),
sliderUl = slider.children('ul'),
slides =  sliderUl.children('li'),
slideCount = slides.length,
slideWidth = slides.width(),
slideHeight = slides.height(),
sliderUlWidth = slideCount * slideWidth,
sliderInterval;

//shrink the slider, making it as big as a slide 
slider.css({
    width: slideWidth,
    height: slideHeight
})

// fit the 'row' of slides
sliderUl.css({
    width: sliderUlWidth, 
    marginLeft: - slideWidth
})

// take the last slide and prepend it to the row of slides
slides.last().prependTo(sliderUl);

// 2 Events
// define the 3 events and make them call a function
prevBtn.on('click', moveLeft);
nextBtn.on('click', moveRight);
checkbox.on('click', onSliderToggle);

// 3 Functions
// Function for left arrow, passing the event information as the 'e' parameter
function moveLeft(e){
    //Prevent default behaviour of the buttons
    if(e){
        e.preventDefault();
    }
    // Animate the movement of the slide
    // this function expects 3 parameters animate(1,2,3)
    // 1: The css properties being animated ( use an object )
    // 2: The duration of the animation in ms ( use a number )
    // 3: A callback function which will be called when the animation is done
    sliderUl.animate({
        left: + slideWidth
    }, 200, 
    function(){
        // We take the last li in the ul and prepend it to the ul
        $(this).children('li').last().prependTo(sliderUl);
        // We reste the left value of the slide which we changed in the animation
        $(this).css('left', '');
    })
}

// Function for right arrow, passing the event information as the 'e' parameter
function moveRight(e){
    //Prevent default behaviour of the buttons
    if(e){
        e.preventDefault();
    }
    // Animate the movement of the slide
    // this function expects 3 parameters animate(1,2,3)
    // 1: The css properties being animated ( use an object )
    // 2: The duration of the animation in ms ( use a number )
    // 3: A callback function which will be called when the animation is done
    sliderUl.animate({
        left: - slideWidth
    }, 200,
    function(){
        // We take the last li in the ul and prepend it to the ul
        $(this).children('li').first().appendTo(sliderUl);
        // We reste the left value of the slide which we changed in the animation
        $(this).css('left', '');
    })
}

// Toggle Function for the autoplay, passing the event information as the 'e' parameter
function onSliderToggle(e){
    //Using the event information we passed in 'e', we can check if the checkmark is checked
    var _this = $(e.currentTarget);
    if(_this.is(":checked")){
        //if it is, then start a timer which activates the function move right every 3 seconds
        sliderInterval = setInterval(moveRight, 3000);
    }else{
        //if it isn't then stop and clear the timer
        clearInterval(sliderInterval);
    }
}


})