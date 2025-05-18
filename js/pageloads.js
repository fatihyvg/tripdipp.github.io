function onloadmainbody(){
    onloadheader('hero-head');
    onloaddestview('destination-lists');
    onloadsloganview('slogan-hero');
    onloadfooter('footer');
 
}
function onloadheader(classname){
     $('.'+classname+'').load('pages/home/header.html');
}
function onloaddestview(classname){
    $('#'+classname+'').load('pages/home/destination.html'); 

}
function onloadsloganview(classname){
      $('#'+classname+'').load('pages/home/slogan.html');

}
function onloadfooter(classname){
      $('.'+classname+'').load('pages/home/footer.html');
}