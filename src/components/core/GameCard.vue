<template>
  <template v-if="card.getOwner()?.id !== game.turn.player">
    <flip-card :class="cardClass" @click="select">
      <template v-slot:front> 
        <card-front :card="card"></card-front>
      </template>
      <template v-slot:back> 
        <card-back :card="card"></card-back>
      </template>
    </flip-card>
  </template>
  <template v-else>
    <v-menu dark location="top">
      <template v-slot:activator="{ props }" @click="select">
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
          v-for="(action, index) in card.actions.filter(a => a.condition())"
          :key="index"
          :value="index"
        >
          <v-list-item-title @click="() => card.execute(action, player, { origin: 'hand', target: card })">{{ action.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </template>
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
      // switch (this.battle.step) {
      //   case "targeting":
      //     battle().target(this.card);
      //   break;
      //   case "selecting-blocker":
      //     battle().blocker(this.card);
      //   break;
      //   case "selecting-counters":
      //     battle().counter([this.card]);
      //   break;
      //   default:
      //     break;
      // }
    }
  },
  computed: {
    cardClass() {
      return {
        "rotated": this.card.tapped,
        "targetable": this.targetable,
      }
    },
    targetable() {
      if (this.target_.requests.length === 0) return false;

      return this.target_.check(this.card);
      // switch (this.battle.step) {
      //   case "targeting":
      //     return ["leader", "char"].includes(this.card.getType()) && this.card.isValidTargetForAttack && this.card.getOwner()?.id !== this.game.turn.player;
      //   case "selecting-blocker":
      //     return this.card.getKeywords().includes("Blocker") && !this.card.tapped && this.card.location === "character-area";   
      //   case "selecting-counters":
      //     return this.card.getCounter() > 0 && this.card.location === "hand";   
      //   default:
      //     break;
      // }
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