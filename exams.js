window.EXAMS = [
	{
		id: "python-basics-001",
		title: "Python Basics Mock Test 1",
		date: "2026-06-18",
		durationMinutes: 30,
		marksPerQuestion: 1,
		negativeMark: 0,
		sections: [
			{ key: "syntax-variables-comments", title: "Syntax, Variables and Comments", count: 10, start: 1, end: 10 },
			{ key: "data-types-casting", title: "Data Types and Casting", count: 10, start: 11, end: 20 },
			{ key: "operators-booleans", title: "Operators and Booleans", count: 10, start: 21, end: 30 },
			{ key: "strings", title: "Strings", count: 10, start: 31, end: 40 },
			{ key: "collections", title: "Lists, Tuples, Sets and Dictionaries", count: 10, start: 41, end: 50 }
		],
		questions: [
			{ id: "q1", section: "Syntax, Variables and Comments", text: "Which statement correctly prints Hello in Python?", options: [{ id: "A", text: "print(Hello)" }, { id: "B", text: "print(\"Hello\")" }, { id: "C", text: "echo(\"Hello\")" }, { id: "D", text: "printf(\"Hello\")" }], correct: "B" },
			{ id: "q2", section: "Syntax, Variables and Comments", text: "Which of the following is a valid Python variable name?", options: [{ id: "A", text: "2name" }, { id: "B", text: "my-name" }, { id: "C", text: "my_name" }, { id: "D", text: "class" }], correct: "C" },
			{ id: "q3", section: "Syntax, Variables and Comments", text: "Which symbol is used for a single-line comment in Python?", options: [{ id: "A", text: "//" }, { id: "B", text: "#" }, { id: "C", text: "<!--" }, { id: "D", text: "/*" }], correct: "B" },
			{ id: "q4", section: "Syntax, Variables and Comments", text: "What is the output of x = 5; x += 2; print(x)?", options: [{ id: "A", text: "5" }, { id: "B", text: "7" }, { id: "C", text: "2" }, { id: "D", text: "10" }], correct: "B" },
			{ id: "q5", section: "Syntax, Variables and Comments", text: "What does input() return in Python 3?", options: [{ id: "A", text: "An integer" }, { id: "B", text: "A float" }, { id: "C", text: "A string" }, { id: "D", text: "A boolean" }], correct: "C" },
			{ id: "q6", section: "Syntax, Variables and Comments", text: "Which keyword cannot be used as a variable name?", options: [{ id: "A", text: "value" }, { id: "B", text: "count" }, { id: "C", text: "while" }, { id: "D", text: "total" }], correct: "C" },
			{ id: "q7", section: "Syntax, Variables and Comments", text: "What is the result of assigning the same value to two variables with x = y = 10?", options: [{ id: "A", text: "Only x becomes 10" }, { id: "B", text: "Only y becomes 10" }, { id: "C", text: "Both x and y become 10" }, { id: "D", text: "It is invalid syntax" }], correct: "C" },
			{ id: "q8", section: "Syntax, Variables and Comments", text: "Which statement about Python identifiers is true?", options: [{ id: "A", text: "They are case-insensitive" }, { id: "B", text: "They can start with a digit" }, { id: "C", text: "They can contain spaces" }, { id: "D", text: "They are case-sensitive" }], correct: "D" },
			{ id: "q9", section: "Syntax, Variables and Comments", text: "Which of these is commonly used for a multi-line comment or docstring?", options: [{ id: "A", text: "Triple quotes" }, { id: "B", text: "Single slash" }, { id: "C", text: "Curly braces" }, { id: "D", text: "Backticks" }], correct: "A" },
			{ id: "q10", section: "Syntax, Variables and Comments", text: "What will print( type(x) ) show after x = 10?", options: [{ id: "A", text: "<class 'str'>" }, { id: "B", text: "<class 'int'>" }, { id: "C", text: "<class 'float'>" }, { id: "D", text: "<class 'bool'>" }], correct: "B" },

			{ id: "q11", section: "Data Types and Casting", text: "What is the data type of 10 in Python?", options: [{ id: "A", text: "float" }, { id: "B", text: "int" }, { id: "C", text: "str" }, { id: "D", text: "bool" }], correct: "B" },
			{ id: "q12", section: "Data Types and Casting", text: "What is the data type of 10.5?", options: [{ id: "A", text: "int" }, { id: "B", text: "float" }, { id: "C", text: "str" }, { id: "D", text: "tuple" }], correct: "B" },
			{ id: "q13", section: "Data Types and Casting", text: "Which data type is mutable?", options: [{ id: "A", text: "tuple" }, { id: "B", text: "string" }, { id: "C", text: "list" }, { id: "D", text: "int" }], correct: "C" },
			{ id: "q14", section: "Data Types and Casting", text: "What is the result of int(\"7\") + 3?", options: [{ id: "A", text: "7" }, { id: "B", text: "10" }, { id: "C", text: "73" }, { id: "D", text: "Error" }], correct: "B" },
			{ id: "q15", section: "Data Types and Casting", text: "What is bool(\"\")?", options: [{ id: "A", text: "True" }, { id: "B", text: "False" }, { id: "C", text: "0" }, { id: "D", text: "Error" }], correct: "B" },
			{ id: "q16", section: "Data Types and Casting", text: "How do you create a tuple with one element 5?", options: [{ id: "A", text: "(5)" }, { id: "B", text: "[5]" }, { id: "C", text: "(5,)" }, { id: "D", text: "{5}" }], correct: "C" },
			{ id: "q17", section: "Data Types and Casting", text: "What is the type of None?", options: [{ id: "A", text: "NoneType" }, { id: "B", text: "Null" }, { id: "C", text: "void" }, { id: "D", text: "object" }], correct: "A" },
			{ id: "q18", section: "Data Types and Casting", text: "What is the result of float(\"3\")?", options: [{ id: "A", text: "3" }, { id: "B", text: "3.0" }, { id: "C", text: "3.3" }, { id: "D", text: "Error" }], correct: "B" },
			{ id: "q19", section: "Data Types and Casting", text: "What is the data type of {\"a\": 1}?", options: [{ id: "A", text: "list" }, { id: "B", text: "set" }, { id: "C", text: "dict" }, { id: "D", text: "tuple" }], correct: "C" },
			{ id: "q20", section: "Data Types and Casting", text: "What does str(123) return?", options: [{ id: "A", text: "123" }, { id: "B", text: "'123'" }, { id: "C", text: "\"123\"" }, { id: "D", text: "Both B and C as a string value" }], correct: "D" },

			{ id: "q21", section: "Operators and Booleans", text: "What is the result of 5 // 2?", options: [{ id: "A", text: "2" }, { id: "B", text: "2.5" }, { id: "C", text: "3" }, { id: "D", text: "1" }], correct: "A" },
			{ id: "q22", section: "Operators and Booleans", text: "What is the result of 5 % 2?", options: [{ id: "A", text: "0" }, { id: "B", text: "1" }, { id: "C", text: "2" }, { id: "D", text: "3" }], correct: "B" },
			{ id: "q23", section: "Operators and Booleans", text: "What is the result of 2 ** 3?", options: [{ id: "A", text: "6" }, { id: "B", text: "8" }, { id: "C", text: "9" }, { id: "D", text: "5" }], correct: "B" },
			{ id: "q24", section: "Operators and Booleans", text: "What is the result of 5 == \"5\"?", options: [{ id: "A", text: "True" }, { id: "B", text: "False" }, { id: "C", text: "5" }, { id: "D", text: "Error" }], correct: "B" },
			{ id: "q25", section: "Operators and Booleans", text: "What does not True evaluate to?", options: [{ id: "A", text: "True" }, { id: "B", text: "False" }, { id: "C", text: "1" }, { id: "D", text: "0" }], correct: "B" },
			{ id: "q26", section: "Operators and Booleans", text: "What is the result of True and False?", options: [{ id: "A", text: "True" }, { id: "B", text: "False" }, { id: "C", text: "1" }, { id: "D", text: "Error" }], correct: "B" },
			{ id: "q27", section: "Operators and Booleans", text: "What is the result of 5 > 3 and 2 < 4?", options: [{ id: "A", text: "True" }, { id: "B", text: "False" }, { id: "C", text: "5" }, { id: "D", text: "0" }], correct: "A" },
			{ id: "q28", section: "Operators and Booleans", text: "Which operator checks membership in Python?", options: [{ id: "A", text: "is" }, { id: "B", text: "in" }, { id: "C", text: "and" }, { id: "D", text: "not" }], correct: "B" },
			{ id: "q29", section: "Operators and Booleans", text: "What does is usually compare?", options: [{ id: "A", text: "Values only" }, { id: "B", text: "Identity of objects" }, { id: "C", text: "Length of objects" }, { id: "D", text: "Type conversion" }], correct: "B" },
			{ id: "q30", section: "Operators and Booleans", text: "What is the result of x = 4; x *= 3; print(x)?", options: [{ id: "A", text: "7" }, { id: "B", text: "12" }, { id: "C", text: "43" }, { id: "D", text: "1" }], correct: "B" },

			{ id: "q31", section: "Strings", text: "What is len(\"Python\")?", options: [{ id: "A", text: "5" }, { id: "B", text: "6" }, { id: "C", text: "7" }, { id: "D", text: "8" }], correct: "B" },
			{ id: "q32", section: "Strings", text: "What is the first character of s = \"cat\" using s[0]?", options: [{ id: "A", text: "a" }, { id: "B", text: "c" }, { id: "C", text: "t" }, { id: "D", text: "Error" }], correct: "B" },
			{ id: "q33", section: "Strings", text: "What is \"Python\"[1:4]?", options: [{ id: "A", text: "Pyt" }, { id: "B", text: "yth" }, { id: "C", text: "ytho" }, { id: "D", text: "thon" }], correct: "B" },
			{ id: "q34", section: "Strings", text: "How do you join two strings in Python?", options: [{ id: "A", text: "Using +" }, { id: "B", text: "Using //" }, { id: "C", text: "Using &&" }, { id: "D", text: "Using ::" }], correct: "A" },
			{ id: "q35", section: "Strings", text: "What does \"Hello\".lower() return?", options: [{ id: "A", text: "HELLO" }, { id: "B", text: "hello" }, { id: "C", text: "Hello" }, { id: "D", text: "hELLO" }], correct: "B" },
			{ id: "q36", section: "Strings", text: "What does \"banana\".replace(\"a\", \"o\") return?", options: [{ id: "A", text: "bonono" }, { id: "B", text: "banana" }, { id: "C", text: "boonoo" }, { id: "D", text: "banono" }], correct: "A" },
			{ id: "q37", section: "Strings", text: "Which statement is true about strings in Python?", options: [{ id: "A", text: "They are mutable" }, { id: "B", text: "They are immutable" }, { id: "C", text: "They are unordered and mutable" }, { id: "D", text: "They can only contain letters" }], correct: "B" },
			{ id: "q38", section: "Strings", text: "How do you include a double quote inside a double-quoted string?", options: [{ id: "A", text: "Use an escape character like \"\\\"\"" }, { id: "B", text: "Use a hashtag" }, { id: "C", text: "Use a comma" }, { id: "D", text: "It is not possible" }], correct: "A" },
			{ id: "q39", section: "Strings", text: "What does \"python\".find(\"z\") return?", options: [{ id: "A", text: "0" }, { id: "B", text: "-1" }, { id: "C", text: "None" }, { id: "D", text: "Error" }], correct: "B" },
			{ id: "q40", section: "Strings", text: "Which is a valid f-string example?", options: [{ id: "A", text: "f\"Age: {age}\"" }, { id: "B", text: "s\"Age: {age}\"" }, { id: "C", text: "fmt(\"Age: {age}\")" }, { id: "D", text: "str\"Age: {age}\"" }], correct: "A" },

			{ id: "q41", section: "Lists, Tuples, Sets and Dictionaries", text: "Which method adds an item to the end of a list?", options: [{ id: "A", text: "add()" }, { id: "B", text: "append()" }, { id: "C", text: "insertEnd()" }, { id: "D", text: "push()" }], correct: "B" },
			{ id: "q42", section: "Lists, Tuples, Sets and Dictionaries", text: "Which list method removes a specific value?", options: [{ id: "A", text: "remove()" }, { id: "B", text: "delete()" }, { id: "C", text: "discard()" }, { id: "D", text: "poplast()" }], correct: "A" },
			{ id: "q43", section: "Lists, Tuples, Sets and Dictionaries", text: "What is true about tuples?", options: [{ id: "A", text: "They are mutable" }, { id: "B", text: "They are ordered and immutable" }, { id: "C", text: "They do not support indexing" }, { id: "D", text: "They cannot store mixed data types" }], correct: "B" },
			{ id: "q44", section: "Lists, Tuples, Sets and Dictionaries", text: "What is a key property of sets?", options: [{ id: "A", text: "They allow duplicate values" }, { id: "B", text: "They are indexed by position" }, { id: "C", text: "They store unique items" }, { id: "D", text: "They are always ordered like lists" }], correct: "C" },
			{ id: "q45", section: "Lists, Tuples, Sets and Dictionaries", text: "What is the union of {1, 2, 3} and {3, 4}?", options: [{ id: "A", text: "{1, 2, 3, 4}" }, { id: "B", text: "{1, 2, 3, 3, 4}" }, { id: "C", text: "{3}" }, { id: "D", text: "{1, 4}" }], correct: "A" },
			{ id: "q46", section: "Lists, Tuples, Sets and Dictionaries", text: "How do you access the value of the key name in d = {\"name\": \"Ana\"}?", options: [{ id: "A", text: "d.name" }, { id: "B", text: "d[\"name\"]" }, { id: "C", text: "d(\"name\")" }, { id: "D", text: "d{\"name\"}" }], correct: "B" },
			{ id: "q47", section: "Lists, Tuples, Sets and Dictionaries", text: "What must dictionary keys be?", options: [{ id: "A", text: "Always lists" }, { id: "B", text: "Unique and hashable" }, { id: "C", text: "Always integers" }, { id: "D", text: "Always strings only" }], correct: "B" },
			{ id: "q48", section: "Lists, Tuples, Sets and Dictionaries", text: "What does the dict method pop(\"a\") do?", options: [{ id: "A", text: "Adds key a" }, { id: "B", text: "Removes and returns the value for key a" }, { id: "C", text: "Sorts the dictionary" }, { id: "D", text: "Clears all keys" }], correct: "B" },
			{ id: "q49", section: "Lists, Tuples, Sets and Dictionaries", text: "What is the length of set([1, 1, 2, 3])?", options: [{ id: "A", text: "2" }, { id: "B", text: "3" }, { id: "C", text: "4" }, { id: "D", text: "Error" }], correct: "B" },
			{ id: "q50", section: "Lists, Tuples, Sets and Dictionaries", text: "What is the result of [1, 2, 3][1]?", options: [{ id: "A", text: "1" }, { id: "B", text: "2" }, { id: "C", text: "3" }, { id: "D", text: "Error" }], correct: "B" }
		]
	}
];

window.EXAMS.push((function () {
	function optify(options) {
		return options.map(function (text, i) {
			return { id: String.fromCharCode(65 + i), text: text };
		});
	}

	function makeMcq(id, section, text, options, correct) {
		return {
			id: id,
			section: section,
			text: text,
			options: optify(options),
			correct: correct
		};
	}

	var sec1 = "Python, SQL and Django";
	var sec2 = "Quantitative Aptitude and Logical Reasoning";
	var sec3 = "Programming (Arrays and Strings)";
	var questions = [];

	// ── Python Q1–Q20 ───────────────────────────────────────────────
	questions.push(makeMcq("s1-py-1", sec1,
		"Python – Mutable default argument. What does the following code print?\ndef fn(x, lst=[]):\n    lst.append(x)\n    return lst\nprint(fn(1))\nprint(fn(2))",
		["[1]  then  [2]", "[1]  then  [1, 2]", "[1, 2]  then  [1, 2]", "TypeError: list is not hashable"],
		"B"
	));

	questions.push(makeMcq("s1-py-2", sec1,
		"Python – Closures in loops. What is printed?\nfuncs = []\nfor i in range(3):\n    funcs.append(lambda: i)\nprint([f() for f in funcs])",
		["[0, 1, 2]", "[2, 2, 2]", "[0, 0, 0]", "NameError: i is not defined"],
		"B"
	));

	questions.push(makeMcq("s1-py-3", sec1,
		"Python – Extended unpacking. After: first, *rest, last = [10, 20, 30, 40, 50], what is the value of rest?",
		["[20, 30, 40]", "[20, 30, 40, 50]", "[10, 20, 30, 40]", "(20, 30, 40)"],
		"A"
	));

	questions.push(makeMcq("s1-py-4", sec1,
		"Python – List comprehension with condition. What is the result of:\n[x ** 2 for x in range(1, 6) if x % 2 != 0]",
		["[1, 4, 9, 16, 25]", "[1, 9, 25]", "[4, 16]", "[1, 3, 5]"],
		"B"
	));

	questions.push(makeMcq("s1-py-5", sec1,
		"Python – Generator expressions. What type does this expression return in Python 3?\n(x * 2 for x in range(5))",
		["list", "tuple", "generator object", "map object"],
		"C"
	));

	questions.push(makeMcq("s1-py-6", sec1,
		"Python – nonlocal keyword. What is the output?\ndef outer():\n    x = 10\n    def inner():\n        nonlocal x\n        x += 5\n    inner()\n    return x\nprint(outer())",
		["10", "15", "5", "UnboundLocalError"],
		"B"
	));

	questions.push(makeMcq("s1-py-7", sec1,
		"Python – MRO (C3 linearisation). Given the diamond hierarchy, what is D.__mro__ in order?\nclass A: pass\nclass B(A): pass\nclass C(A): pass\nclass D(B, C): pass",
		["D, A, B, C, object", "D, B, C, A, object", "D, B, A, C, object", "D, C, B, A, object"],
		"B"
	));

	questions.push(makeMcq("s1-py-8", sec1,
		"Python – Decorators. What is the output?\ndef dec(fn):\n    def wrapper(*args):\n        return fn(*args) * 2\n    return wrapper\n@dec\ndef add(a, b):\n    return a + b\nprint(add(3, 4))",
		["7", "14", "8", "TypeError: unsupported operand"],
		"B"
	));

	questions.push(makeMcq("s1-py-9", sec1,
		"Python – __repr__ vs __str__. Which dunder method is called by repr() and what is its intended purpose?",
		["__str__; provides a human-readable description", "__repr__; provides an unambiguous developer-readable string, ideally valid Python to recreate the object", "__format__; supports f-strings and the format() built-in", "__bytes__; provides a binary representation"],
		"B"
	));

	questions.push(makeMcq("s1-py-10", sec1,
		"Python – Negative slicing. What is the result of 'abcdef'[-4:-1]?",
		["'cde'", "'bcde'", "'cdef'", "'def'"],
		"A"
	));

	questions.push(makeMcq("s1-py-11", sec1,
		"Python – Exception else and finally. What is the output?\ntry:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('A')\nelse:\n    print('B')\nfinally:\n    print('C')",
		["A then C", "A then B then C", "B then C", "A only, finally is skipped on error"],
		"A"
	));

	questions.push(makeMcq("s1-py-12", sec1,
		"Python – @classmethod. Inside a @classmethod, what does the first parameter (conventionally cls) refer to?",
		["The current instance of the class", "The class itself, allowing access to class-level attributes and the ability to create new instances", "The parent class only", "The module in which the class is defined"],
		"B"
	));

	questions.push(makeMcq("s1-py-13", sec1,
		"Python – isinstance vs type. Given:\nclass Animal: pass\nclass Dog(Animal): pass\nd = Dog()\nWhich expression evaluates to True for subclass checking?",
		["type(d) == Animal", "isinstance(d, Animal)", "type(d) is Animal", "d.__class__.__name__ == 'Animal'"],
		"B"
	));

	questions.push(makeMcq("s1-py-14", sec1,
		"Python – Walrus operator (:=). What does it allow that a regular assignment (=) cannot do inside an expression?",
		["Performs a type-checked assignment that raises TypeError on mismatch", "Assigns a value to a variable as part of an expression and returns the assigned value inline", "Creates a deep copy of the right-hand-side value", "Ensures the variable is scoped strictly to the enclosing function"],
		"B"
	));

	questions.push(makeMcq("s1-py-15", sec1,
		"Python – zip() with unequal lengths. What is list(zip([1, 2, 3], ['a', 'b']))?",
		["[(1,'a'), (2,'b'), (3, None)]", "[(1,'a'), (2,'b')]", "ValueError: sequences must have equal length", "[(1,'a'), (2,'b'), (3,'')]"],
		"B"
	));

	questions.push(makeMcq("s1-py-16", sec1,
		"Python – yield from. What is the primary purpose of 'yield from iterable' inside a generator function?",
		["Yields the whole iterable as one single value", "Delegates iteration to the inner iterable, yielding each item individually without a manual for loop", "Converts the iterable into an asyncio coroutine automatically", "Raises StopIteration immediately after yielding the first item"],
		"B"
	));

	questions.push(makeMcq("s1-py-17", sec1,
		"Python – dict.setdefault(). If d = {'k': 'existing'}, what does d.setdefault('k', 'default') return?",
		["'default'", "'existing'", "None", "KeyError: key already set"],
		"B"
	));

	questions.push(makeMcq("s1-py-18", sec1,
		"Python – filter(None, ...). What is list(filter(None, [0, '', False, 1, 'hello', None, 42]))?",
		["[0, '', False, 1, 'hello', None, 42]", "[1, 'hello', 42]", "[False, None, 0]", "[]"],
		"B"
	));

	questions.push(makeMcq("s1-py-19", sec1,
		"Python – @property without setter. What error occurs when you assign a value to a @property that has no @<name>.setter defined?",
		["TypeError: property object is not callable", "AttributeError: can't set attribute", "ValueError: read-only property", "RuntimeError: assignment not permitted on property objects"],
		"B"
	));

	questions.push(makeMcq("s1-py-20", sec1,
		"Python – String format spec. What is the output of: '{:.2f}'.format(3.14159)?",
		["'3.14159'", "'3.14'", "'3.1'", "'3.142'"],
		"B"
	));

	// ── SQL Q21–Q40 ─────────────────────────────────────────────────
	questions.push(makeMcq("s1-sql-1", sec1,
		"SQL – LEFT JOIN. Table A has 5 rows. Table B has matching rows for only 3 of them (no duplicate matches). How many rows does a LEFT JOIN of A onto B return?",
		["3 rows", "5 rows", "8 rows", "2 rows"],
		"B"
	));

	questions.push(makeMcq("s1-sql-2", sec1,
		"SQL – NOT IN with NULL trap. What does the following query return?\nSELECT 1 WHERE 5 NOT IN (1, 2, NULL)",
		["1 (the integer 1)", "No rows — empty result set", "NULL", "Error: NULL not allowed inside IN list"],
		"B"
	));

	questions.push(makeMcq("s1-sql-3", sec1,
		"SQL – DENSE_RANK vs RANK. Scores in descending order: 90, 85, 85, 80. Using DENSE_RANK(), what rank is assigned to score 80?",
		["4", "3", "2", "1"],
		"B"
	));

	questions.push(makeMcq("s1-sql-4", sec1,
		"SQL – Correlated subquery. What makes a correlated subquery different from a non-correlated one?",
		["It always returns exactly one scalar value", "It references a column from the outer query and is re-executed once for every row the outer query processes", "It runs only once and its result is cached for all outer rows", "It can only appear in the HAVING clause"],
		"B"
	));

	questions.push(makeMcq("s1-sql-5", sec1,
		"SQL – CASE WHEN evaluation order. What value does this expression return when salary = 55000?\nCASE WHEN salary > 80000 THEN 'High'\n     WHEN salary > 40000 THEN 'Medium'\n     ELSE 'Low'\nEND",
		["'High'", "'Medium'", "'Low'", "NULL"],
		"B"
	));

	questions.push(makeMcq("s1-sql-6", sec1,
		"SQL – DELETE vs TRUNCATE. Which statement correctly distinguishes the two?",
		["TRUNCATE supports a WHERE clause; DELETE does not", "DELETE logs individual row deletions and can be rolled back; TRUNCATE is a DDL operation, typically much faster and cannot be rolled back in most databases", "TRUNCATE fires row-level triggers on every deleted row; DELETE does not", "DELETE resets the AUTO_INCREMENT counter; TRUNCATE does not"],
		"B"
	));

	questions.push(makeMcq("s1-sql-7", sec1,
		"SQL – Indexes. What is a clustered index?",
		["An index storing only selected columns to speed up lookups", "An index that determines the physical storage order of rows in the table; only one per table is allowed", "A covering index that includes every column of the table", "An index automatically created on all foreign key columns"],
		"B"
	));

	questions.push(makeMcq("s1-sql-8", sec1,
		"SQL – ON DELETE CASCADE. A foreign key is defined with ON DELETE CASCADE. When the parent row is deleted, what happens to child rows referencing it?",
		["The parent delete fails with a foreign key constraint error", "All child rows referencing that parent are automatically deleted", "The foreign key column in child rows is set to NULL", "The delete is deferred until the next COMMIT"],
		"B"
	));

	questions.push(makeMcq("s1-sql-9", sec1,
		"SQL – UNION ALL. Query 1 returns 10 rows, Query 2 returns 8 rows, and 3 rows are identical in both result sets. How many rows does UNION ALL return?",
		["15 rows", "18 rows", "13 rows", "10 rows"],
		"B"
	));

	questions.push(makeMcq("s1-sql-10", sec1,
		"SQL – Logical execution order. What is the correct conceptual order in which SQL clauses are processed?",
		["SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY", "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY", "WHERE → FROM → GROUP BY → SELECT → HAVING → ORDER BY", "FROM → SELECT → WHERE → GROUP BY → HAVING → ORDER BY"],
		"B"
	));

	questions.push(makeMcq("s1-sql-11", sec1,
		"SQL – Derived table. A subquery that appears inside the FROM clause of another query is called a:",
		["Correlated subquery", "Inline view or derived table", "Scalar subquery", "Aggregate subquery"],
		"B"
	));

	questions.push(makeMcq("s1-sql-12", sec1,
		"SQL – NULLIF(). What does NULLIF(expr1, expr2) return?",
		["expr2 if expr1 is NULL; otherwise returns expr1", "NULL if expr1 equals expr2; otherwise returns expr1", "0 if either expression evaluates to NULL", "The non-NULL value between expr1 and expr2"],
		"B"
	));

	questions.push(makeMcq("s1-sql-13", sec1,
		"SQL – Self join. An employees table has columns employee_id and manager_id (manager_id references employee_id in the same table). Which technique retrieves each employee paired with their manager's name?",
		["A correlated subquery in the SELECT clause only", "A self-join: alias the table twice and join on employee.manager_id = manager.employee_id", "A CROSS JOIN of the table with itself", "A recursive function written in application code"],
		"B"
	));

	questions.push(makeMcq("s1-sql-14", sec1,
		"SQL – ACID properties. Which ACID property guarantees that once a transaction is committed, its changes persist even if the system crashes immediately after?",
		["Atomicity", "Consistency", "Isolation", "Durability"],
		"D"
	));

	questions.push(makeMcq("s1-sql-15", sec1,
		"SQL – BETWEEN. The predicate age BETWEEN 18 AND 25 is equivalent to which condition?",
		["age > 18 AND age < 25", "age >= 18 AND age < 25", "age >= 18 AND age <= 25", "age > 18 AND age <= 25"],
		"C"
	));

	questions.push(makeMcq("s1-sql-16", sec1,
		"SQL – LIKE wildcards. Which pattern matches a four-character string starting with 'J', ending with 'n', and having exactly two characters in between (e.g. 'John')?",
		["LIKE 'J%n'", "LIKE 'J_n'", "LIKE 'J__n'", "LIKE '_Jn_'"],
		"C"
	));

	questions.push(makeMcq("s1-sql-17", sec1,
		"SQL – Composite index column order. You have an index on (last_name, first_name). A query filters WHERE first_name = 'Ravi' with no filter on last_name. Will this index be used efficiently?",
		["Yes, composite indexes support filtering on any included column independently", "No, the leading column (last_name) must appear in the filter for the index to be used efficiently", "Yes, but only for SELECT queries and not for UPDATE or DELETE", "No, composite indexes only work for exact-match equality on all columns together"],
		"B"
	));

	questions.push(makeMcq("s1-sql-18", sec1,
		"SQL – NOT EXISTS vs NOT IN. When the inner subquery may return NULL values, which alternative avoids the NULL trap and produces correct results?",
		["NOT LIKE with a wildcard pattern", "NOT EXISTS, which handles NULLs correctly by returning true when no matching row is found", "Adding IS NOT NULL inside the subquery WHERE clause is the only correct fix", "Always use EXCEPT instead of NOT IN"],
		"B"
	));

	questions.push(makeMcq("s1-sql-19", sec1,
		"SQL – CTE syntax. What keyword begins a Common Table Expression (CTE)?",
		["DEFINE", "WITH", "DECLARE", "USING"],
		"B"
	));

	questions.push(makeMcq("s1-sql-20", sec1,
		"SQL – CHECK constraint on UPDATE. A table has CHECK (price > 0). You run: UPDATE products SET price = -100 WHERE id = 5. What happens?",
		["The update succeeds; CHECK constraints only apply to INSERT statements", "The UPDATE fails and raises a constraint violation error", "The price is silently set to 0 (the nearest valid value)", "The row is deleted because the constraint was violated"],
		"B"
	));

	// ── Django Q41–Q60 ──────────────────────────────────────────────
	questions.push(makeMcq("s1-dj-1", sec1,
		"Django ORM – N+1 problem. You have Post with a ForeignKey to Author. Accessing post.author inside a loop over 100 posts causes 101 queries. Which ORM call solves this with a single SQL JOIN?",
		["Post.objects.prefetch_related('author')", "Post.objects.select_related('author')", "Post.objects.only('author')", "Post.objects.annotate(author_name=F('author__name'))"],
		"B"
	));

	questions.push(makeMcq("s1-dj-2", sec1,
		"Django ORM – F() expression. What is the main advantage of Product.objects.update(price=F('price') * 1.1) over fetching objects in Python, multiplying, then calling save()?",
		["It automatically validates the new price before saving", "The calculation runs entirely in the database in one SQL UPDATE statement, avoiding Python-side object loading and eliminating race conditions", "It logs old and new values in an automatic audit trail", "It cascades the price change to all related model objects"],
		"B"
	));

	questions.push(makeMcq("s1-dj-3", sec1,
		"Django ORM – Q() objects. Which query correctly retrieves users where age > 25 OR city is 'Hyderabad'?",
		["User.objects.filter(Q(age__gt=25) & Q(city='Hyderabad'))", "User.objects.filter(Q(age__gt=25) | Q(city='Hyderabad'))", "User.objects.filter(age__gt=25).filter(city='Hyderabad')", "User.objects.exclude(age__lte=25, city='Hyderabad')"],
		"B"
	));

	questions.push(makeMcq("s1-dj-4", sec1,
		"Django ORM – annotate() vs aggregate(). What is the key difference?",
		["annotate() returns a single summary value for the whole QuerySet; aggregate() adds a per-object field", "annotate() adds a per-object computed field to every result row; aggregate() returns a single summary dictionary for the entire QuerySet", "They are interchangeable; aggregate() is simply an optimised version", "annotate() works only with COUNT; aggregate() works with all functions"],
		"B"
	));

	questions.push(makeMcq("s1-dj-5", sec1,
		"Django ORM – Lazy evaluation. qs = Post.objects.filter(published=True) is assigned. When does Django actually execute the database query?",
		["When .filter() is called", "When the QuerySet is iterated, converted to a list, passed to len(), or evaluated inside a template loop", "When the variable qs is assigned", "Only when .save() is explicitly called on a fetched object"],
		"B"
	));

	questions.push(makeMcq("s1-dj-6", sec1,
		"Django ORM – values(). What does Article.objects.values('title', 'body') return?",
		["A list of Article instances with only title and body attributes loaded", "A QuerySet of dictionaries, each containing keys 'title' and 'body'", "A QuerySet of (title, body) tuples", "A flat list of title values followed by body values"],
		"B"
	));

	questions.push(makeMcq("s1-dj-7", sec1,
		"Django – Custom model manager. If a custom Manager is added to a model and objects is NOT explicitly re-added, what happens?",
		["Django automatically keeps objects as a built-in fallback alongside any custom manager", "Model.objects is no longer available; only the custom manager attribute is accessible on the model", "Django raises ImproperlyConfigured at startup", "The custom manager automatically inherits the default queryset from objects"],
		"B"
	));

	questions.push(makeMcq("s1-dj-8", sec1,
		"Django CBV – ListView. Which method do you override to filter the queryset to only the posts belonging to the currently logged-in user?",
		["get_context_data()", "get_queryset()", "dispatch()", "get_template_names()"],
		"B"
	));

	questions.push(makeMcq("s1-dj-9", sec1,
		"Django Templates – Block inheritance. A parent template defines: {% block title %}Default Title{% endblock %}. A child defines: {% block title %}My Page{% endblock %}. What is rendered as the title?",
		["'Default Title My Page' — both concatenated with a space", "'My Page' — the child block completely replaces the parent block", "TemplateSyntaxError: duplicate block name is not allowed", "The parent block always wins; child templates cannot override it"],
		"B"
	));

	questions.push(makeMcq("s1-dj-10", sec1,
		"Django Forms – ModelForm save(commit=False). When would you use this instead of form.save()?",
		["To bypass all model validation and force-save even invalid data", "To get the unsaved model instance in memory so you can set additional fields (e.g. owner = request.user) before writing to the database", "To prevent post_save signals from firing on that model", "To save only the ManyToMany fields and defer all regular fields"],
		"B"
	));

	questions.push(makeMcq("s1-dj-11", sec1,
		"Django Signals – pre_save vs post_save. Which signal fires BEFORE the model's save() writes to the database, allowing you to still modify the instance?",
		["post_save", "pre_save", "pre_init", "post_delete"],
		"B"
	));

	questions.push(makeMcq("s1-dj-12", sec1,
		"Django Middleware – Execution order. In which direction does Django pass an incoming request through the middlewares listed in the MIDDLEWARE setting?",
		["Bottom-to-top (reverse of the listed order)", "Top-to-bottom (the order they are listed)", "Alphabetical order by class name", "Randomised at each request"],
		"B"
	));

	questions.push(makeMcq("s1-dj-13", sec1,
		"Django Security – CSRF. What does the {% csrf_token %} template tag render inside an HTML form?",
		["A JavaScript snippet that adds a CSRF header to AJAX requests", "A hidden input element containing the CSRF token value", "A meta tag with the token in its content attribute", "A cookie-setting script block"],
		"B"
	));

	questions.push(makeMcq("s1-dj-14", sec1,
		"Django REST Framework – Object-level permissions. To allow only the owner of an object to update it (all other authenticated users get 403), which is the correct approach?",
		["Use IsAuthenticated and perform a manual check inside the view method", "Create a custom BasePermission subclass and override has_object_permission() to check request.user == obj.owner", "Apply IsAdminUser on the ViewSet", "Override perform_update() and raise a generic PermissionDenied exception"],
		"B"
	));

	questions.push(makeMcq("s1-dj-15", sec1,
		"Django Cache – cache.get_or_set(). When the cache key does NOT exist, what does cache.get_or_set('key', get_data, 300) do?",
		["Returns None and schedules a background task to populate the cache", "Calls get_data(), stores the result in cache for 300 seconds, and returns it", "Raises a CacheMiss exception", "Sets the key to an empty list immediately and returns it"],
		"B"
	));

	questions.push(makeMcq("s1-dj-16", sec1,
		"Django Auth – Referencing the user model in models.py. Which is the Django-recommended way to define a ForeignKey to the user model so it works correctly with a custom AUTH_USER_MODEL?",
		["from django.contrib.auth.models import User; ForeignKey(User, on_delete=models.CASCADE)", "ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE) — uses the string reference", "ForeignKey(get_user_model(), on_delete=models.CASCADE) at class definition time in models.py", "Either A or C; Django does not have a preference"],
		"B"
	));

	questions.push(makeMcq("s1-dj-17", sec1,
		"Django REST Framework – Serializer validation. What is the difference between validate_email(self, value) and validate(self, data) in a DRF Serializer?",
		["validate_email runs after validate; both receive the full data dictionary", "validate_email validates only the email field after field-level deserialization; validate receives all deserialized field values as a dict and runs after all field-level validators pass", "They are interchangeable; DRF randomly picks one to call", "validate_email runs only on PATCH requests; validate runs on all HTTP methods"],
		"B"
	));

	questions.push(makeMcq("s1-dj-18", sec1,
		"Django URLs – Namespacing. Your app sets app_name = 'products' and defines a URL named 'detail'. How do you correctly reverse this URL in Python code?",
		["reverse('detail')", "reverse('products:detail')", "reverse('products.detail')", "reverse('products', kwargs={'name': 'detail'})"],
		"B"
	));

	questions.push(makeMcq("s1-dj-19", sec1,
		"Django Static Files – STATIC_ROOT. What is STATIC_ROOT used for?",
		["It lists the directories Django searches for static files during development", "It is the single destination directory where python manage.py collectstatic gathers all static files for production deployment", "It sets the URL prefix (e.g. /static/) used to serve static files in the browser", "It specifies the storage backend class for saving uploaded static files"],
		"B"
	));

	questions.push(makeMcq("s1-dj-20", sec1,
		"Django Testing – force_login vs login. What is the key advantage of self.client.force_login(user) over self.client.login(username=..., password=...) in unit tests?",
		["force_login also creates the user in the test database if they do not exist", "force_login bypasses the authentication backend entirely (no password check), making tests faster and decoupled from authentication implementation details", "force_login is the only method that establishes a real browser session cookie", "force_login is required to test views protected by multi-factor authentication"],
		"B"
	));


	// ── Quantitative Aptitude Q1–Q30 ──────────────────────────────
	questions.push(makeMcq("s2-qa-1", sec2,
		"Quantitative Aptitude – LCM. Find the LCM of 12, 18, and 24.",
		["72", "36", "144", "48"],
		"A"
	));

	questions.push(makeMcq("s2-qa-2", sec2,
		"Quantitative Aptitude – Successive Discounts. A shirt priced at Rs.800 first gets a 15% discount, then an additional 10% discount on the already reduced price. What is the final selling price?",
		["Rs.595", "Rs.612", "Rs.600", "Rs.560"],
		"B"
	));

	questions.push(makeMcq("s2-qa-3", sec2,
		"Quantitative Aptitude – Profit and Loss. A trader marks goods 40% above cost price and offers a 25% discount on the marked price. What is his profit or loss percentage?",
		["5% loss", "5% profit", "15% profit", "10% loss"],
		"B"
	));

	questions.push(makeMcq("s2-qa-4", sec2,
		"Quantitative Aptitude – Ratio and Proportion. A sum of Rs.3,640 is divided among A, B, and C in the ratio 3:4:7. What is C's share?",
		["Rs.1,820", "Rs.1,040", "Rs.780", "Rs.2,100"],
		"A"
	));

	questions.push(makeMcq("s2-qa-5", sec2,
		"Quantitative Aptitude – Time and Work. A can finish a task in 10 days, B in 15 days. They work together for 4 days, then A leaves. How many more days does B take to finish the remaining work alone?",
		["4 days", "5 days", "6 days", "7 days"],
		"B"
	));

	questions.push(makeMcq("s2-qa-6", sec2,
		"Quantitative Aptitude – Trains. Two trains 120 m and 80 m long approach each other on parallel tracks at 60 km/h and 40 km/h respectively. How many seconds do they take to completely pass each other?",
		["7.2 seconds", "9 seconds", "10 seconds", "8 seconds"],
		"A"
	));

	questions.push(makeMcq("s2-qa-7", sec2,
		"Quantitative Aptitude – Simple Interest. Rs.5,000 is invested at 8% per annum simple interest for 3 years. What is the total amount at maturity?",
		["Rs.6,200", "Rs.5,800", "Rs.6,000", "Rs.5,400"],
		"A"
	));

	questions.push(makeMcq("s2-qa-8", sec2,
		"Quantitative Aptitude – Compound Interest. Rs.10,000 is invested at 10% per annum compounded annually for 2 years. What is the compound interest earned?",
		["Rs.1,900", "Rs.2,000", "Rs.2,100", "Rs.2,200"],
		"C"
	));

	questions.push(makeMcq("s2-qa-9", sec2,
		"Quantitative Aptitude – Ages. The present age ratio of A to B is 4:5. After 8 years the ratio becomes 6:7. What is A's present age?",
		["16 years", "20 years", "24 years", "28 years"],
		"A"
	));

	questions.push(makeMcq("s2-qa-10", sec2,
		"Quantitative Aptitude – Averages. The average of 10 numbers is 42. If the numbers 60 and 48 are removed, what is the new average of the remaining 8 numbers?",
		["39", "40", "38", "41"],
		"A"
	));

	questions.push(makeMcq("s2-qa-11", sec2,
		"Quantitative Aptitude – Alligation. In what ratio should water (cost Rs.0 per litre) be mixed with milk (cost Rs.15 per litre) to get a mixture worth Rs.10 per litre?",
		["1:2", "2:1", "1:3", "3:1"],
		"A"
	));

	questions.push(makeMcq("s2-qa-12", sec2,
		"Quantitative Aptitude – Permutations. In how many distinct ways can the letters of the word APPLE be arranged?",
		["60", "120", "80", "40"],
		"A"
	));

	questions.push(makeMcq("s2-qa-13", sec2,
		"Quantitative Aptitude – Combinations. From 5 men and 4 women, a committee of 3 men and 2 women must be formed. In how many ways can this be done?",
		["60", "72", "80", "90"],
		"A"
	));

	questions.push(makeMcq("s2-qa-14", sec2,
		"Quantitative Aptitude – Probability. A bag contains 4 red, 3 blue, and 2 green balls. Two balls are drawn without replacement. What is the probability that both are red?",
		["1/6", "2/9", "1/3", "1/12"],
		"A"
	));

	questions.push(makeMcq("s2-qa-15", sec2,
		"Quantitative Aptitude – Percentage Growth. A company revenue was Rs.45 lakhs in 2021, grew 20% in 2022, then declined 10% in 2023. What was the revenue in 2023?",
		["Rs.48.6 lakhs", "Rs.49.5 lakhs", "Rs.50 lakhs", "Rs.47 lakhs"],
		"A"
	));

	questions.push(makeMcq("s2-qa-16", sec2,
		"Quantitative Aptitude – Algebra. If 3x + 5y = 29 and x + y = 7, find the value of x - y.",
		["1", "3", "5", "-1"],
		"D"
	));

	questions.push(makeMcq("s2-qa-17", sec2,
		"Quantitative Aptitude – Geometry. The area of a circle is 154 sq.cm. What is its circumference? (Use pi = 22/7)",
		["44 cm", "22 cm", "88 cm", "11 cm"],
		"A"
	));

	questions.push(makeMcq("s2-qa-18", sec2,
		"Quantitative Aptitude – Boats and Streams. A boat covers 36 km downstream in 3 hours and 24 km upstream in 4 hours. What is the speed of the boat in still water?",
		["8 km/h", "9 km/h", "10 km/h", "7.5 km/h"],
		"B"
	));

	questions.push(makeMcq("s2-qa-19", sec2,
		"Quantitative Aptitude – Pipes and Cisterns. Pipe A fills a tank in 6 hours, Pipe B in 8 hours, Pipe C empties it in 12 hours. All three pipes are opened together. How long does it take to fill the tank completely?",
		["4 hours", "4.8 hours", "5 hours", "3.6 hours"],
		"B"
	));

	questions.push(makeMcq("s2-qa-20", sec2,
		"Quantitative Aptitude – Partnership. A invests Rs.5,000 for 12 months; B invests Rs.8,000 for 9 months. If the total profit is Rs.3,300, what is A's share?",
		["Rs.1,500", "Rs.1,800", "Rs.1,200", "Rs.1,100"],
		"A"
	));

	questions.push(makeMcq("s2-qa-21", sec2,
		"Quantitative Aptitude – Number System. What is the remainder when 2^100 is divided by 3?",
		["0", "1", "2", "None of these"],
		"B"
	));

	questions.push(makeMcq("s2-qa-22", sec2,
		"Quantitative Aptitude – Successive Percentage. The price of a commodity increases by 25% and then decreases by 20%. What is the net percentage change compared to the original price?",
		["0% (no change)", "5% decrease", "5% increase", "10% increase"],
		"A"
	));

	questions.push(makeMcq("s2-qa-23", sec2,
		"Quantitative Aptitude – Dishonest Shopkeeper. A shopkeeper uses a 900 g weight instead of 1 kg when selling and also marks the price 10% above cost price. What is his actual profit percentage?",
		["22.2%", "20%", "10%", "11.1%"],
		"A"
	));

	questions.push(makeMcq("s2-qa-24", sec2,
		"Quantitative Aptitude – Time and Work (multi-step). A and B can complete a job in 12 and 18 days respectively. They work together for 4 days, then A leaves. How many more days does B take to finish the remaining work alone?",
		["6 days", "7 days", "8 days", "9 days"],
		"C"
	));

	questions.push(makeMcq("s2-qa-25", sec2,
		"Quantitative Aptitude – Train Crossing Platform. A 200 m long train passes a 150 m long platform at 72 km/h. How long does it take to completely cross the platform?",
		["15 seconds", "17.5 seconds", "20 seconds", "12.5 seconds"],
		"B"
	));

	questions.push(makeMcq("s2-qa-26", sec2,
		"Quantitative Aptitude – CI Half-yearly. Rs.20,000 is invested at 5% per annum compounded half-yearly for 1 year. What is the compound interest earned?",
		["Rs.1,012.50", "Rs.1,000", "Rs.1,025", "Rs.1,050"],
		"A"
	));

	questions.push(makeMcq("s2-qa-27", sec2,
		"Quantitative Aptitude – Age Problem. Five years ago, a father was 3 times as old as his son. Five years from now, the father will be twice as old as the son. What is the father's present age?",
		["35 years", "40 years", "45 years", "50 years"],
		"A"
	));

	questions.push(makeMcq("s2-qa-28", sec2,
		"Quantitative Aptitude – Permutations with Constraint. In how many ways can 6 people be seated in a row if two specific people must always sit next to each other?",
		["120", "240", "360", "720"],
		"B"
	));

	questions.push(makeMcq("s2-qa-29", sec2,
		"Quantitative Aptitude – Probability (Cards). Two cards are drawn at random from a pack of 52 cards without replacement. What is the probability that one is a king and the other is a queen?",
		["4/663", "8/663", "1/52", "16/663"],
		"B"
	));

	questions.push(makeMcq("s2-qa-30", sec2,
		"Quantitative Aptitude – Optimization. x and y are positive integers with x > y and x + y = 10. What is the maximum possible value of the product x * y?",
		["21", "24", "25", "20"],
		"B"
	));

	// ── Logical Reasoning Q31–Q60 ──────────────────────────────────
	questions.push(makeMcq("s2-lr-1", sec2,
		"Logical Reasoning – Syllogism.\nStatements: All cats are animals. Some animals are wild.\nConclusions: I. Some cats are wild.  II. All animals are cats.\nWhich conclusion(s) follow?",
		["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
		"D"
	));

	questions.push(makeMcq("s2-lr-2", sec2,
		"Logical Reasoning – Blood Relations. A is the father of B. C is the sister of A. D is the brother of C's mother. How is D related to B?",
		["Uncle", "Great uncle", "Grandfather", "Grand uncle"],
		"D"
	));

	questions.push(makeMcq("s2-lr-3", sec2,
		"Logical Reasoning – Coding-Decoding. In a code language, each letter is replaced by the next letter in the alphabet (A becomes B, B becomes C, and so on). How is TIGER coded?",
		["UJHFS", "UIJFS", "VJHGS", "TIGFS"],
		"A"
	));

	questions.push(makeMcq("s2-lr-4", sec2,
		"Logical Reasoning – Direction Sense. A person walks 5 km North, turns right and walks 3 km, turns right again and walks 5 km, then turns left and walks 2 km. How far is he from the starting point?",
		["3 km", "5 km", "2 km", "4 km"],
		"B"
	));

	questions.push(makeMcq("s2-lr-5", sec2,
		"Logical Reasoning – Seating Arrangement. Five friends P, Q, R, S, T sit in a row. S is immediately to the left of T. T is 3rd from the right. P is immediately to the right of Q. R is at one of the two ends. Who sits in the middle (3rd position)?",
		["P", "Q", "T", "R"],
		"C"
	));

	questions.push(makeMcq("s2-lr-6", sec2,
		"Logical Reasoning – Number Series. Find the next term: 2, 6, 12, 20, 30, ?",
		["40", "42", "44", "36"],
		"B"
	));

	questions.push(makeMcq("s2-lr-7", sec2,
		"Logical Reasoning – Letter Series. Find the missing term: AZ, BY, CX, DW, ?",
		["EV", "EW", "FV", "EU"],
		"A"
	));

	questions.push(makeMcq("s2-lr-8", sec2,
		"Logical Reasoning – Odd One Out. Which number does NOT belong in the group: 4, 9, 16, 24, 25?",
		["4", "9", "16", "24"],
		"D"
	));

	questions.push(makeMcq("s2-lr-9", sec2,
		"Logical Reasoning – Analogy. Nurse is to Hospital as Teacher is to ___.",
		["Book", "School", "Blackboard", "Education"],
		"B"
	));

	questions.push(makeMcq("s2-lr-10", sec2,
		"Logical Reasoning – Inequalities. Given A > B, B >= C, C > D, which conclusions are definitely true?\nI. A > D     II. B > D",
		["Only I", "Only II", "Neither I nor II", "Both I and II"],
		"D"
	));

	questions.push(makeMcq("s2-lr-11", sec2,
		"Logical Reasoning – Statement and Assumptions.\nStatement: The government has decided to make Metro trains free for senior citizens.\nAssumption I: Senior citizens usually travel by Metro.\nAssumption II: The Metro authorities want to encourage senior citizens to use Metro services.\nWhich assumption(s) are implicit?",
		["Only Assumption I", "Only Assumption II", "Both I and II", "Neither I nor II"],
		"B"
	));

	questions.push(makeMcq("s2-lr-12", sec2,
		"Logical Reasoning – Cause and Effect.\nFact 1: Many students did not eat lunch at school for two weeks.\nFact 2: The school canteen was closed for renovation for two weeks.\nWhich is the correct relationship?",
		["Fact 1 is the cause; Fact 2 is the effect", "Fact 2 is the cause; Fact 1 is the effect", "Both are independent causes of a common effect", "Both are effects of some independent cause"],
		"B"
	));

	questions.push(makeMcq("s2-lr-13", sec2,
		"Logical Reasoning – Strengthen the Argument. Argument: Regular exercise reduces the risk of heart disease. Which statement most strengthens this?",
		["People who exercise also tend to eat healthier diets", "A 10-year study of 50,000 people found those exercising 5 days/week had 40% fewer heart disease cases", "Exercise reduces body weight", "Heart disease rates have risen in populations where exercise levels have declined"],
		"B"
	));

	questions.push(makeMcq("s2-lr-14", sec2,
		"Logical Reasoning – Clocks. What is the angle between the minute and hour hands of a clock at 3:40?",
		["130 degrees", "135 degrees", "140 degrees", "150 degrees"],
		"A"
	));

	questions.push(makeMcq("s2-lr-15", sec2,
		"Logical Reasoning – Calendar. January 1, 2020 was a Wednesday. 2020 is a leap year (366 days). What day was January 1, 2021?",
		["Thursday", "Friday", "Saturday", "Sunday"],
		"B"
	));

	questions.push(makeMcq("s2-lr-16", sec2,
		"Logical Reasoning – Input-Output Machine.\nInput: 25  18  47  9  36\nStep 1: Arrange all numbers in descending order.\nStep 2: Add 10 to numbers at odd positions (1st, 3rd, 5th).\nStep 3: Multiply numbers at even positions (2nd, 4th) by 2.\nWhat is the sum of all five numbers after Step 3?",
		["219", "215", "220", "210"],
		"A"
	));

	questions.push(makeMcq("s2-lr-17", sec2,
		"Logical Reasoning – Ranking. In a class of 40 students, Ramesh ranks 10th from the top. Suresh is ranked 8 places below Ramesh. What is Suresh's rank from the bottom of the class?",
		["19", "22", "23", "24"],
		"C"
	));

	questions.push(makeMcq("s2-lr-18", sec2,
		"Logical Reasoning – Puzzle. Five friends A, B, C, D, E each like a different sport: Cricket, Football, Hockey, Tennis, Badminton. B likes Hockey. E likes Cricket. C likes Football. D does not like Badminton. What sport does A like?",
		["Tennis", "Badminton", "Cricket", "Football"],
		"B"
	));

	questions.push(makeMcq("s2-lr-19", sec2,
		"Logical Reasoning – Statement and Arguments.\nStatement: The government should ban all forms of gambling.\nArgument I: Yes, gambling leads to financial ruin and serious social problems.\nArgument II: No, gambling is a personal choice and adults should have the freedom to decide.\nWhich argument is strong?",
		["Only Argument I is strong", "Only Argument II is strong", "Both arguments are strong", "Neither argument is strong"],
		"A"
	));

	questions.push(makeMcq("s2-lr-20", sec2,
		"Logical Reasoning – Coding-Decoding. Each letter is replaced by the letter 2 positions ahead in the alphabet. How is MOTHER coded?",
		["OQVJGT", "NQUIGT", "OPVJGS", "OQVIGT"],
		"A"
	));

	questions.push(makeMcq("s2-lr-21", sec2,
		"Logical Reasoning – Syllogism.\nStatements: No doctor is a lawyer. Some lawyers are engineers.\nConclusions: I. Some engineers are not doctors.  II. No engineer is a doctor.\nWhich follow?",
		["Only I follows", "Only II follows", "Both follow", "Neither follows"],
		"A"
	));

	questions.push(makeMcq("s2-lr-22", sec2,
		"Logical Reasoning – Weaken the Argument. Claim: Vitamin C supplements prevent the common cold. Which statement most weakens this claim?",
		["Vitamin C is naturally present in many common foods", "A meta-analysis of 30 independent studies found no significant difference in cold incidence between supplement takers and non-takers", "Many people take Vitamin C supplements daily as a routine", "The common cold is caused by over 200 different virus strains"],
		"B"
	));

	questions.push(makeMcq("s2-lr-23", sec2,
		"Logical Reasoning – Blood Relations. Pointing to a photograph, Rahul says, 'This man's son is my mother's only brother.' How is the man in the photograph related to Rahul?",
		["Grandfather", "Father", "Uncle", "Maternal grandfather"],
		"D"
	));

	questions.push(makeMcq("s2-lr-24", sec2,
		"Logical Reasoning – Direction Sense. From point A, John walks 4 km South, then 3 km East to reach B, then 4 km North to reach C. What is the straight-line distance and direction of C from A?",
		["3 km West", "3 km East", "5 km East", "4 km East"],
		"B"
	));

	questions.push(makeMcq("s2-lr-25", sec2,
		"Logical Reasoning – Seating Arrangement. Seven people A to G sit in a row. A is 3rd from the left. There are exactly 2 people sitting between A and B. C sits immediately to B's right. D occupies one of the two ends. E sits immediately to A's left. What is E's position from the right end?",
		["4th", "5th", "6th", "7th"],
		"C"
	));

	questions.push(makeMcq("s2-lr-26", sec2,
		"Logical Reasoning – Inequalities. Given: P >= Q = R > S <= T.\nConclusions: I. P > S     II. Q >= T     III. R > S\nWhich are definitely true?",
		["Only I and III", "Only I", "Only III", "All three (I, II, and III)"],
		"A"
	));

	questions.push(makeMcq("s2-lr-27", sec2,
		"Logical Reasoning – Analogy. Virologist is to Virus as Etymologist is to ___.",
		["Insects", "Words", "Earthquakes", "Stars"],
		"B"
	));

	questions.push(makeMcq("s2-lr-28", sec2,
		"Logical Reasoning – Data Sufficiency. Is integer x divisible by 6?\nStatement I: x is divisible by 3.\nStatement II: x is divisible by 4.\nWhich statement(s) are sufficient?",
		["Statement I alone is sufficient", "Statement II alone is sufficient", "Both statements together are sufficient", "Neither statement is sufficient even together"],
		"C"
	));

	questions.push(makeMcq("s2-lr-29", sec2,
		"Logical Reasoning – Number-Letter Coding. Prime numbers map to the alphabet letter at their own position (2=B, 3=C, 5=E, 7=G, 11=K). Using the same rule, what is the code for the prime number 13?",
		["M", "N", "L", "P"],
		"A"
	));

	questions.push(makeMcq("s2-lr-30", sec2,
		"Logical Reasoning – Letter Series. Find the missing term: A, C, F, J, ?",
		["M", "N", "O", "P"],
		"C"
	));

	questions.push({
		id: "s3-prog-1",
		type: "coding",
		section: sec3,
		text: "LeetCode #724 - Find Pivot Index (Easy)\n\nProblem:\nGiven an integer array nums, find the leftmost pivot index where the sum of all numbers strictly to the left is equal to the sum of all numbers strictly to the right.\nIf no such index exists, return -1.\n\nExample 1:\nInput: nums = [1, 7, 3, 6, 5, 6]\nOutput: 3\n\nExample 2:\nInput: nums = [1, 2, 3]\nOutput: -1\n\nExample 3:\nInput: nums = [2, 1, -1]\nOutput: 0\n\nWrite your approach and code/pseudocode.",
		options: []
	});

	questions.push({
		id: "s3-prog-2",
		type: "coding",
		section: sec3,
		text: "LeetCode #242 - Valid Anagram (Easy)\n\nProblem:\nGiven two strings s and t, return true if t is an anagram of s, and false otherwise.\nAn anagram is a word formed by rearranging the letters of another word using all original letters exactly once.\n\nExample 1:\nInput: s = \"anagram\", t = \"nagaram\"\nOutput: true\n\nExample 2:\nInput: s = \"rat\", t = \"car\"\nOutput: false\n\nWrite your approach and code/pseudocode.",
		options: []
	});

	return {
		id: "career-assessment-002",
		title: "Career Assessment Mock Test - 3 Sections (Updated)",
		date: "2026-06-21",
		durationMinutes: 160,
		sectionWiseFlow: true,
		marksPerQuestion: 1,
		negativeMark: 0,
		sections: [
			{ key: "sec1-tech", title: sec1, count: 60, start: 1, end: 60, durationMinutes: 60 },
			{ key: "sec2-aptitude", title: sec2, count: 60, start: 61, end: 120, durationMinutes: 60 },
			{ key: "sec3-programming", title: sec3, count: 2, start: 121, end: 122, durationMinutes: 40 }
		],
		questions: questions
	};
})());