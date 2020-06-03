# Ledge Framework Engine

> Legde framework is a documentation as code practises framework.

demo page: [https://devops.phodal.com/helper](https://devops.phodal.com/helper)

online editor: [https://devops.phodal.com/helper](https://devops.phodal.com/helper)

![CI](https://github.com/ledge-framework/engine/workflows/CI/badge.svg)
![npm](https://img.shields.io/npm/v/@ledge-framework/render?label=%40ledge-framework%2Frender)
![npm](https://img.shields.io/npm/v/@ledge-framework/view?label=%40ledge-framework%2Fview)

## Syntax

### Ledge extend code syntax

````
```process-step
 - step1
   - demo
   - kanban
```
````

- Chart
  - echarts. Echarts chart.
  - chart. Echarts bar chart.
  - mindmap. Markdown List to mindmap.
  - radar. Markdown List to radar chart.
  - tech radar. Markdown list to tech radar chart.
  - pie。Pie chart
  - quadrant。quadrant chart
  - pyramid。pyramid chart
- graphviz。dot to graph
- process visualization
  - process-table。process chart
  - process-step。process chart 2
  - process-card。card process chart
  - dev-process。process with logo
  - step-line。title only line chart
  - table-step。with arrow table chart
- checklist。checklists
- mermaid。use [mermaid](https://mermaid-js.github.io/mermaid/) as visual tools
- toolset。use toolset components to extends
  - slider
  - line-chart
- pipeline。ci pipeline
- maturity。check, rating with radrar for maturity

### slide examples

````
```toolset
 - 用户体验
 - 时间
 - 成本
 - 安全
 - 范围

config: {"type": "slider"}
```
````

## Usage

### Use with Web Components

1. import styles

```html
<link rel="stylesheet" href="https://theme.ledge.ink/styles.css">
```

2. import code

```html
<div id="ledge-content"></div>
<script>
  var content = document.getElementById('ledge-content');
  var tile = document.createElement('ledge-theme');
  var text = "{{ page.content | uri_escape }}"
  tile.setAttribute('content', decodeURIComponent(text));

  content.appendChild(tile);
</script>
```

3. import script

```html
<script src="https://theme.ledge.ink/runtime-es5.js"></script>
<script src="https://theme.ledge.ink/polyfills-es5.js"></script>
<script src="https://theme.ledge.ink/main-es5.js"></script>
```

### Use in Angular

1.install: `yarn add @ledge-framework/render`
2.import module

```
import { LedgeRenderModule } from '@ledge-framework/render';

@NgModule({
  imports: [
    ...
    LedgeRenderModule,
  ]
  ...
})
```

3. import styles

```
@import "~@ledge-framework/render/prebuild-theme/index.css";
```

or import in `angular.json`

4.use it

```
<ledge-render [content]="content"></ledge-render>
```


## LICENSE

@ 2020 [LiuuY](https://github.com/LiuuY) && [Phodal Huang](https://github.com/phodal). This code is distributed under the MPL license. See `LICENSE` in this directory.
