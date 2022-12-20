function ScrollReveal() {
 
var slideUp = {
  distance: '150%',
  origin: 'bottom',
  opacity: null
};

  return (
    ScrollReveal.reveal('.myText', slideUp)
  );
}

export default ScrollReveal;