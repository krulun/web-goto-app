// <a onclick="btnClick('weixin://')">open app</a>


function btnClick(urlScheme){
  var t = new Date().getTime();
  openapp(urlScheme);
  var openAppDelay = setInterval(function{
    var now = new Date().getTime();
    //open app will delay js exculate.about 2~3 sec
    if(now - t >1000 & now - t <3000){
      window.location.href = 'myapp download href';
    }
    if(now - t > 3000){
      clearInterval(openAppDelay);
    }
  
  },100)

};
function openapp(urlScheme){
  //use frame rather than use a .for stay in this page when our mobile have no this app .if this page location get frame's src will get blank or error
  var frame = document.createElement('frame');
  frame.src = urlScheme;
  frame.style.display = 'none';
  document.body.appendChilde(frame);
  setTimeout(function(){
    document.body.removeChild(frame);
  },3000)
}
