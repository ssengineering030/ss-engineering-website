
document.addEventListener('DOMContentLoaded', function(){
  var back = document.getElementById('backToTop');
  if(back){
    window.addEventListener('scroll', function(){ if(window.scrollY>300) back.classList.add('show'); else back.classList.remove('show'); });
    back.addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}); });
  }
  var logo = document.querySelector('.logo-link');
  if(logo){
    logo.addEventListener('click', function(e){
      var home = document.getElementById('home');
      if(home){ e.preventDefault(); home.scrollIntoView({behavior:'smooth'}); }
    });
  }
  var animated = document.querySelectorAll('.fade-in-on-scroll');
  var obs = new IntersectionObserver(function(entries){ entries.forEach(function(entry){ if(entry.isIntersecting) entry.target.classList.add('visible'); }); }, {threshold:0.15});
  animated.forEach(function(el){ obs.observe(el); });
  var burger = document.getElementById('mobileBurger');
  var nav = document.getElementById('mobileNav');
  if(burger && nav){ burger.addEventListener('click', function(){ nav.classList.toggle('hidden'); }); }
});
