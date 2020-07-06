<template>
  <div class="TopNav">
     <header>
            <div class="container">
                <div class="row">
                    <div class="col-6 col-sm-3 logo-column">
                        <a href="index.html" class="logo">
                            <img src="assets/img/log.png" alt="logo">
                        </a>
                    </div>
                    <div class="col-6 col-sm-9 nav-column clearfix">
                        <div class="right-nav">
                            <span class="search-icon fa fa-search"></span>
                            <form action="#" class="search-form">
                                <input type="search" placeholder="search now">
                                <button type="submit"><i class="fa fa-search"></i></button>
                            </form>
                            <div class="header-social">
                                <a href="#" class="fa fa-facebook"></a>
                                <a href="#" class="fa fa-twitter"></a>
                                <a href="#" class="fa fa-github"></a>
                            </div>
                        </div>
                        <nav id="menu" class="d-none d-lg-block">
                            <ul>
                                <li class="current-menu-item has-child">
                                    <a href="index.html">Home</a>
                                    <ul class="sub-menu">
                                        <li><a href="index.html">Home - 01</a></li>
                                        <li><a href="index-2.html">Home - 02</a></li>
                                        <li><a href="index-3.html">Home - 03</a></li>
                                    </ul>
                                </li>
               <li><router-link to="/about">About</router-link></li>

<li><router-link to="/portfolio">Portfolio</router-link></li>
                                <li class="has-child">
                                    <a href="#">Pages</a>
                                    <ul class="sub-menu">
                                        <li><a href="404.html">404</a></li>
                                        <li><router-link to="/about">About</router-link></li>
                                        <li><router-link to="/career">Career</router-link></li>
                                        <li><router-link to="/coming-soon">Coming Soon</router-link></li>
                                        <li><router-link to="/contact">Contact</router-link></li>
                                        <li><router-link to="/faq">Faq</router-link></li>
                                        <li><router-link to="/portfolio">Portfolio</router-link></li>
                                        <li><router-link to="/pricing">Pricing</router-link></li>
                                        <li><router-link to="/service">Service</router-link></li>
                                        <li><router-link to="/team">Team</router-link></li>
                                        <li><router-link to="/testimonial">Testimonial</router-link></li>
                                    </ul>
                                </li>
                                <li><router-link to="/contact">Contact</router-link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header> 

  
    
    
  </div>
</template>



<script>
/*import $ from "jquery";
import slick from "slick"*/

export default {
  name: 'TopNav',
    created (){
      
    },
mounted () {

},
   props: {
    
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
