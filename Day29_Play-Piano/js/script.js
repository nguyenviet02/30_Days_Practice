const audios = document.querySelectorAll('audio');


document.addEventListener('keydown', function (e) {
  audios.forEach(function (audio) {
    if (e.key == audio.getAttribute('piano_key')) {
      audio.currentTime = 0;
      audio.play();
      console.log(audio.getAttribute('piano_key'));
    }
    else {
      audio.currentTime = 0;
    }
  })
});