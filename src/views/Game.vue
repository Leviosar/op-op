<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="9">
            <v-row>
              <v-col cols="2">
                <phase-area :player="store.players[0]"></phase-area>
              </v-col>
              <v-col cols="10" v-for="player in store.players" :key="player.id">
                <play-mat :player-id="player.id" :style="{ rotate: `${player.id == 0 ? '180deg' : '0deg'}` }"></play-mat>
              </v-col>
              <v-col cols="2">
                <phase-area :player="store.players[1]"></phase-area>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="3">
            <!-- CardInspector -->
            <battle-log/>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid>
        
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
import BattleLog from '../components/PlayMat/BattleLog.vue';


export default defineComponent({
  components: {
    PlayMat,
    PhaseArea,
    TheDialog,
    BattleLog,
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