
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

// Enhanced form submit (AJAX) for better UX
function handleQuoteSubmit(e){
  e.preventDefault();
  var f = e.target;
  var data = new FormData(f);
  var endpoint = f.getAttribute('action');
  fetch(endpoint, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
    .then(function(response){
      if(response.ok){
        // show thank you overlay or alert
        var msg = document.createElement('div');
        msg.style.position='fixed'; msg.style.left='50%'; msg.style.top='20%'; msg.style.transform='translateX(-50%)'; msg.style.background='white'; msg.style.padding='18px'; msg.style.boxShadow='0 6px 18px rgba(0,0,0,0.12)'; msg.style.zIndex=9999;
        msg.innerHTML = '<strong>Thanks — your request was sent.</strong><div style="margin-top:8px;"><button id="closeMsg">Close</button></div>';
        document.body.appendChild(msg);
        document.getElementById('closeMsg').onclick = function(){ document.body.removeChild(msg); };
        f.reset();
      } else {
        alert('Submission failed. Please try again.');
      }
    }).catch(function(){ alert('Network error. Please try again later.'); });
}
document.addEventListener('DOMContentLoaded', function(){ var q = document.getElementById('quoteForm'); if(q) q.addEventListener('submit', handleQuoteSubmit); });
