<template>
  <v-list>
    <v-list-item v-for="entry in log.entries" :title="entry.message"/>
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { log } from '../../store/log';

export default defineComponent({
  data() {

  },
  methods: {

  },
  computed: {
    log() {
      return log();
    }
  }
})
</script>