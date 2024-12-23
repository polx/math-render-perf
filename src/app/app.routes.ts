import { Routes } from '@angular/router';
// MathJax Plain Js components
import { SmallJsComponent } from './math-jax-js/small-js/small-js.component';
import { MediumJsComponent } from './math-jax-js/medium-js/medium-js.component';
import { LargeJsComponent } from './math-jax-js/large-js/large-js.component';
// MathJax Pre Render CSS components
import { SmallCssComponent } from './math-jax-css/small-css/small-css.component';
import { MediumCssComponent } from './math-jax-css/medium-css/medium-css.component';
import { LargeCssComponent } from './math-jax-css/large-css/large-css.component';
// MathJax Pre Render SVG components
import { SmallSvgComponent } from './math-jax-svg/small-svg/small-svg.component';
import { MediumSvgComponent } from './math-jax-svg/medium-svg/medium-svg.component';
import { LargeSvgComponent } from './math-jax-svg/large-svg/large-svg.component';
// Math ML  Components
import { SmallMlComponent } from './math-ml/small-ml/small-ml.component';
import { MediumMlComponent } from './math-ml/medium-ml/medium-ml.component';
import { LargeMlComponent } from './math-ml/large-ml/large-ml.component';

export const routes: Routes = [
  // MathJax Plain JS Routes
  {
    path: 'mathJaxJs/small',
    pathMatch: 'full',
    component: SmallJsComponent,
  },
  {
    path: 'mathJaxJs/medium',
    pathMatch: 'full',
    component: MediumJsComponent,
  },
  {
    path: 'mathJaxJs/large',
    pathMatch: 'full',
    component: LargeJsComponent,
  },
  //   MathJax Pre Render CSS Routes
  {
    path: 'mathJaxCss/small',
    pathMatch: 'full',
    component: SmallCssComponent,
  },
  {
    path: 'mathJaxCss/medium',
    pathMatch: 'full',
    component: MediumCssComponent,
  },
  {
    path: 'mathJaxCss/large',
    pathMatch: 'full',
    component: LargeCssComponent,
  },
  //   MathJax Pre Render SVG Routes
  {
    path: 'mathJaxSvg/small',
    pathMatch: 'full',
    component: SmallSvgComponent,
  },
  {
    path: 'mathJaxSvg/medium',
    pathMatch: 'full',
    component: MediumSvgComponent,
  },
  {
    path: 'mathJaxSvg/large',
    pathMatch: 'full',
    component: LargeSvgComponent,
  },
  //   MathML Routes
  {
    path: 'mathML/small',
    pathMatch: 'full',
    component: SmallMlComponent,
  },
  {
    path: 'mathML/medium',
    pathMatch: 'full',
    component: MediumMlComponent,
  },
  {
    path: 'mathML/large',
    pathMatch: 'full',
    component: LargeMlComponent,
  },
];
