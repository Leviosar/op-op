<template>
  <div class="life-area" style="width: 100%;">
    <flip-card 
      v-for="life in lifes" :key="life"
      style="position: absolute;" 
      :class="`mt-${(life - 1) * 4}`"
      locked
      :default="true"
    >
      <template v-slot:front>
        <card-front :card="player.deck.first()" />
      </template>
      <template v-slot:back>
        <card-back :color="color" :border-color="borderColor" :icon="icon" />
      </template>
    </flip-card>
  </div>
</template>
      
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CardBack from '../core/CardBack.vue';
import CardFront from '../core/CardFront.vue';
import FlipCard from '../core/FlipCard.vue';
import Player from '../../entities/Player';
import LogPoseIcon from '../../assets/logpose-white.png'

export default defineComponent({
  data() {
    return {
      lifes: 5,
      color: "#a93639",
      borderColor: "#4a1318",
      icon: LogPoseIcon
    }
  },
  components: {
    CardBack,
    CardFront,
    FlipCard,
  },
  props: {
    player: {
      type: Object as PropType<Player>,
      required: true,
    }
  }
})
</script>