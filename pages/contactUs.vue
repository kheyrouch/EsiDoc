<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap >
        <v-flex lg12 sm12 xs12>
        <v-card >
                <v-card-title class="card-title" color="primary" >
                    Contactez-nous
                </v-card-title>
                <v-divider light class="divider"></v-divider>
                <v-card-text>
                    <v-container>
                        <v-row no-gutters justify="center" class='home' align-content="center">
                            <v-col align-self="center" sm="12">
                                <v-text-field
                                    type="email"
                                    ref="email"
                                    v-model= "email"
                                    dense
                                    label="Email"
                                    :rules="[emailRules.required, emailRules.valid]"
                                ></v-text-field>
                            </v-col>
                            <v-col sm="12" >
                                <v-textarea
                                    type="text"
                                    label="Message"
                                    v-model="message"
                                    rows= "5"
                                    :rules="[textRules.required]"
                                    counter
                                >
                                </v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions class="pl-5 pr-5">
                  <v-btn block color="primary" type="submit" @click="handleClick">
                      Envoyer
                  </v-btn>
                </v-card-actions> 
            </v-card>
        </v-flex>
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
      email: '',
      message: '',
      emailRules: {
          required: v=> !!v || 'E-mail is required',
          valid: v => /.+@.+/.test(v) || 'E-mail must be valid',
      },
      textRules: {
          required: (value) => !!value || `Description required`
      }

    }),
    computed: {
 
    },

  };
</script>

<style scoped>
    .card-title {
        /* color: black; */
        justify-content: center;
        font-weight: bold;
        font-size: 32px;
        padding-bottom: 30px;
    }

    .divider {
        /* color: black; */
        border: solid 1px ; 
    }
</style>