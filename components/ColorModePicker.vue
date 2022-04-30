<template>
  <div class="color-mode">
    <component :is="`icon-${$colorMode.preference}`" @click="toggleColor()" />
  </div>
</template>
<script>
import IconLight from 'static/icons/dark.svg?inline'
import IconDark from 'static/icons/light.svg?inline'

export default {
  components: {
    IconLight,
    IconDark
  },
  props: ['selected'],
  methods: {
    toggleColor () {
      if (this.$colorMode.preference === 'light') {
        this.$colorMode.preference = 'dark'
      } else {
        this.$colorMode.preference = 'light'
      }
    }
  }
}
</script>
