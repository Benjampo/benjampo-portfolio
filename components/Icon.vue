<template>
  <img class="icon" :src="getImgUrl" :alt="icon">
</template>
<script>
export default {
  name: 'IconSvg',
  props: ['pic'],
  data () {
    return {
      icon: '',
      rellax: {
        speed: 3
      }
    }
  },
  computed: {
    getImgUrl () {
      return require('./../static/3d_assets/' + this.$colorMode.preference + '/' + this.pic + '.svg')
    }

  }
}
</script>
