    function locToProfile() {
        window.location.assign("profile.html")
    }
    let slideIndex = 0;
    let slideInterval;

    function showDivs(n) {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots[i].classList.remove("active");
        }

        slides[slideIndex].style.display = "block";
        dots[slideIndex].classList.add("active");
    }

    function plusDivs(n) {
        slideIndex += n;
        showDivs(slideIndex);
        resetAutoSlide();
    }

    function currentSlide(n) {
        slideIndex = n;
        showDivs(slideIndex);
        resetAutoSlide();
    }

    function startSlideShow() {
        slideInterval = setInterval(() => {
            slideIndex++;
            showDivs(slideIndex);
        }, 2000);
    }

    function resetAutoSlide() {
        clearInterval(slideInterval);
        startSlideShow();
    }

    document.addEventListener("DOMContentLoaded", () => {
        let dots = document.getElementsByClassName("dot");
        for (let i = 0; i < dots.length; i++) {
            dots[i].addEventListener("click", () => currentSlide(i));
        }
        showDivs(slideIndex);
        startSlideShow();
    });

    function openForm() {
        document.getElementById("myForm").style.display = "block";
        document.getElementById("container").classList.add("blurred");

    }

    function closeForm() {
        document.getElementById("myForm").style.display = "none";
        document.getElementById("container").classList.remove("blurred");

    }

    let lastScrollTop = 0;
    const header = document.getElementById("cat-box");

    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // uz leju
            header.style.top = "-100px"; // paslēpj galveni
        } else {
            // uz augšu
            header.style.top = "70px";
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    function toggleMenu() {
        const menu = document.querySelector(".category .list");
        menu.classList.toggle("actives");
    }
