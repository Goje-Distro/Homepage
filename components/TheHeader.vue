<template>
  <div>
    <b-navbar
      :class="{ 'navbar--hidden': !showNavbar }"
      class="bg-transparent"
      fixed="top"
      toggleable="lg"
      type="dark"
    >
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
          <b-nav-item
            class="mx-4 rich-link"
            link-classes="px-0"
            active-class="active"
            to="blog"
            >Blog</b-nav-item
          >
          <b-nav-item class="mx-4 rich-link" link-classes="px-0" href="#"
            >About Us</b-nav-item
          >
          <b-nav-item class="mx-4 rich-link" link-classes="px-0" href="#"
            >FAQs</b-nav-item
          >
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form class="ml-4" href="#"
            ><b-button to="auth" class="ml-3 text-white px-4" variant="primary"
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
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
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
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return
      }

      // Here we determine whether we need to show or hide the navbar
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition

      if (currentScrollPosition > 30) {
        this.colorNav = true
      }
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
