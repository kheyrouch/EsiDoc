<template>
  <div id="pageDashboard">
    <v-container class="mt-5" grid-list-xl fluid >
      <v-layout row wrap >
        <v-flex lg3 sm0 xs0></v-flex>
        <v-flex lg6 sm12 xs12>
            <v-div v-for='not in notification' v-bind:key="not.title">
              <v-flex lg12 sm12 xs12>
              <v-card class="mb-3">
                <v-layout row wrap >
                  <v-flex lg4 sm4 xs4>
                    <v-img src="../static/esidocsv2.png" height="100px" width="100px" alt="hi"></v-img>
                  </v-flex>
                  <v-flex lg8 sm8 xs8>
                    <v-card-title class="text-h5 font-weight-bold" >
                      {{not.title}}
                    </v-card-title>
                    <v-card-text>
                      {{not.text}}
                    </v-card-text>
                    <v-></v->
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
        </v-div>
      </v-flex>
    <v-flex lg3 sm0 xs0></v-flex>  
       
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
      notification: {
        not1: {
          title: 'Les inscriptions sont ouvertes',
          text: "Les inscriptions "
        },
        not2: {
          title: 'Les inscriptions sont ouvertes',
          text: "Les inscriptions "
        }
      }
    }),
    computed: {
 
    },

  };
</script>
<style scoped>
  .list {
    background-color: #fafafa;
  }
</style>