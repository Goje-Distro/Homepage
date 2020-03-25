<template>
  <div class="vh-100">
    <div class="container-fluid h-100">
      <div class="row fill-height">
        <div class="col-md-4 auth-bg">
          <div class="mt-5 mt-md-8">
            <b-link to="/"
              ><img
                class="mb-3"
                height="40"
                src="~assets/svg/logo.svg"
                alt="Goje Logo"
            /></b-link>
            <p class="text-white">Make your music, Let us be the label</p>
          </div>
        </div>
        <!-- ---------------------------- -->
        <!-- Payment slot -->
        <div class="col-md-8 pt-4 py-lg-5 px-lg-6">
          <!-- <p class="text-right">
            Already a member? Log in <b-link @click="show = !show">here</b-link>
          </p> -->
          <h1 class="mt-4 mb-4 mt-md-6 mb-md-5">Payment</h1>
          <b-form>
            <b-form-row class="my-md-5 my-lg-4 ">
              <div class="col-12 col-lg-6 pr-lg-4">
                <b-form-group
                  id="input-group-1"
                  label="CREDIT CARD NUMBER"
                  label-for="card-number"
                >
                  <b-form-input
                    id="name"
                    class="border-0 bg-light"
                    type="number"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-12 col-lg-6">
                <b-form-group
                  id="input-group-2"
                  label="EXPIRY DATE"
                  label-for="date"
                >
                  <b-form-input
                    id="date"
                    class="border-0 bg-light"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
            </b-form-row>

            <b-form-row class="my-md-5 my-lg-4 ">
              <div class="col-12 col-lg-6 pr-lg-4">
                <b-form-group
                  id="input-group-1"
                  label="NAME ON CARD"
                  label-for="name"
                >
                  <b-form-input
                    id="name"
                    class="border-0 bg-light"
                    type="text"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
            </b-form-row>

            <b-form-row>
              <div class="col-lg-6 pr-lg-4">
                <b-button
                  class="my-md-5 my-lg-4 text-white px-3"
                  block
                  type="submit"
                  variant="primary"
                  >Pay</b-button
                >
              </div>
            </b-form-row>
          </b-form>
        </div>
        <!-- END Payment slot -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'authentication',
  data() {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
.auth-bg {
  background: url('~assets/payment-bg.png') no-repeat;
}
</style>
