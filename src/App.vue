<template>
  <v-app>
    <v-app-bar app dark clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Logo</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon>mdi-open-in-new</v-icon>
        
      </v-btn>
      <!-- 사용자 -->
      <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            x-large
            v-on="on"
          >
            <v-avatar
              color="red"
              size="48"
            >
              <span class="white--text text-h5">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="red"
              >
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Disconnect
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
      <!-- 사용자버튼 끝 -->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute clipped dark permanent app>
      <v-list nav>
        <v-subheader>PEPORTS</v-subheader>
        <v-list-item-group v-model="selectedItem">
          <v-list-item
            v-for="item in navListItem"
            :key="item.text"
            color="white"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <!-- <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template> -->
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: null,
    navListItem: [
      { text: "Dashboard", icon: "mdi-poll" },
      { text: "리포트", icon: "mdi-script-text" },
      { text: "캠페인", icon: "mdi-cogs" },
      { text: "정산", icon: "mdi-credit-card-check" },
    ],
    user:{
      initials: 'JD',
      fullName:'John Doe',
      email:'john.deo@doe.ccom',
    }
  }),
};
</script>
