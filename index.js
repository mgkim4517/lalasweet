// a 태그 성격 제거
$('a[href="#"]').on('click', e => e.preventDefault());

// ***** rotate .row-line-span *****
gsap.set('.row-line-box span', { xPercent: -50 });

var rotate = gsap.timeline({
  scrollTrigger: {
    trigger: ".row-line-box",
    scrub: true,
  }
}).to('.row-line-box span', {
  rotation: -30,
  x: '-10vw',
  duration: 1,
  ease: 'none',
});

// ***** translate .col-line-span *****
gsap.set('.col-line-box span', { yPercent: -50 });

var translate = gsap.timeline({
  scrollTrigger: {
    trigger: ".col-line-box",
    scrub: true,
  }
}).to('.col-line-box span', {
  y: '-5vw',
  duration: 1,
  ease: 'none',
});

// ***** point-img .point-color *****
gsap.set('.point-img .point-color', { yPercent: 20 });

var translate = gsap.timeline({
  scrollTrigger: {
    trigger: ".point-img",
    scrub: true,
  }
}).to('.point-img .point-color', {
  y: '-30%',
  duration: 0.5,
  ease: 'none',
});

// ***** gsap scroll-trigger parallax text *****
// *** .main-container .scroll-text ***
let sTviewHeight = window.innerHeight;
let sTviewWidth = window.innerWidth;

let scrollTextContainers = document.querySelectorAll('.main-container');

scrollTextContainers.forEach((element, index) => {
  let top = element.getBoundingClientRect().top;
  let start = sTviewHeight - top;

  let scrollText = element.querySelector('.scroll-text');

  gsap.to(scrollText, {
    scrollTrigger: {
      trigger: '.main-container', // 올바른 트리거를 사용하는지 확인
      scrub: true,
      start: "0px bottom", // 요소가 화면 아래에서 시작하도록 설정
      end: "bottom top"
    },
    x: '-80vw',
    transformOrigin: "left center", 
    ease: "none"
  });
});

// *** .main-container .moving-box .moving-text ***
let viewHeight = window.innerHeight;
let viewWidth = window.innerWidth;

let textContainers = document.querySelectorAll('.moving-text');

textContainers.forEach((element, index) => {
  let top = element.getBoundingClientRect().top;
  let start = viewHeight - top;

  let firstText = element.querySelector('.parallax-text-sub1');
  let secondText = element.querySelector('.parallax-text-main');
  let thirdText = element.querySelector('.parallax-text-sub2');

  gsap.to(firstText, {
    scrollTrigger: {
      trigger: '.moving-box', // 올바른 트리거를 사용하는지 확인
      scrub: true,
      start: "0px bottom", // 요소가 화면 아래에서 시작하도록 설정
      end: "bottom top"
    },
    x: '35vw',
    transformOrigin: "left center", 
    ease: "none"
  });
  gsap.to(thirdText, {
    scrollTrigger: {
      trigger: '.moving-box', // 올바른 트리거를 사용하는지 확인
      scrub: true,
      start: "0px bottom", // 요소가 화면 아래에서 시작하도록 설정
      end: "bottom top"
    },
    x: '35vw',
    transformOrigin: "left center", 
    ease: "none"
  });
  gsap.to(secondText, {
    scrollTrigger: {
      trigger: '.moving-box', // 올바른 트리거를 사용하는지 확인
      scrub: true,
      start: "0px bottom", // 요소가 화면 아래에서 시작하도록 설정
      end: "bottom top"
    },
    x: '-54vw',
    transformOrigin: "left center", 
    ease: "none"
  });
});