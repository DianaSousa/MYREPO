clas rectangle{
    constructor(width=2,height=1){
        this.width=width
        this.height=height
        this._color="#FFFFFF"
    }
    get width() {
        return this._width
    }
    set width(newWidth){
        this._width=newWidth
    }
    get height() {
        return this._height
    }
    set height(newHeight){
        this._height=newHeight
    }
    get color() {
        return this._color
    }
    getArea() {
        return this._width*this._height
    }
}
cost myRect=new rectangle()
cost myRect2=new rectangle(10,5)

console.log(myRect.width)
console.log(myRect.height)
console.log(myRect.color)
console.log(myRect.getArea)
console.log(myRect.getPerimeter)