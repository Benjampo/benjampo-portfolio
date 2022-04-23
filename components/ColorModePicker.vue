<template>
  <div>
    <select v-model="$colorMode.preference">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
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
