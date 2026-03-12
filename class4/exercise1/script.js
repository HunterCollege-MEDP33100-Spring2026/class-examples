// use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
    // gsap code here!
    // This is a Tween
    gsap.to("#donut", { 
        // rotation: 360, 
        // x: 100, 
        // y: 100,
        scale: 1.5,
        duration: 1,
        repeat: -1,
        yoyo: true,
    });

    gsap.to("#frog", {
        rotation: 360,
        duration: 0.3,
        repeat: -1,
    })

    const taco = document.getElementById('taco');
    console.log(taco);
    taco.addEventListener('click', function() {
        gsap.to('#taco', {
            opacity: 0,
            duration: 1,
            // repeat: -1,
        })
    });

    gsap.to("#flower", {
        rotation: 360,
        duration: 0.3,
        repeat: -1,
    })

    gsap.to("#ball", {
        y: 50,
        repeat: -1,
        ease: "bounce.out",
        duration: 1,
    });



    // function licking() {
    //     gsap.to("#tongue", {
    //         scale: 1.5,
    //         duration: 1,
    //         onComplete: function() {
    //             console.log('finished scaling')
    //             gsap.to('#tongue', {
    //                 y: -20,
    //                 repeat: -1,
    //             })
    //         }
    //     })
    // }
    // licking();

    const timeline = gsap.timeline({
        repeat: -1,
    });
    timeline.to('#tongue', {
        scale: 1.5,
        duration: 1,
    });
    timeline.to('#tongue', {
        y: -20
    })

 });