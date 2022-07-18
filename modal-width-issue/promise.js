class MyPromise { 
    /* Implement your Promise class here, without using the native promise class */
     constructor(func){
       this.promiseChain = [];
       this.handleError = () => {}
       this.onResolve = this.onResolve.bind(this);
       this.onReject = this.onReject.bind(this);
       
       func(this.onResolve,this.onReject);
     }
     
     then(handlePromise) {
       this.promiseChain.push(handlePromise);
       
       return this;
     }
     
     catch(handleError){
       this.handleError = handleError;
       
       return this;
     }
     
     onResolve(value){
       let initalValue = value;
       
       try{
         this.promiseChain.forEach((nextFunction) => {
           initalValue = newFunc(initalValue);
         });
       } catch(error){
         this.promiseChain = [];
         this.onReject(error);
       }
     }
     
     onReject(error) {
       this.handleError(error)
      }
   }
   
   const promise = new MyPromise((resolve) => {
       setTimeout(() => {
           resolve('Success!');
       },300);
   });
   
   promise.then(console.log);
   
   setTimeout(() => {
       promise.then(console.log);
   }, 500);
  