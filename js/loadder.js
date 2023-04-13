
$(document).ready(function() {
            
    let count = 0;  // only var and let will work but not const
    let counter = setInterval(function() {

        if(count < 101) {
            $('.counter').text(count + '%');
            $('.bar').css('width', count + '%')
            count++
        }

    }, 70)
    
});

gsap.to('.container5', 2, {
    delay: 9,
    y: "-100%",
    ease: Expo.EaseInOut
});
