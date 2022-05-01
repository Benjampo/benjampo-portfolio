<template>
  <img :key="$colorMode.preference" class="icon" :src="getImgUrl" :alt="pic">
</template>
<script>
export default {
  name: 'IconSvg',
  key (route) {
    return route.fullPath
  },
  props: ['pic'],
  computed: {
    getImgUrl () {
      return require('./../static/3d_assets/' + this.$colorMode.preference + '/' + this.pic + '.svg')
    }
  }
}
</script>
