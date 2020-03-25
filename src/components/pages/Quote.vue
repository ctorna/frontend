<template>
  <section>
    <div class="breadcrumb-area breadcrumb-bg section-padding-1">
      <div class="container">
        <div class="breadcrumb-content">
          <div class="breadcrumb-title">
            <h2>Get a Quote</h2>
          </div>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>></span>
            </li>
            <li class="active">Get a Quote</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="contact-us-area py-3 py-md-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-7">
            <p>
              Please fill out the following form and email us at
              <a href="mailto:hi@chhapai.com">hi@chhapai.com</a>. We will reach out to within 2 working days. Make sure that all the details in the form are correct for us to formulate a correct design strategy and pricing.
            </p>
            <p>
              Still confused? Need help? Reach out to our representative at
              <a href="tel:(+91) 90 4141 9595">(+91) 90 4141 9595</a> to guide you better.
            </p>
            <div class="contact-form-area">
              <form id="contact-form" action="assets/mail-php/mail.php" method="post">
                <div class="row">
                  <div class="form-group col-sm-6 col-12">
                    <label>
                      Category
                      <span class="text-danger">*</span>
                    </label>
                    <select class="form-control">
                      <option value="Premium cards">Premium cards</option>
                    </select>
                  </div>
                  <div class="form-group col-sm-6 col-12">
                    <label>
                      Sub Category
                      <span class="text-danger">*</span>
                    </label>
                    <select class="form-control">
                      <option value="Matt Finish">Matt Finish</option>
                    </select>
                  </div>
                  <div class="form-group col-sm-6 col-12">
                    <label>
                      Quantity
                      <span class="text-danger">*</span>
                    </label>
                    <select class="form-control">
                      <option value="100">100</option>
                      <option value="250">250</option>
                      <option value="500">500</option>
                      <option value="750">750</option>
                      <option value="1000">1000</option>
                      <option value="2000">2000</option>
                      <option value="4000">4000</option>
                    </select>
                  </div>
                  <div class="form-group col-sm-6 col-12">
                    <label>
                      Dimensions
                      <span class="text-danger">*</span>
                    </label>
                    <select class="form-control">
                      <option value="Standard Size (88mmx55mm)">Standard Size (88mmx55mm)</option>
                      <option value="Square Size (65mmx65mm)">Square Size (65mmx65mm)</option>
                    </select>
                  </div>
                  <div class="form-group col-sm-6 col-12">
                    <label>
                      Printing
                      <span class="text-danger">*</span>
                    </label>
                    <select class="form-control">
                      <option value="Single Side">Single Side</option>
                      <option value="Double Side">Double Side</option>
                    </select>
                  </div>
                  <div class="form-group col-sm-6 col-12">
                    <label>
                      Paper
                      <span class="text-danger">*</span>
                    </label>
                    <select class="form-control">
                      <option value="Matt Finish 320gsm">Matt Finish 320gsm</option>
                      <option value="Matt Finish 500gsm">Matt Finish 500gsm</option>
                    </select>
                  </div>
                  <div class="form-group col-sm-6 col-12">
                    <label>
                      Packaging
                      <span class="text-danger">*</span>
                    </label>
                    <select class="form-control"></select>
                  </div>
                  <div class="form-group col-sm-6 col-12">
                    <label>
                      Treatment
                      <span class="text-danger">*</span>
                    </label>
                    <select class="form-control"></select>
                  </div>
                  <div class="form-group col-sm-6 col-12">
                    <label>
                      Delivery Options
                      <span class="text-danger">*</span>
                    </label>
                    <select class="form-control"></select>
                  </div>
                  <div class="form-group col-sm-6 col-12">
                    <label>
                      Design
                      <span class="text-danger">*</span>
                    </label>
                    <select class="form-control">
                      <option value="I have a design">I have a design</option>
                      <option value="Using Template">Using Template</option>
                      <option value="I want to design online">I want to design online</option>
                    </select>
                  </div>
                  <div class="col-lg-12 col-md-12 col-12">
                    <button class="submit" type="submit">Submit</button>
                  </div>
                </div>
              </form>
              <p class="form-messege"></p>
            </div>
          </div>
          <div class="col-lg-4 col-md-5 mt-3 mt-md-0">
            <img src="https://via.placeholder.com/600x900" alt class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>