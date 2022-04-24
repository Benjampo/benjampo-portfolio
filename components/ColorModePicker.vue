<template>
  <div>
    <ul>
      <li
        v-for="color of colors"
        :key="color"
        @click="$colorMode.preference = color"
      >c</li>
    </ul>
  </div>
</template>
<script>
export default {

  data () {
    return {
      colors: ['light', 'dark']
    }
  }
}
</script>
