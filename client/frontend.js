
const { createApp, ref } = Vue
const app =createApp({})

const loaderCompon={
  template: '<div style="display: flex; justify-content: center; align-item: center"> <div class="spinner-border" role="status">  <span class="visually-hidden">Loading...</span></div>  </div> '
};


createApp({

  el: '#app',
  data(){
return{
  loading: false,
  form: {
    name: '',
    value: ''
  },
  contacts: [ ]
}
  },
computed:{
  canCreate(){
    return this.form.value. trim() && this.form.name.trim()
  }
},

  methods:{
   async createContact(){
      const{...contact}=this.form 
const response= await request('/api/contacts','POST',contact)
console.log(response)

    // this.contacts.push({...contact, id: Date.now(), marked: false})
   // this.form.name= this.form.value=''
    
    },
    markContact(id){
const contact = this.contacts.find(c=>c.id===id)
contact.marked= true;
    },
    removeContact(id){
this.contacts= this.contacts.filter(c=>c.id !==id);
    }
  },

  async mounted()//cales when component is ready. When Vue.js is ready
  {
    this.loading= true;
    this.contacts= await request('/api/contacts')// first rest appi request
 this.loading= false;
  }

}).component('loader', loaderCompon).mount('#app')



//this is a smale library
async function request(url, method ='GET', data= null){
try{
const headers={}
let body
if(data){
  headers['Content-Type']= 'application/json'
  body= JSON.stringify(data)//does convert Js val to a
}

const response= await fetch(url,{
  method,
  headers,
  body
})

return await response.json()

}catch (e){
console.warn( e.message);
}
}

 /* createApp({
    setup() {
      const message = ref('Hello vue!')
      return {
        message
      }
    }
  }).mount('#app')//connect with html*/
  // console.log(Vue);