<template>
  
<footer class="Footer">
    <div class="footer-top">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-3 footer_widget">
                    <div class="inner">
                        <h4>About</h4>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        <p>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, antesenectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 footer_widget">
                    <div class="inner">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">My Services</a></li>
                            <li><a href="#">Frequently Asked Questions</a></li>
                            <li><a href="#">Contact Me</a></li>
                            <li><a href="#">Terms of Use</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 footer_widget">
                    <div class="inner">
                        <h4>Recent Posts</h4>
                        <div class="media">
                            <a href="#">
                                <img src="assets/img/recent1.jpg" class="d-flex mr-3" alt="">
                            </a>
                            <div class="media-body">
                                <h5>
                                    <a href="#">Curling irons are as individual as the women</a>
                                </h5>
                                <span>June 22, 2017</span>
                            </div>
                        </div>
                        <div class="media">
                            <a href="#">
                                <img src="assets/img/recent2.jpg" class="d-flex mr-3" alt="">
                            </a>
                            <div class="media-body">
                                <h5>
                                    <a href="#">Curling irons are as individual as the women</a>
                                </h5>
                                <span>June 22, 2017</span>
                            </div>
                        </div>
                        <div class="media">
                            <a href="#">
                                <img src="assets/img/recent3.jpg" class="d-flex mr-3" alt="">
                            </a>
                            <div class="media-body">
                                <h5>
                                    <a href="#">Curling irons are as individual as the women</a>
                                </h5>
                                <span>June 22, 2017</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 footer_widget">
                    <div class="inner">
                        <h4>Address</h4>
                        <h5>Jiyu Dev, Inc.</h5>
                        <p>8 Maresme Ave, Suite 5-d<br>Canet de Mar, Barca 08360 <br>P: (612) 529-334</p>
                        <h4>Newsletter</h4>
                        <form action="#" class="nw_form">
                            <input placeholder="Enter your email" type="email">
                            <button><i class="fa fa-paper-plane"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="copyright-txt">
                        © 2020 Jiyu Dev. All Rights Reserved.
                    </div>
                </div>
                <div class="col-lg-6 text-right">
                    <div class="footer-nav">
                        <router-link to="/">Home</router-link>
                        <router-link to="/portfolio">Portfolio</router-link>
                        <a href="#">Pages</a>
                        <a href="#">Shortcode</a>
                        <router-link to="/blog">Blog</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>


<script>
  export default {
    name: 'Footer'
  }
  
</script>

<style scoped>
  
</style>
