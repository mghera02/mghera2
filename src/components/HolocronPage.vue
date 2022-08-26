<template>
  <div id="holocronPage">
    <routeBtn :site="'Home'" id="routeBtn"/>
    <div id="starCollection">
      <div v-for="(pos,posInd) in starPos" :key="posInd">
        <star :style="getPos(pos)"/>
      </div>
    </div>
    <webcam id="webcamBox"/>
    <div id="kyberCollection">
      <div v-for="(color, colorInd) in kyberColors" :key="colorInd">
        <kyberBtn :color="color"/>
      </div>
    </div>
  </div>
</template>

<script>
import star from './star.vue'
import webcam from './webCam.vue'
import kyberBtn from './kyberBtn.vue'
import routeBtn from './routeBtn.vue'

export default {
  name: 'HolocronPage',
  data() {
    return {
      starPos: [],
      kyberColors: ['red', 'green', 'blue', 'cyan', 'magenta', 'lime', 'white']
    }
  },
  components: {
    star,
    webcam,
    kyberBtn,
    routeBtn
},
  computed: {
  },
  methods: {
    getPos(pos) {
      return {
        position: 'absolute',
        top: pos[0] + '%',
        left: pos[1] + '%'
      }
    }
  },
  mounted() {
    for(let i = 0; i < 2500; i++) {
      const randX = Math.floor(Math.random() * 10000)/100;
      const randY = Math.floor(Math.random() * 10000)/100;
      this.starPos.push([randX, randY])
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  border: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-image: linear-gradient(45deg, black, rgb(7,0,17) 10%, rgb(15,0,35) 85%, rgb(50,50,50) 100%);
}
#app, #holocronPage {
  height: 100%;
  width: 100%;
  border: none;
  margin: 0;
  padding: 0;
}

#kyberCollection {
  position:absolute;
  top:5rem;
  left:25rem;
  width:90rem;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#webcamBox {
  position:absolute;
  top:0;
  left:0;
}

#routeBtn {
  position: absolute;
  left:30rem;
  cursor:pointer;
}

#starCollection {
  position:relative;
  background: rgba(0,0,0,0);
  height: 275%;
  width: 150%;
  top:-75%;
  left: -20%;
  border-radius: 100%;
  -webkit-animation:spin 400s linear infinite;
  -moz-animation:spin 400s linear infinite;
  animation:spin 400s linear infinite;
}

@-moz-keyframes spin { 
    100% { -moz-transform: rotate(360deg); } 
}
@-webkit-keyframes spin { 
    100% { -webkit-transform: rotate(360deg); } 
}
@keyframes spin { 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
    } 
}
</style>
