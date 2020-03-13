<template>
  <div>
    <b-navbar class="" fixed="top" toggleable="lg" type="dark" variant="dark">
      <!-- <div class="container-fluid"> -->
      <b-navbar-brand to="/"
        ><b-img src="~/assets/svg/logo.svg" fluid alt="Goje Logo"></b-img
      ></b-navbar-brand>

      <b-navbar-toggle class="border-0" target="nav-collapse"
        ><img src="~/assets/svg/burger.svg" alt="burger menu"
      /></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="mx-auto text-bold">
          <b-nav-item class="ml-4" to="blog">Blog</b-nav-item>
          <b-nav-item class="ml-4" href="#">About Us</b-nav-item>
          <b-nav-item class="ml-4" href="#">FAQs</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form class="ml-4" href="#"
            ><b-button class="ml-3 text-white px-4" variant="primary"
              >Sign Up</b-button
            >
            <b-button class="ml-3 text-white px-4" variant="outline-primary"
              >Login</b-button
            ></b-nav-form
          >
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

<style scoped lang="scss">
// .navbar {
//   .navbar-inner {
//     background-color: #000000;
//     background-image: none;
//   }
// }
</style>
