<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap >
        <v-flex lg4 sm12 xs12 v-for="item in items" v-bind:key="item.title">
          <profile-card :title="item.title" :text="item.text" :to="item.to">
          </profile-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import ProfileCard from '@/components/widgets/card/ProfileCard';
  import Material from 'vuetify/es5/util/colors';

  export default {
    layout: 'dashboard',
    components: {
      ProfileCard,
    },
    data: () => ({
      color: Material,
      selectedTab: 'tab-1',
      items: {
        concours: {
          title: 'Epreuves',
          text: "Liste des épreuves proposés et validés .",
          to:'/concours/epreuves/'
        },
        Inscription: {
          title: 'Inscription',
          text: "Les dossier d’inscriptions des candidats .",
          to:'/concours/inscription'
        },
        Formation: {
          title: 'Resultats',
          text: "Suivi des résultats du concours .",
          to: '/concours/formation'
        },
      }
    }),
    computed: {
 
    },

  };
</script>
