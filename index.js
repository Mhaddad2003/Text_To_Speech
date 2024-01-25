function speak(){
    const TextToSpeak = document.getElementById('TextToSpeech').value;
    if('speechSynthesis' in window){
        const synthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(TextToSpeak);
        synthesis.speak(utterance);
    }
    else{
        alert('Sorry, Your browser does not support the web speech API.');
    }
}