<template>
  <footer>
    <div class="wrapper">
      <a href="mailto:contact@benjampo.ch">contact@benjampo.ch</a>
      <span>&copy; Copyright {{ currentYear }}- Benjamin Porchet</span>
      <ul>
        <li>
          linkedin
        </li>
        <li>
          github
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
