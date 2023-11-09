<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
            <b-navbar-brand>
                <!-- <Logo width="200px" height="" /> -->
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="text-white">
                    <b-nav-item to="/v2/">Home</b-nav-item>
                    <b-nav-item to="/v2/banks">Banks</b-nav-item>
                    <b-nav-item to="/v2/items">Items</b-nav-item>
                    <b-nav-item to="/v2/smithing">Smithing</b-nav-item>
                    <b-nav-item to="/v2/cooking">Cooking</b-nav-item>
                    <b-nav-item to="/v2/herblore">Herblore</b-nav-item>
                    <b-nav-item to="/v2/fletching">Fletching</b-nav-item>
                    <b-nav-item-dropdown text="Crafting">
                        <b-dropdown-item to="/v2/jewelry">Jewelry</b-dropdown-item>
                        <b-dropdown-item to="/v2/glassblowing">Glassblowing</b-dropdown-item>
                        <b-dropdown-item to="/v2/gemcutting">Gem Cutting</b-dropdown-item>
                        <b-dropdown-item to="/v2/armour">Armour</b-dropdown-item>
                        <b-dropdown-item to="/v2/staves">Staves</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <!-- <b-nav-item to="/v2/combat">Combat</b-nav-item> -->
                    <b-nav-item to="/v2/spells">Alch</b-nav-item>
                    <b-nav-item href="https://pureaccounts.me/" target="_blank">Accounts</b-nav-item>
                    <b-nav-item-dropdown text="Feedback">
                        <b-nav-item to="/bugs">Report Bug</b-nav-item>
                        <b-nav-item to="/suggestions">Suggestions</b-nav-item>
                    </b-nav-item-dropdown>
                    <!-- <b-nav-item to="/v1">v1</b-nav-item> -->
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <a href="https://www.buymeacoffee.com/thepure12" target="_blank"><img
                            src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee"
                            style="height: 40px !important;"></a>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <div class="container mt-5 pt-5">
            <template v-if="$route.name !== 'v2'">
                <h5>{{ title }}</h5>
            </template>
            <Nuxt />
        </div>
    </div>
</template>
<script>
export default {
    name: "LayoutV2",
    methods: {
    },
    computed: {
        title() {
            return this.$route.name.split("-").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ")
        }
    }
};
</script>
<style></style>