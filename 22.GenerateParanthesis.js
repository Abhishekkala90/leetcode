var generateParenthesis = function(n) {
    let open=0;
    let close=0;
    let result=[];
    let str="";
    function machine(open,close,result,str)
    {
        if((str.length===2*n) && (close===n && open===n))
            {
                result.push(str);
                return;
            }
        if(open<n)
            {
                machine(open+1,close,result,str+'(');
            }
        if(close<n)
            {
                if(open>close)
                machine(open,close+1,result,str+')');
            }
    }
    machine(open,close,result,str);
    return result;
};
console.log(generateParenthesis(3));
//here the time complexity is O(2^n) and space complexity is O(n)