const element = document.querySelector('.animation-element');

gsap.to(element, {
  duration: 2,
  x: 200,
  rotation: 360,
  ease: 'power2.out',
  repeat: -1,
  yoyo: true
});
