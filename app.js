function URLify(string){
    let max = string.length
    let newURL = ''
    for(let i=0; i<max; i++){
        newURL += string[i].replace(' ', '%20')
    }
    //let newURL = string.replace(' ', '%20')
    console.log(newURL)
}

// Default behavior, replace only works on the first match found
//URLify('Hello There, My Name is Ted!')

function filterArray(newArray){
    let max = newArray.length
    let allFiltered = newArray.every(filterFunction)


    function filterFunction(element, index, array){
        return (element >= 5)
    }

    arrayShift=(i)=>{
       newArray.splice(i,1)
       allFiltered = newArray.every(filterFunction)
    }

    while(!allFiltered){
        for(let i=0; i < max-1; i++){
            newArray[i] < 5 ? arrayShift(i) : null
        }
    }
    

    console.log(allFiltered)
    console.log(newArray)
}

//filterArray([0,1,2,3,4,5,6,7,3,5])


function maxSumArray(newArray){
    
    let maxNum = 0
    let sum = 0
    let max = newArray.length

    for(let i=0; i < max; i++){
        sum += newArray[i]
        sum >= maxNum ? maxNum = sum : null
    }

    return maxNum

}

//console.log(maxSumArray([4, 6, -3, 5, -2, 1]))

function mergeArrays(arr1, arr2){

    function sort(arr){
        let max = arr.length
        for(let k=0; k < max; k++){
        for(let i=0; i < max; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
            }
        }
    }
    return arr
    }

    if(arr1.length > arr2.length){
        for(let i=0; i < arr2.length; i++){
            arr1.push(arr2[i])
        }
        for(let i=0; i <= arr2.length; i++){
            arr2.pop()
        }
        return(sort(arr1))
    } else {
        for(let i=0; i < arr1.length; i++){
            arr2.push(arr1[i])
        }
        for(let i=0; i <= arr1.length; i++){
            arr1.pop()
        }
        return(sort(arr2))
    }
}

//console.log(mergeArrays([1,2,3,7,8,9],[4,12]))

function removeCharacters(newString, charsToBeRemoved){

    let removalArray = charsToBeRemoved.split('')
    let stringArray = newString.split('')

    for(let i=0; i < newString.length; i++){
        for(let k = 0; k < removalArray.length; k++){
            if(stringArray[i]==removalArray[k]){
                stringArray[i] = ''
            }
        }
    }

    let modifiedString = stringArray.join('')
    
    return modifiedString
}

//console.log(removeCharacters('Hello, this is my new String', 'es'))

function products(numArray){

    let productArray=[]

    for (let i=0; i< numArray.length ; i++){
        let calc = calculations(i)
        productArray.push(calc)
    }

    function calculations(i){ 
        let tempArray =[]
        let product = 1
        for(let j=0;j<numArray.length;j++){
            tempArray.push(numArray[j])
        }
        tempArray.splice(i,1)
        for(let k=0; k < tempArray.length; k++){
            product = product*tempArray[k]
        }
        return(product)
    }
   return productArray
}

//console.log(products([1,2,3,4,5,6]))

function twoD(arr1){
        let xArray = []
        let yArray = []

        console.log(arr1)
        let maxColumnDepth=(arr1.length)
        let maxRowLength=(arr1[0].length)
        for(let i=0; i < maxColumnDepth; i++){
            for(let j=0; j < maxRowLength; j++){
                if(arr1[i][j]==0){
                  xArray.push(j)
                  yArray.push(i)
                }
            }
        }
        for(let k=0; k < yArray.length; k++){
            for(let l=0; l < maxRowLength; l++){
                arr1[yArray[k]][l]=0
            }
        }
        for(let m=0; m < xArray.length; m++){
            for(let n=0; n < maxColumnDepth; n++){
                arr1[n][xArray[m]]=0
            }
        }
        return arr1
}

// console.log(twoD(
//     [[1,0,1,1,0],
// [0,1,1,1,0],
// [1,1,1,1,1],
// [1,0,1,1,1],
// [1,1,1,1,1]]
// ))

function stringRotation(str1, str2){

    let temp = ''
    let temp3= ''

    if(str1.length===str2.length){
        temp = str1.split('')
        let x = ''
        for(let i=0; i< str1.length; i++){
            x = temp[0]
            temp.splice(0,1)
            temp.splice(temp.length, 0, x)     
            temp3 = temp.join('')
            console.log(temp3 + ' :temp3')
            if(temp3===str2){
                return('We have a string rotation!')
            }
        }

    }

    return ('Sorry we do not have a string rotation here')

}

console.log(stringRotation('amazon', 'azonam'))
//console.log(stringRotation('amazon', 'azonma'))