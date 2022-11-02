const app = Vue.createApp({
    data() {
      return {
        name:'',
        nameTwo:''
      };
    },
    methods: {
      alertIt(event)
     {
        alert("Hello World");
     },
     setName(event)
     {
      this.name = event.target.value;
     },
     setNameTwo(event)
     {
      this.nameTwo = event.target.value;
     }

    },
  });
  
  app.mount("#assignment");