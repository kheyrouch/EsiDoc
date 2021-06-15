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
          title: 'Concours',
          text: "Organisation du concours d’accès à l’école doctorale",
          to:'/concours/main'
        },
        Inscription: {
          title: 'Inscription',
          text: "Suivre l’inscription des étudiants",
          to:'/inscription/main'
        },
        Formation: {
          title: 'Formation',
          text: "Suivi de la formation doctorale",
          to: '/formation/main'
        },
        Stage: {
          title: 'Stage',
          text: "Traitement des dossiers de stages",
          to: '/stages/main'
        },
        Soutenance: {
          title: 'Soutenance',
          text: "Validation des thèses et suivi des soutenances",
          to: '/soutenance/main'
        }
      }
    }),
    computed: {
 
    },

  };
</script>
