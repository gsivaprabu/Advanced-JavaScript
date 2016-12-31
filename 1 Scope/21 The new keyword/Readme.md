# The new keyword

- What is **new**
		When we put the new keyword in print of any function call it magically turns that function call inti what you might call a constructor call.

		1. A brand new object , a brand new empty object will be created out of the thin air.
		2. Brand new poof object gets linked to a different object
		3. Brand new poof object gets bound as the **this** keyword for the purposes of that function call.
		4. Is that if that function does not otherwise return anything, then it will implicitly insert between lines three and four return **this**.

### Questions

1. Was the function  called with **new** ?

		**new** keyword able to overwrite any of the other rules because it's the most precedent of the rules.

2. Was the function called with 'call' or 'apply' specificity an explicit binding ?

	Use that object

3. Was the function called via a containing/owning object (context)?

	Use that Object

4. DEFUALT: global object.

	 Except strict mode