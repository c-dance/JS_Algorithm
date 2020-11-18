function solution(s){
    const center = s.length/2;
    if(s.length%2===1){
        return s.charAt(center);
    }else{
        return s.charAt(center-1)+s.charAt(center);
    }

}