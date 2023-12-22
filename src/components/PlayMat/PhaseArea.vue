<template>
  <div class="phases">
    <template v-for="phase in phases" :key="phase.id">
      <v-chip
        @click="phase.callback"
        :disabled="player.id !== store.turn.player"
        style="display: block;"
        class="my-2 d-flex align-center justify-center"
        :variant="store.turn.phase == phase.id ? 'flat' : 'outlined'"
        :color="store.turn.phase == phase.id ? 'red' : 'white'"
      > {{ phase.name }} </v-chip>
    </template>
  </div>
</template>
      
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CardBack from '../core/CardBack.vue';
import CardFront from '../core/CardFront.vue';
import FlipCard from '../core/FlipCard.vue';
import { game } from '../../store/game';
import Player from '../../entities/Player';

export default defineComponent({
  props: {
    player: {
      type: Object as PropType<Player>,
      required: true,
    }
  },
  data() {
    return {
      
    }
  },
  components: {
    CardBack,
    CardFront,
    FlipCard,
  },
  computed: {
    store() {
      return game();
    },
    phases() {
      return [
        { id: 0, name: "Refresh", callback: () => true },
        { id: 1, name: "Draw", callback: () => true },
        { id: 2, name: "DON!!", callback: () => true },
        { id: 3, name: "Main", callback: () => true },
        { id: 4, name: "End", callback: () => this.store.end() },
      ]
    }
  }
})
</script>