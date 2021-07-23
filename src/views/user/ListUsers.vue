<template>
<div> 

    <b-button variant="primary" to="/users/add" class="btn btn-primary float-right">
        <span class="text-nowrap">Add Users</span>
    </b-button><br><br><br>

    <b-table-simple
      hover
      caption-top
      responsive
      class="rounded-bottom mb-0"
    >
      <b-thead head-variant="light">
        <b-tr>
          <b-th>
            CIN
          </b-th>
          <b-th>
            Last Name
          </b-th>
          <b-th>
            First Name
          </b-th>
          <b-th>
            Post
          </b-th>
           <b-th>
            Username
          </b-th>
           <b-th>
            Photo
          </b-th>
          <b-th>
            action
          </b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="a in APIData" :key="a.cin" v-bind="a.cin">
          <b-td>{{a.cin}}</b-td>
          <b-td>{{a.nom}}</b-td>
          <b-td>{{a.prenom}}</b-td>
          <b-td>{{a.poste}}</b-td>
          <b-td>{{a.username}}</b-td>
          <b-td> 
            <figure  class="image mb-1">
             <img :src="a.get_thumbnail" width="80" height="80" >
            </figure> 
          </b-td>
          <b-td>
            
            <!--   <b-button variant="primary" to="/user/a.slug" class="btn btn-primary float-right">
                 <span class="text-nowrap">View</span>
               </b-button> -->
               
               <b-button v-on:click = "deleteUser(a.cin)" class="btn btn-primary float-right">Delete User</b-button> 
            <!--  <b-button :to="{name: 'ViewUser', params: {id: a.slug} }" class="btn btn-primary float-right">Delete</b-button>   
            -->
            </b-td>
        </b-tr>
      </b-tbody>
      <b-tfoot>
        <b-tr>
          <b-td
            colspan="7"
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
  BIcon,BTableSimple, BThead, BTr, BTh, BTd, BTbody, BTfoot,BCardBody,BFormGroup,BInputGroup,BInputGroupAppend,BButton
} from 'bootstrap-vue'
import {getAPI} from '@/axios-api'
import axios from 'axios'
export default {
  name : 'ListUsers',
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
    BButton,
    BIcon,
    },
    mounted() {
      this.getAPI()
    },
    created () {
        getAPI.get('/user/',)
          .then(response => {
            console.log('user API has recieved data')
            this.APIData = response.data
          })
          .catch(err => {
            console.log(err)
          })
    },
    methods : {
      deleteUser(cin) {
        this.axios.delete("http://127.0.0.1:8000/user/" + cin)
        .then(getAPI.get('/user/'))
          
      }
    }
}

</script>

<style>
</style>