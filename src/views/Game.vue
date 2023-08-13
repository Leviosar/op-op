<template>
  <v-container>
    <v-row>
      <v-col cols="12" v-for="player in players" :key="player.id">
        <play-mat :player="player"></play-mat>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { game } from "./../store/game";

import PlayMat from '../components/PlayMat/PlayMat.vue';

export default defineComponent({
  components: {
    PlayMat
  },
  computed: {
    players() {
      return game().players
    }
  },
  data() {
    return {}
  },
  beforeMount() {
    game().setup()
  }
})
</script>