<template>
  <v-card class="card-back">
    <div class="floating-icon">
      <img :src="icon" width="30" alt="">
    </div>
    <small v-if="text !== undefined"> {{ text }} </small>
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
    text: {
      type: String,
      required: false,
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
    height: 100px;
    background-color: v-bind(color);
    border: 4px solid v-bind(borderColor);
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