function textAppear() {
    console.log("Hello!");
    document.querySelector("#work-item").style.display = "block";
}

function textGone() {
    document.querySelector("#work-item").style.display = "none";
}

let downloadButton = document.querySelector('.button');
if(downloadButton) {    
  downloadButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    /* Start loading process. */
    downloadButton.classList.add('loading');
    
    /* Set delay before switching from loading to success. */
    window.setTimeout(function() {
      downloadButton.classList.remove('loading');
      downloadButton.classList.add('success');
    }, 3000);
    

function gitHub(){
  window.location='https://github.com/ConnorNally';
}