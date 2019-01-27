var wh = window.innerHeight;
//Animation page 1
$uiLinerOne = $('.page1__line--1'),
$uiLinerTwo = $('.page1__line--2'),
$uiLinerThree = $('.page1__line--3'),
$uiLinerFour = $('.page1__line--4');
$descirptionPageOne = $('.descirption__pageone')
$helloWorld = $('.hello') 
$page01 = $('.number__page--1')
$page02 = $('.number__page--2')
$page03 = $('.number__page--3')
$listCompetence = $('li')

// init
var ctrl = new ScrollMagic.Controller({
  globalSceneOptions: {
      triggerHook: 'onLeave',
  }
});

$(".first__section").each(function() {
  new ScrollMagic.Scene({
      triggerElement: this,
      duration: '300%'
  })
  .setPin(this)
  .addTo(ctrl);
});


var uiLinerOne = TweenMax.from($uiLinerOne, 1, {
  xPercent: -620,
  width: '16.1%',
  ease: Cubic.easeOut
});

var uiLinerTwo = TweenMax.from($uiLinerTwo, 1, {
  xPercent: 420,
  width: '20%',
  ease: Cubic.easeOut
});

var uiLinerThree = TweenMax.from($uiLinerThree, 1, {
  yPercent: -400,
  height: '25%',
  ease: Cubic.easeOut
});

var uiLinerFour = TweenMax.from($uiLinerFour, 1, {
  yPercent: 250,
  height: '27.9%',
  ease: Cubic.easeOut
});

new ScrollMagic.Scene({
  duration: '100%'
})
.setTween(uiLinerOne)
.triggerElement($('body')[0])
.addTo(ctrl);

new ScrollMagic.Scene({
  duration: '100%'
})
.setTween(uiLinerTwo)
.triggerElement($('body')[0])
.addTo(ctrl);

new ScrollMagic.Scene({
  duration: '100%'
})
.setTween(uiLinerThree)
.triggerElement($('body')[0])
.addTo(ctrl);

new ScrollMagic.Scene({
  duration: '100%'
})
.setTween(uiLinerFour)
.triggerElement($('body')[0])
.addTo(ctrl);


var opacityScaleDescription = new TimelineMax();
opacityScaleDescription
    .to($descirptionPageOne, 0.5, {opacity: 0, yPercent: -5, scale: 0.98}, '0');


new ScrollMagic.Scene({
  duration: '70%'
})
.setTween(opacityScaleDescription)
.triggerElement($('body')[0])
.addTo(ctrl);

var opacityScaleHelloWorld = new TimelineMax();
opacityScaleHelloWorld
    .to($helloWorld, 0.5, {opacity: 0, yPercent: -50, scale: 0.98}, '0.8');

    new ScrollMagic.Scene({
      offset: wh*0.2,
      duration: '70%'
    })
    .setTween(opacityScaleHelloWorld)
   
    .addTo(ctrl);


var opacityScaleCompetence = new TimelineMax();
opacityScaleCompetence
    .to($listCompetence, 0.5, {opacity: 0, yPercent: -50, scale: 0.98}, '0');

    new ScrollMagic.Scene({
      offset: wh*0.4,
      duration: '70%'
    })
    .setTween(opacityScaleCompetence)
    .triggerElement($('body')[0])
    .addTo(ctrl);

    var number__page = new TimelineMax();
number__page       
    .to($page01, 1, {yPercent: -30, autoAlpha: 0, ease: Power4.easeInOut})
    .fromTo($page02, 1, {yPercent: 30, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut})
    .fromTo($page03, 1, {yPercent: 30, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut}),

    new ScrollMagic.Scene({
      offset: wh*1.1,
      duration: '60%'
  })
  .setTween(number__page)
  .addTo(ctrl);


// Animation Page 2 
$uiLinerOnePage2 = $('.page2__line--1'),
$uiLinerTwoPage2 = $('.page2__line--2'),
$uiLinerThreePage2 = $('.page2__line--3'),
$uiLinerFourPage2 = $('.page2__line--4'); 
$profil_pic = $('.profil_pic')
$aboutMe = $('.aboutme')
$aboutMeDescription = $('.aboutme__description')

var uiLinerOnePage2 = TweenMax.from($uiLinerOnePage2, 1, {
  yPercent: -80,
  xPercent: 0,
  ease: Cubic.easeOut
});

var uiLinerTwoPage2 = TweenMax.from($uiLinerTwoPage2, 1, {
  yPercent: -100,
  xPercent: -100,
  width: 0,
  ease: Cubic.easeOut
});

var uiLinerThreePage2 = TweenMax.from($uiLinerThreePage2, 1, {
  yPercent: 100,
  ease: Cubic.easeOut
});

var uiLinerFourPage2 = TweenMax.from($uiLinerFourPage2 , 1, {
  yPercent: 0,
  xPercent: -110,
  ease: Cubic.easeOut
});

new ScrollMagic.Scene({
  duration: '100%',
  offset: wh*1.9,
})
.setTween(uiLinerOnePage2)
.triggerElement($('body')[0])
.addTo(ctrl);

new ScrollMagic.Scene({
  duration: '100%',
  offset: wh*1.9,
})
.setTween(uiLinerTwoPage2)
.triggerElement($('body')[0])
.addTo(ctrl);

new ScrollMagic.Scene({
  duration: '100%',
  offset: wh*1.9,
})
.setTween(uiLinerThreePage2)
.triggerElement($('body')[0])
.addTo(ctrl);

new ScrollMagic.Scene({
  duration: '100%',
  offset: wh*1.9,
})
.setTween(uiLinerFourPage2)
.triggerElement($('body')[0])
.addTo(ctrl);

var opacityScaleProfilPic = new TimelineMax();
opacityScaleProfilPic
    .to($profil_pic, 0.5, {opacity: 1, yPercent: -5, scale: 1}, '0');

    new ScrollMagic.Scene({
      offset: wh*1.7,
      duration: '20%'
  })
  .setTween(opacityScaleProfilPic)
  .addTo(ctrl);

  var opacityAboutMe = new TimelineMax(); 
  opacityAboutMe 
  .to($aboutMe, 0.5, {opacity: 1, yPercent: -5, scale: 1}, '0');

  new ScrollMagic.Scene({
    offset: wh*2,
    duration: '20%'
})
.setTween(opacityAboutMe)
.addTo(ctrl);


  var opacityScaleAboutMeDescription = new TimelineMax();
  opacityScaleAboutMeDescription
      .to($aboutMeDescription, 0.5, {opacity: 1, yPercent: -5, scale: 1}, '0');
  
      new ScrollMagic.Scene({
        offset: wh*2,
        duration: '20%'
    })
    .setTween(opacityScaleAboutMeDescription)
    .addTo(ctrl);

  

$(function () { 
  var controller = new ScrollMagic.Controller();
  var slides = new TimelineMax()
    
    .to("#slideContainer", 0.5, {z: -200, delay: 0})		
    .to("#slideContainer", 1,   {x: "-26%"})	
    .to("#slideContainer", 0.5, {z: 0})	
    
      var scene = new ScrollMagic.Scene({
          triggerElement: "#pinContainer",
          triggerHook: "onLeave",
          duration: "400%"
        })
        .setPin("#pinContainer")
        .setTween(slides)
        .addTo(controller);
});