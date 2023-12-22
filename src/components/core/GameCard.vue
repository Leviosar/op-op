<template>
  <v-menu dark location="top">
    <template v-slot:activator="{ props }">
      <flip-card v-bind="props" :class="cardClass">
        <template v-slot:front> 
          <card-front :card="card"></card-front>
        </template>
        <template v-slot:back> 
          <card-back :card="card"></card-back>
        </template>
      </flip-card>
    </template>
    <v-list>
      <v-list-item
        v-for="(action, index) in card.actions"
        :key="index"
        :value="index"
      >
        <v-list-item-title @click="() => card.execute(action, player, { origin: 'hand'})">{{ action.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue'
import FlipCard from './FlipCard.vue';
import CardFront from './CardFront.vue';
import CardBack from './CardBack.vue';
import Card from '../../entities/Card';
import Player from '../../entities/Player';

export default defineComponent({
  components: {
    FlipCard,
    CardFront,
    CardBack,
  },
  props: {
    card: {
      type: Object as PropType<Card>,
      required: true,
    },
    player: {
      type: Object as PropType<Player>,
      required: true,
    },
  },
  computed: {
    cardClass() {
      return {
        "rotated": this.card.tapped
      }
    }
  },
  methods: {}
})

</script>

<style>
.rotated {
  rotate: -90deg;
}
</style>