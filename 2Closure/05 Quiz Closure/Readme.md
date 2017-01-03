# Quiz Closure

1. What is a closure and how is it created ?

	A closure is  when a function remembers and accesses its lexical scope, even when that function is executed outside the lexical scope.

	When an inner function is transported outside of the outer function.

2. How long does its scope stay around ?

	A closure is kind of like a reference to a hidden scope object, so as long as there's there is some function that still has a closure over the scope, that scope's going to stay around. But as soon as that closure goes away scope can get garbage collected.

3. Why doesn't a function callback inside a loop behave as expected? How do we fix it ?

	It wasn't actually creating its own closure, there wasn't a variable  create per iteration. We thought that some how magically it was, but it wasn't.

	Putting IIFE inside the iteration (or) The let keyword.


4. How do you use a closure to create an encapsulated module ? What's the benefit of that approach ?

	- Outer wrapping function.
	- Return one or more functions.

5. Benefits of the module pattern?

	Create private and public, Hiding stuff, the principal of least exposure.

6.