<template>
  <v-card color="grey-darken-3" style="min-height: 300px" class="pa-4">
    <v-row>
      <v-col cols="2" class="d-flex justify-center px-6">
        <life-area :player="player" />
      </v-col>
      <v-col cols="10">
        <v-row>
          <character-area :player="player" />
        </v-row>
        <v-row> 
          <v-col class="d-flex justify-center align-center"></v-col>
          <v-col class="d-flex justify-center align-center">
            <phase-area />
          </v-col>
          <v-col class="d-flex justify-center align-center">
            <leader-area :player="player"/>
          </v-col>
          <v-col class="d-flex justify-center align-center">
            <stage-area :player="player"/>
          </v-col>
          <v-col class="d-flex justify-center align-center">
            <main-deck :player="player" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row>
          <v-col cols="2" class="d-flex justify-center align-center">
            <don-deck :player="player" />
          </v-col>
          <v-col cols="8" class="d-flex justify-center align-center px-6">
            <cost-area :player="player" />
          </v-col>
          <v-col cols="2" class="d-flex justify-center align-center">
            <trash-area :player="player" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2"></v-col>
      <hand-area :player="player" />
      <v-col cols="2"></v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import Player from "../../entities/Player";
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
    player: {
      required: true,
      type: Object as PropType<Player>,
    }
  }
})
</script>