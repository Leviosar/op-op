<template>
  <flip-card :default="player.trash.length === 0" :locked="player.trash.length === 0">
    <template v-slot:front>
      <card-front :card="player.trash[0]" />
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
      color: "#303030",
      borderColor: "#202020",
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