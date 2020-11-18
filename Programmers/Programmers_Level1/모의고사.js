function solution(answers){
    const stds = [0, 0, 0];
    const std1 = [1,2,3,4,5];
    const std2 = [2,1,2,3,2,4,2,5];
    const std3 = [3,3,1,1,2,2,4,4,5,5]; 
    let result = [];
    
    for(let idx = 0; idx<answers.length; idx++){
        if(std1[idx%std1.length]===answers[idx]) stds[0]++;
        if(std2[idx%std2.length]===answers[idx]) stds[1]++;
        if(std3[idx%std3.length]===answers[idx]) stds[2]++;
    }

    //비교
    let max = stds[0];
    result.push(1);

    for(let i = 1; i<stds.length;i++){
        if(stds[i]<max) continue;
        if(stds[i]===max) result.push(i+1);
        if(stds[i]>max){
            result = [i+1,];
            max = stds[i];
                       }
    }
    if(max===0) result=[];
    else result.sort((a,b)=>(a-b));
    return result;
}