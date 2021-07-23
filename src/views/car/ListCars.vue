<template>
<div>
  <!--
   <b-card-body>
        <b-form-group
          label="Filter"
          label-cols-sm="2"
          label-align-sm="left"
          label-size="sm"
          label-for="filterInput"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filterInput"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            />
            <b-input-group-append>
              <b-button
                :disabled="!filter"
                @click="filter = ''"
              >
                Clear
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
    </b-card-body>
  -->
     <b-button
                variant="primary"
                @click="isAddNewUserSidebarActive = true"
              >
                <span class="text-nowrap">Add Cars</span>
              </b-button>
  
    <b-table-simple
      hover
      caption-top
      responsive
      class="rounded-bottom mb-0"
    >
      <b-thead head-variant="light">
        <b-tr>
          <b-th>
            Immatricule
          </b-th>
          <b-th>
            Model
          </b-th>
          <b-th>
            Couleur
          </b-th>
          <b-th>
            Num de chassis
          </b-th>
           <b-th>
            Transmission de Moteur
          </b-th>
           <b-th>
            Type de carburant
          </b-th>
          <b-th>
            Valeur d'achat
          </b-th>
          <b-th>
            State
          </b-th>
          <b-th>
            User
          </b-th>
          <b-th>
            Description
          </b-th>
          <b-th>
            action
          </b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="a in APIData" :key="a.cin">
          <b-td>{{a.immatricule}}</b-td>
          <b-td>{{a.mod}}</b-td>
          <b-td>{{a.couleur}}</b-td>
          <b-td>{{a.numChassis}}</b-td>
          <b-td>{{a.transmissionMoteur}}</b-td>
          <b-td>{{a.typeCarburant}}</b-td>
          <b-td>{{a.valAchat}}</b-td>
          <b-td>{{a.etat}}</b-td>
          <b-td>{{a.user}}</b-td>
          <b-td>{{a.description}}</b-td>
          <b-td>
          
          </b-td>
        </b-tr>
      </b-tbody>
      <b-tfoot>
        <b-tr>
          <b-td
            colspan="11"
            variant="secondary"
            class="text-right"
          >
            Total Rows: <b></b>
          </b-td>
        </b-tr>
      </b-tfoot>
    </b-table-simple>
</div>
</template>

<script>
import {
  BTableSimple, BThead, BTr, BTh, BTd, BTbody, BTfoot,BCardBody,BFormGroup,BInputGroup,BInputGroupAppend,BButton
} from 'bootstrap-vue'
import {getAPI} from '@/axios-api'
export default {
  name : 'ListCars',
  data () {
      return {
          APIData: []
        }
    },
  components: {
    BTableSimple,
    BThead,
    BTr,
    BTh,
    BTd,
    BTbody,
    BTfoot,
    BCardBody,
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BButton
    
    },
    created () {
        getAPI.get('/vehicule/',)
          .then(response => {
            console.log('vehicule API has recieved data')
            this.APIData = response.data
          })
          .catch(err => {
            console.log(err)
          })
    }
}

</script>

<style>
th, td {
  padding: 5px;
  text-align: center;
}
</style>