

$(document).ready(function(){
  $('#closeList').click(function(){
    gsap.to('.menulist li', {duration: 1, x:200, opacity:0})
    gsap.to("#menu" ,{ ease: "power1.out", duration:0.5, opacity: 0, xPercent:100,delay: 0.2});
  });
  $('.hamburguer').click(function(){
    gsap.to("#menu", {ease: "sine.in",duration: 0.5,opacity: 1, xPercent:-100})
    gsap.fromTo('.menulist li', {duration: 1, x:200, stagger:0.1}, {duration: 0.3, x:0, stagger: 0.1,delay: 0.3,opacity:1});    
  });
});

gsap.registerPlugin(MotionPathPlugin);
gsap.set(".cls-1", { drawSVG: 0});
gsap.set(".waveLine1", { drawSVG: 0});
gsap.set(".waveLine2", { drawSVG: 0});
gsap.set(".line1", { drawSVG: 0});

var tl = new TimelineMax({});
var blowUp = new TimelineMax({});
var closeAll = new TimelineMax({});

/*fullpage*/
$('#fullpage').fullpage({
  autoScrolling: true,
  scrollOverflow: true,
  scrollingSpeed: 1400,
  verticalCentered: true,
 
  afterLoad:(origin, destination, direction) => {
    console.log("afterLoad"+ " : " + destination.index)
    if(direction = "null"){
    
      tl.to(".startball",{ top:"calc( 50% - 20px - (153px/2))", left:"calc(50% - (30px/2))",ease:"expo.in",duration: 1})
        .to(".startball",{ top:"15%", left: "51%",ease:"power4.out" ,duration: 1})
        .to(".startball",{ left: "55%", opacity: 0.8 ,top: "39.5%" ,duration: 0.25,ease:"circ.in"})
        .to(".startball",{ transform:"scale(0.5)",top: "50%", left:"50%", transform:"translate(-50%, -50%)", opacity: 0,duration: 0.01})
        .to(".startball",{ transform:"scale(1)", top: "calc(50% - 150px)", transform:"translate(-50%, -50%)" ,zIndex: 1,opacity:1, duration: 0.3,ease:"circ.in", delay:1})
        .to(".startball",{ 
          duration:1, ease: "sine.in", opacity:0, scale:0.5, 
          motionPath:{
            path: "#circleLine",
            align: "#circleLine",
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
          }})
        ;

      blowUp.to(".blowUp",{delay:1,opacity:1, duration:0.05})
            .to(".blowUp",{y:-30,opacity:0,duration:0.05})
      
      gsap.to(".logoB1",{delay:1.15,top:1}) 
      gsap.to(".logoB2",{delay:2.3,opacity:1,top:1}) 

      // 把logo1隱藏,Hide調正回中間
      gsap.to(".logoB1",{delay:2.8,opacity:0}) 
      // 畫圓
      gsap.to(".cls-1",{delay:3.6, ease: "sine.in",drawSVG: true,duration: 1})
      //hide 重下面往上
      gsap.to(".logoHidden",{delay:3.8,top:-3 ,duration:0.3}) 
      // startlogo
      gsap.to(".startlogo",{delay:4,zIndex:"-2",opacity:0}) 
      // 圓形地圖出現
      gsap.to(".curcleBox img",{delay:3.8,opacity:1,left: "-20%" ,duration:3}) 
     
      
      // 第一階段 fitst moment第一次圓形球移動 //4.4
      gsap.to(".startAnimateBlock",{delay:3.8, xPercent:-30,duration:1.6}) 
      // 第一階段 second moment圓形球移動
      gsap.to(".startAnimateBlock",{delay:5.4,ease:"power2.in", xPercent:-100,duration:2})
      
      gsap.to(".waveLine1",{delay:6.35,drawSVG: "-90%",ease: "sine.in",opacity:0.8,duration: 1})
      gsap.to(".waveLine2",{delay:6.5,drawSVG: "-92%",ease: "sine.in",opacity:0.8,duration: 1})
      
      gsap.to(".sloganTitle li",{delay:6.3, opacity:1,ease: "sine.in",stagger:0.3 , duration:0.3})

      // 第二階段 startAnimateWrap 
      gsap.to(".startAnimateWrap",{delay:6.8, x:-1200,ease: "sine.in",duration:1.6})
      // 8.4
      gsap.to("#circlePath, .curcleBox, .startball",{delay:7.2,duration:0.01,display:"none"})

      gsap.to(".startAnimateBlock",{delay:7.5,duration:0.01, xPercent:0})
      // startlogo
      gsap.to(".startlogo",{delay:7.5,opacity:1})
      gsap.to(".logoHidden",{delay:7.6,top:"-120%",duration: 0.8})
      gsap.to(".sloganTitle2 li",{delay:7.6,top:"0",duration: 0.8})

      closeAll.to(".startAnimateClose",{delay:8.7,width:"100vw",duration: 0.8})
              
              .to(".startAnimateBg , .startAnimateWrap , .startAnimateBlock",{display:"none"})
              // 開門後
              .to(".startAnimateClose",{opacity:0,duration:0.5,ease: "sine.in"})
              .to(".startAnimateClose",{display:"none"})
              // 跑linebg
              .to(".line1",{drawSVG:"100%",duration: 2.5})
              .to(".homeTitle",{opacity:1,duration:0.5,ease: "sine.in"})
    }

    //nav
    if ( destination.index == 0 ) {
      gsap.to("#navMove", {opacity: 0,y: -200});
    }else{
      gsap.to("#navMove", { opacity: 1, y: 0});
    }

    if( destination.index == 1 ){
      gsap.to(".bgcOpacity",{ opacity:1, duration: 0.5})
      gsap.to(".mainBraText p",{ opacity:1, stagger:0.4, duration: 0.7,y:0,delay: 0.2})
      gsap.to(".mainBraCarousel",{ opacity:1, duration: 1, xPercent:-50,delay: 1});
    }else{
      gsap.to(".bgcOpacity",{ opacity:0, duration: 0.5})
      gsap.to(".mainBraText p",{y:60}); // 校正回歸
      gsap.to(".mainBraCarousel",{ xPercent:0,y:0});// 校正回歸
    }
    
    if( destination.index == 2){
      gsap.to(".aboUsText p",{ opacity:1,delay:0.2, duration: 0.5, stagger:0.3, yPercent:-60});
      
      gsap.to("#mySwiper2",{ yPercent:0, xPercent:200,opacity:0,});// 校正回歸
    }else{
      gsap.to(".aboUsText p",{ opacity:0, duration: 0.3, stagger:0.3, yPercent:60});
    }
  },
  onLeave: (origin, destination, direction) => {
    if( destination.index !== 1 ){
      gsap.to(".mainBraText p",{ opacity:0, stagger:0.3, duration: 0.5, y:-60});
      gsap.to(".mainBraCarousel",{ opacity:0, duration:0.8, y:-300,delay:0.3});
    }
    
    console.log(destination.index , direction)

    if(destination.index == 1 && direction === "up"){
      gsap.to(".aboUsText p",{ opacity:0, duration: 0.3, stagger:0.3, yPercent:60});

    }else if(destination.index == 2 && direction === "down"){
      gsap.to(".aboUsBg",{ yPercent:-50, duration: 0.5});
      // comLeftSide

    }else if(destination.index == 2 && direction === "up"){
      gsap.to(".aboUsBg",{ yPercent: -50, duration: 0.5});

      gsap.to("#comLeftSide",{ yPercent: -150, duration: 1.5, opacity:0,});
      gsap.to(".comRightSide",{ yPercent: -100, duration: 1.5, opacity:0, delay:0.3});
      gsap.to("#mySwiper2",{ yPercent: -100, duration: 0.3, opacity:0, delay:1});
      gsap.to(".comOpenTime li",{ yPercent: -400, opacity:0, stagger:0.1,duration: 0.3, delay:1});

      
    }else if(destination.index == 3 && direction === "down"){
      gsap.to(".aboUsBg",{ yPercent: -100, duration: 0.8});

      gsap.to("#comLeftSide",{ yPercent: -100, duration: 1.5, opacity:1, delay:0.3,});
      gsap.to(".comRightSide",{ yPercent: -50, duration: 1.5, opacity:1, delay:0.7});
      gsap.to("#mySwiper2",{ xPercent: -200, opacity:1, duration: 1.5, delay:1});
      gsap.to(".comOpenTime li",{ yPercent: -200, opacity:1, stagger:0.2,duration:0.3, ease: "power1.in", delay:2.3});

    }else if(destination.index == 3 && direction === "up"){
      gsap.to("#comLeftSide",{ yPercent: -100, duration: 1.5, opacity:1, delay:1,});
      gsap.to(".comRightSide",{ yPercent: -50, duration: 1.5, opacity:1, delay:1,});
      gsap.to("#mySwiper2",{ yPercent: 0, opacity:1, duration: 1.5,delay:1,});
      gsap.to(".comOpenTime li",{ yPercent: -200, opacity:1, stagger:0.1,duration: 0.3, delay:1.5});
 
      gsap.to("#iphont2",{ yPercent: 20, opacity:0 ,duration:1.3});
      gsap.to(".appBox p",{ yPercent: 50, opacity:0,stagger:0.1,duration:0.3});
      gsap.to(".wechatBox p",{ yPercent: 50, opacity:0,stagger:0.1,duration: 0.3});
      gsap.to("#goldballHook1",{ opacity:0,stagger:0.1,duration: 0.3});
      gsap.to("#goldballHook2",{ opacity:0,stagger:0.1,duration: 0.3});
      gsap.to(".goldline",{ opacity:0, scaleY:99 ,stagger:0.5,duration: 0.3});
 
    }else if(destination.index == 4 && direction === "down"){
      gsap.to("#comLeftSide",{ yPercent: -150, duration: 1.5, opacity:0,});
      gsap.to(".comRightSide",{ yPercent: -100, duration: 1.5, opacity:0,});
      gsap.to("#mySwiper2",{ yPercent: -100, opacity:0, duration: 1.5});
      gsap.to(".comOpenTime li",{ yPercent: -400, opacity:0, stagger:0.1,duration: 0.3, delay:1.5});


      gsap.to("#iphont2",{ yPercent: -20, opacity:1,duration: 0.8, delay:1.5});
      
      gsap.to(".appBox p",{ yPercent: -50, opacity:1,stagger:0.1,duration: 1.5, delay:2});
      gsap.to(".wechatBox p",{ yPercent: -50, opacity:1,stagger:0.1,duration: 1.5, delay:2.3});
      gsap.to("#goldballHook1",{ opacity:1,stagger:0.1,duration: 1.5, delay:2.7});
      gsap.to("#goldballHook2",{ opacity:1,stagger:0.1,duration: 1.5, delay:3});
      gsap.to(".goldline",{ opacity:1, scaleY:99 ,stagger:0.5,duration: 0.8, delay:3.3});
 
    }else if(destination.index == 4 && direction === "up"){
      gsap.to("#footerTitle",{ y: 50, opacity:0.3,duration: 0.3});
      gsap.to(".context",{ y: 50, opacity:0,duration: 0.5});

      
    }else if(destination.index == 5 && direction === "down"){
      gsap.to("#footerTitle",{ y: -50, opacity:1,duration: 0.5,delay:0.3});
      gsap.to(".context",{ y: -50, opacity:1,duration: 0.5,delay:0.3});

    }

    
  }
}); 
          