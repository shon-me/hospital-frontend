<script setup>

</script>

<template>
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-carousel cycle hide-delimiters>
                    <v-carousel-item src="/images/carousel1.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/images/carousel2.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/images/carousel3.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/images/carousel4.jpg" cover></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container>

    <!-- About us -->
     <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-card align="center">
                    <v-card-title>Welcome to Uzima Hospitals</v-card-title>
                    <v-card-text class="text-body-large">Uzima Hospitals stands as a beacon of advanced medical excellence and compassionate patient care, offering a comprehensive suite of specialized healthcare services. Equipped with state-of-the-art diagnostic technology and modern surgical suites, our dedicated team of experienced physicians and clinicians ensures every patient receives personalized, world-class treatment in a healing environment designed for comfort, safety, and rapid recovery.</v-card-text>
                    <v-card-text class="text-body-large">Committed to community well-being and clinical innovation, Uzima Hospitals integrates cutting-edge medical research with patient-centered values to deliver exceptional health outcomes. From 24/7 emergency critical care to specialized outpatient clinics and wellness programs, we strive to be your trusted healthcare partner for life, safeguarding the health of families across every generation with uncompromising dedication.</v-card-text>
                </v-card>
            </v-col>
        </v-row>
     </v-container>

     <!-- Clinics -->
     <v-container max-width="100%">
        <v-row>
            <v-col md="3">
                <v-card width="300px">
                    <v-img src="/images/clinic1.jpg" cover></v-img>
                    <v-card-tittle> Laboratory Services </v-card-tittle>
                    <v-card-text>Clinical service description</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>

             <v-col md="3">
                <v-card width="300px">
                    <v-img src="/images/clinic2.jpg" cover></v-img>
                    <v-card-tittle> Surgical Services </v-card-tittle>
                    <v-card-text>Clinical service description</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>

             <v-col md="3">
                <v-card width="300px">
                    <v-img src="/images/clinic3.jpg" cover></v-img>
                    <v-card-tittle> Dental Services </v-card-tittle>
                    <v-card-text>Clinical service description</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>

             <v-col md="3">
                <v-card width="300px">
                    <v-img src="/images/clinic4.jpg" cover></v-img>
                    <v-card-tittle> Eye Clinic </v-card-tittle>
                    <v-card-text>Clinical service description</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>
        </v-row>
     </v-container>

     <!-- Footer -->
      <v-container max-width="100%" class="mt-6 bg-secondary">
        <v-row>
            <v-col md="4">
                <v-card height="300px" color="secondary" flat>
                    <v-card-title>Subscribe to our mailing list</v-card-title>
                    <v-card-text>Get the latest new, health tips, and hospital updates deliverd to your inbox. </v-card-text>
                    <v-text-field v-model="inputValue" label="Email address" outlined class="ma-4">
                        <template v-slot:append-inner>
                            <v-btn color="primary">Subscribe</v-btn>
                        </template>
                    </v-text-field>
                    <div class="text-center mb-4">
                        <p>Follow us on:</p>
                        <v-icon icon="mdi-instagram"></v-icon>
                        <v-icon icon="mdi-twitter"></v-icon>
                        <v-icon icon="mdi-facebook"></v-icon>
                    </div>
                </v-card>
            </v-col>

            <v-col md="4">
                <v-card height="300px" color="secondary" flat>
                    <v-card-title>contact information</v-card-title>
                    <v-card-text>
                        <p>
                            <v-icon icon="mdi-map-marker-radius-outline"></v-icon>
                            Uzima Hospitals
                        </p>
                        <p>123, Main Street Madaraka, Nairobi</p>
                        <p>
                            <v-icon icon="mdi-phone-outline"></v-icon>
                            +25471234578
                        </p>
                        <p>
                            <v-icon icon="mdi-email-outline"></v-icon>
                            info@uzimahosptials.com
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col>
                <v-card height="300px" color="secondary" flat>
                    <v-card-title>Quick Links</v-card-title>
                    <v-card-text>Avout us</v-card-text>
                    <v-card-text>Clinics</v-card-text>
                    <v-card-text>Find a Doctor</v-card-text>
                    <v-card-text>News and Events</v-card-text>
                </v-card>
            </v-col>
        </v-row>
      </v-container>
</template>