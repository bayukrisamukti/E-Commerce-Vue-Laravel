<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <HeaderShayna/>
  <HeroShayna/>
  <BannerShayna/>
  <InstagramShayna/>
  <PartnerShayna/>
  <FooterShayna/>
  </div>
</template>

<script>


// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderShayna from '@/components/HeaderShayna.vue'
import HeroShayna from '@/components/HeroShayna.vue'
import BannerShayna from '@/components/BannerShayna.vue'
import InstagramShayna from '@/components/InstagramShayna.vue'
import PartnerShayna from '@/components/PartnerShayna.vue'
import FooterShayna from '@/components/FooterShayna.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  HeaderShayna,
  HeroShayna,
  BannerShayna,
  InstagramShayna,
  PartnerShayna,
  FooterShayna
  }
}
</script>
