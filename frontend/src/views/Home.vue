<template>
  <div>
    <h2>Health Articles</h2>
    <div>
      <v-container class="">
        <v-row no-gutters>
          <v-col>
            <v-sheet class="pa-2 ma-2">
              <v-card
                class="mx-auto"
                max-width="500"
              >
                <v-img
                  src="@/assets/pexels-pavel-danilyuk-5998448.jpg"
                  height="200px"
                  cover
                ></v-img>

                <v-card-title>
                  Health News
                </v-card-title>

                <!--          <v-card-subtitle>-->
                <!--            1,000 miles of wonder-->
                <!--          </v-card-subtitle>-->

                <v-card-actions>
                  <v-btn variant="flat" color="secondary" href="https://www.nbcnews.com/health" target="_blank" >Read More...</v-btn>

                  <v-spacer></v-spacer>

                  <v-btn

                  ></v-btn>
                </v-card-actions>

                <!--          <v-expand-transition>
                            <div v-show="show">
                              <v-divider></v-divider>

                              <v-card-text>
                                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                              </v-card-text>
                            </div>
                          </v-expand-transition>-->
              </v-card>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="pa-2 ma-2">
              <v-card
                class="mx-auto"
                max-width="500"
              >
                <v-img
                  src="@/assets/pexels-anna-shvets-4225920.jpg"
                  height="200px"
                  cover
                ></v-img>

                <v-card-title>
                Health Care Trends
                </v-card-title>

                <!--          <v-card-subtitle>-->
                <!--            1,000 miles of wonder-->
                <!--          </v-card-subtitle>-->

                <v-card-actions>
                  <v-btn variant="flat" color="secondary" href="https://www.forbes.com/sites/bernardmarr/2022/12/06/the-top-5-healthcare-trends-in-2023/" target="_blank" >Read More...</v-btn>

                  <v-spacer></v-spacer>

                  <v-btn

                  ></v-btn>
                </v-card-actions>

                <!--          <v-expand-transition>
                            <div v-show="show">
                              <v-divider></v-divider>

                              <v-card-text>
                                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                              </v-card-text>
                            </div>
                          </v-expand-transition>-->
              </v-card>
            </v-sheet>
          </v-col>

          <v-responsive width="100%"></v-responsive>

          <v-col>
            <v-sheet class="pa-2 ma-2">
              <v-card
                class="mx-auto"
                max-width="500"
              >
                <v-img
                  src="@/assets/pexels-ivan-samkov-4240602.jpg"
                  height="200px"
                  cover
                ></v-img>

                <v-card-title>
                  Emerging Trends in HealthCare
                </v-card-title>

                <!--          <v-card-subtitle>-->
                <!--            1,000 miles of wonder-->
                <!--          </v-card-subtitle>-->

                <v-card-actions>
                  <v-btn variant="flat" color="secondary" href="https://psychnews.psychiatryonline.org/doi/10.1176/appi.pn.2022.11.11.27" target="_blank" >Read More...</v-btn>

                  <v-spacer></v-spacer>

                  <v-btn

                  ></v-btn>
                </v-card-actions>

                <!--          <v-expand-transition>
                            <div v-show="show">
                              <v-divider></v-divider>

                              <v-card-text>
                                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                              </v-card-text>
                            </div>
                          </v-expand-transition>-->
              </v-card>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet class="pa-2 ma-2">
              <v-card
                class="mx-auto"
                max-width="500"
              >
                <v-img
                  src="@/assets/appetizer-g41e1a4fb6_1920.jpg"
                  height="200px"
                  cover
                ></v-img>

                <v-card-title>
                  Healthy Eating
                </v-card-title>

                <!--          <v-card-subtitle>-->
                <!--            1,000 miles of wonder-->
                <!--          </v-card-subtitle>-->

                <v-card-actions>
                  <v-btn variant="flat" color="secondary" href="https://dhss.delaware.gov/dph/dpc/eatright.html" target="_blank" >Read More...</v-btn>

                  <v-spacer></v-spacer>

                  <v-btn

                  ></v-btn>
                </v-card-actions>

                <!--          <v-expand-transition>
                            <div v-show="show">
                              <v-divider></v-divider>

                              <v-card-text>
                                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                              </v-card-text>
                            </div>
                          </v-expand-transition>-->
              </v-card>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>



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
