<template>
  <v-card color="grey-darken4" style="height: 132px; width: 100%;">
    <v-row justify="center" align="center" class="no-gutters pa-0 ma-0" style="height: 100%;">
      <transition-group name="slide-fade">
        <v-col cols="2" class="d-flex align-center justify-center" v-for="card in player.cost" :key="card.uuid">
          <game-card :card="card" :player="player"></game-card>
        </v-col>
      </transition-group>
    </v-row>
  </v-card>
</template>
      
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Player from '../../entities/Player';
import LogPoseIcon from '../../assets/logpose-white.png'
import FlipCard from '../core/FlipCard.vue';
import CardBack from '../core/CardBack.vue';
import CardFront from '../core/CardFront.vue';
import { game } from '../../store/game';
import GameCard from '../core/GameCard.vue';

export default defineComponent({
  data() {
    return {
      color: "#000",
      borderColor: "#fff",
      icon: LogPoseIcon
    }
  },
  components: {
    FlipCard,
    CardBack,
    CardFront,
    GameCard,
  },
  props: {
    player: {
      type: Object as PropType<Player>,
      required: true,
    }
  },
  computed: {
    store() {
      return game();
    }
  },
})
</script>

<style scoped>
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
    transform: translateX(-200px);
    opacity: 0;
  }
</style>