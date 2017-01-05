# Prototype explained part-I

Object ------ .prototype -----> [.toString() , .toUpperCase()..]


Function foo() ------- .prototype -------> Object
Function foo() <------ .constructor -----> Object


#### **new** keyword 4 important rules

	1. Brand new object created
	2. Object get links
	3. The context gets set to this.
	4. It returns this which then on line one.

- [[Prototype]]  or .prototype