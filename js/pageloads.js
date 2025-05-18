function onloadmainbody(){
    onloadheader('hero-head');
    onloaddestview('destination-lists')
    onloadfooter('footer')
 
}
function onloadheader(classname){
     $('.'+classname+'').load('pages/home/header.html');
}
function onloaddestview(classname){
    $('#'+classname+'').load('pages/home/destination.html'); 

}
function onloadfooter(classname){
      $('.'+classname+'').load('pages/home/footer.html');
}