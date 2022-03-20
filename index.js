function Block(letter, rate, used, father, code) {
this.letter - letter;
this.rate = rate;
this.used = used;
this.father = father;
this.code = code;
function FindCode(block){
if (tree[block.father].code 1=
block.code = tree[block.father].code +
else {
if (block.letter
block.code
tree[minIndex]-letter){
*O":
else if (block.letter == tree[preminIndex].letter) {
block.code -
else f
FindCode(tree[block.father]);
block.code
= tree[block. father].code +
"O"A
}
}
}
