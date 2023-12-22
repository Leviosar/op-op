<template>
  <v-card class="card-front"></v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Card from '../../entities/Card'

export default defineComponent({
  props: {
    card: {
      type: Object as PropType<Card | undefined>,
      required: true,
    }
  },
  computed: {
    _image(): string {
      if (this.card === undefined) {
        return `url(../../assets/logpose.png)`;
      }
      
      return `url(${this.card.getImage()})`;
    }
  }
})
</script>

<style scoped>
  .card-front {
    aspect-ratio: 149/208;
    height: 100px;
    background-color: #292c5c;
    background-image: v-bind('_image');
    background-size: contain;
    user-select: none;
  }

  .floating-icon {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>