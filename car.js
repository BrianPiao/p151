AFRAME.registerComponent("car", {
     schema: {
          moveX: { type: "number", default: 1 }
     },
     tick: function () {
          this.data.moveX = this.data.moveX + 0.01
          //this.el.getAttribute(): get the current values of position attribute.
          //this.el gives reference to the entity as an HTML element.
          var p = this.el.getAttribute("position")
          p.x = this.data.moveX


          //this.el.setAttribute(): to set the updated value of the position attribute.
        this.el.setAttribute("position" , {x:p.x,y:p.y,z:p.z})
     }
})