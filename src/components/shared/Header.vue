<template>
  <section class="chhp-header">
    <!--header-->
    <!-- Pre Loader -->
    <div class="preloader" :style="{display:getMenuClicked}">
      <div class="loading-center">
        <div class="loading-center-absolute">
          <div class="object object_one"></div>
          <div class="object object_two"></div>
          <div class="object object_three"></div>
        </div>
      </div>
    </div>

    <header class="header-area section-padding-1" ref="class_header_area">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg p-0 justify-content-between">
          <button
            type="button"
            class="navbar-toggler collapsed"
            data-toggle="collapse"
            data-target="#main_menu"
            ref="class_navbar_toggler"
          >
            <span class="navbar-toggler-icon">
              <span class="icon-bar bar1"></span>
              <span class="icon-bar bar2"></span>
              <span class="icon-bar bar3"></span>
            </span>
          </button>
          <div class="logo navbar-brand py-3 mr-0">
            <div class="logo-width">
              <router-link to="/">
                <img src="/assets/images/logo/chhapai_logo.png" alt="logo" />
              </router-link>
            </div>
          </div>
          <div class="collapse navbar-collapse main-menu" id="main_menu">
            <nav>
              <ul class="navbar-nav nav-menu" ref="class_nav_menu">
                <li class="mega-menu full">
                  <a href="#">
                    Business Cards
                    <i class="fa fa-angle-down"></i>
                  </a>
                  <ul>
                    <li>
                      <a class="menu-title" href="#">Premium Cards</a>
                      <ul>
                        <li>
                          <router-link to="/bcard/1" @click.native="scrollToTop()">Matt Finish</router-link>
                        </li>
                        <li>
                          <router-link to="/bcard/2" @click.native="scrollToTop()">Soft Suede Finish</router-link>
                        </li>
                        <li>
                          <router-link to="/bcard/3" @click.native="scrollToTop()">Texture Finish</router-link>
                        </li>
                        <li>
                          <router-link to="/bcard/4" @click.native="scrollToTop()">Uncoated Finish</router-link>
                        </li>
                        <li>
                          <router-link to="/bcard/5" @click.native="scrollToTop()">Pearl Finish</router-link>
                        </li>
                        <li>
                          <router-link to="/bcard/6" @click.native="scrollToTop()">Sandwich Finish</router-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a class="menu-title" href="#">Enviro Cards</a>
                      <ul>
                        <li>
                          <router-link to="/bcard/7" @click.native="scrollToTop()">Brown Kraft</router-link>
                        </li>
                        <li>
                          <router-link to="/bcard/12" @click.native="scrollToTop()">100% Recycle</router-link>
                        </li>
                        <li>
                          <router-link to="/bcard/10" @click.native="scrollToTop()">Wool Finish</router-link>
                        </li>
                        <li>
                          <router-link to="/bcard/8" @click.native="scrollToTop()">Black Suede</router-link>
                        </li>
                        <li>
                          <router-link to="/bcard/1" @click.native="scrollToTop()">Gray Uncoated</router-link>
                        </li>
                        <li>
                          <router-link to="/bcard/9" @click.native="scrollToTop()">Color Cards</router-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a class="menu-title" href="#">Bespoke Cards</a>
                      <ul>
                        <li>
                          <router-link to="/bcard/14" @click.native="scrollToTop()">Electroplated</router-link>
                        </li>
                        <li>
                          <router-link to="/bcard/16" @click.native="scrollToTop()">Embossed</router-link>
                        </li>
                        <li>
                          <router-link
                            to="/bcard/18"
                            @click.native="scrollToTop()"
                          >Embossed Spot Gloss</router-link>
                        </li>
                        <li>
                          <router-link to="/bcard/15" @click.native="scrollToTop()">Foiling</router-link>
                        </li>
                        <li>
                          <router-link to="/bcard/17" @click.native="scrollToTop()">Letterpress</router-link>
                        </li>
                        <li>
                          <router-link to="/bcard/13" @click.native="scrollToTop()">Edgepaint</router-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a class="menu-title" href="#">Unique Cards</a>
                      <ul>
                        <li>
                          <router-link
                            to="/bcard/1"
                            @click.native="scrollToTop()"
                          >Laser Cut Shaped Cards</router-link>
                        </li>
                        <li>
                          <router-link to="/bcard/1" @click.native="scrollToTop()">Wood Cards</router-link>
                        </li>
                        <li>
                          <router-link to="/bcard/1" @click.native="scrollToTop()">Acrylic Cards</router-link>
                        </li>
                        <li>
                          <router-link to="/bcard/1" @click.native="scrollToTop()">Board Cards</router-link>
                        </li>
                      </ul>
                    </li>
                    <li class="d-none d-lg-block">
                      <div class="banner-menu-content-wrap default-overlay">
                        <router-link to="/bcard/1" @click.native="scrollToTop()">
                          <img
                            src="https://chhapai.com/wp-content/uploads/2019/08/Sample-Pack.jpg"
                            alt="banner"
                          />
                        </router-link>
                        <div class="banner-menu-content">
                          <router-link to="/bcard/1" @click.native="scrollToTop()">
                            <h2>
                              Sample
                              <br />Pack
                            </h2>
                          </router-link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="mega-menu big">
                  <a href="#">
                    Design
                    <i class="fa fa-angle-down"></i>
                  </a>
                  <ul>
                    <li>
                      <router-link to="/bcardsdesign" @click.native="scrollToTop()">
                        <img src="https://chhapai.com/wp-content/uploads/2019/04/1-2.jpg" />
                        <span>Business Cards Design</span>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/cardlogodesign" @click.native="scrollToTop()">
                        <img src="https://chhapai.com/wp-content/uploads/2018/02/wool.jpeg" />
                        <span>Business Cards + Logo Design</span>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/bcard/1" @click.native="scrollToTop()">
                        <img
                          src="https://chhapai.com/wp-content/uploads/2019/08/Our-Template_2-1.png"
                        />
                        <span>Design Using Templates</span>
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li class="mega-menu big">
                  <router-link to="/bcard/1" @click.native="scrollToTop()">
                    Good Things
                    <i class="fa fa-angle-down"></i>
                  </router-link>
                  <ul>
                    <li>
                      <router-link to="/notebooks" @click.native="scrollToTop()">
                        <img
                          src="https://chhapai.com/wp-content/uploads/2018/07/WhatsApp-Image-2019-03-13-at-4.34.15-PM-6.jpeg"
                        />
                        <span>Notebooks</span>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/coasters" @click.native="scrollToTop()">
                        <img src="https://chhapai.com/wp-content/uploads/2019/05/2-2.jpg" />
                        <span>Coasters</span>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/accessories" @click.native="scrollToTop()">
                        <img
                          src="https://chhapai.com/wp-content/uploads/2019/04/WhatsApp-Image-2019-04-01-at-2.29.34-AM-2.jpeg"
                        />
                        <span>Accessories</span>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/cardholders" @click.native="scrollToTop()">
                        <img src="https://chhapai.com/wp-content/uploads/2019/04/DSC08624.jpg" />
                        <span>Business Card Holders</span>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/stationary" @click.native="scrollToTop()">
                        <img
                          src="https://chhapai.com/wp-content/uploads/2019/04/WhatsApp-Image-2019-04-02-at-11.39.13-PM-6.jpeg"
                        />
                        <span>Stationery Box</span>
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li class="mega-menu">
                  <router-link to="/bcard/1" @click.native="scrollToTop()">
                    Help
                    <i class="fa fa-angle-down"></i>
                  </router-link>
                  <ul>
                    <li>
                      <router-link to="/faq" class="menu-title" @click.native="scrollToTop()">FAQ’s</router-link>
                      <ul>
                        <li>
                          <router-link to="/howToOrder" @click.native="scrollToTop()">How to Order</router-link>
                        </li>
                        <li>
                          <router-link to="/fileSetup" @click.native="scrollToTop()">File Setup</router-link>
                        </li>
                        <li>
                          <router-link to="/tracking" @click.native="scrollToTop()">Tracking</router-link>
                        </li>
                        <li>
                          <router-link to="/treatments" @click.native="scrollToTop()">Treatments</router-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a class="menu-title" href="#">Get in Touch</a>
                      <ul>
                        <li>
                          <router-link to="/quote" @click.native="scrollToTop()">Get a Quote</router-link>
                        </li>
                        <li>
                          <router-link to="/filesetup" @click.native="scrollToTop()">File Setup</router-link>
                        </li>
                        <li>
                          <router-link to="/about" @click.native="scrollToTop()">About</router-link>
                        </li>
                        <li>
                          <router-link to="/contact" @click.native="scrollToTop()">Contact</router-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <router-link
                        to="/bcard/1"
                        class="menu-title"
                        @click.native="scrollToTop()"
                      >Become a Partner</router-link>
                      <ul>
                        <li>
                          <router-link to="/bcard/1" @click.native="scrollToTop()">Franchise</router-link>
                        </li>
                        <li>
                          <router-link to="/bcard/1" @click.native="scrollToTop()">Reseller</router-link>
                        </li>
                      </ul>
                    </li>
                    <li class="d-none d-lg-block">
                      <div class="banner-menu-content-wrap default-overlay">
                        <router-link to="/bcard/1" @click.native="scrollToTop()">
                          <img
                            src="https://chhapai.com/wp-content/uploads/2019/04/DSC08624.jpg"
                            alt="banner"
                          />
                        </router-link>
                        <!-- <div class="banner-menu-content">
                                                        <h2>Lorem <br>Ipsum</h2>
                        </div>-->
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div class="hamburger">
            <div class="header-right-wrap header-right-flex">
              <div class="same-style header-wishlist">
                <a href="login-register.html">
                  <i class="dlicon users_man-23"></i>
                </a>
              </div>
              <div class="same-style cart-wrap">
                <a href="#" class="cart-active" ref="class_cart_active">
                  <i class="dlicon shopping_bag-20"></i>
                  <span class="count-style">{{getCartTotal}}</span>
                </a>
              </div>
              <!-- <div class="same-style header-search">
                                    <a class="search-active" href="#" ref="class_search_active">
                                        <i class="dlicon ui-1_zoom"></i>
                                    </a>
              </div>-->
            </div>
          </div>
        </nav>
      </div>
    </header>

    <!-- search start -->
    <div class="search-content-wrap main-search-active" ref="class_main_search_active">
      <a class="search-close" ref="class_search_close">
        <i class="dlicon ui-1_simple-remove"></i>
      </a>
      <div class="search-content">
        <p>Start typing and press Enter to search</p>
        <form class="search-form" action="#">
          <input type="text" placeholder="Search" />
          <button class="button-search">
            <i class="dlicon ui-1_zoom"></i>
          </button>
        </form>
      </div>
    </div>
    <!-- mini cart start -->
    <div class="sidebar-cart-active" ref="class_sidebar_cart_active">
      <div class="sidebar-cart-all">
        <a class="cart-close" href="#" ref="class_cart_close">
          <i class="dlicon ui-1_simple-remove"></i>
        </a>
        <div class="cart-content">
          <h3>Shopping Cart</h3>

          <ul>
            <li
              class="single-product-cart"
              v-for="(product,key,index) in getCartProducts"
              :key="index"
            >
              <div class="cart-img">
                <a href="#">
                  <img src="/assets/images/cart/cart-1.jpg" alt />
                </a>
              </div>
              <div class="cart-title">
                <h4>
                  <a href="#">{{product.label}}</a>
                </h4>
                <span
                  v-if="typeof product.qPrice !=='undefined'"
                >{{product.quantity}} × ₹{{product.qPrice.ppc}} = ₹{{product.qPrice.price}}</span>
                <span v-else>1 × ₹{{product.price}} = ₹{{product.price}}</span>
              </div>
              <div class="cart-delete">
                <a href="#" @click="_removeProductFromCart(index)">×</a>
              </div>
            </li>
          </ul>
          <div class="cart-total">
            <h4>
              Subtotal:
              <span>₹{{getCartPrice}}</span>
            </h4>
          </div>
          <div class="cart-checkout-btn">
            <a class="btn-hover cart-btn-style" href="cart.html" v-if="false">view cart</a>
            <a
              class="no-mrg btn-hover cart-btn-style"
              @click.prevent="navigateToCheckout()"
            >checkout</a>
          </div>
        </div>
      </div>
    </div>
    <!-- aside start -->
    <div class="header-aside-active" ref="class_header_aside_active">
      <div class="header-aside-wrap">
        <a class="aside-close" ref="class_aside_close">
          <i class="dlicon ui-1_simple-remove"></i>
        </a>
        <div class="header-aside-content">
          <div class="mobile-menu-area">
            <div class="mobile-search">
              <form class="search-form" action="#">
                <input type="text" placeholder="Search entire store…" />
                <button class="button-search">
                  <i class="dlicon ui-1_zoom"></i>
                </button>
              </form>
            </div>
            <div class="mobile-menu-wrap">
              <!-- mobile menu start -->
              <div class="mobile-navigation">
                <!-- mobile menu navigation start -->
                <nav>
                  <ul class="mobile-menu">
                    <li class="menu-item-has-children">
                      <a href="index.html">Home</a>
                      <ul class="dropdown">
                        <li class="menu-item-has-children">
                          <a href="#">Demo Group 01</a>
                          <ul class="dropdown">
                            <li>
                              <a href="index.html">Home 01</a>
                            </li>
                            <li>
                              <a href="index-2.html">Home 02</a>
                            </li>
                            <li>
                              <a href="index-3.html">Home 03</a>
                            </li>
                            <li>
                              <a href="index-4.html">Home 04</a>
                            </li>
                            <li>
                              <a href="index-5.html">Home 05</a>
                            </li>
                            <li>
                              <a href="index-6.html">Home 06</a>
                            </li>
                          </ul>
                        </li>
                        <li class="menu-item-has-children">
                          <a href="#">Demo Group 02</a>
                          <ul class="dropdown">
                            <li>
                              <a href="index-7.html">Home 07</a>
                            </li>
                            <li>
                              <a href="index-8.html">Home 08</a>
                            </li>
                            <li>
                              <a href="index-9.html">Home 09</a>
                            </li>
                            <li>
                              <a href="index-10.html">Home 10</a>
                            </li>
                            <li>
                              <a href="index-11.html">Home 11</a>
                            </li>
                            <li>
                              <a href="index-12.html">Home 12</a>
                            </li>
                          </ul>
                        </li>
                        <li class="menu-item-has-children">
                          <a href="#">Demo Group 03</a>
                          <ul class="dropdown">
                            <li>
                              <a href="index-13.html">Home 13</a>
                            </li>
                            <li>
                              <a href="index-14.html">Home 14</a>
                            </li>
                            <li>
                              <a href="index-15.html">Home 15</a>
                            </li>
                            <li>
                              <a href="index-16.html">Home 16</a>
                            </li>
                            <li>
                              <a href="index-17.html">Home 17</a>
                            </li>
                            <li>
                              <a href="index-18.html">Home 18</a>
                            </li>
                            <li>
                              <a href="index-19.html">Home 19</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul class="dropdown">
                        <li>
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="contact-us.html">Contact Page</a>
                        </li>
                        <li>
                          <a href="404.html">404 Page</a>
                        </li>
                        <li>
                          <a href="comming-soon.html">Comming Soon 01</a>
                        </li>
                        <li>
                          <a href="comming-soon-2.html">Comming Soon 02</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="shop-fullwide.html">shop</a>
                      <ul class="dropdown">
                        <li class="menu-item-has-children">
                          <a href="#">Shop Layout</a>
                          <ul class="dropdown">
                            <li>
                              <a href="shop-fullwide.html">Shop Fullwidth</a>
                            </li>
                            <li>
                              <a href="shop-sidebar.html">Shop Sidebar</a>
                            </li>
                            <li>
                              <a href="shop-metro.html">Shop Metro Layout</a>
                            </li>
                            <li>
                              <a href="shop-3-col.html">Shop 03 Columns</a>
                            </li>
                            <li>
                              <a href="shop-2-col.html">Shop 02 Columns</a>
                            </li>
                            <li>
                              <a href="shop-collection-1.html">Shop Collection 01</a>
                            </li>
                            <li>
                              <a href="shop-collection-2.html">Shop Collection 02</a>
                            </li>
                          </ul>
                        </li>
                        <li class="menu-item-has-children">
                          <a href="#">Product Layout</a>
                          <ul class="dropdown">
                            <li>
                              <a href="product-details.html">Single 01</a>
                            </li>
                            <li>
                              <a href="product-details-2.html">Single 02</a>
                            </li>
                            <li>
                              <a href="product-details-group.html">Grouped</a>
                            </li>
                            <li>
                              <a href="product-details-sticky.html">Sticky Info</a>
                            </li>
                            <li>
                              <a href="product-details-configurable.html">Configurable</a>
                            </li>
                            <li>
                              <a href="product-details-thumbnail.html">Thumbnail</a>
                            </li>
                            <li>
                              <a href="product-details-video.html">Video</a>
                            </li>
                            <li>
                              <a href="product-details-affiliate.html">Affiliate</a>
                            </li>
                            <li>
                              <a href="product-details-sidebar.html">Sidebar</a>
                            </li>
                          </ul>
                        </li>
                        <li class="menu-item-has-children">
                          <a href="#">Shop Pages</a>
                          <ul class="dropdown">
                            <li>
                              <a href="my-account.html">My Account</a>
                            </li>
                            <li>
                              <a href="checkout.html">Check Out</a>
                            </li>
                            <li>
                              <a href="cart.html">Shopping Cart</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="order-tracking.html">Order Tracking</a>
                            </li>
                            <li>
                              <a href="compare.html">Compare</a>
                            </li>
                            <li>
                              <a href="login-register.html">login / register</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="shop-collection-1.html">Collection</a>
                      <ul class="dropdown">
                        <li>
                          <a href="shop-collection-1.html">Shop Collection 01</a>
                        </li>
                        <li>
                          <a href="shop-collection-2.html">Shop Collection 02</a>
                        </li>
                        <li>
                          <a href="shop-metro.html">Shop Metro Layout</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="blog.html">Blog</a>
                      <ul class="dropdown">
                        <li>
                          <a href="blog.html">Blog Style 01</a>
                        </li>
                        <li>
                          <a href="blog-2.html">Blog Style 02</a>
                        </li>
                        <li>
                          <a href="blog-3.html">Blog Style 03</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Single Post Style 01</a>
                        </li>
                        <li>
                          <a href="blog-details-2.html">Single Post Style 02</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop-instagram.html">Instagram Shop</a>
                    </li>
                  </ul>
                </nav>
                <!-- mobile menu navigation end -->
              </div>
              <!-- mobile menu end -->
            </div>
            <div class="mobile-curr-lang-wrap">
              <div class="single-mobile-curr-lang">
                <a class="mobile-language-active" href="#">
                  Language
                  <i class="fa fa-angle-down"></i>
                </a>
                <div class="lang-curr-dropdown lang-dropdown-active">
                  <ul>
                    <li>
                      <a href="#">English (US)</a>
                    </li>
                    <li>
                      <a href="#">English (UK)</a>
                    </li>
                    <li>
                      <a href="#">Spanish</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="single-mobile-curr-lang">
                <a class="mobile-currency-active" href="#">
                  Currency
                  <i class="fa fa-angle-down"></i>
                </a>
                <div class="lang-curr-dropdown curr-dropdown-active">
                  <ul>
                    <li>
                      <a href="#">USD</a>
                    </li>
                    <li>
                      <a href="#">EUR</a>
                    </li>
                    <li>
                      <a href="#">Real</a>
                    </li>
                    <li>
                      <a href="#">BDT</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="single-mobile-curr-lang">
                <a class="mobile-account-active" href="#">
                  My Account
                  <i class="fa fa-angle-down"></i>
                </a>
                <div class="lang-curr-dropdown account-dropdown-active">
                  <ul>
                    <li>
                      <a href="#">Login</a>
                    </li>
                    <li>
                      <a href="#">Creat Account</a>
                    </li>
                    <li>
                      <a href="my-account.html">My Account</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="header-aside-menu">
            <nav>
              <ul>
                <li>
                  <a href="#">About Toro</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Collection</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">New Look</a>
                </li>
              </ul>
            </nav>
          </div>
          <img src="/assets/images/icon-img/payments.png" alt="payment" />
          <p>Pellentesque mollis nec orci id tincidunt. Sed mollis risus eu nisi aliquet, sit amet fermentum justo dapibus.</p>
          <div class="aside-contact-info">
            <ul>
              <li>
                <i class="dlicon ui-2_time-clock"></i>Monday - Friday: 9:00 - 19:00
              </li>
              <li>
                <i class="dlicon ui-1_email-84"></i>Info@la-studioweb.com
              </li>
              <li>
                <i class="dlicon tech-2_rotate"></i>(+55) 254. 254. 254
              </li>
              <li>
                <i class="dlicon ui-1_home-minimal"></i>Helios Tower 75 Tam Trinh Hoang - Ha Noi - Viet Nam
              </li>
            </ul>
          </div>
          <div class="social-icon-style mb-25">
            <a class="facebook" href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a class="twitter" href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a class="google-plus" href="#">
              <i class="fa fa-google-plus"></i>
            </a>
            <a class="behance" href="#">
              <i class="fa fa-behance"></i>
            </a>
          </div>
          <div class="copyright">
            <p>
              © 2020
              <a href="https://hasthemes.com/">Toro.</a> All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { eventBus } from "../../main";
import { mapActions, mapGetters } from "vuex";
import * as types from "../../store/types";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      removeProductFromCart: types.ACTION_CARTS_REMOVE_PRODUCT,
      actionMenuClicked: "actionMenuClicked"
    }),
    navigateToCheckout() {
      let elem = this.$refs.class_cart_close;
      elem.click();
      this.$router.push({ name: "checkout" });
    },
    _removeProductFromCart(index){
this.removeProductFromCart(index);
if(typeof this.$route.name!=='undefined' && this.$route.name ==='checkout' && this.getCartTotal===0  ){
  let elem = this.$refs.class_cart_close;
      elem.click();
this.$router.push({ name: "home" });

}
    },
    scrollToTop() {
      console.log("scroll to top");
      window.scrollTo(0, 0);
    }
    /*setTransparentBar(value){
}*/
  },
  created() {
    //eventBus.$on('transparentHeaderClass',this.setTransparentBar);
  },
  computed: {
    ...mapGetters({
      getCartProducts: types.CARTS_PRODUCTS,
      getCartPrice: types.CARTS_PRODUCTS_PRICE,
      getCartTotal: types.CARTS_PRODUCTS_Total,
      getMenuClicked: "getMenuClicked"
    })
  },
  mounted: function() {
    eventBus.$on("cartAdded", data => {
      let elem = this.$refs.class_cart_active;
      elem.click();
    });
    /*====== SidebarSearch ======*/
    function sidebarSearch(me) {
      var searchTrigger = jQuery(me.$refs.class_search_active),
        endTriggersearch = jQuery(me.$refs.class_search_close),
        container = jQuery(me.$refs.class_main_search_active);

      searchTrigger.on("click", function(e) {
        e.preventDefault();
        container.addClass("search-visible");
      });

      endTriggersearch.on("click", function() {
        container.removeClass("search-visible");
      });
    }
    sidebarSearch(this);
    /*====== SidebarCart ======*/
    function miniCart(me) {
      var navbarTrigger = jQuery(me.$refs.class_cart_active),
        endTrigger = jQuery(me.$refs.class_cart_close),
        container = jQuery(me.$refs.class_sidebar_cart_active),
        wrapper2 = jQuery(me.$refs.class_main_wrapper);

      wrapper2.prepend('<div class="body-overlay"></div>');

      navbarTrigger.on("click", function(e) {
        e.preventDefault();
        container.addClass("inside");
        wrapper2.addClass("overlay-active");
      });

      endTrigger.on("click", function() {
        container.removeClass("inside");
        wrapper2.removeClass("overlay-active");
      });

      jQuery(".body-overlay").on("click", function() {
        container.removeClass("inside");
        wrapper2.removeClass("overlay-active");
      });
    }
    miniCart(this);

    /*====== QuickInfo ======*/
    function quickInfo(me) {
      var searchTrigger = jQuery(me.$refs.class_header_aside_button),
        endTriggersearch = jQuery(me.$refs.class_aside_close),
        container = jQuery(me.$refs.class_header_aside_active);
      searchTrigger.on("click", function(e) {
        console.log("class_header_aside_button");
        e.preventDefault();
        container.addClass("inside");
      });
      endTriggersearch.on("click", function() {
        container.removeClass("inside");
      });
    }
    quickInfo(this);

    /*====== Fixed Header ======*/
    var header = jQuery(this.$refs.class_header_area);
    jQuery(window).on("scroll", function() {
      if (jQuery(this).scrollTop() > 5) {
        header.addClass("stick");
      } else {
        header.removeClass("stick");
      }
    });

    /*====== Close Menu ======*/
    jQuery(this.$refs.class_navbar_toggler).click(function() {
      jQuery(this).toggleClass("active");
    });
    jQuery(this.$refs.class_nav_menu)
      .find("li a i")
      .click(function() {
        jQuery(this).toggleClass("active");
        jQuery(this)
          .parent()
          .next()
          .slideToggle();
      });
  }
};
</script>