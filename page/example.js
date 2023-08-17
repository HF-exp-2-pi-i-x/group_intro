const example = `
    <div class="page">
        <h1>Dihedral Group D3</h1>
        <p>This group represents symmetry of equilateral triangle by rotation and reflection. In the animation below, <span class="math inline">$$\\rho$$ represents rotation by $$120$$&deg; and <span class="math inline">$$r$$</span> represents reflection along the axis that bisects triangle. </span></p>
        <p>The symmetry group follows all four axioms of group and the binary operator for this group is composition <span class="math inline">$$\\circ$$.</span>Group operation is defined by <span class="math inline">$$a \\circ b$$, which means apply $$b$$ on triangle then apply $$a$$</span></p>
        <video controls>
            <source src="assets/videos/D3.mp4" type="video/mp4">
        </video>
        <p>The above animation is built by Manim library. Source code is <a href="https://github.com/HF-exp-2-pi-i-x/3b1b_manim/blob/main/group.py" target="_blank"><img src="../assets/icons/new-tab.svg">&nbsp;here</a></p>
    </div>
`;

export default example;
