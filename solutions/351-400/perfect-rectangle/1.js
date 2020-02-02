/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
const isRectangleCover = function (rectangles) {
    let min = Infinity, minP;
    let max = 0, maxP;
    let areaSum = 0;
    const map = {};
    for (let i = 0; i < rectangles.length; i++) {
        const rectangle = rectangles[i];
        [
            `${rectangle[0]},${rectangle[1]}`,
            `${rectangle[2]},${rectangle[3]}`,
            `${rectangle[0]},${rectangle[3]}`,
            `${rectangle[2]},${rectangle[1]}`,
        ].forEach(p => map[p] = (map[p] || 0) + 1);
        if (rectangle[0] + rectangle[1] < min) {
            min = rectangle[0] + rectangle[1];
            minP = [rectangle[0], rectangle[1]];
        }
        if (rectangle[2] + rectangle[3] > max) {
            max = rectangle[2] + rectangle[3];
            maxP = [rectangle[2], rectangle[3]];
        }
        areaSum += area(rectangle);
    }
    const corner = [
        `${minP[0]},${minP[1]}`,
        `${maxP[0]},${maxP[1]}`,
        `${minP[0]},${maxP[1]}`,
        `${maxP[0]},${minP[1]}`,
    ];
    for (const point in map) {
        if (map[point] === 1) {if (corner.indexOf(point) === -1) return false;} else if (map[point] % 2) return false;
    }
    return areaSum === area(minP.concat(maxP)) && corner.reduce((t, p) => t && map[p] === 1, true);
};

function area(rectangle) {
    return Math.abs((rectangle[2] - rectangle[0]) * (rectangle[3] - rectangle[1]));
}
