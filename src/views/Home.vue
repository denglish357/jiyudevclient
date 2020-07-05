<template>
  <div class="home">
   <Head/>

    <myComponent />
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
    mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "@../assets/js/active.js"
    );
    plugin.setAttribute(
      "type",
      "text/javascript"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  }
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
