---
#sidebar: auto
---

# canvas

[[toc]]

## cross origin

Read images of another domain and draw on the canvas.q

<Canvas-CanvasCrossOrigin />

## Draw SVG

<Canvas-DrawSvg />

<<< @/docs/.vuepress/components/Canvas/DrawSvgScript.js

## Draw line

<Canvas-DrawLine />

<<< @/docs/.vuepress/components/Canvas/DrawLineScript.ts

## Draw polygon

<Canvas-DrawRect />

<<< @/docs/.vuepress/components/Canvas/DrawRectScript.ts

## Draw Circle

<Canvas-DrawCircle />

`ctx.arc(x, y, radius, startRadian, endRadian)`

::: tip
360 = Math.PI * 2
:::

<<< @/docs/.vuepress/components/Canvas/DrawCircleScript.ts

## Draw Text

<Canvas-DrawText />

<<< @/docs/.vuepress/components/Canvas/DrawTextScript.ts

## Draw Shadow

<Canvas-DrawShadow />

<<< @/docs/.vuepress/components/Canvas/DrawShadowScript.ts

## Draw Gradient

<Canvas-DrawGradient />

1. create gradient -> `createLinearGradient(x1, y1, x2, y2)` or `createRadialGradient(x1, y1, r1, x2, y2, r2))`
2. create color stops -> `addColorStop(offset, 'color name)` / offset 0~1
3. draw rect -> `fillRect(x, y, width, height)`

<<< @/docs/.vuepress/components/Canvas/DrawGradientScript.ts
