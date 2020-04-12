<template>
  <div>
    <!-- Hero Slider -->
    <div id="slider">
      <div class="pt-10 container text-white text-center">
        <h1 class>
          Make your <span class="text-primary">music</span><br />
          Let us be your label
        </h1>
        <p class="my-5 px-0 px-md-10">
          Every artist deserve Goje, use out the tools to reach millions of fans
          around the world and also monetize your music. Sign up today for just
          &#8358;7,000/year.
        </p>
        <b-button to="auth" class="text-white px-5 py-3" variant="primary"
          >Sign up</b-button
        >
      </div>

      <!-- <hooper class="hooper-wrapper" :wheel-control="false">
        <slide>
          <div
            class="carousel-cell d-flex align-items-center justify-content-center"
          >
            <div
              class="hero-text container position-absolute text-white text-center"
            >
              <h1 class>
                Make your <span class="text-primary">music</span><br />
                Let us be your label
              </h1>
              <p class="my-5 px-0 px-md-10">
                Every artist deserve Goje, use out the tools to reach millions
                of fans around the world and also monetize your music. Sign up
                today for just &#8358;7,000/year.
              </p>
              <b-button to="auth" class="text-white px-5 py-3" variant="primary"
                >Sign up</b-button
              >
            </div>
            <img class="carousel-image" src="~assets/hero.png" />
          </div>
        </slide>
        <slide>
          <div class="carousel-cell">
            <img class="carousel-image" src="~assets/hero.png" />
          </div>
        </slide>

        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper> -->
    </div>

    <!-- Hero intro -->
    <div id="intro" class="container py-7">
      <div class="row">
        <div class="col-md-6">
          <h1 class="text-primary">Why Goje?</h1>
          <p>
            Every artist deserves their big break. Goje provides tools that not
            only distribute your music but make money while doing it.
          </p>
        </div>
        <div class="col-md-6">
          <h1 class="text-primary">How?</h1>
          <p>
            With a flat rate subscription create and manage activities from your
            personalized account.
          </p>
        </div>
      </div>
    </div>

    <!-- Distribute Section -->
    <div id="distribute" class="py-5 bg-primary-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
            <!-- <div> -->
            <h1>Distribute</h1>
            <p class="mb-5">
              What’s a good song without anyone to hear it? Distribute your
              songs across the globe with over 150 streaming platforms.
            </p>
            <b-button
              to="/auth"
              variant="primary"
              size="sm"
              class="text-white px-5 py-3 px-lg-4 py-lg-2"
              >Sign up</b-button
            >
            <!-- </div> -->
          </div>
          <!-- ------------------------------- -->
          <div class="col-md-6 order-2 order-md-1">
            <img
              class="img-fluid mx-auto float-right d-block p-3"
              src="~/assets/distribute-shadow.png"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Create Section -->
    <div id="create" class="container py-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h1>Create</h1>
          <p class="mb-5">
            Connect with the best mix and mastering engineers to make your song
            optimum quality
          </p>
          <b-button
            to="/auth"
            variant="primary"
            size="sm"
            class="text-white px-5 py-3 px-lg-4 py-lg-2"
            >Sign up</b-button
          >
        </div>
        <!-- ------------------------------- -->
        <div class="col-md-6">
          <img
            class="img-fluid mx-auto my-auto d-block p-3"
            src="~/assets/create.png"
          />
        </div>
      </div>
    </div>

    <!-- Promote Section -->
    <div id="promote" class="py-5 bg-primary-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
            <!-- <div> -->
            <h1>Promote</h1>
            <p class="mb-5">
              Upload your music to video hosting services such as VEVO, Amazon
              Video, Apple Music Video, MTV Base and many others!
            </p>
            <b-button
              to="/auth"
              variant="primary"
              size="sm"
              class="text-white px-5 py-3 px-lg-4 py-lg-2"
              >Sign up</b-button
            >
            <!-- </div> -->
          </div>
          <!-- ------------------------------- -->
          <div class="col-md-6 order-2 order-md-1">
            <img
              class="img-fluid mx-auto float-right d-block p-3"
              src="~/assets/promote.png"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Monetize Section -->
    <div id="monetize" class="container-fluid py-5">
      <!-- <div class="container"> -->
      <div class="row align-items-center">
        <div class="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
          <!-- <div> -->
          <h1>Monetize</h1>
          <p class="mb-5 pr-7">
            License your music to moviemakers and brands etc. and break bank
          </p>
          <b-button
            to="/auth"
            variant="primary"
            size="sm"
            class="text-white px-5 py-3 px-lg-4 py-lg-2"
            >Sign up</b-button
          >
          <!-- </div> -->
        </div>
        <!-- ------------------------------- -->
        <div class="col-md-6 order-2 order-md-1">
          <img
            class="img-fluid mx-auto my-auto d-block p-3 float-right"
            src="~/assets/monetize.png"
          />
        </div>
        <!-- </div> -->
      </div>
    </div>

    <!-- Sign up CTA -->
    <div id="sign-up" class="container-fluid text-white">
      <div class="row py-5 bg-primary rounded mx-1">
        <div class="col-12 text-center">
          <h1>Sign up today!</h1>
          <p class="my-4">For just &#8358;7,000 per month</p>
          <b-button
            to="/auth"
            variant="light"
            size="sm"
            class="text-primary px-5 py-3 px-lg-4 py-lg-2"
            >Sign up</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {
// Hooper,
// Slide,
// Navigation as HooperNavigation,
// Pagination as HooperPagination
// } from 'hooper'
// import Flickity from 'vue-flickity'

export default {
  components: {
    // Hooper,
    // Slide,
    // HooperNavigation,
    // HooperPagination
  },
  data() {
    return {
      // flickityOptions: {
      //   fade: true,
      //   // groupCells: true,
      //   freeScroll: false,
      //   draggable: false,
      //   initialIndex: 0,
      //   prevNextButtons: true,
      //   // pageDots: true,
      //   // wrapAround: false,
      //   cellAlign: 'center'
      // }
    }
  }
}
</script>

<style lang="scss">
.hooper-wrapper {
  height: 95vh;
}

.hooper-pagination {
  margin-bottom: 30px;
}

.hooper-indicator {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  margin: 0 15px;
  opacity: 1;
  background: gray;
}

.hooper-indicator.is-active {
  background: white;
  position: relative;
  // padding: 10px;
  &::before {
    content: '';
    display: block;
    // padding: 10px;
    border-radius: 50%;
    position: absolute;
    width: 35px;
    height: 35px;
    left: 50%;
    margin-left: -18px;
    top: 50%;
    margin-top: -18px;
    border: 1px solid white;
  }
}

.promote-carousel-cell {
  width: 60%;
  // height: 160px;
  margin-right: 5px;
}

.carousel-cell {
  width: 100%;
  height: 95vh;
  // margin-right: 10px;
  // display: flex;
  // align-items: center;
  // justify-content: center;
}

.carousel-image {
  width: 100%; /* or any custom size */
  height: 100%;

  display: block;
  object-fit: cover;
}

.hooper-prev .hooper-next {
  left: 15%;
}

.flickity-prev-next-button {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
}

.flickity-prev-next-button:hover {
  background: #ffa96b;
}
.flickity-prev-next-button .arrow {
  fill: white;
  fill-opacity: 0.5;
}
/* position outside */
.flickity-prev-next-button.previous {
  left: 15%;
  top: 70%;
}
.flickity-prev-next-button.next {
  right: 15%;
  top: 70%;
}
.flickity-button {
  @media only screen and (max-width: 640px) {
    display: none;
  }
}
</style>
