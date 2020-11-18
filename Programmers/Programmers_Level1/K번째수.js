function solution(array, commands) {

    const result = [];
    let selected; //i~j 까지의 배열
    let i, j, k;
    
    commands.forEach((el)=>{
        selected = [];
        i = el[0];
        j = el[1];
        k = el[2];
        for(let loc=i-1;loc<j;loc++){
            selected.push(array[loc]);
        }
        selected.sort((a,b)=>(a-b)); //오름차순 정렬 메서드
        result.push(selected[k-1]);
    });
    
    return result;
}