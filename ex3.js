class Dice{
    constructor(){
        this.nFaces=6
    }
    get faceValue(){
        this.nFaces=6
    }
    get faceValue(){
        return this._faceValue
    }

    set faceValue(newValue){
        this._faceValue=newValue
    }
    getQuantityFaces(){
        return this.nFaces
    }
    roll(){
        const temp = Math.floor(Math.random()*6)+1
        this.faceValue=temp
    }
}

const myDice=new Dice()
myDice.roll()
console.log(myDice.faceValue)

const frequencyTable=[0,0,0,0,0,0]

for (let i = 0; i < 100; i++) {
    const myDice = new Dice()
    myDice.roll()
    frequencyTable[myDice.faceValue-1]+=1
}
console.table(frequencyTable)