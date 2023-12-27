<template>
  <v-app style="height: 100%;">
    <v-main class="d-flex justify-center align-center">
      <v-container fluid>
        <v-row>
          <v-col cols="9">
            <v-row>
              <v-col cols="12" v-for="player in store.players" :key="player.id">
                <play-mat :player-id="player.id" :style="{ rotate: `${player.id == 0 ? '180deg' : '0deg'}` }"></play-mat>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="3" class="d-flex flex-column justify-space align-stretch">
            <v-row class="px-4 my-0">
              <phase-area :player="store.players[1]"/>
            </v-row>
            <v-row class="px-4 my-0">
              <card-inspector/>
            </v-row>
            <v-row class="px-4 my-0">
              <battle-log/>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <the-dialog/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { game } from "./../store/game";

import PlayMat from '../components/PlayMat/PlayMat.vue';
import PhaseArea from '../components/PlayMat/PhaseArea.vue';
import TheDialog from '../components/TheDialog.vue';
import BattleLog from '../components/BattleLog.vue';
import CardInspector from '../components/CardInspector.vue';

export default defineComponent({
  components: {
    PlayMat,
    PhaseArea,
    TheDialog,
    BattleLog,
    CardInspector,
  },
  computed: {
    store() {
      return game();
    },
  },
  data() {
    return {}
  },
  beforeMount() {
    game().setup()
  }
})
</script>