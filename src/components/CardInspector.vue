<template>
  <v-col cols="12" class="py-0">
    <v-row justify="center">
      <v-col cols="6">
        <card-front style="height: 250px;" v-if="card !== null" :card="card"/>
        <card-back style="height: 250px;" v-else/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-textarea :value="card?.effect" readonly/>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CardFront from './core/CardFront.vue';
import Card from '../entities/Card';
import { inspector } from '../store/inspector';
import CardBack from './core/CardBack.vue';

export default defineComponent({
  components: {
    CardFront,
    CardBack,
  },
  computed: {
    card(): Card | null {
      return inspector().current;
    }
  }
})
</script>