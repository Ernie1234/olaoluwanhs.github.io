
// Navbar scripts and mechanics.
// Navbar that changes depending on the position of scroll.
var navbar = document.querySelector(".navbar"),
    body= document.body,
    docElement=document.documentElement,
    docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElement.clientHeight, docElement.scrollHeight, docElement.offsetHeight),
    offset, scrollPos;

    if (docHeight != undefined){
        offset =docHeight/60;
    }
function navbarScrolled(){
    scrollPos= body.scrollTop||docElement.scrollTop;
    if(scrollPos>offset){
        navbar.setAttribute("class", "navbar navbar-scrolled");
    }
    else{
        navbar.setAttribute("class", "navbar");
    }
    };
    window.addEventListener("scroll", navbarScrolled ,false);




//     // in phone screen bio is normal
// window.addEventListener("load", function(){
//     if(docElement.clientWidth<=1024){
//         bio.forEach(function(part){
//             part.setAttribute("style", "transition: 0");
//             part.setAttribute("style", "transform: translateX(0)");
//         })
//     }
// })



// The clock
// Javascript mechanics for the digital clock.
function updateTime(){
    var minutes = document.querySelector('.my-name>.time>#min'),
    seconds = document.querySelector('.my-name>.time>#sec'),
    hours = document.querySelector('.my-name>.time>#hour'),
    time = new Date;

    var sec = time.getSeconds();
    var min = time.getMinutes();
    var hour = time.getHours();


    minutes.textContent = time.getMinutes()<=9? "0"+ time.getMinutes(): time.getMinutes();
    seconds.textContent = time.getSeconds()<=9? "0"+ time.getSeconds(): time.getSeconds();
    hours.textContent = time.getHours()<=9? "0"+ time.getHours(): time.getHours();
    
   }
setInterval( updateTime, 1000);





// Bringing out the Bio when you get to the part of the...
// ...document with the bio.
var bigBio = document.querySelector(".bio>.big-bio");
var smallBio = document.querySelector(".bio>.small-bio>p");
var bioPic = document.querySelector(".bio>.small-bio>.bio-pic");
var bio = [ bigBio , smallBio, bioPic];

function translateBio(){
    if(docElement.clientWidth>=1024){
    // for each on the bio we run this function.
    if(scrollPos>=400){
    bio.forEach(function(part){
        part.style.transform = "translateX(0)"
    });}}
    else{
        if(scrollPos>=150){
            bio.forEach(function(part){
                part.style.transform = "translateX(0)";
            });}
    }
}
window.addEventListener("scroll", translateBio);



// Click carousel
// function for scroll to  declear differece of scroll client legnth divided by four

// var carouselBox = document.querySelector(".inside-car");
// var nextBtn = document.querySelector(".btn-nxt");
// var prevBtn = document.querySelector(".btn-prv");
// function carouselScrollP(){ return( carouselBox.scrollLeft);}
// var caroPos = carouselScrollP();


// nextBtn.addEventListener("click", function(){
//     carouselBox.scrollTo({
//         top: 0,
//         left: carouselBox.scrollLeft + 150,
//         behavior: "smooth"
//     });
// })
// prevBtn.addEventListener("click", function(){
//     carouselBox.scrollTo({
//         top: 0,
//         left: carouselBox.scrollLeft - 150,
//         behavior: "smooth"
//     });
// })


// slider mechanics


var PicSlider = docElement.querySelector(".slider-pics>.sliding");
var textSlider = docElement.querySelector(".slider-text>.sliding-text");
var counter=1;
var picSize = PicSlider.clientWidth;
var textSize = textSlider.clientHeight;


setInterval(function(){

        PicSlider.style.transition = "transform 1s";
        textSlider.style.transition = "transform 1s";
        PicSlider.style.transform = "translateX(" + (-picSize*counter) + "px)";
        textSlider.style.transform = "translateY(" + (-textSize*counter) + "px)";
        counter++;




      

        textSlider.addEventListener("transitionend", function(){
                    if(counter==4){
                        textSlider.style.transition ="none";
                        textSlider.style.transform = "translateY(0)"
                    }
                })
        PicSlider.addEventListener("transitionend", function(){
                    if(counter==4){
                        PicSlider.style.transition ="none";
                        PicSlider.style.transform = "translateX(0)"
                        counter = 1;                    }
                })

}  ,10000)


scrollPos= body.scrollTop||docElement.scrollTop;
window.addEventListener("scroll", function(){
    if(scrollPos>=2582){
        var videoSide = docElement.querySelector(".course-section>.course-info>video");
        var buttonSide = docElement.querySelector(".course-info>a>button");
        var HeadingSide = docElement.querySelector(".course-section>.course-info>h2");
        var courseCover = docElement.querySelector(".course-cover")
        var eachOne = [videoSide, buttonSide, HeadingSide, courseCover];

        eachOne.forEach(function(item){
            item.style.transition = "2s";
            item.style.transform = "translateX(0)"
        })
    }
})







//Navlinks to sections of the page 
 var navLinks = docElement.querySelectorAll(".navbar>nav>.nav-links>li>span");
 
 function scrollToPos(scrollPosition){
    window.scrollTo({
            top: scrollPosition,
            left: 0,
            behavior: "smooth",
        })
 }
// nav 1 (BIO)
navLinks[0].addEventListener("click", function(){
    if(docElement.clientWidth>=1024){
        scrollToPos(700);  
    }
    if(docElement.clientWidth<=1023&&docElement.clientWidth>=768){
        scrollToPos(720);  
    }
    if(docElement.clientWidth<=768){
        scrollToPos(740);  
    }
})
// nav 2 (Skill)
navLinks[1].addEventListener("click", function(){
    if(docElement.clientWidth>=1024){
        scrollToPos(1400);  
    }
    if(docElement.clientWidth<=1023&&docElement.clientWidth>=768){
        scrollToPos(1720);  
    }
    if(docElement.clientWidth<=768){
        scrollToPos(1940);  
    }
})
// Nav 3 (Project)
navLinks[2].addEventListener("click", function(){
    if(docElement.clientWidth>=1024){
        scrollToPos(1700);  
    }
    else if(docElement.clientWidth<=1023&&docElement.clientWidth>=768){
        scrollToPos(2420);  
    }
    else if(docElement.clientWidth<=767&&docElement.clientWidth>=604){
        scrollToPos(2770);  
    }
    else if(docElement.clientWidth<=768){
        scrollToPos(3519);  
    }
})
// Nav 4 (Testimonial)
navLinks[3].addEventListener("click", function(){
    if(docElement.clientWidth>=1024){
        scrollToPos(2240);  
    }
    else if(docElement.clientWidth<=1023 && docElement.clientWidth>=768){
        scrollToPos(2920);  
    }
    else if(docElement.clientWidth<=767 && docElement.clientWidth>=604){
        scrollToPos(3240);  
    }
    else if(docElement.clientWidth<=768){
        scrollToPos(4619);  
    }
})






// Night/Day mode switch
var olaoluwa = docElement.querySelector(".navbar>nav>.site-identity"),
    checker = docElement.querySelector(".navbar>nav>.site-identity>input"),
    checkState = checker.checked;


  
function dayMode(){
        console.log("day mode active");
        body.style.background = "linear-gradient(to right bottom, rgb(234, 214, 215), rgb(193, 138, 142), rgb(234, 205, 207))"
        docElement.querySelector(".navbar>nav>.site-identity>#aolu").style.color = "rgb(255, 51, 107)"
        docElement.querySelectorAll(".landing>.my-name>h3").forEach(function(h3){
            h3.style.color = "rgb(232, 47, 90)"})
        docElement.querySelector(".navbar").style.background ="rgba(249, 28, 150, 0.514)"
        docElement.querySelector(".navbar>nav>.nav-links>#contact>a").addEventListener("mouseenter", function(){
            this.style.background = "rgb(247, 45, 101)"
        })
        docElement.querySelector(".navbar>nav>.nav-links>#contact>a").addEventListener("mouseleave", function(){
            this.style.background = "none"
        })
        docElement.querySelector(".bio>.big-bio").style.backgroundColor = "rgba(216, 80, 136, 0.856)"
        docElement.querySelector(".small-bio").style.backgroundColor = "rgba(230, 79, 128, 0.856)"
        docElement.querySelector(".slider-text").style.background = "linear-gradient(to bottom right, rgb(236, 216, 216),rgb(210, 40, 95))"
        docElement.querySelectorAll(".navbar>nav>.nav-links>li>span").forEach(function(listed){
            listed.addEventListener("mouseenter", function(){
                this.style.color ="rgb(165, 5, 30)"
            })
            listed.addEventListener("mouseleave", function(){
                this.style.color ="white"
            })
        })
        
    };


    
//   Nights Mode
function nightMode(){
        console.log("night mode active")
        body.style.background = "linear-gradient(to bottom right, rgb(6, 2, 17), rgb(4, 25, 87), rgb(0, 5, 20))"
        docElement.querySelector(".navbar>nav>.site-identity>#aolu").style.color = "rgb(0, 3, 156)"
        docElement.querySelectorAll(".landing>.my-name>h3").forEach(function(h3){
            h3.style.color = "rgb(107, 148, 184)"})
        docElement.querySelector(".navbar").style.background ="rgba(31, 0, 143, 0.514)"
        docElement.querySelector(".navbar>nav>.nav-links>#contact>a").addEventListener("mouseenter", function(){
            this.style.background = "rgb(37, 0, 170)"
        })
        docElement.querySelector(".navbar>nav>.nav-links>#contact>a").addEventListener("mouseleave", function(){
            this.style.background = "none"
        })
        docElement.querySelector(".bio>.big-bio").style.backgroundColor = "rgba(13, 0, 85, 0.856)"
        docElement.querySelector(".small-bio").style.backgroundColor = "rgba(13, 0, 85, 0.856)"
        docElement.querySelector(".slider-text").style.background = "linear-gradient(to bottom right, rgb(31, 31, 31),rgb(30, 13, 78))"
        docElement.querySelectorAll(".navbar>nav>.nav-links>li>span").forEach(function(listed){
            listed.addEventListener("mouseenter", function(){
                this.style.color ="rgb(47, 0, 255)"
            })
            listed.addEventListener("mouseleave", function(){
                this.style.color ="white"
            })
        })
        
    };
   

    
    // olaoluwa.addEventListener("click", changeMode);
    olaoluwa.addEventListener("click", function(){
        checker.toggleAttribute('checked');
        checkState = checker.checked;

        switch(checkState){
            case true: dayMode()
            break;
            case false: nightMode()
            break;
        }
    });









// hover to play video
var projectVideo = docElement.querySelectorAll(".option>video");
projectVideo.forEach(function(video){
    video.addEventListener("mouseenter", function(){
        video.play();
    })
    video.addEventListener("mouseleave", function(){
        video.pause();
    })
})



// // pic animation
// var picFrame = docElement.querySelector(".landing>.pic-animation");
// var counter = 1;
// while(counter>13){
//     setInterval(function(){
//         picFrame.(,"imgs/img/img(" + counter + ").png")
//         counter++
//     },166)
// }



alert("CLICK ON THE NAME \"OLAOLUWA\" TO SWITCH BETWEEN DAY AND NIGHT MODE")