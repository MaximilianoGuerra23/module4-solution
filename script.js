(function(window){
  var names = ["Lucas", "Valentin", "Maxi", "Juan", "Paulo", "Franco", "Tomas", "Pablo", "Fernando", "Jose"];
  for(var i=0;i<names.length;i++){
  if(names[i].substring(0,1).toLowerCase()=="j"){
    byeSpeaker.speak(names[i]);
  }else{
    helloSpeaker.speak(names[i]);
  }
  }
  window.names=names;
})(window);