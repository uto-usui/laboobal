precision highp float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D texture;
uniform vec2 mouse;

varying vec2 vUv;

// start script
void main(void) {

  // 揺れ
  vec2 shake = vec2(mouse.x / 50000.0, -mouse.y / 50000.0) * 2.0;

  float y = vUv.y * resolution.y;
  float x = vUv.x * resolution.x;

  float r = texture2D(texture, vec2(vUv.x, vUv.y) - shake).r;
  float g = texture2D(texture, vec2(vUv.x, vUv.y) - shake * 2.0).g;
  float b = texture2D(texture, vec2(vUv.x, vUv.y) - shake * 4.0).b;

  gl_FragColor = vec4(r, g, b, 1.0);

}
