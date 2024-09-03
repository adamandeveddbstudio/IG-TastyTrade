// Banner duration timer start time
var startTime;
// Timeline reference
var tl;
init();
// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = new TimelineMax({ onComplete: endTime });
  // tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

  animate();
}

function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, rotationZ: 0.1, force3D: true });
  tl.set(["#logo"], { autoAlpha: 0 });
  tl.set(["#faceR"], { x: '-100%', autoAlpha: 1 });
  tl.set(["#left_content"], { x: '50%' });
  tl.set(["#left_content", "#right_content"], { rotationX: 0.1, scale: 1.3, });
  tl.set(["#h1L"], { x: '100%', autoAlpha: 1 });
  tl.set(["#h1R"], { x: '-100%', autoAlpha: 1 });
  tl.set(["#legal"], { y: '100%', autoAlpha: 1 });

  tl.addLabel('frame_1', 0.5)
    .to('#right_content', 0.5, { width: '50%', ease: Power2.easeOut }, "frame_1")
    .to(['#faceR'], 0.45, { x: '-35%', ease: Power2.easeOut }, "frame_1")
    .to(['#faceR'], 0.7, { x: 0, ease: Power2.easeOut }, "frame_1+=0.3")
    .to(['#left_content'], 0.7, { x: 0, ease: Power2.easeOut }, "frame_1+=0.3")
    .to('#legal', 1, { autoAlpha: 1, y: 0, ease: Power2.easeOut }, "frame_1+=1")
    .to(['#left_content', '#right_content'], 1, { scale: 1, ease: Power2.easeOut }, "frame_1+=1.1")
    .to(['#h1L', '#h1R'], 0.5, { x: 0, ease: Power2.easeOut }, "frame_1+=1.5")


    .to('#right_content', 0.5, { width: '33.5%', ease: Power1.easeOut }, "frame_1+=3")
    .to(['#faceL', '#faceR'], 0.5, { x: '15%', ease: Power1.easeOut }, "frame_1+=3")
    .to('#right_content', 0.5, { width: '72%', ease: Power1.easeInOut }, "frame_1+=3.5")
    .to(['#faceL', '#faceR'], 0.5, { x: '-20%', ease: Power1.easeInOut }, "frame_1+=3.5")
    .to('#right_content', 0.5, { width: '44.5%', ease: Power1.easeOutIn }, "frame_1+=4")
    .to(['#faceL', '#faceR'], 0.5, { x: '5%', ease: Power1.easeOutIn }, "frame_1+=4")
    .to('#right_content', 1, { width: '160%', ease: Power1.easeIn }, "frame_1+=4.5")
    .to(['#faceL', '#faceR',], 1, { x: '-100%', ease: Power1.easeIn }, "frame_1+=4.5")
    .to(['#h1R',], 0.5, { autoAlpha: 0, ease: Power1.easeIn }, "frame_1+=4.75")
    .to(['#right_content'], 0, { width: '100%' }, "frame_1+=5.5")


  tl.addLabel('frame_2', 6.5)
    .to(['#h2', '#phn'], 0.5, { autoAlpha: 1, ease: Power2.easeOut }, "frame_2+=0")
  tl.addLabel('frame_3', 10.5)
    .to(['#h2', '#phn'], 0.5, { autoAlpha: 0, ease: Power2.easeOut }, "frame_3+=0")
    .to(['#h3', '#logo', '#cta'], 0.5, { autoAlpha: 1, ease: Power2.easeOut }, 'frame_3+=0.5')
  // tl.addLabel('frame_1', 0.5)
  //   .to('#right_content', 0.7, { width: '50%)', ease: Power2.easeOut }, "frame_1")
  //   .to(['#faceR'], 0.7, { x: 0, ease: Power2.easeOut }, "frame_1+=0.1")
  //   .to(['#left_content'], 0.7, { x: 0, ease: Power2.easeOut }, "frame_1+=0.3")
  //   .to('#legal', 1, { autoAlpha: 1, y: 0, ease: Power2.easeOut }, "frame_1+=1")
  //   .to(['#left_content', '#right_content'], 1, { scale: 1, ease: Power2.easeOut }, "frame_1+=1")
  //   .to(['#h1L', '#h1R'], 0.5, { x: 0, ease: Power2.easeOut }, "frame_1+=1.5")


  //   .to('#right_content', 0.5, { width: '35%', ease: Power1.easeOut }, "frame_1+=3")
  //   .to(['#faceL', '#faceR'], 0.5, { x: 51, ease: Power1.easeOut }, "frame_1+=3")
  //   .to('#right_content', 1, { width: '100%', ease: Power2.easeOut }, "frame_1+=3.5")
  //   .to(['#faceL', '#faceR'], 1, { x: '-44%', ease: Power2.easeOut }, "frame_1+=3.5")


  // tl.addLabel('frame_2', 6)
  //   .to(['#faceR', '#h1R'], 0.7, { x: '-100%', autoAlpha: 0, ease: Power2.easeOut }, "frame_2")
  //   .to(['#h2', '#phn'], 0.7, { x: 0, autoAlpha: 1, ease: Power2.easeOut }, "frame_2")

  // tl.addLabel('frame_3', 10)
  //   .staggerTo(['#h2', '#phn'], 0.5, { autoAlpha: 0, ease: Power2.easeOut }, 0.5, "frame_3")
  //   .staggerTo(['#h3', '#cta', '#logo'], 0.5, { autoAlpha: 1, ease: Power2.easeOut }, 0.5, 'frame_3+=1')

}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();
  setRollover();
  // console.log( "Animation duration: " + (endTime - startTime) / 1000 + " seconds");
}

// CTA grow on hover

function setRollover() {
  var clickArea = document.getElementById("default_exit");
  clickArea.onclick = function () {
    window.open(clickTag, "_blank");
  };
  // clickArea.addEventListener("mouseover", default_over, false);
  // clickArea.addEventListener("mouseout", default_out, false);
}

// function default_over(event) {
//   // TweenMax.to(["#cta span"], 0.3, { scale: 1.1, ease: Power1.easeOut, delay: 0, backgroundColor: "#014732", color: "#fff" });
//   // TweenMax.to(["#cta span svg"], 0.3, { fill: "#fff" }, "<");
// }

// function default_out(event) {
//   // TweenMax.to(["#cta span"], 0.3, { scale: 1, ease: Power1.easeOut, delay: 0, backgroundColor: "inherit", color: "#000" });
//   // TweenMax.to(["#cta span svg"], 0.3, { fill: "#000" }, "<");
// }


