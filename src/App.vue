<template>
  <v-app>
    
    <v-navigation-drawer
    color="primary"
    dark
    permanent
    app
    >

    </v-navigation-drawer>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-headeer>
          Logo
        </v-headeer>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        text
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn
        text
      >
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
