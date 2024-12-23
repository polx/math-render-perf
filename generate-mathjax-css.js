const fs = require('fs');
const path = require('path');
const { liteAdaptor } = require('mathjax-full/js/adaptors/liteAdaptor');
const { RegisterHTMLHandler } = require('mathjax-full/js/handlers/html');
const { mathjax } = require('mathjax-full/js/mathjax');
const { TeX } = require('mathjax-full/js/input/tex');
const { CHTML } = require('mathjax-full/js/output/chtml');

const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);

const tex = new TeX();
const chtml = new CHTML({ fontURL: '/assets/mathjax/output/chtml/fonts/woff-v2' });
const mj = mathjax.document('', { InputJax: tex, OutputJax: chtml });

// Generate the CSS for CommonHTML output
const cssElement = chtml.styleSheet(mj);
const css = adaptor.outerHTML(cssElement);

const outputPath = path.resolve(__dirname, 'src/assets/mathjax/output/chtml/MathJax.css');
fs.writeFileSync(outputPath, css, 'utf8');

console.log(`MathJax CSS written to: ${outputPath}`);
