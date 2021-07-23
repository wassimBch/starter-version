<template>
    <div>

       <!-- <div class="columns is-multiline"  v-for="a in APIData" :key="a.cin" v-bind="a.cin">-->
        <div class="columns is-multiline">   
            <div class="column is-9">
                <figure class="image mb-6">
                    <img v-bind:src="a.get_thumbnail">
                </figure>

                <h1 class="title">{{ a.nom }}</h1>

            </div>

            <div class="column is-3">
                <h2 class="subtitle">Information</h2>

                <p><strong>Prenom: </strong>{{ a.prenom }}</p>

            </div>
        </div> 

    </div>
</template>

<script>
import {
  BIcon,BTableSimple, BThead, BTr, BTh, BTd, BTbody, BTfoot,BCardBody,BFormGroup,BInputGroup,BInputGroupAppend,BButton
} from 'bootstrap-vue'
import {getAPI} from '@/axios-api'
import { toast } from 'bulma-toast'
import axios from 'axios'

export default {
    name: 'ViewUser',
    data() {
        return {
           // APIData: []   
           APIData: null        
        }
    },
     mounted() {
      this.getAPI();
      //this.getData();
    },/*
    methods : {
        getData() {
            axios.get('http://http://127.0.0.1:8000/user/' + this.$route.params.slug + '/')
            .then(response => {
            this.APIData = response.data
          })
        }
    }    */
    created () {
        getAPI.get('/user/' + this.$route.params.slug)
          .then(response => {
            console.log('user API has recieved data')
            this.APIData = response.data
          })
          .catch(err => {
            console.log(err)
          })
    }

}   
</script>

<style>
</style>
