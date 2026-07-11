/* =====================================================
   APP.JS
   RESTAURANT LANDING PAGE
===================================================== */


/* =====================================================
   DOM READY
===================================================== */

document.addEventListener("DOMContentLoaded", () => {


    initLoader();

    initHeroSlider();

    initMobileMenu();

    initHeaderScroll();

    initScrollReveal();

    initCounters();

    initBackTop();

    initScrollProgress();

    initSmoothScroll();


});





/* =====================================================
   LOADER
===================================================== */


function initLoader(){


    const loader = document.querySelector(".loader");


    if(!loader) return;



    window.addEventListener("load",()=>{


        setTimeout(()=>{


            loader.classList.add("hide");


        },500);



    });


}







/* =====================================================
   HERO SLIDER
===================================================== */


function initHeroSlider(){


    const slides = document.querySelectorAll(".slide");


    if(!slides.length) return;



    let current = 0;



    setInterval(()=>{


        slides[current].classList.remove("active");



        current++;



        if(current >= slides.length){

            current = 0;

        }



        slides[current].classList.add("active");



    },5000);



}







/* =====================================================
   MOBILE MENU
===================================================== */


function initMobileMenu(){



    const button = document.querySelector("#menu-mobile");

    const nav = document.querySelector("nav");


    if(!button || !nav) return;



    button.addEventListener("click",()=>{


        nav.classList.toggle("active");



        button.classList.toggle("open");



        if(nav.classList.contains("active")){


            document.body.style.overflow="hidden";


        }else{


            document.body.style.overflow="";


        }


    });





    document.querySelectorAll("nav a")

    .forEach(link=>{


        link.addEventListener("click",()=>{


            nav.classList.remove("active");


            document.body.style.overflow="";


        });



    });



}







/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */


function initHeaderScroll(){


    const header = document.querySelector("#header");


    if(!header) return;



    function checkScroll(){


        if(window.scrollY > 80){


            header.classList.add("scrolled");


        }else{


            header.classList.remove("scrolled");


        }


    }



    window.addEventListener(

        "scroll",

        checkScroll,

        {

            passive:true

        }

    );



    checkScroll();


}








/* =====================================================
   SCROLL REVEAL
===================================================== */


function initScrollReveal(){



    const elements = document.querySelectorAll(

        ".reveal, .reveal-left, .reveal-right"

    );



    if(!elements.length) return;





    const observer = new IntersectionObserver(

        entries=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){


                    entry.target.classList.add("active");


                    observer.unobserve(entry.target);


                }



            });



        },

        {

            threshold:.15

        }


    );





    elements.forEach(el=>{


        observer.observe(el);


    });



}








/* =====================================================
   COUNTER ANIMATION
===================================================== */


function initCounters(){


    const counters = document.querySelectorAll(

        "[data-number]"

    );



    if(!counters.length) return;



    const observer = new IntersectionObserver(

        entries=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){



                    animateCounter(

                        entry.target

                    );


                    observer.unobserve(entry.target);



                }



            });



        },

        {

            threshold:.5

        }



    );





    counters.forEach(counter=>{


        observer.observe(counter);



    });



}






function animateCounter(element){


    const target = Number(

        element.dataset.number

    );



    let current = 0;



    const increment = target / 80;



    const timer = setInterval(()=>{


        current += increment;



        if(current >= target){


            element.innerText = target;


            clearInterval(timer);



        }else{


            element.innerText = Math.floor(current);



        }



    },20);



}








/* =====================================================
   BACK TO TOP
===================================================== */


function initBackTop(){



    const button = document.querySelector("#backTop");



    if(!button) return;




    window.addEventListener(

        "scroll",

        ()=>{


            if(window.scrollY > 500){


                button.classList.add("active");


            }else{


                button.classList.remove("active");


            }



        }


    );





    button.addEventListener(

        "click",

        ()=>{


            window.scrollTo({

                top:0,

                behavior:"smooth"

            });


        }


    );



}







/* =====================================================
   SCROLL PROGRESS BAR
===================================================== */


function initScrollProgress(){



    const bar = document.querySelector(

        ".scroll-progress"

    );



    if(!bar) return;




    window.addEventListener(

        "scroll",

        ()=>{



            const scrollTop =

            document.documentElement.scrollTop;



            const height =

            document.documentElement.scrollHeight

            -

            document.documentElement.clientHeight;




            const progress =

            (

                scrollTop / height

            ) * 100;




            bar.style.width = progress + "%";




        },

        {

            passive:true

        }


    );



}







/* =====================================================
   SMOOTH SCROLL
===================================================== */


function initSmoothScroll(){



    document

    .querySelectorAll(

        'a[href^="#"]'

    )

    .forEach(anchor=>{


        anchor.addEventListener(

            "click",

            function(e){



                const target = document.querySelector(

                    this.getAttribute("href")

                );



                if(target){



                    e.preventDefault();



                    target.scrollIntoView({

                        behavior:"smooth",

                        block:"start"


                    });



                }



            }


        );



    });



}






/* =====================================================
   IMAGE LAZY FALLBACK
===================================================== */


function optimizeImages(){


    const images = document.querySelectorAll("img");


    images.forEach(img=>{


        if(!img.hasAttribute("loading")){


            img.setAttribute(

                "loading",

                "lazy"

            );


        }



    });


}



optimizeImages();
