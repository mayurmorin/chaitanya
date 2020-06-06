
function onLoad() {
    document.getElementById("certificate").style.display="none";
    document.getElementById("cv").style.display="none";
    document.getElementById("nlp").style.display="none";
    document.getElementById("ml").style.display="none";
    
}

function loadPages(pageid) {
    if(pageid===1){
        document.getElementById('blog').style.display="block";
        document.getElementById('certificate').style.display="none";
        document.getElementById("cv").style.display="none";
        document.getElementById("nlp").style.display="none";
        document.getElementById("ml").style.display="none";
        
    }
    if(pageid===2){
        document.getElementById('blog').style.display="none";
        document.getElementById('certificate').style.display="block";
        document.getElementById("cv").style.display="none";
        document.getElementById("nlp").style.display="none";
        document.getElementById("ml").style.display="none";
    }
    if(pageid===3){
        document.getElementById('blog').style.display="none";
        document.getElementById('certificate').style.display="none";
        document.getElementById("cv").style.display="block";
        document.getElementById("nlp").style.display="none";
        document.getElementById("ml").style.display="none";
    }
    if(pageid===4){
        document.getElementById('blog').style.display="none";
        document.getElementById('certificate').style.display="none";
        document.getElementById("cv").style.display="none";
        document.getElementById("nlp").style.display="block";
        document.getElementById("ml").style.display="none";
    }
    if(pageid===5){
        document.getElementById('blog').style.display="none";
        document.getElementById('certificate').style.display="none";
        document.getElementById("cv").style.display="none";
        document.getElementById("nlp").style.display="none";
        document.getElementById("ml").style.display="block";
    }
    
    
  }

 