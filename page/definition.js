const defintion = `
    <div class="page">
        <h1>What is a group?</h1>
        <p>A mathematical group (G,*) is a set G with a binary operation * that satisfies four axioms below</p>
        <h2 class="math inline">$$1.\\hspace{0.125em}Closure: \\forall g_1,g_2 \\in G, g_1*g_2 \\in G $$ </h2>
        <p>This means when we select any two elements from the set G, combining them with binary operation * also gives an element inside G. For example, inside the group of all integers with addition <span class="math inline">$$(\\mathbb{Z},+)$$</span>, adding any two integers always gives us an integer. </p>
        <h2 class="math inline">$$2.\\hspace{0.125em}Associativity: \\forall g_1,g_2,g_3 \\in G, (g_1*g_2)*g_3=g_1*(g_2*g_3) $$</h2>
        <p>The result of the expression does not change when we rearrange the parentheses. We can use <span class="math inline">$$(\\mathbb{Z},+)$$</span> again as example, it is associative, e.g. <span class="math inline">1+(2+3)=(1+2)+3=6</span></p>
        <h2 class="math inline">$$3.\\hspace{0.125em}Identity: \\exists \\hspace{0.125em}e \\in G \\hspace{0.125em}s.t.\\hspace{0.125em} \\forall g \\in G,\\hspace{0.125em} e*g=g*e=g $$</h2>
        <p>In <span class="math inline">$$(\\mathbb{Z},+)$$</span>, 0 is the identity as all integers do not change when they are added to 0 (in either direction).</p>
        <h2 class="math inline">$$4.\\hspace{0.125em}Inverse: \\forall g \\in G, \\hspace{0.125em} \\exists\\hspace{0.125em} g^{-1}\\in G,\\hspace{0.125em}s.t.\\hspace{0.125em}g*g^{-1}=g^{-1}*g=e$$</h2>
        <p>For every integer a in <span class="math inline">$$(\\mathbb{Z},+)$$</span>, -a is its inverse as <span>$$a+(-a)=(-a)+a=0$$</span> </p>
        <br>
        <p>There are some counterexamples of set not being a group, like the group of 2 by 2 matrix along with integer multiplication is not a group since 
            <span class="math inline">
                \\begin{bmatrix}
                1 & 0 \\\\  
                0 & 0 
                \\end{bmatrix}
            </span>
            has no inverse. Note that the inverse property demands all elements, therefore one non invertible matrix can already disprove the statement.
        </p>
    </div>
`;

export default defintion;
