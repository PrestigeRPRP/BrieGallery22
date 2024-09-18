alert ('Use WASD to move and Drag mouse for direction')

AFRAME.registerComponent('music-1-handler', {
    init: function () {
      let audio = document.querySelector("#music1");
      audio.volume = 0.06; // Set the volume to 0.06
      this.el.addEventListener('click', () => {
        audio.play(); // Play the audio on click
      });
    }
  })

/*
  AFRAME.registerComponent('music-2-handler', {
    init: function () {
      let playing = false;
      let audio = document.querySelector("#music2");
      audio.volume = 0.06; // Set the volume to 0.06
      this.el.addEventListener('click', () => {
        if (!playing) {
          audio.play();
        } else {
          audio.pause();
          audio.currentTime = 0;
        }
        playing = !playing;
      });
    }
  })


  AFRAME.registerComponent('music-3-handler', {
    init: function () {
      let playing = false;
      let audio = document.querySelector("#music3");
      this.el.addEventListener('click', () => {
        if (!playing) {
          audio.play();
        } else {
          audio.pause();
          audio.currentTime = 0;
        }
        playing = !playing;
      });
    }
  })

  */
