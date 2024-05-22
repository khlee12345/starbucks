const saerchEl = document.querySelector('.search');
const saerchInputEl = saerchEl.querySelector('input');

saerchEl.addEventListener('click', function () {
  saerchInputEl.focus();
});

saerchInputEl.addEventListener('focus', function () {
  saerchEl.classList.add('focused');
  saerchInputEl.setAttribute('placeholder','통합검색');
});

saerchInputEl.addEventListener('blur', function () {
    saerchEl.classList.remove('focused');
    saerchInputEl.setAttribute('placeholder','');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
    if (window.scrollY > 500) {
        // badgeEl.style.display = 'none';
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        gsap.to(toTopEl, .2, {
            x: 0
        });
    } else {
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}, 300));

toTopEl.addEventListener('click', function () {
    gsap.to(window , .7, {
        scrollTo: 0
    });
});


const fadeEl = document.querySelectorAll('.visual .fade-in');

fadeEl.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) *.7,
        opacity: 1
    })
})

new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl :'.promotion .swiper-prev',
        nextEl :'.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl :'.awards .swiper-prev',
        nextEl :'.awards .swiper-next'
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion

    if (isHidePromotion) {
        promotionEl.classList.add('hide');
    } else {
        promotionEl.classList.remove('hide');
    }
});

function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
    gsap.to(selector, 1, {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0,delay)
    });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach( function(spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .8,
            reverse: false
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();