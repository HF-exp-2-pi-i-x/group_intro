const defintion = `
    <div class="page">
        <h1>What is a group?</h1>
        <p>A mathematical group (G,*) is a set G with a binary operation * that satisfies four axioms below</p>
        <h2 class="math inline">$$1.Closure: \\forall g_1,g_2 \\in G, g_1*g_2 \\in G $$ </h2>
        <p>This means when we select any two elements from the set G, combining them with binary operation * also gives an element inside G. For example, inside the group of all integers with addition <span class="math inline">$$(\\mathbb{Z},+)$$</span>, adding any two integers always gives us an integer. </p>
        <h2 class="math inline">$$2.Associativity: \\forall g_1,g_2,g_3 \\in G, (g_1*g_2)*g_3=g_1*(g_2*g_3) $$</h2>
        <p>The result of the expression does not change when we rearrange the parentheses. We can use <span class="math inline">$$(\\mathbb{Z},+)$$</span> again as example, it is associative, e.g. <span class="math inline">1+(2+3)=(1+2)+3=6</span></p>
        <h2 class="math inline">3.Identity: $$\\exists \\hspace{0.125em}e \\in G \\hspace{0.125em}s.t.\\hspace{0.125em} \\forall g \\in G, $$</h2>
    </div>
`;

export default defintion;
