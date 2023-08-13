<template>
  <v-card class="card-back">
    <div class="floating-icon">
      <img :src="icon" width="80" alt="">
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LogPoseIcon from "../../assets/logpose.png";

export default defineComponent({
  props: {
    icon: {
      type: String,
      default: LogPoseIcon
    },
    color: {
      type: String,
      default: "#292c5c"
    },
    borderColor: {
      type: String,
      default: "#14162f"
    },
  }
})
</script>

<style scoped>
  .card-back {
    aspect-ratio: 149/208;
    height: 150px;
    background-color: v-bind(color);
    border: 8px solid v-bind(borderColor);
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