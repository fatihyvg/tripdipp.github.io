function onloadmainbody(){
    onloadheader('hero-head');
    onloaddestview('destination-lists');
    onloadsloganview('slogan-hero');
    onloadsloganview('blog-beet-hero');
    onloadplaceview('place-hero');
    onloadfrontblogview('front-blog');
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
function onloadplaceview(classname){
      $('#'+classname+'').load('pages/home/places.html');
}
function onloadfrontblogview(classname){
      $('#'+classname+'').load('pages/home/front-blog.html');

}
function onloadfooter(classname){
      $('.'+classname+'').load('pages/home/footer.html');
}
