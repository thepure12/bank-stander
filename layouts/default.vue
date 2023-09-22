<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand>
        <!-- <Logo width="200px" height="" /> -->
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="text-white">
          <b-nav-item to="/v1/">Home</b-nav-item>
          <b-nav-item to="/v1/smithing">Smithing</b-nav-item>
          <b-nav-item to="/v1/Cooking">Cooking</b-nav-item>
          <b-nav-item to="/v1/herblore">Herblore</b-nav-item>
          <b-nav-item to="/v1/fletching">Fletching</b-nav-item>
          <b-nav-item-dropdown text="Crafting">
            <b-dropdown-item to="/v1/jewellry">Jewellry</b-dropdown-item>
            <b-dropdown-item to="/v1/glassblowing">Glassblowing</b-dropdown-item>
            <b-dropdown-item to="/v1/gemcutting">Gem Cutting</b-dropdown-item>
            <b-dropdown-item to="/v1/armour">Armour</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/v1/combat">Combat</b-nav-item>
          <!-- <b-nav-item to="/magic">Magic</b-nav-item> -->
          <b-nav-item to="/bugs">Report Bug</b-nav-item>
          <b-nav-item to="/suggestions">Suggestions</b-nav-item>
          <b-nav-item to="/v2">v2</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container mt-5 pt-5">
      <template v-if="$route.name !== 'index'">
        <h5>{{ $route.name.charAt(0).toUpperCase() + $route.name.slice(1) }}</h5>
        <!-- <b-form-checkbox name="check-button" class="mb-1" switch>
          Expande All
        </b-form-checkbox> -->
      </template>
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  methods: {},
};
</script>
<style></style>