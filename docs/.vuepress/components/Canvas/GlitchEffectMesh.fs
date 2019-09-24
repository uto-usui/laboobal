precision highp float;

#pragma glslify: snoise3 = require("./library/snoise3.glsl")

// vec2 random value (0.xxxxxxx)
float random(vec2 co){
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

const float interval = 3.0;

uniform float time;
uniform vec2 resolution;
uniform sampler2D texture;

varying vec2 vUv;

// start script
void main(void) {

    // 強さ
    // repeat timing - (time / repeat timing)の剰余 が repeat timing を元にした間隔の間の値のエルミート補完値
    // 時間軸に合わせて強さが変化するように
    float strength = smoothstep(interval * .95, interval, interval - mod(time, interval));

    // 揺れ
    vec2 shake = vec2(strength * 8.0 + 0.1) * vec2(
      random(vec2(time)) * .01 - 1.0, // 横揺れ
      random(vec2(sqrt(time))) * .01 - 2.0 // 縦揺れ
    ) / resolution;

    // y 座標
    float y = vUv.y * resolution.y;

    // y 軸走査線
    float rgbWave = (
        snoise3(vec3(0.0, y * 0.01, time * 400.0)) * (2.0 + strength * 2.0) // ビリビリ
        + step(0.9999, sin(y * 0.005 + time * 2.0 + snoise3(vec3(strength, y * 0.1, time * time) * .1) )) * 5.0 // line
        + step(0.9997, cos(y * 0.01 + time * 1.2)) * -10.0
     // + step(太さ,    cos(y * 速さ   + time * 速さ)) * 範囲のずれ
      ) / resolution.x;
    float rgbUvX = vUv.x + rgbWave;

    // x 軸への rgb ずれ
    // strength 部分を外すと大きなずれがなくなる
    //               基準                           シェイクさせる           最大値の歪み              ピクピク度
    float rgbDiff = (100.0 * sin(time * .1) * .5 * strength + sin(time * 50.0 + vUv.y * 1.1) * (10.0 * strength + 1.0)) / resolution.x;


    // rgb マスター
    float r = texture2D(texture, vec2(rgbUvX + rgbDiff, vUv.y) + shake).r;
    float g = texture2D(texture, vec2(rgbUvX, vUv.y)).g;
    float b = texture2D(texture, vec2(rgbUvX - rgbDiff, vUv.y) + shake).b;

    // white noise
    float whiteNoise = (random(vUv + mod(time, 10.0)) * 2.0 - 1.0) * (0.15 + strength * 0.15) * .2;

    // block noise
    float bnTime = floor(time * 20.0) * 2.0;
    float noiseX = step((snoise3(vec3(0.0, vUv.x * 3.0, bnTime)) + 1.0) / 2.5, 0.1 + strength * 1.3);
    float noiseY = step((snoise3(vec3(0.0, vUv.y * 3.0, bnTime)) + 1.0) / 2.0, 0.1 + strength * 0.3);
    float bnMask = noiseX * noiseY;
    float bnUvX = vUv.x + sin(bnTime) * 0.1 + rgbWave;
    float bnR = texture2D(texture, vec2(bnUvX + rgbDiff, vUv.y)).r * bnMask;
    float bnG = texture2D(texture, vec2(bnUvX, vUv.y)).g * bnMask;
    float bnB = texture2D(texture, vec2(bnUvX - rgbDiff, vUv.y)).b * bnMask;
    vec4 blockNoise = vec4(bnR, bnG, bnB, 1.0);

    float bnTime2 = floor(time * 25.0) * 3.0;
    float noiseX2 = step((snoise3(vec3(0.0, vUv.x * 2.0, bnTime2)) + 1.0) / 2.0, 0.1 + strength * 0.5);
    float noiseY2 = step((snoise3(vec3(0.0, vUv.y * 8.0, bnTime2)) + 1.0) / 2.5, 0.1 + strength * 0.3);
    float bnMask2 = noiseX2 * noiseY2;
    float bnR2 = texture2D(texture, vec2(bnUvX + rgbDiff, vUv.y)).r * bnMask2;
    float bnG2 = texture2D(texture, vec2(bnUvX, vUv.y)).g * bnMask2;
    float bnB2 = texture2D(texture, vec2(bnUvX - rgbDiff, vUv.y)).b * bnMask2;
    vec4 blockNoise2 = vec4(bnR2, bnG2, bnB2, 1.0);

    float waveNoise = (sin(vUv.y * 1.0) + .1) / 2.0 * (0.15 + strength * 0.2);

    gl_FragColor = vec4(r, g, b, 1.0) * (1.0 - bnMask - bnMask2) + (whiteNoise + blockNoise + blockNoise2 + waveNoise);

}
