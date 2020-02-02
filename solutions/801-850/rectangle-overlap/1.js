/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
const isRectangleOverlap = function (r1, r2) {
    return !(
        r1[0] <= r2[0] && r1[2] <= r2[0] || r1[0] >= r2[2] && r1[2] >= r2[2]
        || r1[1] <= r2[1] && r1[3] <= r2[1] || r1[1] >= r2[3] && r1[3] >= r2[3]
    );
};
