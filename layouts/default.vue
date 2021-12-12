<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand>
        <!-- <Logo width="200px" height="" /> -->
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="text-white">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/smithing">Smithing</b-nav-item>
          <b-nav-item to="/herblore">Herblore</b-nav-item>
          <b-nav-item to="/fletching">Fletching</b-nav-item>
          <b-nav-item-dropdown text="Crafting">
            <b-dropdown-item to="/jewellry">Jewellry</b-dropdown-item>
            <b-dropdown-item to="/glassblowing">Glassblowing</b-dropdown-item>
          </b-nav-item-dropdown>
          <!-- <b-nav-item to="/jewellry">Jewellry</b-nav-item> -->
          <!-- <b-nav-item to="/magic">Magic</b-nav-item> -->
          <b-nav-item to="/bugs">Report Bug</b-nav-item>
          <b-nav-item to="/suggestions">Suggestions</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container mt-5 pt-5">
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  methods: {},
};
</script>
<style>
</style>