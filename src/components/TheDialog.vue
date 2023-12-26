<template>
  <v-dialog
    width="500"
    persistent  
    v-model="dialog.visible"
  >
    <v-card>
      <v-card-title>
        {{ dialog.title }}
      </v-card-title>
      <v-card-text>
        {{ dialog.text }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="dialog.cancel()" color="danger">Nope</v-btn>
        <v-btn @click="dialog.confirm()" color="success">Yep</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { dialog } from '../store/dialog';

export default defineComponent({
  computed: {
    dialog() {
      return dialog();
    }
  }
})
</script>