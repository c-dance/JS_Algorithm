function solution (numbers){
    const result = pickAndSum(numbers);
    result.sort((a,b)=>a-b);
    console.log(result);
    return result
};

const pickAndSum = (array) => {
    const sumArray = new Array(); //=[];
    var sum = new Number();
    for(let i = 0; i<array.length-1;i++){
        for(let j= i+1;j<array.length;j++){
            sum = array[i]+array[j];
            if(sumArray.indexOf(sum)==-1) sumArray.push(sum);
            
        }
    }
    return sumArray;
}
