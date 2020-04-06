<template>
    <section>
        <div class="top-header">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 text-center text-lg-left py-3 py-md-5">
                        <h2>Welcome to <br class="d-none d-lg-block">Chhapai Design Studio</h2>
                        <p>We are really proud of the work that we do here at the Chhapai studio. We have built a connection with our clients, which led so many business owners trust us with their brand and online reputation. They know that here at Chhapai we represent them with utmost professionalism & integrity.</p>
                        <p>Our contemporary team is well versed with the latest marketing & technology trends, ensuring and making us the best in the business.</p>
                        <router-link to="/contact-us" class="btn btn-primary">Talk to us</router-link>
                    </div>
                    <div class="col-lg-6 py-3 py-md-5">
                        <img src="assets/images/design.svg" class="img-fluid" alt="website design">
                    </div>
                </div>
            </div>
        </div>
        <section class="service-area py-5 section-padding-1">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="service-wrap mb-30 text-center">
                            <div class="service-icon">
                                <i class="dlicon users_network"></i>
                            </div>
                            <div class="service-content">
                                <h4>Pioneering Branding</h4>
                                <p>Celebrating uniqueness - a core element of any brand. From a distinctive name for your brand to ravishing logos & the positioning for it all. One pit solutions for all your digital problems.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="service-wrap mb-30 text-center">
                            <div class="service-icon">
                                <i class="dlicon tech_laptop"></i>
                            </div>
                            <div class="service-content">
                                <h4>Socila Media</h4>
                                <p>We maneuver all the marketing strategies and their perfect pursuit to help you voice a narrative for your brand. Let us help you build a business worth talking about.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="service-wrap mb-30 text-center">
                            <div class="service-icon">
                                <i class="dlicon design_window-dev"></i>
                            </div>
                            <div class="service-content">
                                <h4>Wordpress Websites</h4>
                                <p>Want a professional expert to build your website? We can cater customised wordpress websites for your business. Get your establishment the best user experience online.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row gutters-1">
                    <div class="col-sm-4">
                        <img src="assets/images/smm-1.jpg" alt="smm" class="img-fluid">
                    </div>
                    <div class="col-sm-4">
                        <img src="assets/images/smm-2.jpg" alt="smm" class="img-fluid">
                    </div>
                    <div class="col-sm-4">
                        <img src="assets/images/smm-3.jpg" alt="smm" class="img-fluid">
                    </div>
                </div>
            </div>
        </section>
        <div class="pt-40 section-padding-1">
            <div class="three-section peach">
                <div class="container py-md-4">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-4">
                                <h2>Working Approach</h2>
                                <p>A stack of highly-skilled passionate individuals working in sync to offer you a preeminent experience. Formerly having a stand in printing allows us to cater your needs. Let’s walk you through our regimen.</p>
                                <div class="service-wrap mb-4">
                                    <div class="service-content">
                                        <h3 class="fw-600">1. Client Consultation</h3>
                                        <p>A 100% independent business opportunity with access to chhapai.in systems to trade with any print store.</p>
                                    </div>
                                </div>
                                <div class="service-wrap mb-4">
                                    <div class="service-content">
                                        <h3 class="fw-600">2. Illustrative Design</h3>
                                        <p>Getting you illustrative creatives is the second step to help you elevate your business. In Illustrative designs we are busing looking at layout & concepts & developing rough sketches.</p>
                                    </div>
                                </div>
                                <div class="service-wrap mb-3">
                                    <div class="service-content">
                                        <h3 class="fw-600">3. Design Development</h3>
                                        <p>After developing rough sketches it’s time to hear back from you and consider the practicalities of implementing the concept. A yes from you for the illustrative design, will set the rest in motion.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <img src="assets/images/working-approach.jpg" alt="Working approach" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="pricing py-5">
            <div class="container">
                <div class="text-center">
                    <h1 class="title">Pick the plan that's right for you.</h1>
                    <p class="sub-title fw-600">Choose a plan to help cater  your business needs to the digital platforms. <br class="d-none d-md-block">We have structured these plans to help grow our business online.</p>
                </div>
                <div class="mt-30">
                    <!-- Price tabs -->
                    <ul class="nav nav-tabs price_tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active show" data-toggle="tab" href="#monthly_price">Monthly <span class="d-none d-sm-inline-block">Payment</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#annual_price">Annual <span class="d-none d-sm-inline-block">Payment</span></a>
                        </li>
                    </ul>
                    <!-- Price Tab panes -->
                    <div class="tab-content">
                        <div id="monthly_price" class="tab-pane fade active show">
                            <div class="row mt-5 justify-content-center gutters-2">
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="price_item">
                                        <p class="text-center">Business Starter</p>
                                        <h2 class="price">
                                            <sup class="price_symble">₹</sup>19,990<span class="per_month">/</span><sub>mo</sub>
                                        </h2>
                                        <ul class="list-unstyled p_list">
                                            <li><i class="fa fa-check"></i>1 Video Post Per Week</li>
                                            <li><i class="fa fa-check"></i>1 image post per week</li>
                                            <li><i class="fa fa-check"></i>Sourcing of content</li>
                                            <li><i class="fa fa-check"></i>Optimised posting plan</li>
                                            <li><i class="fa fa-check"></i>Graphic design of images</li>
                                            <li><i class="fa fa-check"></i>Facebook, Twitter, Instagram</li>
                                            <li><i class="fa fa-check"></i>Dedicated account manager</li>
                                            <li><i class="fa fa-close"></i>Monthly blogs</li>
                                            <li><i class="fa fa-close"></i>Monthly activity report</li>
                                            <li><i class="fa fa-close"></i>Logo branding included</li>
                                            <li><i class="fa fa-close"></i>Quarterly analytical report</li>
                                            <li><i class="fa fa-close"></i>Youtube Management</li>
                                        </ul>
                                        <div class="oppi_btn_group text-center">
                                            <a href="#" class="btn btn-outline btn-block">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="price_item popular">
                                        <p class="text-center">Busniess Value</p>
                                        <h2 class="price">
                                            <sup class="price_symble">₹</sup>29,990<span class="per_month">/</span><sub>mo</sub>
                                        </h2>
                                        <ul class="list-unstyled p_list">
                                            <li><i class="fa fa-check"></i>1 Video Post Per Week</li>
                                            <li><i class="fa fa-check"></i>3 image post per week</li>
                                            <li><i class="fa fa-check"></i>Sourcing of content</li>
                                            <li><i class="fa fa-check"></i>Optimised posting plan</li>
                                            <li><i class="fa fa-check"></i>Graphic design of images</li>
                                            <li><i class="fa fa-check"></i>Facebook, Twitter, Instagram, Pinterest, Linkedin</li>
                                            <li><i class="fa fa-check"></i>Dedicated account manager</li>
                                            <li><i class="fa fa-check"></i>2 blogs per month blogs</li>
                                            <li><i class="fa fa-check"></i>Monthly activity report</li> 
                                            <li><i class="fa fa-close"></i>Logo branding included</li>
                                            <li><i class="fa fa-close"></i>Quarterly analytical report</li>
                                            <li><i class="fa fa-close"></i>Youtube Management</li>
                                        </ul>
                                        <div class="oppi_btn_group text-center">
                                            <a href="#" class="btn btn-secondary btn-block">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="price_item">
                                        <p class="text-center">Business Bonus</p>
                                        <h2 class="price">
                                            <sup class="price_symble">₹</sup>39,990<span class="per_month">/</span><sub>mo</sub>
                                        </h2>
                                        <ul class="list-unstyled p_list">
                                            <li><i class="fa fa-check"></i>2 Video Post Per Week</li>
                                            <li><i class="fa fa-check"></i>4 image post per week</li>
                                            <li><i class="fa fa-check"></i>Sourcing of content</li>
                                            <li><i class="fa fa-check"></i>Optimised posting plan</li>
                                            <li><i class="fa fa-check"></i>Graphic design of images</li>
                                            <li><i class="fa fa-check"></i>Facebook, Twitter, Instagram, Pinterest, Linkedin</li>
                                            <li><i class="fa fa-check"></i>Dedicated account manager</li>
                                            <li><i class="fa fa-check"></i>3 blogs per month blogs</li>
                                            <li><i class="fa fa-check"></i>Monthly activity report</li> 
                                            <li><i class="fa fa-close"></i>Logo branding included</li>
                                            <li><i class="fa fa-close"></i>Quarterly analytical report</li>
                                            <li><i class="fa fa-close"></i>Youtube Management</li>
                                        </ul>
                                        <div class="oppi_btn_group text-center">
                                            <a href="#" class="btn btn-outline btn-block">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="annual_price" class="tab-pane fade">
                                <div class="row mt-5 justify-content-center gutters-2">
                                    <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                                        <div class="price_item">
                                            <p class="text-center">Starter</p>
                                            <h2 class="price">
                                                <sup class="price_symble">$</sup>122<span class="per_month">/</span><sub>Yr</sub>
                                            </h2>
                                            <ul class="list-unstyled p_list">
                                                <li><i class="fa fa-check"></i>Web site Analysis</li>
                                                <li><i class="fa fa-check"></i>Increase traffic 100%</li>
                                                <li><i class="fa fa-check"></i>10 Free Optimization</li>
                                                <li><i class="fa fa-close"></i>Online 24/7 support</li>
                                                <li><i class="fa fa-close"></i>Monthly Gifts</li>
                                            </ul>
                                            <div class="oppi_btn_group text-center">
                                                <a href="#" class="btn btn-outline btn-block">Get Started</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                                        <div class="price_item popular">
                                            <p class="text-center">Basic</p>
                                            <h2 class="price">
                                                <sup class="price_symble">$</sup>149<span class="per_month">/</span><sub>Yr</sub>
                                            </h2>
                                            <ul class="list-unstyled p_list">
                                                <li><i class="fa fa-check"></i>Web site Analysis</li>
                                                <li><i class="fa fa-check"></i>Increase traffic 100%</li>
                                                <li><i class="fa fa-check"></i>10 Free Optimization</li>
                                                <li><i class="fa fa-check"></i>Online 24/7 support</li>
                                                <li><i class="fa fa-close"></i>Monthly Gifts</li>
                                            </ul>
                                            <div class="oppi_btn_group text-center">
                                                <a href="#" class="btn btn-secondary btn-block">Get Started</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                                        <div class="price_item">
                                            <p class="text-center">Company</p>
                                            <h2 class="price">
                                                <sup class="price_symble">$</sup>179<span class="per_month">/</span><sub>Yr</sub>
                                            </h2>
                                            <ul class="list-unstyled p_list">
                                                <li><i class="fa fa-check"></i>Web site Analysis</li>
                                                <li><i class="fa fa-check"></i>Increase traffic 100%</li>
                                                <li><i class="fa fa-check"></i>10 Free Optimization</li>
                                                <li><i class="fa fa-check"></i>Online 24/7 support</li>
                                                <li><i class="fa fa-check"></i>Monthly Gifts</li>
                                            </ul>
                                            <div class="oppi_btn_group text-center">
                                                <a href="#" class="btn btn-outline btn-block">Get Started</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </section>
</template>