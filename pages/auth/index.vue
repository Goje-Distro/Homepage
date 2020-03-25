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
                alt="Goje logo"
            /></b-link>
            <p class="text-white">Make your music, Let us be the label</p>
          </div>
        </div>
        <!-- ---------------------------- -->
        <!-- Sign up slot -->
        <!-- <transition name="slide-fade"> -->
        <div v-if="show" class="col-md-8 pt-4 py-lg-5 px-lg-6">
          <p class="text-right">
            Already a member? Log in
            <b-link @click="show = !show">here</b-link>
          </p>
          <h1 class="mt-4 mb-4 mt-md-6 mb-md-5">Sign Up</h1>
          <b-form>
            <b-form-row class="my-md-5 my-lg-4 ">
              <div class="col-12 col-lg-6 pr-lg-4">
                <b-form-group id="input-group-1" label="NAME" label-for="name">
                  <b-form-input
                    id="name"
                    class="border-0 bg-light"
                    type="text"
                    placeholder="Enter your name"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-12 col-lg-6">
                <b-form-group
                  id="input-group-2"
                  label="EMAIL"
                  label-for="email"
                >
                  <b-form-input
                    id="email"
                    class="border-0 bg-light"
                    placeholder="Enter your email"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
            </b-form-row>

            <b-form-row class="my-md-5 my-lg-4 ">
              <div class="col-12 col-lg-6 pr-lg-4">
                <b-form-group
                  id="input-group-1"
                  label="PASSWORD"
                  label-for="password"
                >
                  <b-form-input
                    id="password"
                    class="border-0 bg-light"
                    type="password"
                    placeholder="Re-enter your password"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-12 col-lg-6">
                <b-form-group
                  id="input-group-2"
                  label="RE-TYPE PASSWORD"
                  label-for="re-password"
                >
                  <b-form-input
                    id="re-password"
                    class="border-0 bg-light"
                    type="password"
                    placeholder="Enter your password"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
            </b-form-row>

            <b-form-row>
              <div class="col-lg-6">
                <b-button
                  class="my-md-5 my-lg-4 text-white px-3"
                  block
                  type="submit"
                  variant="primary"
                  to="auth/payment"
                  >Sign up for just N7k/year</b-button
                >
              </div>
            </b-form-row>
          </b-form>
        </div>
        <!-- END Sign up slot -->

        <!-- Login slot -->
        <div v-else class="col-md-8 pt-4 py-lg-5 px-lg-6">
          <p class="text-right">
            Not a member? Sign up <b-link @click="show = !show">here</b-link>
          </p>
          <h1 class="mt-4 mb-4 mt-md-6 mb-md-5">Log in</h1>
          <b-form>
            <b-form-group
              id="input-group-2"
              label="EMAIL"
              label-for="email"
              class="my-5"
            >
              <b-form-input
                id="email"
                class="border-0 bg-light"
                placeholder="Enter your email"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="PASSWORD"
              label-for="password"
              class="my-5"
            >
              <b-form-input
                id="password"
                class="border-0 bg-light"
                type="password"
                placeholder="Re-enter your password"
                required
              ></b-form-input>
            </b-form-group>
            <b-button
              class="text-white my-5"
              block
              type="submit"
              variant="primary"
              >Log in</b-button
            >
          </b-form>
        </div>
        <!-- </transition> -->
        <!-- END login slot -->
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
  },
  methods: {
    setData() {
      this.show = false
    }
  },
  beforeRouteEnter(to, from, next) {
    if (to.query.type === 'login') {
      next((vm) => vm.setData())
    }
    next()
  }
}
</script>

<style scoped>
.auth-bg {
  background: url('~assets/authentication-bg.png') no-repeat;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
