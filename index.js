// Your code here

class Polygon {
    constructor(ray){
        this.ray = ray
    }

    get countSides(){
        return this.ray.length
    }

    get perimeter(){
        return this.ray.reduce(function(total, element){return element + total}, 0)
    }
}

class Triangle extends Polygon {
    get isValid(){

        if (this.ray.length == 3) {
            let returnRay = this.ray.sort(function(a, b){
                    if (a > b)
                        return 1;
                    if (a < b)
                        return -1;
                    return 0 });
                
                    if (returnRay[0]+returnRay[1]>returnRay[2]){
                        return true
                    } else {
                        return false
                    }


            } else {
                return undefined
            }
        }

}

class Square extends Polygon {
    get isValid(){
        if (this.ray.length == 4){
            if (this.ray[0] == this.ray[1] && this.ray[1] == this.ray[2] && this.ray[2] == this.ray[3]) {
            return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    get area(){
        if (this.isValid) {
            // console.log(this.ray)
            // console.log(this.ray[0]**2)
            return this.ray[0]**2
        } else {
            return false
        }
    }
}