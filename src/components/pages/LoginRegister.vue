<template>
    <section>
        <div class="breadcrumb-area breadcrumb-bg section-padding-1">
            <div class="container">
                <div class="breadcrumb-content">
                    <div class="breadcrumb-title">
                        <h2>Login / Register</h2>
                    </div>
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li class="active"> Login / Register </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="login-register-area py-4 py-md-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="login-register-wrap mr-70">
                            <h3><i class="fa fa-user-o"></i> Login</h3>
                            <div class="login-register-form">
                                <form action="#">
                                    <div class="sin-login-register">
                                        <label>Username or email address <span>*</span></label>
                                        <input type="text" name="user-name">
                                    </div>
                                    <div class="sin-login-register">
                                        <label>Password <span>*</span></label>
                                        <input type="password" name="password">
                                    </div>
                                    <div class="login-register-btn-remember">
                                        <div class="login-register-btn">
                                            <button type="submit" class="fw-600">Log in</button>
                                        </div>
                                        <div class="login-register-remember">
                                            <input type="checkbox">
                                            <label>Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#">Lost your password?</a>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="login-register-wrap register-wrap">
                            <h3> <i class="fa fa-user-o"></i> Register</h3>
                            <div class="login-register-form">
                                <form action="#">
                                    <div class="sin-login-register">
                                        <label>Email address <span>*</span></label>
                                        <input type="email" name="email">
                                    </div>
                                    <div class="sin-login-register">
                                        <label>Password <span>*</span></label>
                                        <input type="password" name="password">
                                    </div>
                                    <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="/privacy-policy">privacy policy</a></p>
                                    <div class="login-register-btn">
                                        <button type="submit" class="fw-600">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>