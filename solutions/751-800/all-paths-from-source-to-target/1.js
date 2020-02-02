/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function (graph) {
    let paths = [[0]];
    const res = [];
    while (true) {
        const newPaths = [];
        paths.forEach(path => {
            const last = path[path.length - 1];
            if (last === graph.length - 1) res.push(path);
            graph[last].forEach(node => {
                newPaths.push(path.concat([node]));
            });
        });
        if (newPaths.length === 0) break;
        paths = newPaths;
    }
    return res;
};
