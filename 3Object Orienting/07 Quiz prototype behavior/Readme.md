# Quiz prototype behavior

1. What is a constructor ?
	- It is a function that is called with the new keyword in front of it.
	- .constructor is a property
	- But a constructor. a constructor call is a function that is the new keyword in front of it, thats it.

2. What is "[[Prototype]]" or "Prototype Linkage" and where does it come from ?
	- [[Prototype]] is linkage from one object to another object.
	- Where it is comes from, there is two different ways
		- We can get the linkage from Object create.
		- Which just links it to another arbitrary object.
		- We can get it indirectly as step two of the four steps of the new keyword.
		- But either way we end up with one object to linked with another object.

3. How does a [[Prototype]] affect an Object ?
	- We can call property or a method of an Object reference, and if they cant handle that object or a property that property or method reference. It delegates up to prototype chain to different object.

4. How do we find out where an objects [[prototype]] points to (3 ways) ?
	- Dunder Proto
	- Object.getPrototypeOf
	- .constructor.prototype

5. Remember how this has a pesky way of getting unassigned?