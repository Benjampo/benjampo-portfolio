<template>
  <Header>
    <div class="wrapper">
      <ColorModePicker />
      <div class="navigation">
        <NuxtLink to="/">
          <img class="logo" src="./../static/logo.svg" alt="logo">
        </NuxtLink>
        <nav>
          <ul>
            <li>
              <NuxtLink to="/projects">
                work
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">
                about
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact">
                contact
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <ul>
          <li>French</li>
          <li>English</li>
        </ul>
      </div>
    </div>
  </Header>
</template>
<script>
import ColorModePicker from '@/components/ColorModePicker'

export default {
  components: {
    ColorModePicker
  }
}
</script>
