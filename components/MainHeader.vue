<template>
  <Header>
    <div class="wrapper">
      <ColorModePicker />
      <div class="navigation">
        <NuxtLink to="/">
          <img src="./../static/3d_assets/chat.png" alt="">
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
