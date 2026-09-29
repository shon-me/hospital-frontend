import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePatientsStore = defineStore('patients', () => {

    const createPatientsList = () => [
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

    const patients = ref(createPatientsList())

    const selectedPatientId = ref(null)
    const selectedPatient = computed(() => {
        return patients.value.find(user => user.id === selectedPatientId.value)
    })

    function selectPatient(id) {
        selectedPatientId.value = id
    }

    function addPatient(data){
        const lastId = patients.value.length > 0 ? patients.value[patients.value.length -1].id: 0
        data.id = lastId + 1
        patients.value.push(data)
    }

    const resetPatients = () => {
        patients.value = createPatientsList()
    }

    function newTriage(data,patientId){
        const patient = patients.value.find(
            p => p.id === patientId
        );
        patient.triage = data
    }

    function newConsultation(data, patientId){
        const patient = patients.value.find(p => p.id === patientId)
        patient.consoltation = data
    }

    function newLab(data, patientId){
        const patient = patients.value.find(p => p.id === patientId)
        patient.lab = data
    }

    function newPrescription(data, patientId){
        const patient = patients.value.find(p => p.id === patientId)
        patient.prescription = data
    }
     
    return { 
        patients,
        addPatient,
        selectPatient,
        selectedPatient,
        resetPatients,
        newTriage,
        newConsultation,
        newLab,
        newPrescription,
    }
},
{
    persist: true,
})