<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="primary">
      <!-- <div class="container-fluid"> -->
      <b-navbar-brand href="#"
        ><b-img src="~/assets/logo.svg" fluid alt="Responsive image"></b-img
      ></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="ml-4" href="#">Blog</b-nav-item>
          <b-nav-item class="ml-4" href="#">About Us</b-nav-item>
          <b-nav-item class="ml-4" href="#">FAQs</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <!-- </div> -->
    </b-navbar>
  </div>
</template>

<script>
// import { BNavbar, BNavbarNav, BNavbarBrand, BNavbarToggle } from 'bootstrap-vue'
export default {
  // components: {
  //   BNavbar,
  //   BNavbarNav,
  //   BNavbarBrand,
  //   BNavbarToggle
  // }
}
</script>

<style scoped></style>
