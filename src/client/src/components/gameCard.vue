<template>
    <div class="flip-card" @click="flipCard">
        <div class="flip-card-inner" :class="isRevealed ? 'revealed' : ''">
            <div v-if="cardType === 'emperor'" class="flip-card-front">
                <img src="../assets/emperor.png" alt="Avatar" style="width:300px;height:400px;">
            </div>
            <div v-else-if="cardType === 'slave'" class="flip-card-front">
                <img src="../assets/slave.png" alt="Avatar" style="width:300px;height:400px;">
            </div>
            <div v-else class="flip-card-front">
                <img src="../assets/citizen.png" alt="Avatar" style="width:300px;height:400px;">
            </div>
            <div class="flip-card-back">
                <img src="../assets/citizen.png" alt="Avatar" style="width:300px;height:400px;">
            </div>
        </div>
    </div> 
</template>

<script>
    export default {
        name: 'game-card',
        props: {
            cardType: String
        },
        data() {
            return {
                isRevealed: false
            }
        },
        created() {
        },
        mounted() {
        },
        methods: { 
            flipCard() {
                this.isRevealed = !this.isRevealed;
            }
        }
    }
</script>

<style scoped>
 /* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
 .flip-card {
  background-color: transparent;
  width: 300px;
  height: 400px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card-inner.revealed {
  transform: rotateY(-180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
} 
</style>