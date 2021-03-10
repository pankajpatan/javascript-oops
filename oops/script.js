
class shape{
    constructor(){

    }
    area(){
      return ""
    }
}
class rectangle extends shape {
    constructor(a,b){
        super()
        this.rlength = a
        this.rwidth = b
    }
    area(){
        return this.rlength*this.rwidth
    }
}
 class circle extends shape {
     constructor(a){
         super()
         this.radius = a
     }
     area(){
         return Math.PI*this.radius*this.radius
     }
 }
 class square extends shape {
     constructor (a){
         super()
         this.arm = a
     }
     area(){
         return this.arm*this.arm
     }
 }
 class triangle extends shape {
     constructor (a,b,c){
         super()
         this.p=a
         this.b = b
         this.t =c   
     }
     area(){
       var s =(this.p+this.b+this.t)/2
         return Math.sqrt(s*(s-this.p)*(s-this.b)*(s-this.t))
     }
 }
 var arr = [new rectangle(5,6),new triangle(3,4,5),new square(5),new circle(7)]
    function allshapes(n){
        var sum = 0
        n.forEach(function(item){
                sum = sum+item.area()
        })
        console.log(sum)
    }
    allshapes(arr)