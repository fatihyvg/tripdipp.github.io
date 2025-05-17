$(document).ready(function(){
      
});
function onloadmainbody(){
    onloadheader('hero-head');
    $('#ba').load('pages/home/middle.html'); 
 
}
function onloadheader(classname){
     $('.'+classname+'').load('pages/home/header.html');
}