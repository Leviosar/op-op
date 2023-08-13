<template>
  <v-col class="d-flex justify-center align-center" v-for="i in max" :key="i">
    <v-card class="character-card"> # {{ i }} </v-card>
  </v-col>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Player from '../../entities/Player';

export default defineComponent({
  data() {
    return {
      max: 5,
    }
  },
  props: {
    player: {
      required: true,
      type: Object as PropType<Player>,
    }
  },
})
</script>

<style scoped>
  .character-card {
    box-sizing: border-box;
    aspect-ratio: 149/208;
    height: 150px;
    background-color: #292c5c;
    border: 8px solid #14162f;
    /* border: 12px solid rgba(136, 126, 9, 1); */
  }
</style>