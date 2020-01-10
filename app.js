window.onscroll=function(){
    myFunction();
}
var header=
document.getElementById("myNavbar");
var sticky=myNavbar.offsetTop;
function myFunction(){
    if(window.pageYOffset>sticky){
        myNavbar.classList.add("sticky");
    }
    else{
        myNavbar.classList.remove("sticky");
    }
}