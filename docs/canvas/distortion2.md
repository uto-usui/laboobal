---
#sidebar: auto
---

# distortion slider 2

with Three.js.

## horizontal

<DistortionSliderC />

```javascript
const fragment = `
varying vec2 vUv;

// images
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform sampler2D disp;

uniform float dispPower; // 0 ~ 1
uniform float intensity;

void main() {
  vec2 uv = vUv;

  vec4 disp = texture2D(disp, uv);
  vec2 dispVec = vec2(disp.x, disp.y);

  // horizontal
  vec2 distPos1 = vec2(uv.x + (dispVec.x * intensity * dispPower), uv.y);
  vec2 distPos2 = vec2(uv.x + (dispVec.x * -(intensity * (1.0 - dispPower))), uv.y);

  vec4 _texture1 = texture2D(texture1, distPos1);
  vec4 _texture2 = texture2D(texture2, distPos2);

  gl_FragColor = mix(_texture1, _texture2, dispPower);
}
`;

new DistortionSlider(this.$refs.slider, {
  images: [
    'https://images.unsplash.com/photo-1548112129-b5cf67e9558d',
    'https://images.unsplash.com/photo-1548106755-5c6bf746ca84',
    'https://images.unsplash.com/photo-1547962041-6d2d7c4bdf6e',
  ],
  texture: '/images/texture/03.jpg',
  deep: .5,
  fragment,
});
```

## vertical

<DistortionSliderD />

```javascript
const fragment = `
varying vec2 vUv;

// images
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform sampler2D disp;

uniform float dispPower; // 0 ~ 1
uniform float intensity;

void main() {
  vec2 uv = vUv;

  vec4 disp = texture2D(disp, uv);
  vec2 dispVec = vec2(disp.x, disp.y);

  // vertical
  vec2 distPos1 = vec2(uv.x, uv.y - (dispVec.y * intensity * dispPower));
  vec2 distPos2 = vec2(uv.x, uv.y - (dispVec.y * -(intensity * (1.0 - dispPower))));

  vec4 _texture1 = texture2D(texture1, distPos1);
  vec4 _texture2 = texture2D(texture2, distPos2);

  gl_FragColor = mix(_texture1, _texture2, dispPower);
}
`;

new DistortionSlider(this.$refs.slider, {
  images: [
    'https://images.unsplash.com/photo-1548112129-b5cf67e9558d',
    'https://images.unsplash.com/photo-1548106755-5c6bf746ca84',
    'https://images.unsplash.com/photo-1547962041-6d2d7c4bdf6e',
  ],
  texture: '/images/texture/01.png',
  deep: 10.0,
  fragment,
});
```
