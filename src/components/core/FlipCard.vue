<template>
  <div class="flip-card" @dblclick="toggle">
    <transition name="flip">
      <div v-bind:key="`${flipped}`" class="flip-card-current">
        <slot v-if="!flipped" name="front"></slot>
        <slot v-else name="back"></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    locked: {
      type: Boolean,
      default: false,
    },
    default: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      flipped: false
    }
  },
  beforeMount() {
    this.flipped = this.default;
  },
  methods: {
    toggle() {
      if (this.locked) return;
      this.flipped = !this.flipped
    }
  }
})
</script>

<style>
.flip-enter-active {
  transition: all 0.8s ease;
}

.flip-leave-active {
  display: none;
}

.flip-enter-from,
.flip-leave-to {
  transform: rotateY(180deg);
  opacity: 0;
}
</style>