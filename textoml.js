const { mathjax } = require('mathjax-full/js/mathjax.js');
const { TeX } = require('mathjax-full/js/input/tex.js');
const { MathML } = require('mathjax-full/js/output/mml.js');
const { liteAdaptor } = require('mathjax-full/js/adaptors/liteAdaptor.js');
const { RegisterHTMLHandler } = require('mathjax-full/js/handlers/html.js');

const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);

const texToMathML = mathjax.document('', {
    InputJax: new TeX(),
    OutputJax: new MathML(),
  });

  const latex = `$$\\zeta\\left(1-s,a\\right) = \\frac{2\\Gamma\\left(s\\right)}{(2\\pi)^{s}}\\sum_{n=1}^{\\infty}\\frac{1}{n^{s}}\\cos\\left(\\frac{1}{2}\\pi s - 2n\\pi a\\right)$$`;
  const mathml = adaptor.outerHTML(texToMathML.convert(latex, { display: true }));
  console.log(mathml);
