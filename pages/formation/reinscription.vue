<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap >
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import Material from 'vuetify/es5/util/colors';

  export default {
    layout: 'dashboard',
    components: {
    },
    data: () => ({
      color: Material,
      selectedTab: 'tab-1',
    }),
    computed: {
 
    },

  };
</script>s