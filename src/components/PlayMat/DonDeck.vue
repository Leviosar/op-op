<template>
  <flip-card locked :default="true">
    <template v-slot:front>
      <card-front :card="player.deck.don[0]" />
    </template>
    <template v-slot:back>
      <card-back :color="'black'" :border-color="'white'" :icon="icon" :text="player.deck.don.length.toString()" />
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