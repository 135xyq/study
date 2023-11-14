/**https://leetcode.cn/problems/generate-random-point-in-a-circle/
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
 var Solution = function(radius, x_center, y_center) {
    this.r = radius;
    this.xc = x_center;
    this.yc = y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
     while (true) {
        const x = Math.random() * (2 * this.r) - this.r;
        const y = Math.random() * (2 * this.r) - this.r;
        if (x * x + y * y <= this.r * this.r) {
            return [this.xc + x, this.yc + y];
        }
    }

};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */