<template>
  <flip-card>
    <template v-slot:front>
      <card-front :card="player.deck.first()"/>
    </template>
    <template v-slot:back>
      <card-back />
    </template>
  </flip-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CardBack from '../core/CardBack.vue';
import CardFront from '../core/CardFront.vue';
import FlipCard from '../core/FlipCard.vue';
import Player from '../../entities/Player';

export default defineComponent({
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