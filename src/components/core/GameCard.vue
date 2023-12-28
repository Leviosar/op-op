<template>
  <div class="game-card">
    <div class="card-wrapper d-flex">
      <flip-card v-for="(att, index) in card.attached" :style="`position: absolute; margin-top: ${6 * (index + 1)}px; margin-right: ${6 * (index + 1)}px`">
        <template v-slot:front> 
          <card-front :card="att"></card-front>
        </template>
        <template v-slot:back> 
          <card-back :card="att"></card-back>
        </template>
      </flip-card>
      <flip-card :id="`game-card-${card.uuid}`" :class="classes" @mouseover="inspect" @click="select">
        <template v-slot:front> 
          <card-front :card="card"></card-front>
        </template>
        <template v-slot:back> 
          <card-back :card="card"></card-back>
        </template>
      </flip-card>
    </div>
    <v-menu dark location="top" :activator="(card.getOwner()?.id !== game.turn.player) ? 'none' : `#game-card-${card.uuid}`">
      <v-list>
        <v-list-item
          v-for="(action, index) in card.actions.filter(a => a.condition())"
          :key="index"
          :value="index"
        >
          <v-list-item-title @click="() => card.execute(action, player, { origin: 'hand', target: card })">{{ action.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue'
import FlipCard from './FlipCard.vue';
import CardFront from './CardFront.vue';
import CardBack from './CardBack.vue';
import Card from '../../entities/Card';
import Player from '../../entities/Player';
import { game } from '../../store/game';
import { battle } from '../../store/battle';
import { target } from '../../store/target';
import { inspector } from '../../store/inspector';

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
  methods: {
    select() {
      if (!this.targetable) return;
      
      this.target_.select(this.card);
    },
    inspect() {
      if (this.card.tapped) return;

      inspector().change(this.card);
    },
    stopInspect() {
      inspector().clear();
    },
  },
  computed: {
    classes() {
      return {
        "rotated": this.card.tapped,
        "targetable": this.targetable,
      }
    },
    targetable() {
      if (this.target_.requests.length === 0) return false;

      return this.target_.check(this.card);
    },
    game() {
      return game();
    },
    battle() {
      return battle();
    },
    target_() {
      return target();
    }
  },
})

</script>

<style>
.rotated {
  rotate: -90deg;
}

.targetable {
  border: 4px solid yellow;
}
</style>