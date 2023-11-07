const { createApp, ref } = Vue

createApp({

  el: '#app',
  data(){
return{
  form: {
    name: '',
    value: ''
  }
}
  },
  methods:{
    createContact(){
      const{...contact}=this.form 
     console.log(contact)
    this.form.name= this.form.value=''
    
    }
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