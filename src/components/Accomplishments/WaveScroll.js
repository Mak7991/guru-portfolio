class ScrollRightComponent extends React.Component {
  componentDidMount() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger-right",
        scrub: 0.5,
        pin: true,
        start: "top top",
        end: "+=150%" } });



    tl.from(".box-right", {
      force3D: true,
      duration: 1,
      xPercent: 100,
      ease: "power1.inOut",
      stagger: { amount: 1 } }).

    to(".box-right", { ease: "power1.out", duration: 1, rotation: "-45deg" }, 0).
    to(".box-right", { ease: "power1.in", duration: 1, rotation: "0deg" }, 1).
    to(".box-right", { backgroundColor: "#8A2BE2", ease: "power1.inOut" }, 0.5);

    // Animation for the text visibility
    gsap.fromTo(".trigger-right .down",
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: "none", scrollTrigger: {
        trigger: ".trigger-right",
        scrub: true,
        start: "top 80%",
        end: "top 20%" } });



    gsap.fromTo(".trigger-right .up",
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: "none", scrollTrigger: {
        trigger: ".trigger-right",
        scrub: true,
        start: "bottom 80%",
        end: "bottom 20%" } });


  }

  render() {
    return /*#__PURE__*/(
      React.createElement("section", { className: "trigger-right" }, /*#__PURE__*/
      React.createElement("span", { className: "down" }, "Scroll", /*#__PURE__*/React.createElement("br", null), "Down"), /*#__PURE__*/
      React.createElement("span", { className: "up" }, "Scroll", /*#__PURE__*/React.createElement("br", null), "Up"),
      Array(100).fill().map((_, index) => /*#__PURE__*/
      React.createElement("div", { key: index, className: "box box-right" }))));



  }}


class ScrollLeftComponent extends React.Component {
  componentDidMount() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger-left",
        scrub: 0.5,
        pin: true,
        start: "top top",
        end: "+=150%" } }).


    to(".box-left", {
      force3D: true,
      duration: 1,
      xPercent: 100,
      ease: "power1.inOut",
      stagger: { amount: 1 } }).

    to(".box-left", { ease: "power1.out", duration: 1, rotation: "45deg" }, 0).
    to(".box-left", { ease: "power1.in", duration: 1, rotation: "0deg" }, 1);

    // Animation for the text visibility
    gsap.fromTo(".trigger-left .down",
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: "none", scrollTrigger: {
        trigger: ".trigger-left",
        scrub: true,
        start: "top 80%",
        end: "top 20%" } });



    gsap.fromTo(".trigger-left .up",
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: "none", scrollTrigger: {
        trigger: ".trigger-left",
        scrub: true,
        start: "bottom 80%",
        end: "bottom 20%" } });


  }

  render() {
    return /*#__PURE__*/(
      React.createElement("section", { className: "trigger-left" }, /*#__PURE__*/
      React.createElement("span", { className: "down" }, "Scroll", /*#__PURE__*/React.createElement("br", null), "Down"), /*#__PURE__*/
      React.createElement("span", { className: "up" }, "Scroll", /*#__PURE__*/React.createElement("br", null), "Up"),
      Array(100).fill().map((_, index) => /*#__PURE__*/
      React.createElement("div", { key: index, className: "box box-left" }))));



  }}


function App() {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(ScrollLeftComponent, null), /*#__PURE__*/
    React.createElement("h1", null, "This is a scroll test"), /*#__PURE__*/
    React.createElement(ScrollRightComponent, null)));



}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));