<template>
  <div class="vh-100">
    <div class="container-fluid h-100">
      <div class="row fill-height">
        <div class="col-md-4 auth-bg">
          <div class="mt-8">
            <img class="mb-3" height="40" src="~assets/svg/logo.svg" alt="" />
            <p class="text-white">Make your music, Let us be the label</p>
          </div>
        </div>
        <!-- ---------------------------- -->
        <div class="col-md-8 py-5 px-7">
          <p class="text-right">
            Already a member? Log in <b-link to="/">here</b-link>
          </p>
          <h1 class="mt-6 mb-5">Sign Up</h1>
          <b-form>
            <b-form-row>
              <div class="col pr-4">
                <b-form-group
                  id="input-group-1"
                  label="NAME"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    class="border-0 bg-light"
                    type="text"
                    placeholder="Enter your name"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col">
                <b-form-group
                  id="input-group-2"
                  label="EMAIL"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    class="border-0 bg-light"
                    placeholder="Enter your email"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
            </b-form-row>

            <b-button class="text-white px-3" type="submit" variant="primary"
              >Sign up for just N7k/year</b-button
            ></b-form
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'authentication'
}
</script>

<style scoped>
.auth-bg {
  background: url('~assets/authentication-bg.png') no-repeat;
}
</style>
