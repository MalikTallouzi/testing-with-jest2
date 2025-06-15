const stack = require('../src/stack');

test('pop should remove and return the top element', () => {
    stack.push('numero uno');
    stack.push('numero dos');
    stack.push('numero tres');
    const result = stack.pop();
    expect(result).toBe('numero uno'); 
});


test('peek does not remove the element from the stack', () => {
    stack.push('apple');
    stack.push('banana');
    const firstPeek = stack.peek();
    const secondPeek = stack.peek();
    expect(firstPeek).toBe('banana');
    expect(secondPeek).toBe('apple');
});