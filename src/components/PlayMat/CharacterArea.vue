<template>
  <v-card color="grey-darken3" height="132px">
    <transition-group name="slide-fade">
      <v-col style="height: 100%;" class="d-flex justify-center align-center" v-for="char in player.characters" :key="char.uuid">
        <game-card :card="char" :player="player"></game-card>
      </v-col>
    </transition-group>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Player from '../../entities/Player';
import GameCard from '../core/GameCard.vue';

export default defineComponent({
  components: {
    GameCard
  },
  data() {
    return {
      max: 5,
      stupidMap: {
        0: 2,
        1: 1,
        2: 3,
        3: 0,
        4: 4
      }
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
    transform: translateY(100px);
    opacity: 0;
  }
</style>