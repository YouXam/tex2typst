const symbolMap = new Map<string, string>([
    [',', 'thin'],
    [':', 'med'],
    [';', 'thick'],

    ['cos', 'cos'],
    ['sin', 'sin'],
    ['tan', 'tan'],
    ['cot', 'cot'],
    ['sec', 'sec'],
    ['csc', 'csc'],
    ['mod', 'mod'],
    ['omicron', 'omicron'],
    ['Xi', 'Xi'],
    ['Upsilon', 'Upsilon'],
    ['lim', 'lim'],

    ['nonumber', ''],
    ['vec', 'arrow'],
    ['neq', 'eq.not'],
    ['dot', 'dot'],
    ['ddot', 'dot.double'],
    ['doteq', 'dot(eq)'],
    ['dots', 'dots.h'],
    ['vdots', 'dots.v'],
    ['ddots', 'dots.down'],
    ['widehat', 'hat'], // Ideally, the result of \widehat should be longer than \hat. But it is not implemented now.
    ['widetilde', 'tilde'], // Ideally, the result of \widetilde should be longer than \tilde. But it is not implemented now.
    ['quad', 'quad'],
    ['qquad', 'wide'],
    ['overbrace', 'overbrace'], // same
    ['underbrace', 'underbrace'], // same
    ['overline', 'overline'], // same
    ['underline', 'underline'], // same
    ['bar', 'macron'],
    ['dbinom', 'binom'],
    ['tbinom', 'binom'],
    ['dfrac', 'frac'],
    ['tfrac', 'frac'],

    ['operatorname', 'op'],

    ['boldsymbol', 'bold'],
    ['mathbb', 'bb'],
    ['mathbf', 'bold'],
    ['mathcal', 'cal'],
    ['mathit', 'italic'],
    ['mathfrak', 'frak'],
    ['mathrm', 'upright'],
    ['mathsf', 'sans'],
    ['mathtt', 'mono'],

    ['rm', 'upright'],

    // TODO: \pmb need special logic to handle but it is not implemented now. See the commented test case.
    ['pmb', 'bold'],

    /* variants of plus,minus,times,divide */
    ['pm', 'plus.minus'],
    ['mp', 'minus.plus'],
    ['boxplus', 'plus.square'],
    ['otimes', 'times.circle'],
    ['boxtimes', 'times.square'],


    /* wave */
    // tex: \sim \approx \cong \simeq \asymp \equiv \propto
    // typst: tilde.op approx tilde.equiv tilde.eq ≍ equiv prop
    ['approx', 'approx'],
    ['cong', 'tilde.equiv'],
    ['simeq', 'tilde.eq'],
    ['asymp', '≍'],   // just use the unicode character :-)
    ['equiv', 'equiv'],
    ['propto', 'prop'],

    /* arrows */
    ['gets', 'arrow.l'],
    // ['longmapsto', 'arrow.r.bar'],
    ['iff', 'arrow.l.r.double.long'],
    ['implies', 'arrow.r.double.long'],
    ['leadsto', 'arrow.squiggly'],


    ['Cap', 'sect.double'], 
    ['Cup', 'union.double'], 
    ['Delta', 'Delta'], 
    ['Gamma', 'Gamma'], 
    ['Join', 'join'], 
    ['Lambda', 'Lambda'], 
    ['Omega', 'Omega'], 
    ['P', 'pilcrow'], 
    ['Phi', 'Phi'], 
    ['Pi', 'Pi'], 
    ['Psi', 'Psi'], 
    ['Rightarrow', 'arrow.r.double'], 
    ['S', 'section'], 
    ['Sigma', 'Sigma'], 
    ['Theta', 'Theta'], 
    ['aleph', 'alef'], 
    ['alpha', 'alpha'], 
    // ['amalg', 'product.co'], 
    ['angle', 'angle'], 
    ['approx', 'approx'], 
    ['approxeq', 'approx.eq'], 
    // ['ast', 'ast'], 
    ['beta', 'beta'], 
    ['bigcap', 'sect.big'], 
    ['bigcirc', 'circle.big'], 
    ['bigcup', 'union.big'], 
    ['bigodot', 'dot.circle.big'], 
    // ['bigoplus', 'xor.big'], // or "plus.circle.big"
    ['bigotimes', 'times.circle.big'], 
    ['bigsqcup', 'union.sq.big'], 
    // ['bigtriangledown', 'triangle.b'], 
    // ['bigtriangleup', 'triangle.t'], 
    ['biguplus', 'union.plus.big'], 
    ['bigvee', 'or.big'], 
    ['bigwedge', 'and.big'], 
    // ['bowtie', 'join'], 
    ['bullet', 'bullet'], 
    ['cap', 'sect'], 
    ['cdot', 'dot.op'],  // 'dot.op' or 'dot.c'
    ['cdots', 'dots.c'], 
    ['checkmark', 'checkmark'], 
    ['chi', 'chi'], 
    ['circ', 'circle.small'],  // 'circle.small' or 'compose'
    ['colon', 'colon'], 
    ['cong', 'tilde.equiv'], 
    ['coprod', 'product.co'], 
    ['copyright', 'copyright'], 
    ['cup', 'union'], 
    ['curlyvee', 'or.curly'], 
    ['curlywedge', 'and.curly'], 
    ['dagger', 'dagger'], 
    ['dashv', 'tack.l'], 
    ['ddagger', 'dagger.double'], 
    ['delta', 'delta'], 
    ['ddots', 'dots.down'], 
    ['diamond', 'diamond'], 
    ['div', 'div'], 
    ['divideontimes', 'times.div'], 
    ['dotplus', 'plus.dot'], 
    ['ell', 'ell'], 
    ['emptyset', 'nothing'], 
    ['epsilon', 'epsilon.alt'], 
    ['equiv', 'equiv'], 
    ['eta', 'eta'], 
    ['exists', 'exists'], 
    ['forall', 'forall'], 
    // ['frown', 'paren.t'], 
    ['gamma', 'gamma'], 
    ['ge', 'gt.eq'], 
    ['geq', 'gt.eq'], 
    ['geqslant', 'gt.eq.slant'], 
    ['gg', 'gt.double'], 
    ['hbar', 'planck.reduce'], 
    ['imath', 'dotless.i'], 
    ['iiiint', 'integral.quad'], 
    ['iiint', 'integral.triple'], 
    ['iint', 'integral.double'], 
    ['in', 'in'], 
    ['infty', 'infinity'],
    ['int', 'integral'], 
    ['intercal', 'top'],  // 'top' or 'tack.b'
    ['iota', 'iota'], 
    ['jmath', 'dotless.j'], 
    ['kappa', 'kappa'], 
    ['lambda', 'lambda'], 
    ['land', 'and'],
    ['langle', 'angle.l'], 
    ['lbrace', 'brace.l'], 
    ['lbrack', 'bracket.l'], 
    ['ldots', 'dots.h'], 
    ['le', 'lt.eq'], 
    ['leftthreetimes', 'times.three.l'], 
    ['leftrightarrow', 'arrow.l.r'], 
    ['leq', 'lt.eq'], 
    ['leqslant', 'lt.eq.slant'], 
    ['lhd', 'triangle.l'], 
    ['ll', 'lt.double'], 
    // ['longmapsto', 'arrow.bar.long'], 
    // ['longrightarrow', 'arrow.long'], 
    ['lor', 'or'],
    ['ltimes', 'times.l'], 
    // ['mapsto', 'arrow.bar'], 
    ['measuredangle', 'angle.arc'], 
    ['mid', 'divides'], 
    ['models', 'models'], 
    ['mp', 'minus.plus'], 
    ['mu', 'mu'], 
    // ['nRightarrow', 'arrow.double.not'], 
    ['nabla', 'nabla'], 
    ['ncong', 'tilde.equiv.not'], 
    ['ne', 'eq.not'], 
    ['neg', 'not'], 
    ['neq', 'eq.not'], 
    ['nexists', 'exists.not'],
    ['ni', "in.rev"],
    ['nleftarrow', "arrow.l.not"],
    ['nleq', "lt.eq.not"],
    ['nparallel', "parallel.not"],
    ['ngeq', 'gt.eq.not'],
    ['nmid', 'divides.not'], 
    ['notin', 'in.not'], 
    // ['nrightarrow', 'arrow.not'], 
    ['nsim', 'tilde.not'], 
    ['nsubseteq', 'subset.eq.not'],
    ['nu', 'nu'], 
    ['ntriangleleft', 'lt.tri.not'],
    ['ntriangleright', 'gt.tri.not'],
    ['odot', 'dot.circle'], 
    ['oint', 'integral.cont'], 
    ['oiint', 'integral.surf'],
    ['oiiint', 'integral.vol'],
    ['omega', 'omega'], 
    // ['omicron', 'omicron'], 
    ['ominus', 'minus.circle'], 
    // ['oplus', 'xor'], // or 'plus.circle'
    ['otimes', 'times.circle'], 
    ['parallel', 'parallel'], 
    ['partial', 'diff'], 
    ['perp', 'perp'], 
    ['phi', 'phi.alt'], 
    ['pi', 'pi'], 
    ['pm', 'plus.minus'], 
    ['pounds', 'pound'], 
    ['prec', 'prec'], 
    ['preceq', 'prec.eq'], 
    ['prime', 'prime'], 
    ['prod', 'product'], 
    ['propto', 'prop'], 
    ['psi', 'psi'], 
    ['rangle', 'angle.r'], 
    ['rbrace', 'brace.r'], 
    ['rbrack', 'bracket.r'], 
    ['rhd', 'triangle'], 
    ['rho', 'rho'], 
    ['rightarrow', 'arrow.r'], 
    ['rightthreetimes', 'times.three.r'], 
    ['rtimes', 'times.r'], 
    ['setminus', 'without'], 
    ['sigma', 'sigma'], 
    ['sim', 'tilde.op'], 
    ['simeq', 'tilde.eq'], 
    ['slash', 'slash'], 
    ['smallsetminus', 'without'], 
    // ['smile', 'paren.b'], 
    ['spadesuit', 'suit.spade'],
    ['sqcap', 'sect.sq'], 
    ['sqcup', 'union.sq'], 
    ['sqsubseteq', 'subset.eq.sq'],
    ['sqsupseteq', 'supset.eq.sq'],
    // ['star', 'star'], 
    ['subset', 'subset'], 
    ['subseteq', 'subset.eq'], 
    ['subsetneq', 'subset.neq'], 
    ['succ', 'succ'], 
    ['succeq', 'succ.eq'], 
    ['sum', 'sum'], 
    ['supset', 'supset'], 
    ['supseteq', 'supset.eq'], 
    ['supsetneq', 'supset.neq'], 
    ['tau', 'tau'], 
    ['theta', 'theta'], 
    ['times', 'times'], 
    ['to', 'arrow.r'], 
    ['top', 'top'], 
    ['triangle', 'triangle.t'], 
    // ['triangledown', 'triangle.b.small'], 
    // ['triangleleft', 'triangle.l.small'], 
    // ['triangleright', 'triangle.r.small'], 
    ['twoheadrightarrow', 'arrow.r.twohead'], 
    ['upharpoonright', 'harpoon.tr'], 
    ['uplus', 'union.plus'], 
    ['upsilon', 'upsilon'], 
    ['varepsilon', 'epsilon'], 
    ['varnothing', 'diameter'], // empty set
    ['varphi', 'phi'], 
    ['varpi', 'pi.alt'], 
    ['varrho', 'rho.alt'], 
    ['varsigma', 'sigma.alt'], 
    ['vartheta', 'theta.alt'], 
    ['vdash', 'tack.r'], 
    ['vdots', 'dots.v'], 
    ['vee', 'or'], 
    ['wedge', 'and'], 
    ['wr', 'wreath'], 
    ['xi', 'xi'], 
    ['yen', 'yen'], 
    ['zeta', 'zeta'], 

    // extended
    ['mathscr', 'scr'],
    ['LaTeX', '#LaTeX'],
    ['TeX', '#TeX'],
]);

// The following are from Typst documentation website, augo-generated by the script
const map_from_official_docs: Map<string, string> = new Map([
    ['lparen', 'paren.l'],
    ['lParen', 'paren.l.double'],
    ['rparen', 'paren.r'],
    ['rParen', 'paren.r.double'],
    ['overparen', 'paren.t'],
    ['underparen', 'paren.b'],
    ['lbrace', 'brace.l'],
    ['lBrace', 'brace.l.double'],
    ['rbrace', 'brace.r'],
    ['rBrace', 'brace.r.double'],
    // ['overbrace', 'brace.t'],
    ['underbrace', 'brace.b'],
    ['lbrack', 'bracket.l'],
    ['lBrack', 'bracket.l.double'],
    ['rbrack', 'bracket.r'],
    ['rBrack', 'bracket.r.double'],
    ['overbracket', 'bracket.t'],
    ['underbracket', 'bracket.b'],
    ['lbrbrak', 'shell.l'],
    ['Lbrbrak', 'shell.l.double'],
    ['rbrbrak', 'shell.r'],
    ['Rbrbrak', 'shell.r.double'],
    ['obrbrak', 'shell.t'],
    ['ubrbrak', 'shell.b'],
    ['vert', 'bar.v'],
    ['Vert', 'bar.v.double'],
    ['Vvert', 'bar.v.triple'],
    ['circledvert', 'bar.v.circle'],
    ['horizbar', 'bar.h'],
    ['lvzigzag', 'fence.l'],
    ['Lvzigzag', 'fence.l.double'],
    ['rvzigzag', 'fence.r'],
    ['Rvzigzag', 'fence.r.double'],
    ['fourvdots', 'fence.dotted'],
    ['angle', 'angle'],
    ['langle', 'angle.l'],
    ['lcurvyangle', 'angle.l.curly'],
    ['langledot', 'angle.l.dot'],
    ['rangle', 'angle.r'],
    ['rcurvyangle', 'angle.r.curly'],
    ['rangledot', 'angle.r.dot'],
    ['angdnr', 'angle.acute'],
    ['measuredangle', 'angle.arc'],
    ['measuredangleleft', 'angle.arc.rev'],
    ['wideangledown', 'angle.oblique'],
    ['revangle', 'angle.rev'],
    ['rightangle', 'angle.right'],
    ['measuredrightangle', 'angle.right.arc'],
    ['rightanglemdot', 'angle.right.dot'],
    ['rightanglesqr', 'angle.right.sq'],
    ['angles', 'angle.s'],
    ['threedangle', 'angle.spatial'],
    ['sphericalangle', 'angle.spheric'],
    ['gtlpar', 'angle.spheric.rev'],
    ['sphericalangleup', 'angle.spheric.top'],
    ['lceil', 'ceil.l'],
    ['rceil', 'ceil.r'],
    ['lfloor', 'floor.l'],
    ['rfloor', 'floor.r'],
    ['mathampersand', 'amp'],
    ['upand', 'amp.inv'],
    ['ast', 'ast.op'],
    ['circledast', 'ast.circle'],
    ['boxast', 'ast.square'],
    ['mathatsign', 'at'],
    ['backslash', 'backslash'],
    ['obslash', 'backslash.circle'],
    ['rsolbar', 'backslash.not'],
    ['mathcolon', 'colon'],
    ['Colon', 'colon.double'],
    ['coloneq', 'colon.eq'],
    ['Coloneq', 'colon.double.eq'],
    ['mathcomma', 'comma'],
    ['dagger', 'dagger'],
    ['ddagger', 'dagger.double'],
    ['dashcolon', 'dash.colon'],
    ['circleddash', 'dash.circle'],
    ['hzigzag', 'dash.wave.double'],
    ['cdot', 'dot.op'],
    ['mathperiod', 'dot.basic'],
    ['cdotp', 'dot.c'],
    ['odot', 'dot.circle'],
    ['bigodot', 'dot.circle.big'],
    ['boxdot', 'dot.square'],
    ['dddot', 'dot.triple'],
    ['ddddot', 'dot.quad'],
    ['mathexclam', 'excl'],
    ['Exclam', 'excl.double'],
    ['mathquestion', 'quest'],
    ['Question', 'quest.double'],
    ['mathoctothorpe', 'hash'],
    // ['mathhyphen', 'hyph'],
    ['mathpercent', 'percent'],
    ['mathparagraph', 'pilcrow'],
    ['mathsection', 'section'],
    ['mathsemicolon', 'semi'],
    ['mathslash', 'slash'],
    ['sslash', 'slash.double'],
    ['trslash', 'slash.triple'],
    ['xsol', 'slash.big'],
    ['unicodecdots', 'dots.h.c'],
    ['unicodeellipsis', 'dots.h'],
    ['vdots', 'dots.v'],
    ['ddots', 'dots.down'],
    ['adots', 'dots.up'],
    ['sim', 'tilde.op'],
    ['dotsim', 'tilde.dot'],
    ['sime', 'tilde.eq'],
    ['nsimeq', 'tilde.eq.not'],
    ['backsimeq', 'tilde.eq.rev'],
    ['cong', 'tilde.equiv'],
    ['ncong', 'tilde.equiv.not'],
    ['simneqq', 'tilde.nequiv'],
    ['nsim', 'tilde.not'],
    ['backsim', 'tilde.rev'],
    ['backcong', 'tilde.rev.equiv'],
    ['approxident', 'tilde.triple'],
    ['caretinsert', 'caret'],
    ['prime', 'prime'],
    ['backprime', 'prime.rev'],
    ['dprime', 'prime.double'],
    ['backdprime', 'prime.double.rev'],
    ['trprime', 'prime.triple'],
    ['backtrprime', 'prime.triple.rev'],
    ['qprime', 'prime.quad'],
    ['mathplus', 'plus'],
    ['oplus', 'plus.circle'],
    ['rightarrowonoplus', 'plus.circle.arrow'],
    ['bigoplus', 'plus.circle.big'],
    ['dotplus', 'plus.dot'],
    ['doubleplus', 'plus.double'],
    ['pm', 'plus.minus'],
    ['boxplus', 'plus.square'],
    ['triangleplus', 'plus.triangle'],
    ['tripleplus', 'plus.triple'],
    ['minus', 'minus'],
    ['ominus', 'minus.circle'],
    ['dotminus', 'minus.dot'],
    ['mp', 'minus.plus'],
    ['boxminus', 'minus.square'],
    ['eqsim', 'minus.tilde'],
    ['triangleminus', 'minus.triangle'],
    ['div', 'div'],
    ['odiv', 'div.circle'],
    ['times', 'times'],
    ['bigtimes', 'times.big'],
    ['otimes', 'times.circle'],
    ['bigotimes', 'times.circle.big'],
    ['divideontimes', 'times.div'],
    ['leftthreetimes', 'times.three.l'],
    ['rightthreetimes', 'times.three.r'],
    ['ltimes', 'times.l'],
    ['rtimes', 'times.r'],
    ['boxtimes', 'times.square'],
    ['triangletimes', 'times.triangle'],
    ['mathratio', 'ratio'],
    ['equal', 'eq'],
    ['stareq', 'eq.star'],
    ['circledequal', 'eq.circle'],
    ['eqcolon', 'eq.colon'],
    // \usepackage{mathtools} defines \eqdef
    // https://tex.stackexchange.com/questions/28836/typesetting-the-define-equals-symbol
    ['eqdef', 'eq.def'],
    ['triangleq', 'eq.delta'],
    ['veeeq', 'eq.equi'],
    ['wedgeq', 'eq.est'],
    ['eqgtr', 'eq.gt'],
    ['eqless', 'eq.lt'],
    ['measeq', 'eq.m'],
    ['ne', 'eq.not'],
    ['curlyeqprec', 'eq.prec'],
    ['questeq', 'eq.quest'],
    ['curlyeqsucc', 'eq.succ'],
    ['equiv', 'eq.triple'],
    ['Equiv', 'eq.quad'],
    ['greater', 'gt'],
    ['ogreaterthan', 'gt.circle'],
    ['gtrdot', 'gt.dot'],
    ['gtrapprox', 'gt.approx'],
    ['gg', 'gt.double'],
    ['geq', 'gt.eq'],
    ['geqslant', 'gt.eq.slant'],
    ['gtreqless', 'gt.eq.lt'],
    ['ngeq', 'gt.eq.not'],
    ['geqq', 'gt.equiv'],
    ['gtrless', 'gt.lt'],
    ['ngtrless', 'gt.lt.not'],
    ['gneq', 'gt.neq'],
    ['gnapprox', 'gt.napprox'],
    ['gneqq', 'gt.nequiv'],
    ['ngtr', 'gt.not'],
    ['gnsim', 'gt.ntilde'],
    ['gtrsim', 'gt.tilde'],
    ['ngtrsim', 'gt.tilde.not'],
    ['vartriangleright', 'gt.tri'],
    ['trianglerighteq', 'gt.tri.eq'],
    ['ntrianglerighteq', 'gt.tri.eq.not'],
    ['nvartriangleright', 'gt.tri.not'],
    ['ggg', 'gt.triple'],
    ['gggnest', 'gt.triple.nested'],
    ['less', 'lt'],
    ['olessthan', 'lt.circle'],
    ['lessdot', 'lt.dot'],
    ['lessapprox', 'lt.approx'],
    ['ll', 'lt.double'],
    ['leq', 'lt.eq'],
    ['leqslant', 'lt.eq.slant'],
    ['lesseqgtr', 'lt.eq.gt'],
    ['nleq', 'lt.eq.not'],
    ['leqq', 'lt.equiv'],
    ['lessgtr', 'lt.gt'],
    ['nlessgtr', 'lt.gt.not'],
    ['lneq', 'lt.neq'],
    ['lnapprox', 'lt.napprox'],
    ['lneqq', 'lt.nequiv'],
    ['nless', 'lt.not'],
    ['lnsim', 'lt.ntilde'],
    ['lesssim', 'lt.tilde'],
    ['nlesssim', 'lt.tilde.not'],
    ['vartriangleleft', 'lt.tri'],
    ['trianglelefteq', 'lt.tri.eq'],
    ['ntrianglelefteq', 'lt.tri.eq.not'],
    ['nvartriangleleft', 'lt.tri.not'],
    ['lll', 'lt.triple'],
    ['lllnest', 'lt.triple.nested'],
    ['approx', 'approx'],
    ['approxeq', 'approx.eq'],
    ['napprox', 'approx.not'],
    ['prec', 'prec'],
    ['precapprox', 'prec.approx'],
    ['preccurlyeq', 'prec.curly.eq'],
    ['npreccurlyeq', 'prec.curly.eq.not'],
    ['Prec', 'prec.double'],
    ['preceq', 'prec.eq'],
    ['preceqq', 'prec.equiv'],
    ['precnapprox', 'prec.napprox'],
    ['precneq', 'prec.neq'],
    ['precneqq', 'prec.nequiv'],
    ['nprec', 'prec.not'],
    ['precnsim', 'prec.ntilde'],
    ['precsim', 'prec.tilde'],
    ['succ', 'succ'],
    ['succapprox', 'succ.approx'],
    ['succcurlyeq', 'succ.curly.eq'],
    ['nsucccurlyeq', 'succ.curly.eq.not'],
    ['Succ', 'succ.double'],
    ['succeq', 'succ.eq'],
    ['succeqq', 'succ.equiv'],
    ['succnapprox', 'succ.napprox'],
    ['succneq', 'succ.neq'],
    ['succneqq', 'succ.nequiv'],
    ['nsucc', 'succ.not'],
    ['succnsim', 'succ.ntilde'],
    ['succsim', 'succ.tilde'],
    ['nequiv', 'equiv.not'],
    ['propto', 'prop'],
    ['origof', 'original'],
    ['imageof', 'image'],
    ['varnothing', 'emptyset'],
    ['emptysetoarr', 'emptyset.arrow.r'],
    ['emptysetoarrl', 'emptyset.arrow.l'],
    ['emptysetobar', 'emptyset.bar'],
    ['emptysetocirc', 'emptyset.circle'],
    ['revemptyset', 'emptyset.rev'],
    ['setminus', 'without'],
    ['complement', 'complement'],
    ['in', 'in'],
    ['notin', 'in.not'],
    ['ni', 'in.rev'],
    ['nni', 'in.rev.not'],
    ['smallni', 'in.rev.small'],
    ['smallin', 'in.small'],
    ['subset', 'subset'],
    ['subsetdot', 'subset.dot'],
    ['Subset', 'subset.double'],
    ['subseteq', 'subset.eq'],
    ['nsubseteq', 'subset.eq.not'],
    ['sqsubseteq', 'subset.eq.sq'],
    ['nsqsubseteq', 'subset.eq.sq.not'],
    ['subsetneq', 'subset.neq'],
    ['nsubset', 'subset.not'],
    ['sqsubset', 'subset.sq'],
    ['sqsubsetneq', 'subset.sq.neq'],
    ['supset', 'supset'],
    ['supsetdot', 'supset.dot'],
    ['Supset', 'supset.double'],
    ['supseteq', 'supset.eq'],
    ['nsupseteq', 'supset.eq.not'],
    ['sqsupseteq', 'supset.eq.sq'],
    ['nsqsupseteq', 'supset.eq.sq.not'],
    ['supsetneq', 'supset.neq'],
    ['nsupset', 'supset.not'],
    ['sqsupset', 'supset.sq'],
    ['sqsupsetneq', 'supset.sq.neq'],
    ['cup', 'union'],
    ['cupleftarrow', 'union.arrow'],
    ['bigcup', 'union.big'],
    ['cupdot', 'union.dot'],
    ['bigcupdot', 'union.dot.big'],
    ['Cup', 'union.double'],
    ['uminus', 'union.minus'],
    ['cupvee', 'union.or'],
    ['uplus', 'union.plus'],
    ['biguplus', 'union.plus.big'],
    ['sqcup', 'union.sq'],
    ['bigsqcup', 'union.sq.big'],
    ['Sqcup', 'union.sq.double'],
    ['cap', 'sect'],
    ['capwedge', 'sect.and'],
    ['bigcap', 'sect.big'],
    ['capdot', 'sect.dot'],
    ['Cap', 'sect.double'],
    ['sqcap', 'sect.sq'],
    ['bigsqcap', 'sect.sq.big'],
    ['Sqcap', 'sect.sq.double'],
    ['infty', 'infinity'],
    ['nvinfty', 'infinity.bar'],
    ['iinfin', 'infinity.incomplete'],
    ['tieinfty', 'infinity.tie'],
    ['partial', 'diff'],
    ['nabla', 'gradient'],
    ['sum', 'sum'],
    ['sumint', 'sum.integral'],
    ['prod', 'product'],
    ['coprod', 'product.co'],
    ['int', 'integral'],
    ['intlarhk', 'integral.arrow.hook'],
    ['awint', 'integral.ccw'],
    ['oint', 'integral.cont'],
    ['ointctrclockwise', 'integral.cont.ccw'],
    ['varointclockwise', 'integral.cont.cw'],
    ['intclockwise', 'integral.cw'],
    ['intbar', 'integral.dash'],
    ['intBar', 'integral.dash.double'],
    ['iint', 'integral.double'],
    ['iiiint', 'integral.quad'],
    ['intcap', 'integral.sect'],
    ['fint', 'integral.slash'],
    ['sqint', 'integral.square'],
    ['oiint', 'integral.surf'],
    ['intx', 'integral.times'],
    ['iiint', 'integral.triple'],
    ['intcup', 'integral.union'],
    ['oiiint', 'integral.vol'],
    ['increment', 'laplace'],
    ['forall', 'forall'],
    ['exists', 'exists'],
    ['nexists', 'exists.not'],
    ['top', 'top'],
    ['bot', 'bot'],
    ['neg', 'not'],
    ['wedge', 'and'],
    ['bigwedge', 'and.big'],
    ['curlywedge', 'and.curly'],
    ['wedgedot', 'and.dot'],
    ['Wedge', 'and.double'],
    ['vee', 'or'],
    ['bigvee', 'or.big'],
    ['curlyvee', 'or.curly'],
    ['veedot', 'or.dot'],
    ['Vee', 'or.double'],
    ['models', 'models'],
    ['Vdash', 'forces'],
    ['nVdash', 'forces.not'],
    ['therefore', 'therefore'],
    ['because', 'because'],
    ['QED', 'qed'],
    ['vysmwhtcircle', 'compose'],
    ['multimap', 'multimap'],
    ['dualmap', 'multimap.double'],
    ['tplus', 'tiny'],
    ['tminus', 'miny'],
    ['mid', 'divides'],
    ['nmid', 'divides.not'],
    ['wr', 'wreath'],
    ['parallel', 'parallel'],
    ['nhpar', 'parallel.struck'],
    ['circledparallel', 'parallel.circle'],
    ['equalparallel', 'parallel.eq'],
    ['equivVert', 'parallel.equiv'],
    ['nparallel', 'parallel.not'],
    ['eparsl', 'parallel.slanted.eq'],
    ['smeparsl', 'parallel.slanted.eq.tilde'],
    ['eqvparsl', 'parallel.slanted.equiv'],
    ['parsim', 'parallel.tilde'],
    ['perp', 'perp'],
    ['operp', 'perp.circle'],
    ['diameter', 'diameter'],
    ['Join', 'join'],
    ['rightouterjoin', 'join.r'],
    ['leftouterjoin', 'join.l'],
    ['fullouterjoin', 'join.l.r'],
    ['smashtimes', 'smash'],
    ['mathdollar', 'dollar'],
    ['euro', 'euro'],
    ['mathsterling', 'pound'],
    ['mathyen', 'yen'],
    ['checkmark', 'checkmark'],
    ['maltese', 'maltese'],
    ['clubsuit', 'suit.club.filled'],
    ['varclubsuit', 'suit.club.stroked'],
    ['vardiamondsuit', 'suit.diamond.filled'],
    ['diamondsuit', 'suit.diamond.stroked'],
    ['varheartsuit', 'suit.heart.filled'],
    ['heartsuit', 'suit.heart.stroked'],
    ['spadesuit', 'suit.spade.filled'],
    ['varspadesuit', 'suit.spade.stroked'],
    ['quarternote', 'note.quarter.alt'],
    ['eighthnote', 'note.eighth.alt'],
    ['twonotes', 'note.eighth.beamed'],
    ['natural', 'natural'],
    ['flat', 'flat'],
    ['sharp', 'sharp'],
    ['smblkcircle', 'bullet'],
    ['mdlgwhtcircle', 'circle.stroked'],
    ['mdsmwhtcircle', 'circle.stroked.small'],
    ['lgwhtcircle', 'circle.stroked.big'],
    ['mdlgblkcircle', 'circle.filled'],
    ['mdsmblkcircle', 'circle.filled.tiny'],
    ['vysmblkcircle', 'circle.filled.small'],
    ['lgblkcircle', 'circle.filled.big'],
    ['dottedcircle', 'circle.dotted'],
    ['circledcirc', 'circle.nested'],
    ['whthorzoval', 'ellipse.stroked.h'],
    ['whtvertoval', 'ellipse.stroked.v'],
    ['blkhorzoval', 'ellipse.filled.h'],
    ['blkvertoval', 'ellipse.filled.v'],
    ['bigtriangleup', 'triangle.stroked.t'],
    ['bigtriangledown', 'triangle.stroked.b'],
    ['triangleright', 'triangle.stroked.r'],
    ['triangleleft', 'triangle.stroked.l'],
    ['lltriangle', 'triangle.stroked.bl'],
    ['lrtriangle', 'triangle.stroked.br'],
    ['ultriangle', 'triangle.stroked.tl'],
    ['urtriangle', 'triangle.stroked.tr'],
    ['vartriangle', 'triangle.stroked.small.t'],
    ['triangledown', 'triangle.stroked.small.b'],
    ['smalltriangleright', 'triangle.stroked.small.r'],
    ['smalltriangleleft', 'triangle.stroked.small.l'],
    ['whiteinwhitetriangle', 'triangle.stroked.nested'],
    ['trianglecdot', 'triangle.stroked.dot'],
    ['bigblacktriangleup', 'triangle.filled.t'],
    ['bigblacktriangledown', 'triangle.filled.b'],
    ['blacktriangleright', 'triangle.filled.r'],
    ['blacktriangleleft', 'triangle.filled.l'],
    ['llblacktriangle', 'triangle.filled.bl'],
    ['lrblacktriangle', 'triangle.filled.br'],
    ['ulblacktriangle', 'triangle.filled.tl'],
    ['urblacktriangle', 'triangle.filled.tr'],
    ['blacktriangle', 'triangle.filled.small.t'],
    ['blacktriangledown', 'triangle.filled.small.b'],
    ['smallblacktriangleright', 'triangle.filled.small.r'],
    ['smallblacktriangleleft', 'triangle.filled.small.l'],
    ['mdlgwhtsquare', 'square.stroked'],
    ['smwhtsquare', 'square.stroked.tiny'],
    ['mdsmwhtsquare', 'square.stroked.small'],
    ['mdwhtsquare', 'square.stroked.medium'],
    ['lgwhtsquare', 'square.stroked.big'],
    ['dottedsquare', 'square.stroked.dotted'],
    ['squoval', 'square.stroked.rounded'],
    ['mdlgblksquare', 'square.filled'],
    ['smblksquare', 'square.filled.tiny'],
    ['mdsmblksquare', 'square.filled.small'],
    ['mdblksquare', 'square.filled.medium'],
    ['lgblksquare', 'square.filled.big'],
    ['hrectangle', 'rect.stroked.h'],
    ['vrectangle', 'rect.stroked.v'],
    ['hrectangleblack', 'rect.filled.h'],
    ['vrectangleblack', 'rect.filled.v'],
    ['pentagon', 'penta.stroked'],
    ['pentagonblack', 'penta.filled'],
    ['varhexagon', 'hexa.stroked'],
    ['varhexagonblack', 'hexa.filled'],
    ['mdlgwhtdiamond', 'diamond.stroked'],
    ['smwhtdiamond', 'diamond.stroked.small'],
    ['mdwhtdiamond', 'diamond.stroked.medium'],
    ['diamondcdot', 'diamond.stroked.dot'],
    ['mdlgblkdiamond', 'diamond.filled'],
    ['mdblkdiamond', 'diamond.filled.medium'],
    ['smblkdiamond', 'diamond.filled.small'],
    ['mdlgwhtlozenge', 'lozenge.stroked'],
    ['smwhtlozenge', 'lozenge.stroked.small'],
    ['mdwhtlozenge', 'lozenge.stroked.medium'],
    ['mdlgblklozenge', 'lozenge.filled'],
    ['smblklozenge', 'lozenge.filled.small'],
    ['mdblklozenge', 'lozenge.filled.medium'],
    ['parallelogram', 'parallelogram.stroked'],
    ['parallelogramblack', 'parallelogram.filled'],
    ['star', 'star.op'],
    ['bigwhitestar', 'star.stroked'],
    ['bigstar', 'star.filled'],
    ['rightarrow', 'arrow.r'],
    ['longmapsto', 'arrow.r.long.bar'],
    ['mapsto', 'arrow.r.bar'],
    ['rightdowncurvedarrow', 'arrow.r.curve'],
    ['rightdasharrow', 'arrow.r.dashed'],
    ['rightdotarrow', 'arrow.r.dotted'],
    ['Rightarrow', 'arrow.r.double'],
    ['Mapsto', 'arrow.r.double.bar'],
    ['Longrightarrow', 'arrow.r.double.long'],
    ['Longmapsto', 'arrow.r.double.long.bar'],
    ['nRightarrow', 'arrow.r.double.not'],
    ['hookrightarrow', 'arrow.r.hook'],
    ['longrightarrow', 'arrow.r.long'],
    ['longrightsquigarrow', 'arrow.r.long.squiggly'],
    ['looparrowright', 'arrow.r.loop'],
    ['nrightarrow', 'arrow.r.not'],
    ['RRightarrow', 'arrow.r.quad'],
    ['rightsquigarrow', 'arrow.r.squiggly'],
    ['rightarrowbar', 'arrow.r.stop'],
    ['rightwhitearrow', 'arrow.r.stroked'],
    ['rightarrowtail', 'arrow.r.tail'],
    ['similarrightarrow', 'arrow.r.tilde'],
    ['Rrightarrow', 'arrow.r.triple'],
    ['twoheadmapsto', 'arrow.r.twohead.bar'],
    ['twoheadrightarrow', 'arrow.r.twohead'],
    ['rightwavearrow', 'arrow.r.wave'],
    ['leftarrow', 'arrow.l'],
    ['mapsfrom', 'arrow.l.bar'],
    ['leftdowncurvedarrow', 'arrow.l.curve'],
    ['leftdasharrow', 'arrow.l.dashed'],
    ['leftdotarrow', 'arrow.l.dotted'],
    ['Leftarrow', 'arrow.l.double'],
    ['Mapsfrom', 'arrow.l.double.bar'],
    ['Longleftarrow', 'arrow.l.double.long'],
    ['Longmapsfrom', 'arrow.l.double.long.bar'],
    ['nLeftarrow', 'arrow.l.double.not'],
    ['hookleftarrow', 'arrow.l.hook'],
    ['longleftarrow', 'arrow.l.long'],
    ['longmapsfrom', 'arrow.l.long.bar'],
    ['longleftsquigarrow', 'arrow.l.long.squiggly'],
    ['looparrowleft', 'arrow.l.loop'],
    ['nleftarrow', 'arrow.l.not'],
    ['LLeftarrow', 'arrow.l.quad'],
    ['leftsquigarrow', 'arrow.l.squiggly'],
    ['barleftarrow', 'arrow.l.stop'],
    ['leftwhitearrow', 'arrow.l.stroked'],
    ['leftarrowtail', 'arrow.l.tail'],
    ['similarleftarrow', 'arrow.l.tilde'],
    ['Lleftarrow', 'arrow.l.triple'],
    ['twoheadmapsfrom', 'arrow.l.twohead.bar'],
    ['twoheadleftarrow', 'arrow.l.twohead'],
    ['leftwavearrow', 'arrow.l.wave'],
    ['uparrow', 'arrow.t'],
    ['mapsup', 'arrow.t.bar'],
    ['uprightcurvearrow', 'arrow.t.curve'],
    ['updasharrow', 'arrow.t.dashed'],
    ['Uparrow', 'arrow.t.double'],
    ['UUparrow', 'arrow.t.quad'],
    ['baruparrow', 'arrow.t.stop'],
    ['upwhitearrow', 'arrow.t.stroked'],
    ['Uuparrow', 'arrow.t.triple'],
    ['twoheaduparrow', 'arrow.t.twohead'],
    ['downarrow', 'arrow.b'],
    ['mapsdown', 'arrow.b.bar'],
    ['downrightcurvedarrow', 'arrow.b.curve'],
    ['downdasharrow', 'arrow.b.dashed'],
    ['Downarrow', 'arrow.b.double'],
    ['DDownarrow', 'arrow.b.quad'],
    ['downarrowbar', 'arrow.b.stop'],
    ['downwhitearrow', 'arrow.b.stroked'],
    ['Ddownarrow', 'arrow.b.triple'],
    ['twoheaddownarrow', 'arrow.b.twohead'],
    ['leftrightarrow', 'arrow.l.r'],
    ['Leftrightarrow', 'arrow.l.r.double'],
    ['Longleftrightarrow', 'arrow.l.r.double.long'],
    ['nLeftrightarrow', 'arrow.l.r.double.not'],
    ['longleftrightarrow', 'arrow.l.r.long'],
    ['nleftrightarrow', 'arrow.l.r.not'],
    ['leftrightsquigarrow', 'arrow.l.r.wave'],
    ['updownarrow', 'arrow.t.b'],
    ['Updownarrow', 'arrow.t.b.double'],
    ['nearrow', 'arrow.tr'],
    ['Nearrow', 'arrow.tr.double'],
    ['hknearrow', 'arrow.tr.hook'],
    ['searrow', 'arrow.br'],
    ['Searrow', 'arrow.br.double'],
    ['hksearrow', 'arrow.br.hook'],
    ['nwarrow', 'arrow.tl'],
    ['Nwarrow', 'arrow.tl.double'],
    ['hknwarrow', 'arrow.tl.hook'],
    ['swarrow', 'arrow.bl'],
    ['Swarrow', 'arrow.bl.double'],
    ['hkswarrow', 'arrow.bl.hook'],
    ['nwsearrow', 'arrow.tl.br'],
    ['neswarrow', 'arrow.tr.bl'],
    ['acwopencirclearrow', 'arrow.ccw'],
    ['curvearrowleft', 'arrow.ccw.half'],
    ['cwopencirclearrow', 'arrow.cw'],
    ['curvearrowright', 'arrow.cw.half'],
    ['downzigzagarrow', 'arrow.zigzag'],
    ['rightrightarrows', 'arrows.rr'],
    ['leftleftarrows', 'arrows.ll'],
    ['upuparrows', 'arrows.tt'],
    ['downdownarrows', 'arrows.bb'],
    ['leftrightarrows', 'arrows.lr'],
    ['barleftarrowrightarrowbar', 'arrows.lr.stop'],
    ['rightleftarrows', 'arrows.rl'],
    ['updownarrows', 'arrows.tb'],
    ['downuparrows', 'arrows.bt'],
    ['rightthreearrows', 'arrows.rrr'],
    ['leftthreearrows', 'arrows.lll'],
    ['rightharpoonup', 'harpoon.rt'],
    ['barrightharpoonup', 'harpoon.rt.bar'],
    ['rightharpoonupbar', 'harpoon.rt.stop'],
    ['rightharpoondown', 'harpoon.rb'],
    ['barrightharpoondown', 'harpoon.rb.bar'],
    ['rightharpoondownbar', 'harpoon.rb.stop'],
    ['leftharpoonup', 'harpoon.lt'],
    ['leftharpoonupbar', 'harpoon.lt.bar'],
    ['barleftharpoonup', 'harpoon.lt.stop'],
    ['leftharpoondown', 'harpoon.lb'],
    ['leftharpoondownbar', 'harpoon.lb.bar'],
    ['barleftharpoondown', 'harpoon.lb.stop'],
    ['upharpoonleft', 'harpoon.tl'],
    ['upharpoonleftbar', 'harpoon.tl.bar'],
    ['barupharpoonleft', 'harpoon.tl.stop'],
    ['upharpoonright', 'harpoon.tr'],
    ['upharpoonrightbar', 'harpoon.tr.bar'],
    ['barupharpoonright', 'harpoon.tr.stop'],
    ['downharpoonleft', 'harpoon.bl'],
    ['bardownharpoonleft', 'harpoon.bl.bar'],
    ['downharpoonleftbar', 'harpoon.bl.stop'],
    ['downharpoonright', 'harpoon.br'],
    ['bardownharpoonright', 'harpoon.br.bar'],
    ['downharpoonrightbar', 'harpoon.br.stop'],
    ['leftrightharpoonupup', 'harpoon.lt.rt'],
    ['leftrightharpoondowndown', 'harpoon.lb.rb'],
    ['leftrightharpoondownup', 'harpoon.lb.rt'],
    ['leftrightharpoonupdown', 'harpoon.lt.rb'],
    ['updownharpoonleftleft', 'harpoon.tl.bl'],
    ['updownharpoonrightright', 'harpoon.tr.br'],
    ['updownharpoonleftright', 'harpoon.tl.br'],
    ['updownharpoonrightleft', 'harpoon.tr.bl'],
    ['rightharpoonsupdown', 'harpoons.rtrb'],
    ['downharpoonsleftright', 'harpoons.blbr'],
    ['downupharpoonsleftright', 'harpoons.bltr'],
    ['leftrightharpoonsdown', 'harpoons.lbrb'],
    ['leftharpoonsupdown', 'harpoons.ltlb'],
    ['leftrightharpoons', 'harpoons.ltrb'],
    ['leftrightharpoonsup', 'harpoons.ltrt'],
    ['rightleftharpoonsdown', 'harpoons.rblb'],
    ['rightleftharpoons', 'harpoons.rtlb'],
    ['rightleftharpoonsup', 'harpoons.rtlt'],
    ['updownharpoonsleftright', 'harpoons.tlbr'],
    ['upharpoonsleftright', 'harpoons.tltr'],
    ['vdash', 'tack.r'],
    ['nvdash', 'tack.r.not'],
    ['vlongdash', 'tack.r.long'],
    ['assert', 'tack.r.short'],
    ['vDash', 'tack.r.double'],
    ['nvDash', 'tack.r.double.not'],
    ['dashv', 'tack.l'],
    ['longdashv', 'tack.l.long'],
    ['shortlefttack', 'tack.l.short'],
    ['Dashv', 'tack.l.double'],
    ['bigbot', 'tack.t.big'],
    ['Vbar', 'tack.t.double'],
    ['shortuptack', 'tack.t.short'],
    ['bigtop', 'tack.b.big'],
    ['barV', 'tack.b.double'],
    ['shortdowntack', 'tack.b.short'],
    ['dashVdash', 'tack.l.r'],
    /*
    ['mupalpha', 'alpha'],
    ['mupbeta', 'beta'],
    ['mupchi', 'chi'],
    ['mupdelta', 'delta'],
    ['mupvarepsilon', 'epsilon'],
    ['mupepsilon', 'epsilon.alt'],
    ['mupeta', 'eta'],
    ['mupgamma', 'gamma'],
    ['mupiota', 'iota'],
    ['mupkappa', 'kappa'],
    ['mupvarkappa', 'kappa.alt'],
    ['muplambda', 'lambda'],
    ['mupmu', 'mu'],
    ['mupnu', 'nu'],
    ['mho', 'ohm.inv'],
    ['mupomega', 'omega'],
    ['mupomicron', 'omicron'],
    ['mupvarphi', 'phi'],
    ['mupphi', 'phi.alt'],
    ['muppi', 'pi'],
    ['mupvarpi', 'pi.alt'],
    ['muppsi', 'psi'],
    ['muprho', 'rho'],
    ['mupvarrho', 'rho.alt'],
    ['mupsigma', 'sigma'],
    ['mupvarsigma', 'sigma.alt'],
    ['muptau', 'tau'],
    ['muptheta', 'theta'],
    ['mupvartheta', 'theta.alt'],
    ['mupupsilon', 'upsilon'],
    ['mupxi', 'xi'],
    ['mupzeta', 'zeta'],
    ['mupAlpha', 'Alpha'],
    ['mupBeta', 'Beta'],
    ['mupChi', 'Chi'],
    ['mupDelta', 'Delta'],
    ['mupEpsilon', 'Epsilon'],
    ['mupEta', 'Eta'],
    ['mupGamma', 'Gamma'],
    ['mupIota', 'Iota'],
    ['mupKappa', 'Kappa'],
    ['mupLambda', 'Lambda'],
    ['mupMu', 'Mu'],
    ['mupNu', 'Nu'],
    ['mupOmega', 'Omega'],
    ['mupOmicron', 'Omicron'],
    ['mupPhi', 'Phi'],
    ['mupPi', 'Pi'],
    ['mupPsi', 'Psi'],
    ['mupRho', 'Rho'],
    ['mupSigma', 'Sigma'],
    ['mupTau', 'Tau'],
    ['mupTheta', 'Theta'],
    ['mupUpsilon', 'Upsilon'],
    ['mupXi', 'Xi'],
    ['mupZeta', 'Zeta'],
    */
    ['BbbA', 'AA'],
    ['BbbB', 'BB'],
    ['BbbC', 'CC'],
    ['BbbD', 'DD'],
    ['BbbE', 'EE'],
    ['BbbF', 'FF'],
    ['BbbG', 'GG'],
    ['BbbH', 'HH'],
    ['BbbI', 'II'],
    ['BbbJ', 'JJ'],
    ['BbbK', 'KK'],
    ['BbbL', 'LL'],
    ['BbbM', 'MM'],
    ['BbbN', 'NN'],
    ['BbbO', 'OO'],
    ['BbbP', 'PP'],
    ['BbbQ', 'QQ'],
    ['BbbR', 'RR'],
    ['BbbS', 'SS'],
    ['BbbT', 'TT'],
    ['BbbU', 'UU'],
    ['BbbV', 'VV'],
    ['BbbW', 'WW'],
    ['BbbX', 'XX'],
    ['BbbY', 'YY'],
    ['BbbZ', 'ZZ'],
    ['ell', 'ell'],
    ['Planckconst', 'planck'],
    ['hslash', 'planck.reduce'],
    ['Angstrom', 'angstrom'],
    ['Re', 'Re'],
    ['Im', 'Im'],
    ['imath', 'dotless.i'],
    ['jmath', 'dotless.j'],
]);

for(const [key, value] of map_from_official_docs) {
    if(!symbolMap.has(key)) {
        symbolMap.set(key, value);
    }
}


const reverseSymbolMap = new Map<string, string>();
for(const [key, value] of Array.from(symbolMap.entries()).reverse()) {
    reverseSymbolMap.set(value, key);
}
reverseSymbolMap.set('dif', 'mathrm{d}');
reverseSymbolMap.set('oo', 'infty');

// force override some one-to-multiple mappings
const typst_to_tex_map = new Map<string, string>([
    ['top', 'top'],
    ['frac', 'frac'],
    ['tilde', 'tilde'],
    ['hat', 'hat'],
    ['upright', 'mathrm'],
    ['bold', 'boldsymbol'],

    ['hyph.minus', '\\text{-}'],
]);

for(const [key, value] of typst_to_tex_map) {
    reverseSymbolMap.set(key, value);
}

export {symbolMap, reverseSymbolMap};
