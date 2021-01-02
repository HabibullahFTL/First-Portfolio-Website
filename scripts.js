$(document).ready(function(){
    // For Navbar
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky')
        }else{
            $('.navbar').removeClass('sticky')
        }
    })
    // for Scroll Up Button
    $(window).scroll(function(){
        if(this.scrollY > 450){
            $('.scroll-up').addClass('show');
            // document.getElementById("show").innerHTML = scrollY
        }else{
            $('.scroll-up').removeClass('show')
            // document.getElementById("show").innerHTML = scrollY
        }
    })
    // Typing Titles 
    var typed = new Typed(".typing",{
        strings : ["Web Designer","Web Developer","Digital Marketer"],
        typeSpeed : 100,
        backSpeed : 60,
        loop : true
    })
    // Typing Titles 
    var typed = new Typed(".typing2",{
        strings : ["Web Designer","Web Developer","Digital Marketer"],
        typeSpeed : 100,
        backSpeed : 60,
        loop : true
    })

    // skill bars
    $(window).scroll(function(){
        if(this.scrollY > 1570){
            $('.skills-content').addClass('show');
        }else{
            $('.skills-content').removeClass('show')
        }
    })

    // Menu/Nav Toggler
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active')
    })

    // Owl Carousel 
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    })
})