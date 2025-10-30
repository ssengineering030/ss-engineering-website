document.addEventListener('DOMContentLoaded', function(){
  var backToTop = document.getElementById('backToTop');
  if(backToTop){
    window.addEventListener('scroll', function(){
      if(window.scrollY > 300) backToTop.classList.add('show'); else backToTop.classList.remove('show');
    });
    backToTop.addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}); });
  }
});