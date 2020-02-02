/**
 * @param {number[][]} points
 * @return {number}
 */
const largestTriangleArea = function (points) {
    let max = 0;
    for (let i = 0; i < points.length - 2; i++) {
        for (let j = i + 1; j < points.length - 1; j++) {
            for (let k = j + 1; k < points.length; k++) {
                const a = area(points[i], points[j], points[k]);
                max = Math.max(max, a);
            }
        }
    }
    return max;
};

function area(p1, p2, p3) {
    return Math.abs(((p1[0] - p2[0]) * (p3[1] - p2[1]) - (p3[0] - p2[0]) * (p1[1] - p2[1])) / 2);
}
