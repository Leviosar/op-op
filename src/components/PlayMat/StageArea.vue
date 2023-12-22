<template>
  <flip-card :locked="!hasStage" :default="!hasStage">
    <template v-slot:front>
      <card-front :card="(store.stage as Card)" />
    </template>
    <template v-slot:back>
      <card-back :icon="icon" />
    </template>
  </flip-card>
</template>
  
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CardBack from '../core/CardBack.vue';
import CardFront from '../core/CardFront.vue';
import FlipCard from '../core/FlipCard.vue';
import Player from '../../entities/Player';
import StageIcon from '../../assets/stage.png';
import { game } from '../../store/game';
import Card from '../../entities/Card';

export default defineComponent({
  data() {
    return {
      icon: StageIcon
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
    store() {
      return game();
    },
    hasStage() {
      return game().stage !== null
    },
  }
})
</script>