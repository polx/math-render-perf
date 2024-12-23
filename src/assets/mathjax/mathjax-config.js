window.MathJax = {
  loader: {
    paths: { mathjax: "/assets/mathjax" },
    load: ["input/tex", "output/chtml"],
  },
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
  },
  chtml: {
    fontURL: "/assets/mathjax/output/chtml/fonts/woff-v2",
  },
};
