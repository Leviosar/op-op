<template>
  <flip-card ref="card" :locked="hasLeader" :default="true">
    <template v-slot:front>
      <card-front :card="player.deck.leader" />
    </template>
    <template v-slot:back>
      <card-back :color="color" :border-color="borderColor" :icon="icon" />
    </template>
  </flip-card>
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
  },
  computed: {
    hasLeader() {
      return this.player.deck.leader !== undefined
    },
  },
  watch: {
    hasLeader(old, new_) {
      this.$refs.card.toggle()
    }
  }
})
</script>