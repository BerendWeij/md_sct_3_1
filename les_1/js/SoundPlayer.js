// SoundPlayer.js
// eigen library die je wilt hergebruiken

// playSound

var soundPlayer = Object.create(eventDispatcher);

soundPlayer.playSound = function(url){
    // als deze functie wordt aangeroepen, dan laten we die zien in de console
    console.log(url);
    // daarna doen we net alsof het MP3tje al klaar is en 'roepen' we dat we complete zijn
    this.dispatch("SOUND_COMPLETED");
}