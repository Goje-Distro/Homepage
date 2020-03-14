<template>
  <div>
    <b-navbar
      :class="{ 'navbar--hidden': !showNavbar }"
      class="bg-navbar"
      fixed="top"
      toggleable="lg"
      type="light"
    >
      <!-- <div class="container-fluid"> -->
      <b-navbar-brand to="/"
        ><b-img
          height="20"
          src="~/assets/svg/logo-black.svg"
          alt="Goje Logo"
        ></b-img
      ></b-navbar-brand>

      <b-navbar-toggle class="border-0" target="nav-collapse"
        ><img src="~/assets/svg/burger-black.svg" alt="burger menu"
      /></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="my-4 my-lg-0" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="mx-auto text-bold mb-4 mb-lg-0">
          <b-nav-item
            class="my-1 my-lg-0 mx-lg-4 rich-link"
            link-classes="px-0"
            active-class="active"
            to="blog"
            >Blog</b-nav-item
          >
          <b-nav-item
            class="my-1 my-lg-0 mx-lg-4 rich-link"
            link-classes="px-0"
            href="#"
            >About Us</b-nav-item
          >
          <b-nav-item
            class="my-1 my-lg-0 mx-lg-4 rich-link"
            link-classes="px-0"
            href="#"
            >FAQs</b-nav-item
          >
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form class="ml-lg-4" href="#"
            ><b-button
              to="auth"
              class="text-white ml-lg-3 px-4"
              variant="primary"
              >Sign Up</b-button
            >
            <b-button class="text-dark ml-lg-3 px-4" variant="outline-primary"
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
const OFFSET = 60
export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      colorNav: false
    }
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    }
  }
}
</script>

<style scoped lang="scss">
.active {
  width: 70%;
  border-bottom: 2px solid white;
}

// .rich-link {
//   &:hover {
//     width: 50%;
//     border-bottom: 2px solid white;
//   }
// }
</style>
