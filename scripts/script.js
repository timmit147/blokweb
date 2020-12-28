// JavaScript Document
/* Buttons selecteren */
var allfilter = document.querySelector("#filterall");
var journeyfilter = document.querySelector("#filterjourney");
var seriesfilter = document.querySelector("#filterseries");
var loader = document.querySelector(".loader");


/* When clicking on a button start funtion */
if(allfilter){
allfilter.addEventListener("click", filterall);
}
if(journeyfilter){
journeyfilter.addEventListener("click", filterjourney);
}
if(seriesfilter){
  seriesfilter.addEventListener("click", filterseries);
}


/* Funtion show all items*/
function filterall() {
loader.classList.remove("hide");

setTimeout(function(){ 

  loader.classList.add("hide");
  var all = document.querySelectorAll("section");
  allfilter.classList.toggle('selected');
  for (var i = 0; i < all.length; ++i) {
      all[i].classList.toggle('show');
  }


}, 3000);
  
}


// Funtion only show journey
function filterjourney() {

  loader.classList.remove("hide");

setTimeout(function(){ 
  loader.classList.add("hide");
    var journey = document.querySelectorAll(".journey");
    journeyfilter.classList.toggle('selected');
  for (var i = 0; i < journey.length; ++i) {
   journey[i].classList.toggle('show');
}

if(allfilter.classList.contains('selected')){
filterall();
}

}, 3000);


}


// Funtion only show series
function filterseries() {
 loader.classList.remove("hide");

setTimeout(function(){ 
  loader.classList.add("hide");
    var series = document.querySelectorAll(".series");
    seriesfilter.classList.toggle('selected');
  for (var i = 0; i < series.length; ++i) {
   series[i].classList.toggle('show');
}

if(allfilter.classList.contains('selected')){
filterall();
}
}, 3000);




}