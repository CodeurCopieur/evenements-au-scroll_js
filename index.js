const imgImprove = document.getElementById('img-improvise');
const imgOvercome = document.getElementById('img-overcome');
const close = document.getElementById('close');
const popup = document.getElementById('popup');
let playOnce = true;


window.addEventListener('scroll', function (e) {
  var innerHeight = window.innerHeight;
  //la taille du cadre qui affiche le contenu de la pag eweb (moi : 738)
  var scrollY = window.scrollY;
  //la valeur du scroll (moi: 1476)
  var offsetHeight = document.body.offsetHeight; 
  //la taille de ma page entère (moi : 2225)

  var scrollValue = (innerHeight + scrollY) / offsetHeight;

  if(scrollValue > .49) {
    imgImprove.style.opacity = "1";
    imgImprove.style.transform = "none";
  }

  if(scrollValue > .85) {
    imgOvercome.style.opacity = "1";
    imgOvercome.style.transform = "none";
  }


  function playFunctionOnce() {
    if(scrollValue > .85 && playOnce) {
      this.setTimeout(function () {
        popup.style.opacity = "1";
        popup.style.transform = "none";
       }, 1500)
       playOnce = false;
    }
  }

  playFunctionOnce();
});

close.addEventListener('click', function() {
  popup.style.opacity = "0";
  popup.style.transform = "translateX(400px)";
})