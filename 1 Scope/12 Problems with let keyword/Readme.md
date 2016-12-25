# Problems with let keyword

- Implicit block scoping
- Explicit scope blocks
- TC39 community rejects the below syntax

			let(baz = bar) {
	        console.log(baz); //baz
	    }
	    console.log(baz); //baz
		}

-