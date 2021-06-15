<template>
  <v-card>
    <v-img height="390">
      <v-layout column class="media ma-0">
        <v-card-title>
          <v-btn icon @click="handleClick">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-card-title>
        <v-spacer></v-spacer>
        <v-card-title class="black--text pl-5 pt-5">
          <div class="display-1 pl-5 pt-5">{{title}}</div>
          <div class="pl-5 pt-5">{{text}}</div>
        </v-card-title>
      </v-layout>
    </v-img>
  </v-card>   
</template>

<script>
export default {

  props: {
    title: 'String',
    text: "String",
    to: 'String'
  },

  methods:{
    handleClick(){
      this.$router.push(this.$props.to);
    }
  }
  
};
</script>
