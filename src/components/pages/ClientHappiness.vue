<template>
  <section>
    <div class="breadcrumb-area breadcrumb-bg section-padding-1 breadcrumb-ptb-4">
      <div class="container">
        <div class="breadcrumb-content">
          <div class="breadcrumb-title">
            <h2>Client’s Happiness Policy</h2>
            <p
              class="mt-2"
            >Chhapai believes in a long-term relationship with you and your happiness. There is great satisfaction in building the best business cards and accessories for you.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-us-area py-3 py-md-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <p>We greatly strive for our customer satisfaction and your bliss! We shall do all things possible things in our hand to make it a blissful experience for you.</p>
            <p>You can aid us a little bit to keep you happy.</p>
            <h3>Aware us</h3>
            <p>with the situation - Fill the Form and inform us about your worry within 7 days of receiving the or</p>
            <h3>Resolution</h3>
            <p>Let us know if you desire a Replacement, we shall work in it. We will surely resolve the situation in the best possible way for your ultimate satisfaction!</p>
            <h3>Time</h3>
            <p>We are here at your service 24/7 and we will definitely get revert you as soon as possible.</p>
            <p>We are grateful that you chose Chhapai.com as your printing companion!</p>
          </div>
          <div class="col-lg-8 mt-3 mt-lg-0">
            <div class="contact-form-area">
              <h3>Need help? – Chhapai at your service</h3>
              <p>Let us know if you have something to share with us or something that is troubling you regarding prints and products. Share your experience with us as soon as possible for a quick and satisfactory solution.</p>
              <form id="contact-form" action="assets/mail-php/mail.php" method="post">
                <div class="row">
                  <div class="form-group col-12">
                    <label>
                      Your Name
                      <span class="text-danger">*</span>
                    </label>
                    <input type="text" name="name" class="form-control" placeholder="John Doe" />
                  </div>
                  <div class="form-group col-12">
                    <label>
                      Your Email Address
                      <span class="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Email (used to log into chhapai)"
                    />
                  </div>
                  <div class="form-group col-12">
                    <label>
                      Your Order Number
                      <span class="text-danger">*</span>
                    </label>
                    <input type="text" name="order-no" class="form-control" placeholder="01123" />
                  </div>
                  <div class="form-group col-12">
                    <label>
                      Type of Error
                      <span class="text-danger">*</span>
                    </label>
                    <select class="form-control">
                      <option value="Select">Select</option>
                      <option value="Design Error">Design Error</option>
                      <option value="Print Quality">Print Quality</option>
                      <option value="Colour">Colour</option>
                      <option value="Finishing">Finishing</option>
                      <option value="Delivery">Delivery</option>
                      <option value="Billing">Billing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div class="form-group col-12">
                    <label>
                      Message
                      <span class="text-danger">*</span>
                    </label>
                    <textarea
                      rows="5"
                      class="form-control"
                      placeholder="Hi there, I would like to ..."
                    ></textarea>
                  </div>
                  <div class="col-lg-12 col-md-12 col-12">
                    <button class="submit" type="submit">Submit</button>
                  </div>
                </div>
              </form>
              <p class="form-messege"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="team-area section-padding-8 pt-100 pb-70 d-none">
      <div class="container-fluid">
        <div class="section-title-9 text-center mb-50">
          <h2>Our Team</h2>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="team-wrap default-overlay tilt-active mb-30">
              <img src="assets/images/team/member-01.jpg" alt="team" />
              <div class="team-content text-center">
                <h4>Florence Moreno</h4>
                <span>Art Director</span>
                <div class="team-social">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-pinterest-p"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="team-wrap default-overlay tilt-active mb-30">
              <img src="assets/images/team/member-02.jpg" alt="team" />
              <div class="team-content text-center">
                <h4>Blake Harrison</h4>
                <span>Art Director</span>
                <div class="team-social">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-pinterest-p"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="team-wrap default-overlay tilt-active mb-30">
              <img src="assets/images/team/member-03.jpg" alt="team" />
              <div class="team-content text-center">
                <h4>Louisa Kelly</h4>
                <span>Art Director</span>
                <div class="team-social">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-pinterest-p"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>