<template>
  <div class="home">
   <PreLoader />
    <!-- <TopNav /> -->
    <Hero />
    <BrandArea />
    <ServiceArea />
    <PortfolioArea/>
    <Testimonial />
    <FaqArea />
    <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import PreLoader from '@/components/home/PreLoader'
//import TopNav from '@/components/home/TopNav.vue'
import MyComponent from '@/mixins/Head.js'
import Hero from '@/components/home/Hero.vue'
import BrandArea from '@/components/home/BrandArea.vue'
import ServiceArea from '@/components/home/ServiceArea.vue'
import PortfolioArea from '@/components/home/PortfolioArea.vue'
import Testimonial from '@/components/home/Testimonial.vue'
import FaqArea from '@/components/home/FaqArea.vue'
import Footer from '@/components/home/Footer.vue'

export default {
  name: 'Home',
  components: {
    PreLoader,
    //TopNav,
    Hero,
    BrandArea,
    ServiceArea,
    PortfolioArea,
    Testimonial,
    FaqArea,
    Footer
  },
    created() {
  },
mixins:[MyComponent]
}
</script>


<style lang="text/css" scoped>
    import '../assets/css/main.css'
    import '../assets/css/barfiller.css'
    import'../assets/css/font-awesome.min.css'
    import '../assets/css/slicknav.css'
    import '../assets/css/owl.carousel.css'
    import '../assets/css/bootstrap.min.css'
</style>
