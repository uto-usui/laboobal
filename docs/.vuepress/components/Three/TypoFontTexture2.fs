// precision mediump float;

precision mediump float;

uniform sampler2D texture;
uniform float time;
uniform float seed;

varying vec2 vUv;

float random(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)

float basicNoise(vec2 v, float detailX, float detailY) {
  float nx = v.x * detailX;
  float ny = v.y * detailY;
  float n = snoise3(vec3(nx + time * 0.2, ny, seed));
  return n;
}

void main() {
  vec2 uv = vUv;

  float n = basicNoise(uv, 0.65, 5.0);

  float n01 = (n + 1.0) * 0.5;
  n = pow(n * 2.0, 10.0);
  float particulize = (1.0 - n01) + n01 * random(uv * 5.0);
  uv.x += 0.20 * n * particulize;
  uv.y += 0.05 * n * particulize;

  vec4 color = texture2D(texture, uv);
  color.a *= (1.0 - clamp(abs(n), 0.0, 1.0));

  gl_FragColor = color;
}
