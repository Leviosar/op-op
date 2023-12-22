<template>
  <transition-group name="slide-fade">
    <v-col class="d-flex justify-center align-center hand-card" v-for="card in player.hand" :key="card.uuid">
      <game-card :card="card" :player="player"></game-card>
    </v-col>
  </transition-group>
</template>
  
<script lang="ts">
import { defineComponent, PropType } from 'vue'

import Player from '../../entities/Player';
import GameCard from '../core/GameCard.vue';
import CardFront from '../core/CardFront.vue';
import CardBack from '../core/CardBack.vue';

export default defineComponent({
  components: {
    GameCard,
    CardFront,
    CardBack,
  },
  data() {
    return {
      max: 5,
    }
  },
  props: {
    player: {
      required: true,
      type: Object as PropType<Player>,
    }
  },
})
</script>
  
<style scoped>
.hand-card {
  /* transition: scale 1s; */
  transition: all 0.3s;
  scale: 1.0;
}
.hand-card:hover {
  scale: 1.5;
  translate: 0px -40px;
}
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
</style>