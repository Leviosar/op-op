<template>
  <v-col cols="12" class="d-flex flex-column align-stretch justify-end py-0">
    <v-card>
      <v-virtual-scroll :items="log.entries">
        <template v-slot:default="{ item }">
          <v-list-item>
            <template v-slot:prepend>
              <v-icon color="red">
                {{ icon(item) }}
              </v-icon>
            </template>
            <v-list-item-title style="text-align: start;">
              {{ item.message }}
            </v-list-item-title>
          </v-list-item>
        </template>
      </v-virtual-scroll>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { log, LogEntry, LogLevel } from '../store/log';

export default defineComponent({
  methods: {
    icon(item: LogEntry): string {
      const items: Record<LogLevel, string> = {
        "info": "mdi-information",
        "debug": "mdi-bug",
        "warning": "mdi-alert",
        "error": "mdi-skull"
      };

      return items[item.level];
    }
  },
  computed: {
    log() {
      return log();
    }
  }
})
</script>