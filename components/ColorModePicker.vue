<template>
  <div>
    <input v-model="$colorMode.preference" name="color" value="dark" type="radio">
    <input v-model="$colorMode.preference" name="color" value="light" type="radio">
    <component :is="`icon-${$colorMode.preference}`" />
  </div>
</template>
<script>
import IconLight from 'static/icons/light.svg?inline'
import IconDark from 'static/icons/dark.svg?inline'

export default {
  components: {
    IconLight,
    IconDark
  },
  props: ['selected'],
  data () {
    return {
      colors: ['light', 'dark']
    }
  },
  methods: {
    getClasses (color) {
      // Does not set classes on ssr when preference is system (because we don't know the preference until client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    }
  }
}
</script>
<style scoped>
.feather {
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 7px;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}
.feather:hover {
  top: -3px;
}
.feather.preferred {
  border-color: var(--color-primary);
  top: -3px;
}
.feather.selected {
  color: var(--color-primary);
}
</style>
