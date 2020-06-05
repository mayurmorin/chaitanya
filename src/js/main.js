function onLoad(){
    alert(1);
    alert(console.log(document.getElementById("iframe2").style.display));
    document.getElementById("iframe2").style.display="none";
    document.getElementById("certificate").style.display="none";
    alert(console.log(document.getElementById("iframe2").style.display))

}

function loadPages() {
    var x = document.getElementById("certificates");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }