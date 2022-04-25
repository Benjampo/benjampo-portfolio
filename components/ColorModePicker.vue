<template>
  <div>
    <ul>
      <li
        :is="color"
        v-for="color of colors"
        :key="color"
        @click="$colorMode.preference = color"
      >c</li>
    </ul>
  </div>
</template>
<script>

export default {
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
