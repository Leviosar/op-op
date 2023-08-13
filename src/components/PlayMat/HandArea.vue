<template>
  <v-col class="d-flex justify-center align-center" v-for="(card, index) in player.hand" :key="index">
    <flip-card>
      <template v-slot:front>
        <card-front :card="card"></card-front>
      </template>
      <template v-slot:back>
        <card-back></card-back>
      </template>
    </flip-card>
  </v-col>
</template>
  
<script lang="ts">
import { defineComponent, PropType } from 'vue'

import Player from '../../entities/Player';
import FlipCard from '../core/FlipCard.vue';
import CardFront from '../core/CardFront.vue';
import CardBack from '../core/CardBack.vue';

export default defineComponent({
  components: {
    FlipCard,
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
.character-card {
  box-sizing: border-box;
  aspect-ratio: 149/208;
  height: 200px;
  background-color: #292c5c;
  border: 8px solid #14162f;
  /* border: 12px solid rgba(136, 126, 9, 1); */
}
</style>