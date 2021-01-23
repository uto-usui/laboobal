---
#sidebar: auto
---

# canvas

[[toc]]

## cross origin

Read images of another domain and draw on the canvas.q

<Canvas-CanvasCrossOrigin/>

## Draw SVG

<Canvas-DrawSvg/>

<<< @/docs/.vuepress/components/Canvas/DrawSvgScript.js

## Draw line

<Canvas-DrawLine />

<<< @/docs/.vuepress/components/Canvas/DrawLineScript.ts

## Draw polygon

<Canvas-DrawRect />

<<< @/docs/.vuepress/components/Canvas/DrawRectScript.ts

## Draw Circle
い
<Canvas-DrawCircle />

`ctx.arc(x, y, radius, startRadian, endRadian)`

::: tip
360 = Math.PI * 2
:::

<<< @/docs/.vuepress/components/Canvas/DrawCircleScript.ts
