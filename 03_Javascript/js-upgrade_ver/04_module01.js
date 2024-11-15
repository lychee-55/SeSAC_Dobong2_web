function getNumber(){
    let number = Math.floor(Math.random()*11)
    return number
}

const numberData = [1,2,3,4,5]

// Es6 모듈은 package.json의 "type"이 "module"이여만 잘 작동됨.
export {getNumber, numberData}
