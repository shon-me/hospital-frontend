<script setup>
import {ref} from 'vue'

const patients = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        phone: "0712345678",
        residence: "123, main Street",
        nationalId: "12345678",
        dob: "1995-04-03",
    },
    {
        id: 2,
        firstName: "Hillary",
        lastName: "Bright",
        email: "hillarybright@example.com",
        phone: "0723456781",
        residence: "456, greek Street",
        nationalId: "87654321",
        dob: "1999-24-09",
    },
    {
        id: 3,
        firstName: "Joy",
        lastName: "Rono",
        email: "joyrono@example.com",
        phone: "0734567812",
        residence: "231, high Street",
        nationalId: "12387654",
        dob: "2008-06-03",
    },
    {
        id: 4,
        firstName: "Pato",
        lastName: "Banto",
        email: "pato@example.com",
        phone: "0745678123",
        residence: "321, hill Street",
        nationalId: "43215678",
        dob: "2000-12-08",
    },
]

const showAddDialog = ref(false)


</script>

<template>
    <v-container>
        <v-row>
            <v-col md="10">
                <h1>Patients</h1>
            </v-col>
            <v-col md="2">
                <v-btn class="ma-2" color="secondary" icon="mdi-plus" @click="showAddDialog = true"></v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-table class="border ">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Residence</th>
                            <th>National ID</th>
                            <th>Date Of Birth</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in patients">
                            <td>{{ item.firstName + " " + item.lastName }}</td>
                            <td>{{ item.phone }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.residence }}</td>
                            <td>{{ item.nationalId }}</td>
                            <td>{{ item.dob }}</td>
                            <td>
                                <v-btn color="primary" size="small">
                                    <v-icon icon="mdi-eye"></v-icon>
                                    View
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
    </v-container>

    <!-- Add patient -->
    <v-dialog v-model="showAddDialog" max-width="600px">
        <v-form>
            <v-card>
                <v-row>
                    <v-card-text>Add Patient</v-card-text>
                    <v-spacer></v-spacer>
                    <v-btn class="ma-2" color="secondary" icon="mdi-close" @click="showAddDialog = false"></v-btn>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="First Name" outlined></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="Last Name" outlined></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="Email" outlined></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="Phone" outlined></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="Residence" outlined></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="National ID" outlined></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="Date Of Birth" outlined></v-text-field>
                    </v-col>
                </v-row>
            </v-card>
        </v-form>
    </v-dialog>
</template>