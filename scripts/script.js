// JavaScript Document
/* same same */
var allfilter = document.querySelector("#filterall");
var journeyfilter = document.querySelector("#filterjourney");
var seriesfilter = document.querySelector("#filterseries");


/* same same */
if(allfilter){
allfilter.addEventListener("click", filterall);
}
if(journeyfilter){
journeyfilter.addEventListener("click", filterjourney);
}
if(seriesfilter){
  seriesfilter.addEventListener("click", filterseries);
}


/* same same */
function filterall() {
  var all = document.querySelectorAll("section");
  allfilter.classList.toggle('selected');
  for (var i = 0; i < all.length; ++i) {
   all[i].classList.toggle('show');
}

}



function filterjourney() {
  var journey = document.querySelectorAll(".journey");
    journeyfilter.classList.toggle('selected');
  for (var i = 0; i < journey.length; ++i) {
   journey[i].classList.toggle('show');
}

if(allfilter.classList.contains('selected')){
filterall();
}

}

function filterseries() {
  var series = document.querySelectorAll(".series");
    seriesfilter.classList.toggle('selected');
  for (var i = 0; i < series.length; ++i) {
   series[i].classList.toggle('show');
}

if(allfilter.classList.contains('selected')){
filterall();
}

}