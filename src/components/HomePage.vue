<script setup>

</script>

<template>
    <!-- carousel for news updates -->
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-carousel cycle hide-delimiters :show-arrows="false" height="600" cover>
                    <v-carousel-item>
                        <v-img src="/images/carousel5.jpg" h-100 cover class="text-white" gradient="to top, rgba(0,0,0,.7), rgba(0,0,0,0)">
                            <div class="align-start d-flex flex-column position-absolute top-1 bottom-0 right-0 left-0 w-100 h-40">
                                <v-card-title>Updates</v-card-title>
                                <v-card-subtitle>Major update:</v-card-subtitle>
                                <v-card-text>The Dental Department at Uzima Hospitals is proud to unveil an advanced upgrade featuring state-of-the-art diagnostic equipment and modern treatment suites designed for optimal oral health. Manned by a team of expert dental surgeons and specialists, our upgraded facility delivers comprehensive care ranging from routine preventive check-ups and restorative procedures to complex cosmetic and orthodontic treatments, all within a comfortable, pain-free environment.</v-card-text>
                            </div>
                        </v-img>
                    </v-carousel-item>

                    <v-carousel-item>
                        <v-img src="/images/carousel3.jpg" h-100 cover class="text-white" gradient="to top, rgba(0,0,0,.7), rgba(0,0,0,0)">
                            <div class="align-start d-flex flex-column position-absolute top-1 bottom-0 right-0 left-0 w-100 h-40">
                                <v-card-title>Updates</v-card-title>
                                <v-card-subtitle>Emergency and Critical Care Department:</v-card-subtitle>
                                <v-card-text>Uzima Hospitals is thrilled to announce the comprehensive expansion of our 24/7 Emergency and Critical Care Department. Equipped with advanced life-support ambulances, modern trauma bays, and state-of-the-art monitoring technology, our highly responsive team of emergency physicians and critical care specialists stands ready around the clock to deliver immediate, life-saving interventions when every second counts.</v-card-text>
                            </div>
                        </v-img>
                    </v-carousel-item>

                    <v-carousel-item>
                        <v-img src="/images/carousel4.jpg" h-100 cover class="text-white" gradient="to top, rgba(0,0,0,.7), rgba(0,0,0,0)">
                            <div class="align-start d-flex flex-column position-absolute top-1 bottom-0 right-0 left-0 w-100 h-40">
                                <v-card-title>Updates</v-card-title>
                                <v-card-subtitle>Radiology and Imaging Department:</v-card-subtitle>
                                <v-card-text>Radiology and Imaging Department is proud to launch its next-generation diagnostic suite, featuring cutting-edge MRI, CT scan, and high-definition ultrasound systems. Staffed by expert radiologists and skilled technicians, our enhanced facility delivers rapid, pinpoint-accurate imaging crucial for early detection and targeted treatment planning, all within a comfortable, low-stress environment designed with patient safety and peace of mind at the forefront.</v-card-text>
                            </div>
                        </v-img>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container>

    <!-- card section for highlighted departments -->
    <v-container max-width="100%">
        <v-row>
            <v-col md="4">
                <v-hover v-slot="{ isHovering, props }">
                    <v-card v-bind="props">
                        <v-img src="/images/pic1.jpg"  class="align-end text-white" height="320" cover>
                            <v-card-title>Expert eye care</v-card-title>
                            <v-expand-transition>
                                <v-card-text>
                                    <div  v-if="isHovering">Experience world-class vision care at Uzima Hospitals' advanced Eye Care Clinic. Our expert ophthalmologists and optometrists utilize cutting-edge diagnostic and surgical technology to provide comprehensive treatments, from routine eye exams to complex vision correction procedures, ensuring precision, clarity, and exceptional health outcomes for your precious sight.</div>
                                </v-card-text>
                            </v-expand-transition>
                        </v-img>
                        <v-card-item>
                            <v-btn color="primary" size="small">
                                <v-icon icon="mdi-help"></v-icon>
                                More
                            </v-btn>
                        </v-card-item>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col md="4">
                <v-hover v-slot="{ isHovering, props }">
                    <v-card v-bind="props">
                        <v-img src="/images/pic2.jpg" class="align-end text-white" height="320" cover>
                            <v-card-title>Orthopedic surgery department</v-card-title>
                            <v-expand-transition>
                                <v-card-text>
                                    <div v-if="isHovering">Restore your mobility with the Uzima Hospitals' Orthopedic Surgery Department. Our leading orthopedic specialists use cutting-edge technology and minimally invasive techniques to treat joint disorders, sports injuries, and complex trauma, ensuring personalized rehabilitation and a swift return to an active, pain-free life.</div>
                                </v-card-text>
                            </v-expand-transition>
                        </v-img>
                        <v-card-item>
                            <v-btn color="primary" size="small">
                                <v-icon icon="mdi-help"></v-icon>
                                More
                            </v-btn>
                        </v-card-item>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col md="4">
                <v-hover v-slot="{ isHovering, props }">
                    <v-card v-bind="props">
                        <v-img src="/images/pic11.jpg" class="align-end text-white" height="320" cover>
                            <v-card-title>Pharmacy Department</v-card-title>
                            <v-expand-transition>
                                <v-card-text v-if="isHovering">The Uzima Hospitals Pharmacy Department ensures safe, rapid access to top-tier medications around the clock. Manned by expert clinical pharmacists, we provide strict medication management, patient counseling, and a comprehensive inventory of genuine pharmaceutical products to support your seamless recovery and long-term health.</v-card-text>
                            </v-expand-transition>
                        </v-img>
                        <v-card-item>
                            <v-btn color="primary" size="small">
                                <v-icon icon="mdi-help"></v-icon>
                                More
                            </v-btn>
                        </v-card-item>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>

    <!-- awards section -->
    <v-container class="mt-4">
        <v-row>
            <v-col md="8" class="pa-2">
                <h1>
                    Patient Safety and Clinical Excellence Award
                </h1>
                <p>
                    This prestigious institutional award honors healthcare facilities that demonstrate an exceptional, measurable commitment to reducing medical errors, minimizing post-operative infection rates, and enforcing strict clinical protocols. Winners must showcase comprehensive risk-management frameworks, transparent reporting systems, and innovative safety initiatives that actively protect patients across all departments, establishing a benchmark for high-reliability healthcare delivery.
                </p>
            </v-col>
            <v-col md="4" class="pa-2">
                <v-hover v-slot="{ isHovering, props}">
                    <v-img src="/images/medal1.jpg" height="350" width="350" v-bind="props" class="align-end text-white" cover>
                        <v-expand-transition v-if="isHovering">
                            <div>
                                <h2>Awarded on 20/12/2024</h2>
                            </div>
                        </v-expand-transition>
                    </v-img>
                </v-hover>
            </v-col>
        </v-row>

        <v-row>
            <v-col md="4" class="pa-2">
                <v-hover v-slot="{ isHovering, props}">
                    <v-img src="/images/medal2.jpg" height="350" width="350" v-bind="props" class="align-end text-black" cover>
                        <v-expand-transition v-if="isHovering">
                            <div>
                                <h2>Awarded on 30/09/2025</h2>
                            </div>
                        </v-expand-transition>
                    </v-img>
                </v-hover>
            </v-col>
            <v-col md="8" class="pa-2">
                <h1>
                    Excellence in Patient-Centered Care Award
                </h1>
                <p>
                    This recognition celebrates hospitals or specific departments that place empathy, comfort, and individual patient needs at the absolute core of their service model. Honorees are evaluated on their implementation of holistic support programs, effective communication practices, flexible accessibility, and glowing patient satisfaction feedback. It highlights institutions that successfully transform the clinical experience into a warm, supportive, and deeply reassuring healing journey.
                </p>
            </v-col>
        </v-row>

        <v-row>
            <v-col md="8" class="pa-2">
                <h1>
                    Healthcare Innovation and Technology Award
                </h1>
                <p>
                    This award shines a spotlight on forward-thinking medical organizations that successfully integrate cutting-edge technologies, digital health tools, or pioneering treatment methodologies to elevate patient outcomes. Recipients are recognized for modernizing operational workflows, introducing advanced diagnostic or surgical equipment, and utilizing data-driven solutions to solve complex medical challenges, thereby shaping the future of modern healthcare.
                </p>
            </v-col>
            <v-col md="4" class="pa-2">
                <v-hover v-slot="{ isHovering, props}">
                    <v-img src="/images/medal3.jpg" height="350" width="350" v-bind="props" class="align-end text-white" cover>
                        <v-expand-transition v-if="isHovering">
                            <div>
                                <h2>Awarded on 01/03/2026</h2>
                            </div>
                        </v-expand-transition>
                    </v-img>
                </v-hover>
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