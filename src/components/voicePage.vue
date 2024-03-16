<template>
    <div id="voicePage">
        <button id="startRecording">Start Recording</button>
        <button id="stopRecording">Stop Recording</button>
        <button id="playAudio">Play Audio</button>
        <div id="audioContainer"></div>
     </div>
  </template>
  
  <script>
    import RecordRTC from 'recordrtc';
    let audioBuffer = [];
    let audioSource;
    let audioContext;

    export default {
        name: 'VoicePage',
        data() {
        return {
            socket: None,
        }
        },
        components: {
        },
        computed: {
        },
        methods: {
            startRecording() {
                navigator.mediaDevices.getUserMedia({ audio: true })
                    .then(function(stream) {
                        // Create a WebSocket connection
                        this.socket = new WebSocket('ws://your-websocket-server-url');

                        // Handle WebSocket opening
                        this.socket.onopen = function(event) {
                            // Start recording
                            recorder = RecordRTC(stream, {
                                type: 'audio',
                                mimeType: 'audio/webm',
                            });
                            recorder.startRecording();

                            // Stream audio data to the WebSocket
                            stream.getAudioTracks()[0].addEventListener('ended', function() {
                                this.socket.close(); // Close the WebSocket connection when the audio stream ends
                            });
                            stream.getAudioTracks()[0].addEventListener('ended', function() {
                                this.socket.close(); // Close the WebSocket connection when the audio stream ends
                            });
                            let mediaRecorder = new MediaRecorder(stream);
                            mediaRecorder.ondataavailable = function(event) {
                                if (event.data.size > 0) {
                                    this.socket.send(event.data);
                                }
                            };
                            mediaRecorder.start();
                        };

                        // Handle WebSocket errors
                        this.socket.onerror = function(error) {
                            console.error('WebSocket error: ', error);
                        };

                        // Handle WebSocket closing
                        this.socket.onclose = function(event) {
                            console.log('WebSocket closed');
                        };
                    })
                    .catch(function(err) {
                        console.error('Error recording audio: ', err);
                    });
            },
            stopRecording() {
                recorder.stopRecording(function() {
                    let blob = recorder.getBlob();

                    // Send the final chunk of audio data
                    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
                        this.socket.send(blob);
                        this.socket.close(); // Close the WebSocket connection after sending the final chunk
                    }
                });
            },
            decodeAudioData(audioBlob) {
                let fileReader = new FileReader();
                fileReader.onload = function() {
                    let arrayBuffer = this.result;
                    audioContext.decodeAudioData(arrayBuffer, function(buffer) {
                        audioBuffer.push(buffer);
                        if (!audioSource && audioBuffer.length > 0) {
                            audioSource = audioContext.createBufferSource();
                            audioSource.buffer = audioBuffer.shift();
                            audioSource.connect(audioContext.destination);
                            audioSource.start();
                            audioSource.onended = function() {
                                audioSource = null;
                                playAudio(); 
                            };
                        }
                    });
                };
                fileReader.readAsArrayBuffer(audioBlob);
            }

        },
        mounted() {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

            // Event listener for WebSocket messages
            this.socket.addEventListener('message', function(event) {
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
  