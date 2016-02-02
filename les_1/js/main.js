var app = app || {};

window.addEventListener("load", function(){

    // we zijn geinteresseerd in het event 'SOUND_COMPLETED"
    soundPlayer.addListener("SOUND_COMPLETED", function(){
        console.log("ja, klaar met muziek spelen");
    });

    // we roepen playSound aan om muziek te laten spelen
    soundPlayer.playSound("http://www.youtube.com");



});