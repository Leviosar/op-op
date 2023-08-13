<template>
  <div class="phases">
    <template v-for="phase in phases" :key="phase.id">
      <v-chip 
        style="display: block;"
        class="my-2 d-flex align-center justify-center"
        variant="outlined"
        color="white"
      > {{ phase.name }} </v-chip>
    </template>
  </div>
</template>
      
<script lang="ts">
import { defineComponent } from 'vue'
import CardBack from '../core/CardBack.vue';
import CardFront from '../core/CardFront.vue';
import FlipCard from '../core/FlipCard.vue';

export default defineComponent({
  data() {
    return {
      phases: [
        { id: 0, name: "Refresh" },
        { id: 1, name: "Draw" },
        { id: 2, name: "DON!!" },
        { id: 3, name: "Main" },
        { id: 4, name: "End" },
      ]
    }
  },
  components: {
    CardBack,
    CardFront,
    FlipCard,
  },
})
</script>