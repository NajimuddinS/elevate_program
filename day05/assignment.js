let str1="masai"
let str2="asami"
str1=str1.toLowerCase()
str2=str2.toLowerCase()

function anagram(str1,str2){
    if (str1.length!==str2.length){
        return false
    }
    let obj1={}
    for (let char of str1){
        if (char==" "){
        continue 
        }
        if (obj1[char]==undefined){
            obj1[char]=1
        }else{
            obj1[char]++
        }
    }
    for (let char of str2){
        if (obj1[char]==undefined){
            return false
        }else{
            obj1[char]--
        }
    }
    for (let values in obj1){
        if (obj1[values]!==0){
            return false
        }
    }
    return true
    
    // console.log(obj1)
}
console.log(anagram(str1,str2))

// (1)

let arr=[1,2,3,4]

function sum(arr){
    let sum=0
    let product=1
    for(let i of arr){
        sum+=i
        product*=i
    }
    
    return {sum,product}
}

console.log(sum(arr))


// (2)

let arr0=["HeLLo","world","PYTHON","JaVaScRiPt"]
let newArr=[]
function convert(arr0){
    function isUpper(char){
        if(char==char.toUpperCase()){
            return true
        }
    }
    function isLower(char){
        if(char==char.toLowerCase()){
            return true
        }
    }

    for (let str of arr0){
        let lc=0
        let uc=0
        for (let char of str){
            if (isUpper(char)){
                uc++
            }else{
                lc++
            }
        }
        if (uc>lc){
        str=str.toLowerCase()
        newArr.push(str)
        }else if (uc===lc){
            newArr.push(str)
        }else {
            str=str.toUpperCase()
            newArr.push(str)
        }
    }
    return newArr
}
console.log(convert(arr0))

// (3)
// (a)
let arr1=["apple","banana","apple","orange",'orange','orange',"banana","banana"]
function highFreq(arr1){
    let obj={}
    let max=0
    let res=[]
    for (let el of arr1){
        if(obj[el]==undefined){
            obj[el]=1
        }else{
            obj[el]++
        }
        if(obj[el]>max){
            max=obj[el]
            res = [el]
        }else if (max == obj[el]){
            res.push(el)
        }
    }
    return res
}
console.log(highFreq(arr1))

// (b)
let arr2=[1,2,2,3,3]
function highFreq0(arr2){
    let obj={}
    let max=0
    let res=[]
    for (let el of arr2){
        if(obj[el]==undefined){
            obj[el]=1
        }else{
            obj[el]++
        }
        if (obj[el]>max){
            max=obj[el]
            res=[el]
        }else if (obj[el]==max){
            res.push(el)
        }
    }return res
}
console.log(highFreq0(arr2))

// (4)

let cart = [
    { "price": 10, "quantity": 2 },
    { "price": 5, "quantity": 4 },
    { "price": 20, "quantity": 1 }
  ]
  let discount = 10
  let minPriceThreshold = 3
  let total=0
  function findDiscount(cart,discount,minPriceThreshold){
      for (let item of cart){
          total+=item.price*item.quantity
          discount=total*0.1
      }
      total=total-discount
      return total
  }
  
  console.log(findDiscount(cart,discount,minPriceThreshold))

// (5)

function filterFruit(input){
    let subCat=input.reduce((acc,n)=>{
        if(!acc[n.subCategory]){
            acc[n.subCategory]=[]
        }
        acc[n.subCategory].push(n)
        return acc
    },{})
    // console.log(subCat)
    return subCat
}

console.log(filterFruit(input))  