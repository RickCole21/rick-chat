function audioAutoPlay(id) {
  var audio = document.getElementById(id);
  audio.play();
  document.addEventListener("WeixinJSBridgeReady", function () {
    audio.play();
  }, false);
  document.addEventListener('YixinJSBridgeReady', function () {
    audio.play();
  }, false);
}

audioAutoPlay('bgm');//xxx是你audio标签的id