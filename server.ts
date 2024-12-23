import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';

import { mathjax } from 'mathjax-full/js/mathjax.js';
import { TeX } from 'mathjax-full/js/input/tex.js';
import { SVG } from 'mathjax-full/js/output/svg.js';
import { CHTML } from 'mathjax-full/js/output/chtml.js';
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// MathJax Configuration
const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);

const mathjaxDocument = mathjax.document('', {
  InputJax: new TeX({
    packages: ['base', 'ams'], // Ensure 'ams' is loaded for \binom and other macros
  }),
  OutputJax: new CHTML({ fontURL: '/assets/mathjax/output/chtml/fonts/woff-v2' }),
});

// MathJax Configuration for SVG Output
const mathjaxDocumentSVG = mathjax.document('', {
  InputJax: new TeX({
    packages: ['base', 'ams'], // Add other packages if needed
  }),
  OutputJax: new SVG({ fontCache: 'none' }),
});

// Function to render math expressions
function renderMath(expression: string): string {
  try {
    const node = mathjaxDocument.convert(expression, { display: true });
    return adaptor.outerHTML(node);
  } catch (error) {
    console.error('MathJax Rendering Error:', error, 'Expression:', expression);
    return `<div style="color: red;">Error rendering math expression</div>`;
  }
}

// Function to render math expressions using SVG
function renderMathSVG(expression: string): string {
  try {
    const node = mathjaxDocumentSVG.convert(expression, { display: true });
    return adaptor.outerHTML(node);
  } catch (error) {
    console.error('MathJax SVG Rendering Error:', error, 'Expression:', expression);
    return `<div style="color: red;">Error rendering math expression</div>`;
  }
}

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(browserDistFolder, 'index.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Serve static files from /browser
  server.get('*.*', express.static(browserDistFolder, { maxAge: '1y' }));

  // Serve MathJax static assets
  server.use('/assets/mathjax', express.static(join(browserDistFolder, 'assets/mathjax'), { maxAge: '1y' }));

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: req.originalUrl,
        providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
        inlineCriticalCss: true,
        publicPath: browserDistFolder,
      })
      .then((html) => {
        // Step 1: Render MathJax in CSS style for <app-math-render>
        const cssRenderedHtml = html.replace(
          /<app-math-render[^>]*>\s*<div[^>]*>\s*\$\$([\s\S]*?)\$\$\s*<\/div>\s*<\/app-math-render>/g,
          (_, mathExpression) => renderMath(mathExpression.trim())
        );
  
        // Step 2: Render MathJax in SVG style for <app-math-render-svg>
        const svgRenderedHtml = cssRenderedHtml.replace(
          /<app-math-render-svg[^>]*>\s*<div[^>]*>\s*\$\$([\s\S]*?)\$\$\s*<\/div>\s*<\/app-math-render-svg>/g,
          (_, mathExpression) => renderMathSVG(mathExpression.trim())
        );
  
        // Send the final HTML with both CSS and SVG components rendered
        res.send(svgRenderedHtml);
      })
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
