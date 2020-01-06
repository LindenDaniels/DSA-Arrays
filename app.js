const memory = require('./memory')
const Array = require('./array')

function main(){

    Array.SIZE_RATIO = 3;

    
    let arr = new Array();

    
    arr.push(3);
    console.log(arr);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr);
//Length: 6, Capacity: 12, Memory Address: 3. The array had to resize three times.
    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr);
//Length: 3, Capacity: 12, Memory Address: 3. The array does not resize to a smaller memory space.
    console.log(arr.get(0))

    arr.pop();
    arr.pop();
    arr.pop();
    arr.push("tauhida")
    console.log(arr.get(0));
// To modify the size of the array.
    function replace(string){
        let newStr = []
        let final = ''
        for(let i = 0; i<string.length;i++){
            if(string[i] === ' '){
                newStr[newStr.length] = '%20';
            } else {
                newStr[newStr.length] = string[i]
            }
        } 
        for(let i = 0; i<newStr.length;i++){
            final += newStr[i];
        }
        return final;
    }
    let str = 'Happy New Year!'
    console.log(replace(str))

    function filterArr(arr){
        let newArr = []
        for(let i = 0; i < arr.length; i++){
            if(arr[i] >= 5){
                newArr[newArr.length] = arr[i]
            }
        }
        return newArr;
    }

    let arr1 = [1,5,8,3,9,8,8,6,73,4,3]
    console.log(filterArr(arr1));

    function maxSum(arr){
        
        let max = 0;
        for(let i  = 2; i < arr.length-1; i++){
            
            for(let j = 0; j <arr.length; j++){
               
                let sum = 0
                for(let k = 0; k< i; k++){
                    
                    if(j+k<arr.length){
                        sum += arr[j+k]
                    }
                }
                if(sum > max){
                    max = sum
                }
            }
        }
        return max;
    }
    let arr2 = [4, 6, -3, 5, -2, 1]
    console.log(maxSum(arr2));
}

main();