/**https://leetcode.cn/problems/height-checker/
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let temp = [...heights];
    temp.sort((a,b)=>a-b);
    let count = 0;
    for(let i = 0; i < heights.length;i++){
        if(temp[i] !== heights[i]){
            count++;
        }
    }
    return count;

};

console.log(heightChecker(heights = [1,1,4,2,1,3]))