alert ('Use WASD to move and Drag mouse for direction')

// Create a new AudioContext
const audioContext = new AudioContext();

// Define the audio file URL
const audioUrl = '/pasilyo2.mp3?nocache=1234567890';

// Define the volume (range: 0.0 to 1.0)
const volume = 0.06;

// Create a new AudioBufferSourceNode
fetch(audioUrl)
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    const source = audioContext.createBufferSource();
    const gainNode = audioContext.createGain();

    // Set the volume
    gainNode.gain.value = volume;

    // Connect the source to the gain node, and the gain node to the destination
    source.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Start playing the audio
    source.buffer = audioBuffer;
    source.start();
  })
  .catch(error => console.error('Error playing audio:', error));
