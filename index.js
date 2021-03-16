

//Slide Main Quote off the screen when youtube video is clicked







var isPlaying = document.getElementsByTagName("iframe"); /*, moveMainQuote());*/

if isPlaying.onStateChange(1) == "true" {
  console.log("is playing")
}

/*if isPlaying == true {
  mainQuote();
}

function moveMainQuote (){
  var mainQuote = document.getElementById("main-quote");
  mainQuote.style.right = '10000px';

}
*/
