const { createApp, ref } = Vue

createApp({

  el: '#app',
  data(){
return{
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
    createContact(){
      const{...contact}=this.form 
     this.contacts.push({...contact, id: Date.now(), marked: false})
    this.form.name= this.form.value=''
    
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
   const data= await request('/api/contacts')// first rest appi request
 console.log(data)
  }



}).mount('#app')

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