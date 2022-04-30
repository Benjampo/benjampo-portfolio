<template>
  <footer>
    <div class="wrapper">
      <div class="informations">
        <a href="mailto:contact@benjampo.ch">contact@benjampo.ch</a>
        <div class="copyright">
          <NuxtLink to="/">
            <img class="logo" src="./../static/logo.svg" alt="logo">
          </NuxtLink>
          <span>&copy; Copyright {{ currentYear }}- Benjamin Porchet</span>
        </div>
        <ul>
          <li>
            linkedin
          </li>
          <li>
            github
          </li>
        </ul>
      </div>
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
