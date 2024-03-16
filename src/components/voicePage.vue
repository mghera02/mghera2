<template>
    <div id="voicePage">
      <button @click="startRecording">Start Recording</button>
      <button @click="stopRecording">Stop Recording</button>
      <button @click="playAudio">Play Audio</button>
      <div id="audioContainer"></div>
    </div>
  </template>
  
  <script>
  import RecordRTC from 'recordrtc';
  
  export default {
    name: 'VoicePage',
    data() {
      return {
        socket: null,
        recorder: null,
        audioBuffer: [],
        audioSource: null,
        audioContext: null
      }
    },
    methods: {
      startRecording() {
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then(stream => {
            // Create a WebSocket connection
            this.socket = new WebSocket('ws://your-websocket-server-url');
  
            // Handle WebSocket opening
            this.socket.onopen = () => {
              // Start recording
              this.recorder = RecordRTC(stream, {
                type: 'audio',
                mimeType: 'audio/webm'
              });
              this.recorder.startRecording();
  
              // Stream audio data to the WebSocket
              let mediaRecorder = new MediaRecorder(stream);
              mediaRecorder.ondataavailable = event => {
                if (event.data.size > 0) {
                  this.socket.send(event.data);
                }
              };
              mediaRecorder.start();
            };
  
            // Handle WebSocket errors
            this.socket.onerror = error => {
              console.error('WebSocket error: ', error);
            };
  
            // Handle WebSocket closing
            this.socket.onclose = () => {
              console.log('WebSocket closed');
            };
          })
          .catch(err => {
            console.error('Error recording audio: ', err);
          });
      },
      stopRecording() {
        this.recorder.stopRecording(() => {
          let blob = this.recorder.getBlob();
  
          // Send the final chunk of audio data
          if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(blob);
            this.socket.close(); // Close the WebSocket connection after sending the final chunk
          }
        });
      },
      decodeAudioData(audioBlob) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
          let arrayBuffer = fileReader.result;
          this.audioContext.decodeAudioData(arrayBuffer, buffer => {
            this.audioBuffer.push(buffer);
            if (!this.audioSource && this.audioBuffer.length > 0) {
              this.audioSource = this.audioContext.createBufferSource();
              this.audioSource.buffer = this.audioBuffer.shift();
              this.audioSource.connect(this.audioContext.destination);
              this.audioSource.start();
              this.audioSource.onended = () => {
                this.audioSource = null;
                this.playAudio(); // Play the next audio buffer if available
              };
            }
          });
        };
        fileReader.readAsArrayBuffer(audioBlob);
      },
      playAudio() {
        // Your audio playback logic
      }
    },
    mounted() {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
      // Event listener for WebSocket messages
      this.socket.addEventListener('message', event => {
        // Check if the message is audio data
        if (event.data instanceof Blob) {
          // Decode the audio data and play it
          this.decodeAudioData(event.data);
        }
      });
    }
  }
  </script>
  
  <style>
  </style>
  