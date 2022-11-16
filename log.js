// Registering component in log-component.js
AFRAME.registerComponent("" , {
     schema : {
          message : { type : "string" , default : "hey varsha.."}
     },
     init : function(){
          console.log(this.data.message)
     },
     update : function(){

     },
     remove : function(){

     },
     tick : function(){

     },
} )







// { key : value , key2 : value2 , key3 : value}