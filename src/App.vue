<template>
  <v-app>
    
    <v-navigation-drawer
    color="primary"
    dark
    permanent
    app
    >
      <v-list>
        <v-subheader>PEPORTS</v-subheader>
        <v-list-item-group
        v-model="selectedItem"
        >
          <v-list-item
            v-for="(item,i) in navListItem"
            :key="i"
            color="white"
          >
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{item.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
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
      selectedItem: 1,
      navListItem: [
        { text: 'Dashboard', icon: 'mdi-poll' },
        { text: '리포트', icon: 'mdi-script-text' },
        { text: '캠페인', icon: 'mdi-cogs' },
        { text: '정산', icon: 'mdi-credit-card-check' },
      ],
    }),
};
</script>
