const proof = `
<div class="page">
    <h1>Partial Proof for D3</h1>
    <h2>Closure</h2>
    <p>
    When we combine any two symmetries from group, it always gives another symmetry of group. 
    For example, 
    <span class="math inline">
        $$r_1 \\circ \\rho = r_2$$
    </span>
    </p>
    <video controls>
        <source src="../assets/videos/ClosureExample.mp4" type="video/mp4"></source>
    </video>
    <h2>Identity</h2>
    <p>
        <span class="math inline">e is the identity since it does not change the triangle</span> 
    </p>
    <h2>Associativity</h2>
    <p>
    You may check whether the group is associative by check each combination. For example, 
    <span class="math inline">
        $$(r_1 \\circ \\rho) \\circ r_2 = r_2 \\circ r_2 = e = r_1 \\circ r_1 = r_1 \\circ (\\rho \\circ r_2)$$.
    </span>
    </p>
    <h2>Inverse</h2>
    <p>Every element in the group has its inverse. 
        <span class="math inline">
            $$e,r_1,r_2,r_3$$ are self-inverses, while $$\\rho$$ is the inverse of $$\\rho^{2}$$
        </span>
    </p>
</div>
`;

export default proof;
