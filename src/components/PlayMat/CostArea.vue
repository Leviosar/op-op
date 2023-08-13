<template>
  <v-card color="grey-darken-4" style="height: 150px; width: 100%;"></v-card>
</template>
      
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Player from '../../entities/Player';
import LogPoseIcon from '../../assets/logpose-white.png'

export default defineComponent({
  data() {
    return {
      color: "#a93639",
      borderColor: "#4a1318",
      icon: LogPoseIcon
    }
  },
  components: {},
  props: {
    player: {
      type: Object as PropType<Player>,
      required: true,
    }
  }
})
</script>