export function flatPointsToXY(points: number[]) {
    const p = [];
    for (let i = 0; i < points.length - 1; i = i + 2) {
        p.push([points[i], points[i + 1]]);
    }
    return p;
}

export function getNextFreeLinePoints(pos: any, points: any) {
    const newPoints = points.concat([pos.x, pos.y]);
    const cp = flatPointsToXY(newPoints);
    const l = cp.length;
    const pointsCurve = cp
        .slice(0, -3)
        .concat(getBezierCurve([cp[l - 3] || [pos.x, pos.y], cp[l - 1]], 12, 1));

    return pointXYToFlat(pointsCurve);
}

export function pointXYToFlat(points: any) {
    const p = [];
    for (let i = 0; i < points.length - 1; i++) {
        p.push(points[i][0]);
        p.push(points[i][1]);
    }
    return p;
}

function getBezierCurve(arr: any, length: number, step: number) {
    step = step || 1;
    length = length || 100;
    const res = new Array();
    for (let t = 0; t <= length; t += step) {
        const ind = res.length,
            T = t / length;
        res[ind] = new Array(0, 0);
        for (let i = 0; i < arr.length; i++) {
            const b = getBezierBasis(i, arr.length - 1, T);
            res[ind][0] += arr[i][0] * b;
            res[ind][1] += arr[i][1] * b;
        }
    }
    return res;
}

function getBezierBasis(i: number, n: number, t: number) {
    // Факториал
    const f = (n: number): number => {
        return n <= 1 ? 1 : n * f(n - 1);
    };

    // считаем i-й элемент полинома Берштейна
    return (f(n) / (f(i) * f(n - i))) * Math.pow(t, i) * Math.pow(1 - t, n - i);
}
