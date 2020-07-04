<template>
  <div class="home">
   <Head/>
    <div class="preloader">
        <span class="preloader-spin"></span>
    </div>
    
    <TopNav />
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
import Head from '@/mixins/Head.js'
import TopNav from '@/components/home/TopNav.vue'
import Hero from '@/components/home/Hero.vue'
import BrandArea from '@/components/home/BrandArea.vue'
import ServiceArea from '@/components/home/ServiceArea.vue'
import PortfolioArea from '@/components/home/PortfolioArea.vue'
import Testimonial from '@/components/home/Testimonial.vue'
import FaqArea from '@/components/home/FaqArea.vue'
import Footer from '@/components/home/Footer.vue'


export default {
  name: 'Home',
    data() {
        return {

        }
    },
  components: {
    TopNav,
    Hero,
    BrandArea,
    ServiceArea,
    PortfolioArea,
    Testimonial,
    FaqArea,
    Footer
  },
 mixins: [Head]
}
</script>
