let A = 0, B = 0;
const screenWidth = 80;
const screenHeight = 24;
const bufferSize = screenWidth * screenHeight;

function renderFrame() {
    const z = new Array(bufferSize).fill(0);
    const b = new Array(bufferSize).fill(' ');

    for (let j = 0; j < 6.28; j += 0.07) {
        for (let i = 0; i < 6.28; i += 0.02) {
            const c = Math.sin(i);
            const d = Math.cos(j);
            const e = Math.sin(A);
            const f = Math.sin(j);
            const g = Math.cos(A);
            const h = d + 2;
            const D = 1 / (c * h * e + f * g + 5);
            const l = Math.cos(i);
            const m = Math.cos(B);
            const n = Math.sin(B);
            const t = c * h * g - f * e;
            const x = Math.floor(40 + 30 * D * (l * h * m - t * n));
            const y = Math.floor(12 + 15 * D * (l * h * n + t * m));
            const o = x + screenWidth * y;
            const N = Math.floor(8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));

            if (y >= 0 && y < screenHeight && x >= 0 && x < screenWidth && D > z[o]) {
                z[o] = D;
                b[o] = ",.-~:;=!*#$@"[Math.max(N, 0)];
            }
        }
    }

    console.clear();
    let output = '';
    for (let k = 0; k < bufferSize; k++) {
        output += b[k];
        if (k % screenWidth === screenWidth - 1) output += '\n';
    }

    console.log(output);

    A += 0.04;
    B += 0.02;
}
setInterval(renderFrame, 30);
