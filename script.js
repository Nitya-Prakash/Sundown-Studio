function locomotiveanim() {
    gsap.registerPlugin(ScrollTrigger);

    // const locoScroll = new LocomotiveScroll({
    //     el: document.querySelector(".main"),
    //     smooth: true,
    // });

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
        smoothMobile: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

function loaderAnim() {
    let loader = document.querySelector(".loader");
    setTimeout(() => {
        loader.style.top = "-100%"
        loader.style.zIndex = 0
    }, 3260);
}

var fixedImg = document.querySelector(".fixed-image");
function divOnHover() {
    var elemC = document.querySelector(".elem-container");

    elemC.addEventListener("mouseenter", function () {
        fixedImg.style.display = "block";
    })

    elemC.addEventListener("mouseleave", function () {
        fixedImg.style.display = "none";
    })
}

function imgOnDiv() {
    let elem1 = document.querySelectorAll("#elem-1");
    elem1.forEach(function (data) {
        data.addEventListener("mouseenter", function () {
            let video = data.getAttribute("data-video")
            fixedImg.innerHTML = `<video width="100%" height="100%" autoplay muted loop><source src="${video}" type="video/mp4">Your browser does not support the video tag.</video>`
        })
        data.addEventListener("mouseleave", function () {
            fixedImg.innerHTML = ""
        })
    })

    let elem2 = document.querySelectorAll("#elem-2");
    elem2.forEach(function (data) {
        data.addEventListener("mouseenter", function () {
            let image = data.getAttribute("data-image")
            fixedImg.style.backgroundImage = `url(${image})`
        })
        data.addEventListener("mouseleave", function () {
            fixedImg.style.backgroundImage = "none"
        })
    })
}

function imgAndParaOnclick() {
    var firstLink = document.querySelector("#link1");
    var secLink = document.querySelector("#link2");
    var thirdLink = document.querySelector("#link3");

    document.getElementById('link1').addEventListener('click', function () {
        toggleParagraph('para1');
        toggleImage('img1');
        firstLink.style.opacity = 1
        secLink.style.opacity = .3
        thirdLink.style.opacity = .3
    });

    document.getElementById('link2').addEventListener('click', function () {
        toggleParagraph('para2');
        toggleImage('img2');
        secLink.style.opacity = 1
        firstLink.style.opacity = .3
        thirdLink.style.opacity = .3
    });

    document.getElementById('link3').addEventListener('click', function () {
        toggleParagraph('para3');
        toggleImage('img3');
        thirdLink.style.opacity = 1
        secLink.style.opacity = .3
        firstLink.style.opacity = .3
    });


    function toggleParagraph(paraId) {
        // Hide all paragraphs
        var paragraphs = document.querySelectorAll('.para');
        paragraphs.forEach(function (para) {
            para.classList.add('hidden');
        });

        // Show the selected paragraph
        var selectedPara = document.getElementById(paraId);
        selectedPara.classList.remove('hidden');
    }


    function toggleImage(imgId) {
        var images = document.querySelectorAll(".img");
        images.forEach(function (image) {
            image.classList.add('hidden');
        })

        var selectedImg = document.getElementById(imgId);
        selectedImg.classList.remove('hidden')
    }
}

function swiperanim() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
    });
}




locomotiveanim();
loaderAnim();
divOnHover();
imgOnDiv();
imgAndParaOnclick();
swiperanim();