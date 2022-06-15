<template>
  <v-app>
    <v-app-bar
      color="deep-purple accent-4"
      dense=
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content style="height: 95%">
    <v-data-table
    :headers="headers"
    :items="countries"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      headers: [
          {
            text: 'Countries', value: 'name'
          }
        ],
        countries: [
          {
            name: 'Germany'
          },
          {
            name: 'Spain'
          },
          {
            name: 'Norway'
          }
         ] 
      
      
    }),
  }
</script>
