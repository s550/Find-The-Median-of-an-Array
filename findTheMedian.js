function findTheMedian(arr){
 let ans = arr.sort((a,b) => a - b);

 if (ans.length % 2 === 0){
    while(ans.length > 2){
        ans.pop();
        ans.shift();

    }
    ans.pop();
    console.log(ans);
    return ans;
 }else{
     while(ans.length > 1){
        ans.pop();
        ans.shift();
     }
 }
 console.log(ans);
 return ans
}

findTheMedian([2,4,7]);

findTheMedian([22,25,45,42,23,54,543,433, 322, 322])
