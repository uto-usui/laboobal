---
#sidebar: auto
---

# Info <Badge text="beta" type="warn"/> <Badge text="Netlify build"/>

[[TOC]]

## Overview

This site consists of VuePress x Gihub x Netlify and is published.

## News

* 2018-08-06 release

## Directory

```bath{5}
- .vuepress/        for VuePress
    - public/       static files
    - components/   called components to md files 
    - theme/        site theme files
    - config.js     config file
- README.md         page
```

## Site data

### color

* primary #FF6473
* sub #990027 / #458083
* text #2a2828

## Tips

### Container

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::

::: details Click me to view the code
```js{2}
console.log('Hello world')
console.log('This is custom container')
```
:::
