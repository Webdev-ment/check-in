<template>
  <div>
    Home
    <div>
      <h2>Health Articles</h2>
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-img
            src="@/assets/pexels-anna-shvets-4225920.jpg"
            height="200px"
            cover
          ></v-img>

          <v-card-title>
            Top western road trips
          </v-card-title>

          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="orange-lighten-2"
              variant="text"
            >
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>

<!--      <v-card-->
<!--        class="mx-auto" max-width="600"-->
<!--      >-->
<!--      <v-container fluid>-->
<!--        <v-row dense>-->
<!--          <v-col-->
<!--            v-for="card in cards"-->
<!--            :key="card.title"-->
<!--            :cols="card.flex"-->
<!--          >-->
<!--            <v-card>-->
<!--              <v-img-->
<!--                :src="card.src"-->
<!--                class="align-end"-->
<!--                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"-->
<!--                height="200px"-->
<!--                cover-->
<!--              >-->
<!--                <v-card-title class="text-white" v-text="card.title"></v-card-title>-->
<!--              </v-img>-->

<!--              <v-card-actions>-->
<!--                <p>Understanding Acne</p>-->
<!--                <v-spacer></v-spacer>-->

<!--                <v-btn variant="flat" color="secondary" to="https://newsinhealth.nih.gov/2010/01/understanding-acne" target="_blank" rel="noreferrer">Read More...</v-btn>-->

<!--&lt;!&ndash;                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>&ndash;&gt;-->

<!--&lt;!&ndash;                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>&ndash;&gt;-->
<!--              </v-card-actions>-->
<!--            </v-card>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-container>-->
<!--      </v-card>-->
    </div>
  </div>
</template>

<script >
  export default {
    name: "Home",
    data: () => ({
      show: false,
    }),
  }


</script>
