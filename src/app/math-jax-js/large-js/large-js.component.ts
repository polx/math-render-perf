import { Component, AfterViewInit } from '@angular/core';
declare const MathJax: any;

@Component({
  selector: 'app-large-js',
  standalone: true,
  imports: [],
  templateUrl: './large-js.component.html',
  styleUrl: './large-js.component.css',
})
export class LargeJsComponent {
  // Math Expressions from DLMF
  me1 = `$$\\zeta\\left(2\\right) = \\frac{\\pi^{2}}{6}$$`;
  me2 = `$$\\zeta\\left(4\\right) = \\frac{\\pi^{4}}{90}$$`;
  me3 = `$$\\zeta\\left(6\\right) = \\frac{\\pi^{6}}{945}$$`;
  me4 = `\\[\\zeta\\left(2n\\right) = \\frac{(2\\pi)^{2n}}{2(2n)!}\\left|B_{2n}\\right|\\]`;
  me5 = `\\[\\zeta\\left(-n\\right) = -\\frac{B_{n+1}}{n+1}\\]`;
  me6 = `\\[\\zeta\\left(-2n\\right) = 0\\]`;
  me7 = `\\[\\zeta\\left(k+1\\right) = \\frac{1}{k!}\\sum_{n_{1}=1}^{\\infty}\\dots\\sum_{n_{k}=1}^{\\infty}\\frac{1}{n_{1}\\cdots n_{k}(n_{1}+\\dots+n_{k})}\\]`;
  me8 = `\\[\\zeta\\left(2k+1\\right) = \\frac{(-1)^{k+1}(2\\pi)^{2k+1}}{2(2k+1)!}\\int_{0}^{1}B_{2k+1}\\left(t\\right)\\cot\\left(\\pi t\\right)\\,\\mathrm{d}t\\]`;
  me9 = `\\[\\zeta\\left(2\\right) = \\int_{0}^{1}\\int_{0}^{1}\\frac{1}{1-xy}\\,\\mathrm{d}x\\,\\mathrm{d}y\\]`;
  me10 = `\\[\\zeta\\left(2\\right) = 3\\sum_{k=1}^{\\infty}\\frac{1}{k^{2}\\genfrac{(}{)}{0.0pt}{}{2k}{k}}\\]`;
  me11 = `\\[\\zeta\\left(3\\right) = \\frac{5}{2}\\sum_{k=1}^{\\infty}\\frac{(-1)^{k-1}}{k^{3}\\genfrac{(}{)}{0.0pt}{}{2k}{k}}\\]`;
  me12 = `\\[\\zeta\\left(4\\right) = \\frac{36}{17}\\sum_{k=1}^{\\infty}\\frac{1}{k^{4}\\genfrac{(}{)}{0.0pt}{}{2k}{k}}\\]`;
  me13 = `\\[\\zeta'\\left(0\\right) = -\\tfrac{1}{2}\\ln\\left(2\\pi\\right).\\]`;
  me14 = `\\[\\zeta''\\left(0\\right) = -\\tfrac{1}{2}(\\ln\\left(2\\pi\\right))^{2} + \\tfrac{1}{2}{\\gamma}^{2} - \\tfrac{1}{24}\\pi^{2} + \\gamma_{1},\\]`;
  me15 = `\\[(-1)^{k}{\\zeta}^{(k)}\\left(-2n\\right) = \\frac{2(-1)^{n}}{(2\\pi)^{2n+1}}\\sum_{m=0}^{k}\\sum_{r=0}^{m}\\genfrac{(}{)}{0.0pt}{}{k}{m}\\genfrac{(}{)}{0.0pt}{}{m}{r} \\Im\\left(c^{k-m}\\right)\\*{\\Gamma}^{(r)}\\left(2n+1\\right){\\zeta}^{(m-r)}\\left(2n+1\\right),\\]`;
  me16 = `\\[(-1)^{k}{\\zeta}^{(k)}\\left(1-2n\\right) = \\frac{2(-1)^{n}}{(2\\pi)^{2n}}\\sum_{m=0}^{k}\\sum_{r=0}^{m}\\genfrac{(}{)}{0.0pt}{}{k}{m}\\genfrac{(}{)}{0.0pt}{}{m}{r} \\Re\\left(c^{k-m}\\right)\\*{\\Gamma}^{(r)}\\left(2n\\right){\\zeta}^{(m-r)}\\left(2n\\right),\\]`;
  me17 = `\\[\\zeta'\\left(2n\\right) = \\frac{(-1)^{n+1}(2\\pi)^{2n}}{2(2n)!}\\left(2n\\zeta'\\left(1-2n\\right) - (\\psi\\left(2n\\right) - \\ln\\left(2\\pi\\right))B_{2n}\\right).\\]`;
  me18 = `\\[\\left(n + \\tfrac{1}{2}\\right)\\zeta\\left(2n\\right) = \\sum_{k=1}^{n-1}\\zeta\\left(2k\\right)\\zeta\\left(2n-2k\\right),\\]`;
  me19 = `\\[\\left(n + \\tfrac{3}{4}\\right)\\zeta\\left(4n+2\\right) = \\sum_{k=1}^{n}\\zeta\\left(2k\\right)\\zeta\\left(4n+2-2k\\right),\\]`;
  me20 = `\\[\\left(n + \\tfrac{1}{4}\\right)\\zeta\\left(4n\\right) + \\tfrac{1}{2}(\\zeta\\left(2n\\right))^{2} = \\sum_{k=1}^{n}\\zeta\\left(2k\\right)\\zeta\\left(4n-2k\\right),\\]`;
  me21 = `\\[\\left(m + n + \\tfrac{3}{2}\\right)\\zeta\\left(2m+2n+2\\right) = \\left(\\sum_{k=1}^{m} + \\sum_{k=1}^{n}\\right)\\zeta\\left(2k\\right)\\zeta\\left(2m+2n+2-2k\\right),\\]`;
  me22 = `\\[\\tfrac{1}{2}(2^{2n} - 1)\\zeta\\left(2n\\right) = \\sum_{k=1}^{n-1}(2^{2n-2k} - 1)\\zeta\\left(2n-2k\\right)\\zeta\\left(2k\\right),\\]`;
  me23 = `\\[\\sum_{k=2}^{\\infty}\\left(\\zeta\\left(k\\right)-1\\right)=1.\\]`;
  me24 = `\\[\\sum_{k=0}^{\\infty}\\frac{\\Gamma\\left(s+k\\right)}{(k+1)!}\\left(\\zeta\\left(s+k\\right)-1\\right)=\\Gamma\\left(s-1\\right),\\]`;
  me25 = `\\[\\sum_{k=0}^{\\infty}\\frac{\\left(s\\right)_{k}\\zeta\\left(s+k\\right)}{k!2^{s+k}}=(1-2^{-s})\\zeta\\left(s\\right),\\]`;
  me26 = `\\[\\sum_{k=1}^{\\infty}\\frac{(-1)^{k}}{k}(\\zeta\\left(nk\\right)-1)=\\ln\\left(\\prod_{j=0}^{n-1}\\Gamma\\left(2-e^{(2j+1)\\pi i/n}\\right)\\right),\\]`;
  me27 = `\\[\\sum_{k=2}^{\\infty}\\zeta\\left(k\\right)z^{k}=-\\gamma z-z\\psi\\left(1-z\\right),\\]`;
  me28 = `\\[\\sum_{k=0}^{\\infty}\\zeta\\left(2k\\right)z^{2k}=-\\tfrac{1}{2}\\pi z\\cot\\left(\\pi z\\right),\\]`;
  me29 = `\\[\\sum_{k=2}^{\\infty}\\frac{\\zeta\\left(k\\right)}{k}z^{k}=-\\gamma z+\\ln\\Gamma\\left(1-z\\right),\\]`;
  me30 = `\\[\\sum_{k=1}^{\\infty}\\frac{\\zeta\\left(2k\\right)}{k}z^{2k}=\\ln\\left(\\frac{\\pi z}{\\sin\\left(\\pi z\\right)}\\right),\\]`;
  me31 = `\\[\\sum_{k=1}^{\\infty}\\frac{\\zeta\\left(2k\\right)}{(2k+1)2^{2k}}=\\frac{1}{2}-\\frac{1}{2}\\ln 2.\\]`;
  me32 = `\\[\\sum_{k=1}^{\\infty}\\frac{\\zeta\\left(2k\\right)}{(2k+1)(2k+2)2^{2k}}=\\frac{1}{4}-\\frac{7}{4\\pi^{2}}\\zeta\\left(3\\right).\\]`;
  me33 = `\\[\\zeta'\\left(0,a\\right) = \\ln\\Gamma\\left(a\\right) - \\tfrac{1}{2}\\ln\\left(2\\pi\\right),\\]`;
  me34 = `\\[\\zeta'\\left(s,a\\right) = -\\frac{\\ln a}{a^{s}}\\left(\\frac{1}{2} + \\frac{a}{s-1}\\right) - \\frac{a^{1-s}}{(s-1)^{2}} + \\frac{s(s+1)}{2}\\int_{0}^{\\infty}\\frac{(\\widetilde{B}_{2}\\left(x\\right) - B_{2})\\ln\\left(x+a\\right)}{(x+a)^{s+2}}\\,\\mathrm{d}x - \\frac{(2s+1)}{2}\\int_{0}^{\\infty}\\frac{\\widetilde{B}_{2}\\left(x\\right) - B_{2}}{(x+a)^{s+2}}\\,\\mathrm{d}x,\\]`;
  me35 = `\\[(-1)^{k}{\\zeta}^{(k)}\\left(s,a\\right) = \\frac{(\\ln a)^{k}}{a^{s}}\\left(\\frac{1}{2} + \\frac{a}{s-1}\\right) + k!a^{1-s}\\sum_{r=0}^{k-1}\\frac{(\\ln a)^{r}}{r!(s-1)^{k-r+1}} - \\frac{s(s+1)}{2}\\int_{0}^{\\infty}\\frac{(\\widetilde{B}_{2}\\left(x\\right) - B_{2})(\\ln\\left(x+a\\right))^{k}}{(x+a)^{s+2}}\\,\\mathrm{d}x + \\frac{k(2s+1)}{2}\\int_{0}^{\\infty}\\frac{(\\widetilde{B}_{2}\\left(x\\right) - B_{2})(\\ln\\left(x+a\\right))^{k-1}}{(x+a)^{s+2}}\\,\\mathrm{d}x - \\frac{k(k-1)}{2}\\int_{0}^{\\infty}\\frac{(\\widetilde{B}_{2}\\left(x\\right) - B_{2})(\\ln\\left(x+a\\right))^{k-2}}{(x+a)^{s+2}}\\,\\mathrm{d}x,\\]`;
  me36 = `\\[\\zeta'\\left(1-2n,\\frac{h}{k}\\right) = \\frac{(\\psi\\left(2n\\right) - \\ln\\left(2\\pi k\\right))B_{2n}\\left(h/k\\right)}{2n} - \\frac{(\\psi\\left(2n\\right) - \\ln\\left(2\\pi\\right))B_{2n}}{2nk^{2n}} + \\frac{(-1)^{n+1}\\pi}{(2\\pi k)^{2n}}\\sum_{r=1}^{k-1}\\sin\\left(\\frac{2\\pi rh}{k}\\right){\\psi}^{(2n-1)}\\left(\\frac{r}{k}\\right) + \\frac{(-1)^{n+1}2\\cdot(2n-1)!}{(2\\pi k)^{2n}}\\sum_{r=1}^{k-1}\\cos\\left(\\frac{2\\pi rh}{k}\\right)\\zeta'\\left(2n,\\frac{r}{k}\\right) + \\frac{\\zeta'\\left(1-2n\\right)}{k^{2n}},\\]`;
  me37 = `\\[\\zeta'\\left(1-2n,\\tfrac{1}{2}\\right) = -\\frac{B_{2n}\\ln 2}{n\\cdot 4^{n}} - \\frac{(2^{2n-1} - 1)\\zeta'\\left(1-2n\\right)}{2^{2n-1}},\\]`;
  me38 = `\\[\\zeta'\\left(1-2n,\\tfrac{1}{3}\\right) = -\\frac{\\pi(9^{n} - 1)B_{2n}}{8n\\sqrt{3}(3^{2n-1} - 1)} - \\frac{B_{2n}\\ln 3}{4n\\cdot 3^{2n-1}} - \\frac{(-1)^{n}{\\psi}^{(2n-1)}\\left(\\frac{1}{3}\\right)}{2\\sqrt{3}(6\\pi)^{2n-1}} - \\frac{\\left(3^{2n-1} - 1\\right)\\zeta'\\left(1-2n\\right)}{2\\cdot 3^{2n-1}},\\]`;
  me39 = `\\[\\sum_{r=1}^{k-1}\\zeta'\\left(s,\\frac{r}{k}\\right) = (k^{s} - 1)\\zeta'\\left(s\\right) + k^{s}\\zeta\\left(s\\right)\\ln k,\\]`;
  me40 = `\\[\\zeta\\left(s,a\\right) = \\frac{1}{\\Gamma\\left(s\\right)}\\int_{0}^{\\infty}\\frac{x^{s-1}e^{-ax}}{1-e^{-x}}\\,\\mathrm{d}x,\\]`;
  me41 = `\\[\\zeta\\left(s,a\\right) = -s\\int_{-a}^{\\infty}\\frac{x-\\left\\lfloor x\\right\\rfloor - \\frac{1}{2}}{(x+a)^{s+1}}\\,\\mathrm{d}x,\\]`;
  me42 = `\\[\\zeta\\left(s,a\\right) = \\frac{1}{2}a^{-s} + \\frac{a^{1-s}}{s-1} + \\frac{1}{\\Gamma\\left(s\\right)}\\int_{0}^{\\infty}\\left(\\frac{1}{e^{x}-1} - \\frac{1}{x} + \\frac{1}{2}\\right)x^{s-1}e^{-ax}\\,\\mathrm{d}x,\\]`;
  me43 = `\\[\\zeta\\left(s,a\\right) = \\frac{1}{2}a^{-s} + \\frac{a^{1-s}}{s-1} + \\sum_{k=1}^{n}\\frac{B_{2k}}{(2k)!}\\left(s\\right)_{2k-1}a^{1-s-2k} + \\frac{1}{\\Gamma\\left(s\\right)}\\int_{0}^{\\infty}\\left(\\frac{1}{e^{x}-1} - \\frac{1}{x} + \\frac{1}{2} - \\sum_{k=1}^{n}\\frac{B_{2k}}{(2k)!}x^{2k-1}\\right)x^{s-1}e^{-ax}\\,\\mathrm{d}x,\\]`;
  me44 = `\\[\\zeta\\left(s,a\\right) = \\frac{1}{2}a^{-s} + \\frac{a^{1-s}}{s-1} + 2\\int_{0}^{\\infty}\\frac{\\sin\\left(s\\operatorname{arctan}\\left(x/a\\right)\\right)}{(a^{2}+x^{2})^{s/2}(e^{2\\pi x}-1)}\\,\\mathrm{d}x,\\]`;
  me45 = `\\[\\zeta\\left(s,a\\right) = \\frac{\\Gamma\\left(1-s\\right)}{2\\pi i}\\int_{-\\infty}^{(0+)}\\frac{e^{az}z^{s-1}}{1-e^{z}}\\,\\mathrm{d}z,\\]`;
  me46 = `\\[\\frac{1}{\\Gamma\\left(s\\right)}\\int_{0}^{\\infty}\\frac{x^{s-1}e^{-ax}}{2\\cosh x}\\,\\mathrm{d}x = 4^{-s}\\left(\\zeta\\left(s,\\tfrac{1}{4} + \\tfrac{1}{4}a\\right) - \\zeta\\left(s,\\tfrac{3}{4} + \\tfrac{1}{4}a\\right)\\right),\\]`;
  me47 = `\\[\\int_{0}^{a}x^{n}\\psi\\left(x\\right)\\,\\mathrm{d}x = (-1)^{n-1}\\zeta'\\left(-n\\right) + (-1)^{n}H_{n}\\frac{B_{n+1}}{n+1} - \\sum_{k=0}^{n}(-1)^{k}\\genfrac{(}{)}{0.0pt}{}{n}{k}H_{k}\\frac{B_{k+1}(a)}{k+1}a^{n-k} + \\sum_{k=0}^{n}(-1)^{k}\\genfrac{(}{)}{0.0pt}{}{n}{k}\\zeta'\\left(-k,a\\right)a^{n-k},\\]`;
  me48 = `\\[H_{n} = \\sum_{k=1}^{n}k^{-1}.\\]`;
  me49 = `\\[n\\int_{0}^{a}\\zeta'\\left(1-n,x\\right)\\,\\mathrm{d}x = \\zeta'\\left(-n,a\\right) - \\zeta'\\left(-n\\right) + \\frac{B_{n+1}-B_{n+1}\\left(a\\right)}{n(n+1)},\\]`;
  me50 = `\\[\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}}{(n+a)^{s}} = \\frac{1}{\\Gamma\\left(s\\right)}\\int_{0}^{\\infty}\\frac{x^{s-1}e^{-ax}}{1+e^{-x}}\\,\\mathrm{d}x = 2^{-s}\\left(\\zeta\\left(s,\\tfrac{1}{2}a\\right) - \\zeta\\left(s,\\tfrac{1}{2}(1+a)\\right)\\right),\\]`;
  me51 = `\\[\\sum_{k=1}^{\\infty}\\frac{(-1)^{k}}{k}\\zeta\\left(nk,a\\right) = -n\\ln\\Gamma\\left(a\\right) + \\ln\\left(\\prod_{j=0}^{n-1}\\Gamma\\left(a-e^{(2j+1)\\pi i/n}\\right)\\right),\\]`;
  me52 = `\\[\\sum_{k=1}^{\\infty}\\genfrac{(}{)}{0.0pt}{}{n+k}{k}\\zeta\\left(n+k+1,a\\right)z^{k} = \\frac{(-1)^{n}}{n!}\\left({\\psi}^{(n)}\\left(a\\right) - {\\psi}^{(n)}\\left(a-z\\right)\\right),\\]`;
  me53 = `\\[\\sum_{k=2}^{\\infty}\\frac{k}{2^{k}}\\zeta\\left(k+1,\\tfrac{3}{4}\\right) = 8G,\\]`;
  me54 = `\\[G \\equiv \\sum_{n=0}^{\\infty}\\frac{(-1)^{n}}{(2n+1)^{2}} = 0.91596\\;55941\\;772\\dots.\\]`;
  me55 = `\\[\\zeta\\left(s,a+1\\right) = \\zeta\\left(s\\right) - s\\zeta\\left(s+1\\right)a + O\\left(a^{2}\\right).\\]`;
  me56 = `\\[\\zeta\\left(s,\\alpha+i\\beta\\right) \\to 0,\\]`;
  me57 = `\\[\\zeta\\left(s,a\\right) - \\frac{a^{1-s}}{s-1} - \\frac{1}{2}a^{-s} \\sim \\sum_{k=1}^{\\infty}\\frac{B_{2k}}{(2k)!}\\left(s\\right)_{2k-1}a^{1-s-2k}.\\]`;
  me58 = `\\[\\zeta'\\left(-1,a\\right) - \\frac{1}{12} + \\frac{1}{4}a^{2} - \\left(\\frac{1}{12} - \\frac{1}{2}a + \\frac{1}{2}a^{2}\\right)\\ln a \\sim -\\sum_{k=1}^{\\infty}\\frac{B_{2k+2}}{(2k+2)(2k+1)2k}a^{-2k},\\]`;
  me59 = `\\[\\zeta'\\left(-2,a\\right) - \\frac{1}{12}a + \\frac{1}{9}a^{3} - \\left(\\frac{1}{6}a - \\frac{1}{2}a^{2} + \\frac{1}{3}a^{3}\\right)\\ln a \\sim \\sum_{k=1}^{\\infty}\\frac{2B_{2k+2}}{(2k+2)(2k+1)2k(2k-1)}a^{-(2k-1)}.\\]`;
  me60 = `\\[\\zeta\\left(s,a\\right) = \\sum_{n=0}^{N}\\frac{1}{(n+a)^{s}} + \\frac{(N+a)^{1-s}}{s-1} - s\\int_{N}^{\\infty}\\frac{x-\\left\\lfloor x\\right\\rfloor}{(x+a)^{s+1}}\\,\\mathrm{d}x,\\]`;
  me61 = `\\[\\zeta\\left(s,a\\right) = \\frac{1}{a^{s}}\\left(\\frac{1}{2} + \\frac{a}{s-1}\\right) - \\frac{s(s+1)}{2}\\int_{0}^{\\infty}\\frac{\\widetilde{B}_{2}\\left(x\\right) - B_{2}}{(x+a)^{s+2}}\\,\\mathrm{d}x,\\]`;
  me62 = `\\[\\zeta\\left(s,a\\right) = \\frac{1}{a^{s}} + \\frac{1}{(1+a)^{s}}\\left(\\frac{1}{2} + \\frac{1+a}{s-1}\\right) + \\sum_{k=1}^{n}\\genfrac{(}{)}{0.0pt}{}{s+2k-2}{2k-1}\\frac{B_{2k}}{2k}\\frac{1}{(1+a)^{s+2k-1}} - \\genfrac{(}{)}{0.0pt}{}{s+2n}{2n+1}\\int_{1}^{\\infty}\\frac{\\widetilde{B}_{2n+1}\\left(x\\right)}{(x+a)^{s+2n+1}}\\,\\mathrm{d}x,\\]`;
  me63 = `\\[\\zeta\\left(s,\\tfrac{1}{2}a\\right) = \\zeta\\left(s,\\tfrac{1}{2}a + \\tfrac{1}{2}\\right) + 2^{s}\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}}{(n+a)^{s}},\\]`;
  me64 = `\\[\\zeta\\left(1-s,a\\right) = \\frac{2\\Gamma\\left(s\\right)}{(2\\pi)^{s}}\\sum_{n=1}^{\\infty}\\frac{1}{n^{s}}\\cos\\left(\\tfrac{1}{2}\\pi s - 2n\\pi a\\right),\\]`;

  ngAfterViewInit(): void {
    this.renderMath();
  }

  renderMath(): void {
    if(MathJax.typesetPromise) MathJax.typesetPromise();
  }
}
