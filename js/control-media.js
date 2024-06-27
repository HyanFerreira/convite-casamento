document.addEventListener('DOMContentLoaded', function() {
  let btnAudio = document.getElementById('btnAudio');
  let ionIcon = document.getElementById('ionIcon');
  let audio = document.getElementById('audio');

  btnAudio.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      ionIcon.setAttribute('name', 'pause');
    } else {
      audio.pause();
      ionIcon.setAttribute('name', 'play');
    }
  });
});
