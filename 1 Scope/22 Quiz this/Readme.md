# Quiz this

1. What determines which object a function's **this** points to ? What's the default?

	- new.
	- Explicit Binding.
	- with call(),apply() or bind().
	- Implicit binding with an owning or containing objects.
	- Default rule

2. How do you **borrow** a function by implicit assignment of **this**?

		We mutated an object to put a reference to that function on the object so that we could then say **object.method** name.

3. How do you explicitly bind **this** ?

		- call()
		- apply()
		- bind()

4. How can you seal a specific **this** to a function? Why do that? Why not?

	- Using .bind() utility
	- We use particular object.

5. How do create a new **this** ?

	By using the **new** keyword

6.