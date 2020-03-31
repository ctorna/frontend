<template>
  <section>
        <div class="breadcrumb-area breadcrumb-bg section-padding-1">
            <div class="container">
                <div class="breadcrumb-content">
                    <div class="breadcrumb-title">
                        <h2>Contact Us</h2>
                    </div>
                    <ul>
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li><span> > </span></li>
                        <li class="active"> Contact Us </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="contact-us-area pt-90 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-7">
                        <div class="contact-form-area">
                            <h2>Get a quote</h2>
                            <form id="contact-form" action="assets/mail-php/mail.php" method="post">
                                <div class="row">
                                    <div class="form-group col-12">
                                        <input name="name" type="text" placeholder="Your Name">
                                    </div>
                                    <div class="form-group col-12">
                                        <input name="email" type="email" placeholder="Your Email">
                                    </div>
                                    <div class="form-group col-12">
                                        <input name="phone" type="text" placeholder="Your Phone">
                                    </div>
                                    <div class="form-group col-12">
                                        <input name="subject" type="text" placeholder="Subject">
                                    </div>
                                    <div class="form-group col-12">
                                        <textarea rows="4" name="message" placeholder="Your Message"></textarea>
                                    </div>
                                    <div class="form-group col-12">
                                        <button class="submit" type="submit">Send</button>
                                    </div>
                                </div>
                            </form>
                            <p class="form-messege"></p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-5">
                        <div class="contact-info-area">
                            <h2>Get Info</h2>
                            <div class="contact-info-top">
                                <div class="sin-contact-info-wrap mb-25">
                                    <div class="contact-icon">
                                        <i class="dlicon business_building"></i>
                                    </div>
                                    <div class="contact-address">
                                        <span>Chhapai Headquarter</span>
                                        <p>Plot No. 163, Industrial Area Phase 1, Chandigarh 160002, India​</p>
                                    </div>
                                </div>
                            </div>
                            <div class="contact-info-bottom">
                                <ul>
                                    <li><i class="dlicon ui-1_email-83"></i>hi@chhapai.com</li>
                                    <li><i class="dlicon ui-3_phone"></i>(+91) 90 4141 9595</li>
                                    <li><i class="dlicon ui-3_phone"></i>(+91) 9878 643 643</li>
                                    <li><i class="dlicon ui-2_time-clock"></i>Mon-Sat 09:00 - 19:00</li>
                                </ul>
                                <div class="contact-info-social">
                                    <a href="https://www.facebook.com/chhapai/" target="_blank"><i class="fa fa-facebook"></i></a>
                                    <a href="https://www.instagram.com/chhapai/" target="_blank"><i class="fa fa-instagram"></i></a>
                                    <a href="https://in.pinterest.com/chhapai/" target="_blank"><i class="fa fa-pinterest-p"></i></a>
                                    <a href="https://www.google.co.in/search?dcr=0&amp;source=hp&amp;ei=Bm-7WvP7LMLTvwSYx5KYAg&amp;q=chhapai.com&amp;oq=chhapai.com&amp;gs_l=psy-ab.3..0.1081.9457.0.9900.14.12.0.1.1.0.248.2309.0j10j2.12.0....0...1c.1.64.psy-ab..1.13.2314.0..38j35i39k1j0i67k1j0i131k1j0i10k1j0i8i30k1.0.62V5XeLKHtE" target="_blank"><i class="fa fa-google-plus"></i></a>
                                    <a href="https://twitter.com/chhapai/" target="_blank"><i class="fa fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </section>
</template>