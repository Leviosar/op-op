<template>
  <v-card color="grey-darken-3" style="min-height: 300px" class="pa-4">
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="1" class="d-flex justify-center align-center">
        <life-area :player="players[playerId]" />
      </v-col>
      <v-col cols="7">
        <character-area :player="players[playerId]" />
      </v-col>
      <v-col cols="1" class="d-flex justify-center align-center">
        <leader-area :player="players[playerId]"/>
      </v-col>
      <v-col cols="1" class="d-flex justify-center align-center">
        <stage-area :player="players[playerId]"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="1" class="d-flex justify-center align-center">
        <don-deck :player="players[playerId]" />
      </v-col>
      <v-col cols="7" class="d-flex justify-center align-center">
        <cost-area :player="players[playerId]" />
      </v-col>
      <v-col cols="1" class="d-flex justify-center align-center">
        <main-deck :player="players[playerId]" />
      </v-col>
      <v-col cols="1" class="d-flex justify-center align-center">
        <trash-area :player="players[playerId]" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="2"></v-col>
      <hand-area :player="players[playerId]" />
      <v-col cols="2"></v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { game } from "../../store/game";
import { log } from "../../store/log";
import { mapState } from 'pinia'

import CharacterArea from "./CharacterArea.vue";
import StageArea from "./StageArea.vue";
import LeaderArea from "./LeaderArea.vue";
import PhaseArea from "./PhaseArea.vue";
import CostArea from "./CostArea.vue";
import TrashArea from "./TrashArea.vue";
import DonDeck from "./DonDeck.vue";
import LifeArea from "./LifeArea.vue";
import HandArea from "./HandArea.vue";
import MainDeck from "./MainDeck.vue";

export default defineComponent({
  components: {
    CharacterArea,
    StageArea,
    LeaderArea,
    PhaseArea,
    CostArea,
    TrashArea,
    DonDeck,
    LifeArea,
    MainDeck,
    HandArea,
  },
  props: {
    playerId: {
      required: true,
      type: Number,
    }
  },
  computed: {
    ... mapState(game, ['players']),
    log() {
      return log();
    }
  }
})
</script>