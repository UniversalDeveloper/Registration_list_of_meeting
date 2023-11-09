const { createApp, ref } = Vue

createApp({

  el: '#app',
  data(){
return{
  form: {
    name: '',
    value: ''
  },
  contacts: [
    {id:1, name:'cat', value:'ndsfdjf@kk',marked: false}
  ]
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
    removeContact(id){}

  }
}).mount('#app')

 /* createApp({
    setup() {
      const message = ref('Hello vue!')
      return {
        message
      }
    }
  }).mount('#app')//connect with html*/
  // console.log(Vue);