<template>
  <v-app>
    <v-container fluid align-center>
      <v-row>
        <v-col
        md="2"
        ></v-col>
        <v-col
        md="8"
        align-center>
          <v-card class="mx-auto">
            <v-img class="white--text align-end" src="@//media/gr_hafen.jpg">
              <v-card-title class="cardTitle">Bremerhaven</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">

            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Bremerhaven, for those who never have been there, is the biggest shithole on earth, where I had to
                spend
                way too much time already. It lies in the very north of beloved Germany, two hours drive from Hamburg
                and
                in
                general it’s a little similar to HH(Hansestatd Hamburg) actually. As HH has the beautiful Elbe,
                Bremerhaven
                got the Weber. But what distinguishes the two then? Bremerhaven lies on the entry of the Weser and
                Hamburg
                lies at the end. Does this remind you of something? What appears to be at the very end of a strait like
                this? You guessed it!, A shithole!</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>
                Share
              </v-btn>

              <v-btn color="orange" text>
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col
        md="2"></v-col>

      </v-row>

    </v-container>
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

<style>
.cardTitle {
  font-size: 5em;
}
</style>
