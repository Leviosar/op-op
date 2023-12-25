<template>
  <game-card :card="player.deck.leader" :player="player"></game-card>
</template>
    
<script lang="ts">
import Vue, { defineComponent, PropType } from 'vue'
import CardBack from '../core/CardBack.vue';
import CardFront from '../core/CardFront.vue';
import FlipCard from '../core/FlipCard.vue';
import Player from '../../entities/Player';
import LogPoseIcon from '../../assets/logpose-white.png'
import GameCard from '../core/GameCard.vue';

export default defineComponent({
  data() {
    return {
      color: "#a93639",
      borderColor: "#4a1318",
      icon: LogPoseIcon
    }
  },
  components: {
    CardBack,
    CardFront,
    FlipCard,
    GameCard,
  },
  props: {
    player: {
      type: Object as PropType<Player>,
      required: true,
    }
  },
  computed: {
    card(): Vue.Component & { toggle: () => boolean } {
      return this.$refs.card as Vue.Component & { toggle: () => boolean };
    },
    hasLeader(): boolean {
      return this.player.deck.leader !== undefined
    },
  },
  watch: {
    hasLeader(_) {
      this.card.toggle()
    }
  }
})
</script>