/**
 * @param {number} N
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
const gridIllumination = function (N, lamps, queries) {
    const grid = new Grid(N);
    lamps.forEach(l => grid.setLamp(l[0], l[1]));
    return queries.map(q => {
        const result = grid.isIlluminated(q[0], q[1]);
        if (result) around(q[0], q[1]).forEach(p => {
            if (grid.hasLamp(p[0], p[1])) grid.clearLamp(p[0], p[1]);
        });
        return result;
    });
};

class Grid {
    constructor(N) {
        this.N = N;
        this.lamps = {};
        this.rows = new Box();
        this.cols = new Box();
        this.diag1 = new Box();
        this.diag2 = new Box();
    }

    setLamp(x, y) {
        this.lamps[`${x},${y}`] = 1;
        this.rows.put(x);
        this.cols.put(y);
        this.diag1.put(x - y);
        this.diag2.put(this.N - x - 1 - y);
    }

    clearLamp(x, y) {
        this.lamps[`${x},${y}`] = 0;
        this.rows.pull(x);
        this.cols.pull(y);
        this.diag1.pull(x - y);
        this.diag2.pull(this.N - x - 1 - y);
    }

    hasLamp(x, y) {
        return !!this.lamps[`${x},${y}`];
    }

    isIlluminated(x, y) {
        return this.rows.has(x) || this.cols.has(y) || this.diag1.has(x - y) || this.diag2.has(this.N - x - 1 - y);
    }
}

class Box {
    constructor() {
        this.map = {};
    }

    put(key) {
        if (this.map[key]) this.map[key]++;
        else this.map[key] = 1;
    }

    pull(key) {
        if (this.map[key]) this.map[key]--;
    }

    has(key) {
        return !!this.map[key];
    }
}

function around(x, y) {
    return [
        [x, y],
        [x - 1, y - 1],
        [x, y - 1],
        [x + 1, y - 1],
        [x - 1, y],
        [x + 1, y],
        [x - 1, y + 1],
        [x, y + 1],
        [x + 1, y + 1],
    ];
}
