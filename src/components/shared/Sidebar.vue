<template>
  <div class="col-12 col-sm-4 mt-4 mt-sm-0">
                <div class="pro-details-sidebar-active slider-nav-style-3 owl-carousel" ref="class_pro_details_sidebar_active">
                  <div class="single-pro-details-sidebar">
                    <a href="#">
                      <img src="assets/images/product-details/pro-details-sidebar-1.jpg" alt />
                    </a>
                    <div class="pro-details-sidebar-content">
                      <h4>
                        <a href="#">
                          NEW
                          <br />LONDON
                        </a>
                      </h4>
                      <p>Off 20% for all</p>
                    </div>
                  </div>
                  <div class="single-pro-details-sidebar">
                    <a href="#">
                      <img src="assets/images/product-details/pro-details-sidebar-2.jpg" alt />
                    </a>
                    <div class="pro-details-sidebar-content">
                      <h4>
                        <a href="#">
                          NEW
                          <br />LONDON
                        </a>
                      </h4>
                      <p>Off 20% for all</p>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
export default {
  mounted(){
     /* Product details sidebar active */
    jQuery(this.$refs.class_pro_details_sidebar_active).owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        autoplay: false,
        autoplayTimeout: 5000,
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })
  }
}
</script>