var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "s_sets_tuples",
  "level": "1",
  "url": "s_sets_tuples.html",
  "type": "Section",
  "number": "0.1",
  "title": "Sets and tuples",
  "body": " Sets and tuples   The two main players in the story of linear algebra are vector spaces and linear transformations . As we will see, a vector space is a certain kind of set , and a linear transformation is a special type of function . Moreover, many of the examples of vectors spaces we study will consist of tuples of real numbers. Accordingly, in the next two sections we will gather important notions and notations related to sets, tuples, and functions.    Sets   Sets  sets  sets empty sets  sets membership      set membership    A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .    We use curly braces to describe the contents of a set. For example, is the set containing the first three positive integers, and is the set of all positive integers. The defining property of sets is that they are completely determined by their members, and nothing more. In particular, when describing sets as above, it does not matter in what order the elements are listed, nor if they are repeated: , , , and are three descriptions of the same set. This somewhat slippery notion is made perfectly clear by specifying exactly what it means for two sets to be equal, as we do below.   Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .    Set membership naturally extends to a notion of one set being within another. Formally, this is captured by the relation of set inclusion .   Set inclusion  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .     The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations. We describe these notions in more detail in , and we outline techniques for proving if and only if and if-then statements, including statements about set equality and the subset relation, in .   With the fundamental notions of membership, equality, and subset in place, we now introduce means of building new sets from existing ones. The first is a manner of carving out a subset of a given set using a specified property.   Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .     Parsing set builder notation  Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .     Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .    Next we use set builder notation, the set membership relation, and some basic logic to define the union, intersection, and difference of sets.   Union, intersection, difference, and complement  sets union  sets intersection  sets complement  sets difference    set union     set complement     set intersection       set difference    Let and be subsets of a common set .   Set union  The union  of and is defined as . More generally, the union of a collection of subsets of is defined as .    Set intersection  The intersection  of and is defined as . More generally, the intersection of a collection of subsets of is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .       With the help of these set operations, we can now describe some common sets used in mathematics.   Common mathematical sets  sets empty set  real numbers  integers  rational numbers     the empty set     real numbers     integers     positive integers     the set of all integers greater than or equal to     rational numbers    The empty set is the set containing no objects, denoted or .  We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . Additionally, for any integer we denote by the set of all integers : , . Lastly, we denote by the set of all positive integers: , .    Lastly, we define the cardinality of a set , which is a measure of its size. Essentially this is just the number of distinct elements of the set . However, we take care that our definition encompasses both finite and infinite sets.   Cardinality of a set  cardinality of a set    the cardinality of the set    Let be a set. The cardinality of , denoted is defined as follows.   If is finite, then its cardinality is the number of distinct elements it contains, written .    If is infinite, then we say it has infinite cardinality , and write .         Tuples  A set is a somewhat paltry thing, structurally speaking. You can think of it as an arbitrary collection of objects thrown into a bag with no real rhyme or reason. In particular, as is commonly said, there is no order to the elements of a set. That is, when we write , there is no sense in which is the first element of , is the second element, and is the third . That particular ordering is simply suggested by the way we have chosen to describe , but recall that we could just have well described as or even . To give an ordering to we need to explicitly state which element is the the first, which the second, and which the third. Clearly, this is an additional layer of structure given to the underlying set , and the typical way to indicate this structure is to use what is often called ordered list , or sequence notation. For example, we write to denote the set along with the choice of ordering that designates as the first element, as the second, and as the third; and we write to denote the same set along with the ordering that designates as the first element, as the second, and as the third. Our definition of a tuple both makes this notion of an ordered set precise and greatly generalizes it.   Tuples    tuple indexed by     -valued tuples indexed by    Let and be sets. An -valued tuple indexed by is a rule that assigns to each index  an element , denoted .  Given an -valued tuple , we call the index set , and for each index , we call the -th component (or coordinate , or entry , or term ) of . We call the set of values of the tuple .  The set of all -valued tuples indexed by is denoted : , .     Tuple notation  Different index sets give rise to different notational conventions for denoting tuples and sets of tuples .   When for some positive integer , we will write for , and will use any of the following notations for a tuple of : . In this case we call an -tuple with values in , and we call the length of the -tuple. Moreover, we use the following terminology for : a -tuple is a called a pair of elements of , a -tuple is called a triple of elements of .    When , we will write for , and will use any of the following notations for a tuple of : . In this context a tuple of is often called an infinite sequence of elements of .      Given a tuple , the indexing by the set plays the role of a filing system: given an index , our filing system returns to us a certain element of and labels it the -th element in our system. Different index sets, and different choices of index assignments, give rise to different ways of organizing the elements of the underlying set . This is the motivation for the following definition of what it means for two -valued tuples to be equal.   Tuple equality   Given a set , two -valued tuples and are equal , denoted if the following two conditions hold.    .     for all .        Tuple equality  The filing system analogy for tuples might help you make sense of . For two filing systems of a certain collection to be equal, they should firstly have the same indexing set (this is the condition ); and secondly, to each index in our indexing set, they should assign the same object from our collection.    Tuple equality   Decide whether the given -valued tuples are equal.    ,      ,      ,        In all cases we have , but for different reasons that illuminate the different nuances of .   Both tuples have the same index set in this case. Write and . Although we have and , since , we see that . Note that in this case we do not even have equality between the set of values of the two tuples. That is, .    Again, both tuples are indexed by . Furthermore, in this case the sets of values of the two tuples are equal. However, since the third coordinate of is not equal to the third coordinate of , we have .    In this case the two tuples fail to be equal due to their having different index sets. The index set of is , and the index set of is .        Ordered list  Index sets of the form and are equipped with a natural choice of ordering inherited from the relation on . That is, we have . As a result, a tuple (or ) indexed by for one of these types of index sets can be thought of as an ordering of the underlying set. Indeed, in this setting we do not just speak of the -th element of the tuple , we further call the first element, the second element, . This is why tuples of the form or are often called ordered lists or ordered sequences .  We take care to add however, that since our general definition of tuples allows for arbitrary index sets , and since not every set has a natural choice of ordering, we should not in general think of tuples as ordered lists in this precise sense. Indeed, consider the somewhat peculiar index set . There is no natural ordering of the set , and so a tuple indexed by also should not be thought of as an ordered list. Indeed, instead of speaking of a first, second, or third element of the tuple , it really only makes sense to speak of the -th, -th, and -th element of the tuple!   There is no restriction to what the elements of a set are. In particular, these elements could be sets themselves! For example, the set contains three elements, all of which are themselves sets: namely, the empty set, the set , and the set . Similarly, our definition of tuples gives no restrictions on what type of objects the coordinates are allowed to be. When we let those coordinates be sets themselves, we arrive at the mathematical notion of a indexed family of sets .   Indexed family of sets   An indexed family of sets is a tuple , where is a set for all indices .    The notion of a family of sets allows us in turn to generalize our definitions of finite unions and intersections to arbitrary unions and intersections.   Arbitrary unions and intersections   Let be a set, and let be a family of sets with for all .   The union of the , denoted , is defined as .    The intersection of the , denoted , is defined as .       Lastly, combining the notions of families of sets and tuples, we arrive at the notion of a Cartesian product , which can be thought of as the set of tuples whose coordinates are restricted to a specified subset for all .   Cartesian product  Cartesian product    Cartesian product of the sets    Let be a set, and let be a family of subsets with for all . The Cartesian product  of the is defined as . In other words, the Cartesian product is the set of all -valued tuples whose -th coordinate is an element of for all .  In the special case where we write and , and we call the -fold Cartesian product of .      "
},
{
  "id": "d_sets",
  "level": "2",
  "url": "s_sets_tuples.html#d_sets",
  "type": "Definition",
  "number": "0.1.1",
  "title": "Sets.",
  "body": " Sets  sets  sets empty sets  sets membership      set membership    A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .   "
},
{
  "id": "d_set_equality",
  "level": "2",
  "url": "s_sets_tuples.html#d_set_equality",
  "type": "Definition",
  "number": "0.1.2",
  "title": "Set equality.",
  "body": " Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .   "
},
{
  "id": "d_set_inclusion",
  "level": "2",
  "url": "s_sets_tuples.html#d_set_inclusion",
  "type": "Definition",
  "number": "0.1.3",
  "title": "Set inclusion.",
  "body": " Set inclusion  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .   "
},
{
  "id": "rm_equal_subset_logic",
  "level": "2",
  "url": "s_sets_tuples.html#rm_equal_subset_logic",
  "type": "Remark",
  "number": "0.1.4",
  "title": "",
  "body": " The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations. We describe these notions in more detail in , and we outline techniques for proving if and only if and if-then statements, including statements about set equality and the subset relation, in .  "
},
{
  "id": "d_set_builder_notation",
  "level": "2",
  "url": "s_sets_tuples.html#d_set_builder_notation",
  "type": "Definition",
  "number": "0.1.5",
  "title": "Set-builder notation.",
  "body": " Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .   "
},
{
  "id": "rm_set_builder",
  "level": "2",
  "url": "s_sets_tuples.html#rm_set_builder",
  "type": "Remark",
  "number": "0.1.6",
  "title": "Parsing set builder notation.",
  "body": " Parsing set builder notation  Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .  "
},
{
  "id": "ex_set_builder",
  "level": "2",
  "url": "s_sets_tuples.html#ex_set_builder",
  "type": "Example",
  "number": "0.1.7",
  "title": "",
  "body": "  Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .   "
},
{
  "id": "d_set_operations",
  "level": "2",
  "url": "s_sets_tuples.html#d_set_operations",
  "type": "Definition",
  "number": "0.1.8",
  "title": "Union, intersection, difference, and complement.",
  "body": " Union, intersection, difference, and complement  sets union  sets intersection  sets complement  sets difference    set union     set complement     set intersection       set difference    Let and be subsets of a common set .   Set union  The union  of and is defined as . More generally, the union of a collection of subsets of is defined as .    Set intersection  The intersection  of and is defined as . More generally, the intersection of a collection of subsets of is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .      "
},
{
  "id": "d_common_sets",
  "level": "2",
  "url": "s_sets_tuples.html#d_common_sets",
  "type": "Definition",
  "number": "0.1.9",
  "title": "Common mathematical sets.",
  "body": " Common mathematical sets  sets empty set  real numbers  integers  rational numbers     the empty set     real numbers     integers     positive integers     the set of all integers greater than or equal to     rational numbers    The empty set is the set containing no objects, denoted or .  We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . Additionally, for any integer we denote by the set of all integers : , . Lastly, we denote by the set of all positive integers: , .   "
},
{
  "id": "d_cardinality",
  "level": "2",
  "url": "s_sets_tuples.html#d_cardinality",
  "type": "Definition",
  "number": "0.1.10",
  "title": "Cardinality of a set.",
  "body": " Cardinality of a set  cardinality of a set    the cardinality of the set    Let be a set. The cardinality of , denoted is defined as follows.   If is finite, then its cardinality is the number of distinct elements it contains, written .    If is infinite, then we say it has infinite cardinality , and write .      "
},
{
  "id": "d_tuple",
  "level": "2",
  "url": "s_sets_tuples.html#d_tuple",
  "type": "Definition",
  "number": "0.1.11",
  "title": "Tuples.",
  "body": " Tuples    tuple indexed by     -valued tuples indexed by    Let and be sets. An -valued tuple indexed by is a rule that assigns to each index  an element , denoted .  Given an -valued tuple , we call the index set , and for each index , we call the -th component (or coordinate , or entry , or term ) of . We call the set of values of the tuple .  The set of all -valued tuples indexed by is denoted : , .   "
},
{
  "id": "not_tuple_notation",
  "level": "2",
  "url": "s_sets_tuples.html#not_tuple_notation",
  "type": "Notation",
  "number": "0.1.12",
  "title": "Tuple notation.",
  "body": " Tuple notation  Different index sets give rise to different notational conventions for denoting tuples and sets of tuples .   When for some positive integer , we will write for , and will use any of the following notations for a tuple of : . In this case we call an -tuple with values in , and we call the length of the -tuple. Moreover, we use the following terminology for : a -tuple is a called a pair of elements of , a -tuple is called a triple of elements of .    When , we will write for , and will use any of the following notations for a tuple of : . In this context a tuple of is often called an infinite sequence of elements of .     "
},
{
  "id": "d_tuple_equality",
  "level": "2",
  "url": "s_sets_tuples.html#d_tuple_equality",
  "type": "Definition",
  "number": "0.1.13",
  "title": "Tuple equality.",
  "body": " Tuple equality   Given a set , two -valued tuples and are equal , denoted if the following two conditions hold.    .     for all .      "
},
{
  "id": "ss_tuples-7",
  "level": "2",
  "url": "s_sets_tuples.html#ss_tuples-7",
  "type": "Remark",
  "number": "0.1.14",
  "title": "Tuple equality.",
  "body": " Tuple equality  The filing system analogy for tuples might help you make sense of . For two filing systems of a certain collection to be equal, they should firstly have the same indexing set (this is the condition ); and secondly, to each index in our indexing set, they should assign the same object from our collection.  "
},
{
  "id": "eg_tuple_equality",
  "level": "2",
  "url": "s_sets_tuples.html#eg_tuple_equality",
  "type": "Example",
  "number": "0.1.15",
  "title": "Tuple equality.",
  "body": " Tuple equality   Decide whether the given -valued tuples are equal.    ,      ,      ,        In all cases we have , but for different reasons that illuminate the different nuances of .   Both tuples have the same index set in this case. Write and . Although we have and , since , we see that . Note that in this case we do not even have equality between the set of values of the two tuples. That is, .    Again, both tuples are indexed by . Furthermore, in this case the sets of values of the two tuples are equal. However, since the third coordinate of is not equal to the third coordinate of , we have .    In this case the two tuples fail to be equal due to their having different index sets. The index set of is , and the index set of is .      "
},
{
  "id": "rm_tuple_ordered",
  "level": "2",
  "url": "s_sets_tuples.html#rm_tuple_ordered",
  "type": "Remark",
  "number": "0.1.16",
  "title": "Ordered list.",
  "body": " Ordered list  Index sets of the form and are equipped with a natural choice of ordering inherited from the relation on . That is, we have . As a result, a tuple (or ) indexed by for one of these types of index sets can be thought of as an ordering of the underlying set. Indeed, in this setting we do not just speak of the -th element of the tuple , we further call the first element, the second element, . This is why tuples of the form or are often called ordered lists or ordered sequences .  We take care to add however, that since our general definition of tuples allows for arbitrary index sets , and since not every set has a natural choice of ordering, we should not in general think of tuples as ordered lists in this precise sense. Indeed, consider the somewhat peculiar index set . There is no natural ordering of the set , and so a tuple indexed by also should not be thought of as an ordered list. Indeed, instead of speaking of a first, second, or third element of the tuple , it really only makes sense to speak of the -th, -th, and -th element of the tuple!  "
},
{
  "id": "d_index_family_sets",
  "level": "2",
  "url": "s_sets_tuples.html#d_index_family_sets",
  "type": "Definition",
  "number": "0.1.17",
  "title": "Indexed family of sets.",
  "body": " Indexed family of sets   An indexed family of sets is a tuple , where is a set for all indices .   "
},
{
  "id": "d_union_intersect_arbitrary",
  "level": "2",
  "url": "s_sets_tuples.html#d_union_intersect_arbitrary",
  "type": "Definition",
  "number": "0.1.18",
  "title": "Arbitrary unions and intersections.",
  "body": " Arbitrary unions and intersections   Let be a set, and let be a family of sets with for all .   The union of the , denoted , is defined as .    The intersection of the , denoted , is defined as .      "
},
{
  "id": "d_cartesian_product",
  "level": "2",
  "url": "s_sets_tuples.html#d_cartesian_product",
  "type": "Definition",
  "number": "0.1.19",
  "title": "Cartesian product.",
  "body": " Cartesian product  Cartesian product    Cartesian product of the sets    Let be a set, and let be a family of subsets with for all . The Cartesian product  of the is defined as . In other words, the Cartesian product is the set of all -valued tuples whose -th coordinate is an element of for all .  In the special case where we write and , and we call the -fold Cartesian product of .   "
},
{
  "id": "s_functions",
  "level": "1",
  "url": "s_functions.html",
  "type": "Section",
  "number": "0.2",
  "title": "Functions",
  "body": " Functions   Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .      Consider the function . This function has domain and codomain equal to and maps an integer to its square.     Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function       Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .    As with sets and tuples, we are obliged to specify what we mean for two functions to be equal. The definition below makes clear how the the domain and codomain, as well as the rule that takes inputs to outputs, are all essential ingredients of a function.   Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .        Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .     Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   Injective  The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    Surjective  The function is surjective (or onto ) if for all , there is an such that : equivalently, .    Bijective  The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.        Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.     Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .     function invertible  function inverse  function identity  Identity and inverse functions   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .    Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.     The proof of this theorem is left as an example of proving if and only if statements. See .        Let . Find each set.                 is not one-to-one, you can not simply plug the endpoints of the interval into the function to get the endpoints of the answer. Instead, try graphing the function and shading on the -axis the input set. Then use the graph to see which -values you get out when you put those 's in. For instance, notice that . Because , you should have . Do you?           For each of the following functions, state whether they are one-to-one, onto, both or neither. Use the following key:                                   Consider the functions , , , , , and .  Which of these functions are inverses of each other?    and    and    and    and    and    and    and    and    No pairs of these functions are inverses of each other.     SOLUTION One way we can check which functions are inverses is to make sure they satisfy the identities and . This will show that and and and are inverses of each other, while the other pairs of functions are not. Let's consider and . The composition Also, Thus these are inverses of one another. We can similarly show that and are inverses of each other. However, the remaining pairs are not inverses. For example, if we consider and , we have Thus these functions are not inverses of each other.         "
},
{
  "id": "d_function",
  "level": "2",
  "url": "s_functions.html#d_function",
  "type": "Definition",
  "number": "0.2.1",
  "title": "Functions.",
  "body": " Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .   "
},
{
  "id": "s_functions-3",
  "level": "2",
  "url": "s_functions.html#s_functions-3",
  "type": "Example",
  "number": "0.2.2",
  "title": "",
  "body": "  Consider the function . This function has domain and codomain equal to and maps an integer to its square.   "
},
{
  "id": "s_functions-4",
  "level": "2",
  "url": "s_functions.html#s_functions-4",
  "type": "Example",
  "number": "0.2.3",
  "title": "Arithmetic operations as functions.",
  "body": " Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function    "
},
{
  "id": "rm_function_as_relation",
  "level": "2",
  "url": "s_functions.html#rm_function_as_relation",
  "type": "Remark",
  "number": "0.2.4",
  "title": "",
  "body": "  Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .   "
},
{
  "id": "d_function_equality",
  "level": "2",
  "url": "s_functions.html#d_function_equality",
  "type": "Definition",
  "number": "0.2.5",
  "title": "Function equality.",
  "body": " Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .      "
},
{
  "id": "d_image",
  "level": "2",
  "url": "s_functions.html#d_image",
  "type": "Definition",
  "number": "0.2.6",
  "title": "Image of a set.",
  "body": " Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .   "
},
{
  "id": "d_injective_surjective_bijective",
  "level": "2",
  "url": "s_functions.html#d_injective_surjective_bijective",
  "type": "Definition",
  "number": "0.2.7",
  "title": "Injective, surjective, bijective.",
  "body": " Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   Injective  The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    Surjective  The function is surjective (or onto ) if for all , there is an such that : equivalently, .    Bijective  The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.      "
},
{
  "id": "s_functions-10",
  "level": "2",
  "url": "s_functions.html#s_functions-10",
  "type": "Example",
  "number": "0.2.8",
  "title": "Role of domain and codomain in injectivity and surjectivity.",
  "body": " Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.   "
},
{
  "id": "d_function_composition",
  "level": "2",
  "url": "s_functions.html#d_function_composition",
  "type": "Definition",
  "number": "0.2.9",
  "title": "Function composition.",
  "body": " Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .   "
},
{
  "id": "d_invertible_function",
  "level": "2",
  "url": "s_functions.html#d_invertible_function",
  "type": "Definition",
  "number": "0.2.10",
  "title": "Identity and inverse functions.",
  "body": " function invertible  function inverse  function identity  Identity and inverse functions   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .  "
},
{
  "id": "th_invertible_bijective",
  "level": "2",
  "url": "s_functions.html#th_invertible_bijective",
  "type": "Theorem",
  "number": "0.2.11",
  "title": "Invertible is equivalent to bijective.",
  "body": " Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.   "
},
{
  "id": "s_functions-14",
  "level": "2",
  "url": "s_functions.html#s_functions-14",
  "type": "Proof",
  "number": "0.2.1",
  "title": "",
  "body": " The proof of this theorem is left as an example of proving if and only if statements. See .  "
},
{
  "id": "s_functions_ex-1",
  "level": "2",
  "url": "s_functions.html#s_functions_ex-1",
  "type": "Exercise",
  "number": "0.2.1",
  "title": "",
  "body": "    Let . Find each set.                 is not one-to-one, you can not simply plug the endpoints of the interval into the function to get the endpoints of the answer. Instead, try graphing the function and shading on the -axis the input set. Then use the graph to see which -values you get out when you put those 's in. For instance, notice that . Because , you should have . Do you?      "
},
{
  "id": "s_functions_ex-2",
  "level": "2",
  "url": "s_functions.html#s_functions_ex-2",
  "type": "Exercise",
  "number": "0.2.2",
  "title": "",
  "body": "    For each of the following functions, state whether they are one-to-one, onto, both or neither. Use the following key:                              "
},
{
  "id": "s_functions_ex-3",
  "level": "2",
  "url": "s_functions.html#s_functions_ex-3",
  "type": "Exercise",
  "number": "0.2.3",
  "title": "",
  "body": "    Consider the functions , , , , , and .  Which of these functions are inverses of each other?    and    and    and    and    and    and    and    and    No pairs of these functions are inverses of each other.     SOLUTION One way we can check which functions are inverses is to make sure they satisfy the identities and . This will show that and and and are inverses of each other, while the other pairs of functions are not. Let's consider and . The composition Also, Thus these are inverses of one another. We can similarly show that and are inverses of each other. However, the remaining pairs are not inverses. For example, if we consider and , we have Thus these functions are not inverses of each other.      "
},
{
  "id": "s_logic",
  "level": "1",
  "url": "s_logic.html",
  "type": "Section",
  "number": "0.3",
  "title": "Logic",
  "body": " Logic   When dealing with mathematical statements and arguments, we must pay close attention to logical structure. This section introduces both logical connectors and quantifiers, and carefully describes how to determine the truth values of propositions built from these operations.    Propositional logic  A proposition is a sentence that is either true or false. We build compound propositions from component propositions using logical operators (or logical connectors ); the truth value of the compound proposition is defined as a function of the truth values of the component propositions.   Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.         A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:       Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )      Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.      Predicate logic  Propositions like All humans are mortal and Every positive real number has a square-root are modeled in logic in the form For all , and For all , there exists an such that , where stands for the phrase is mortal and stands for the phrase is a square-root of . Observe that and on their own are not propositions; there is no truth value to is mortal or is a square-root of . Instead, we think of and as functions which return propositions when evaluated at a specific choice for , or for and . For example, evaluating at yields the proposition Aaron Greicius is mortal , which happens to be true at the time of writing. Similarly evaluating at yields the proposition is a square-root of 2 , which happens to be false. In logic and are called propositional functions (also called predicates ): functions whose outputs are propositions.  The propositions For all , and For all , there exists an such that are obtained from and by bounding them with a series of quantifiers ( , for all , there exists an ). The definition below allows us to assign truth values to such propositions.   Logical quantifiers   Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .    Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .       Truth depends on domain of discourse   Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.     Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.     Order of quantifiers matters   As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.     Negating quantifiers   Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.     The example below taken from calculus nicely illustrates how to negate a proposition that involves a sequence of quantifiers.   The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below (see ). We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!          Assign truth values to the propositions and so that the given proposition is false. Use T for true and F for false.   Answer: P: Q: R:    F    No correct answer specified    F            Determine the truth value of the following statements if the universe of discourse is the set of real numbers.                                Let be the statement \" has a cat\", let be the statement \" has a dog\" and let be the statement \" has a ferret\". Express each of the following statements in terms of , , and , quantifiers, and logical connectives. Let the universe of discourse consist of all students in your class. Put the appropriate letter next to the corresponding symbolic form.                   a) A student in your class has a cat, a dog, and a ferret.  b) All students in your class have a cat, a dog, or a ferret.  c) Some student in your class has a cat and a ferret but not a dog.  d) No student in this class has a cat, a dog, and a ferret.  e) For each of the three animals, cats, dogs, and ferrets, there is a student in your class who has one of these animals.            Let P(x) be the statement \"x is a duck\", let Q(x) be the statement \"x is one of my poultry\", let R(x) be the statement \"x is an officer\", and let S(x) be the statement \"x is willing to waltz\". Express each of the following statements in terms of P(x), Q(x), R(x) and S(x), quantifiers, and logical connectives. Let the universe of discourse consist of all living creatures. Put the appropriate letter next to the corresponding symbolic form.                   a) Some ducks are not willing to waltz.  b) No ducks are willing to waltz.  c) No officers ever decline to waltz.  d) All my poultry are ducks.  e) My poultry are not officers.            Determine whether the given proposition is true or false, for the universe of all real numbers. Use T for true and F for false.   Answer:   Answer:   Answer:   Answer:   Answer:    T    F    T    F    T            Suppose is an indexed family of sets. For each statement below, write the letter of the equivalent symbolic form.          for every                       "
},
{
  "id": "d_logical_ops",
  "level": "2",
  "url": "s_logic.html#d_logical_ops",
  "type": "Definition",
  "number": "0.3.1",
  "title": "Logical operators.",
  "body": " Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.      "
},
{
  "id": "rm_truth_tables",
  "level": "2",
  "url": "s_logic.html#rm_truth_tables",
  "type": "Remark",
  "number": "0.3.2",
  "title": "",
  "body": "  A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:    "
},
{
  "id": "ss_propositional_calculus-5",
  "level": "2",
  "url": "s_logic.html#ss_propositional_calculus-5",
  "type": "Example",
  "number": "0.3.3",
  "title": "",
  "body": "  Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )   "
},
{
  "id": "rm_logic_vs_vernacular",
  "level": "2",
  "url": "s_logic.html#rm_logic_vs_vernacular",
  "type": "Remark",
  "number": "0.3.4",
  "title": "",
  "body": "  Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.   "
},
{
  "id": "d_quantifiers",
  "level": "2",
  "url": "s_logic.html#d_quantifiers",
  "type": "Definition",
  "number": "0.3.5",
  "title": "Logical quantifiers.",
  "body": " Logical quantifiers   Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .    Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .     "
},
{
  "id": "rm_domain_discourse",
  "level": "2",
  "url": "s_logic.html#rm_domain_discourse",
  "type": "Remark",
  "number": "0.3.6",
  "title": "Truth depends on domain of discourse.",
  "body": " Truth depends on domain of discourse   Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.   "
},
{
  "id": "ex_model_quant",
  "level": "2",
  "url": "s_logic.html#ex_model_quant",
  "type": "Example",
  "number": "0.3.7",
  "title": "Modeling “Every positive number has a square-root”.",
  "body": " Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.   "
},
{
  "id": "warning_order_quantifiers",
  "level": "2",
  "url": "s_logic.html#warning_order_quantifiers",
  "type": "Warning",
  "number": "0.3.8",
  "title": "Order of quantifiers matters.",
  "body": " Order of quantifiers matters   As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.   "
},
{
  "id": "rm_negating_quantifiers",
  "level": "2",
  "url": "s_logic.html#rm_negating_quantifiers",
  "type": "Remark",
  "number": "0.3.9",
  "title": "Negating quantifiers.",
  "body": " Negating quantifiers   Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.    "
},
{
  "id": "ex_limit_doesnt_exist",
  "level": "2",
  "url": "s_logic.html#ex_limit_doesnt_exist",
  "type": "Example",
  "number": "0.3.10",
  "title": "The limit does not exist.",
  "body": " The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below (see ). We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!   "
},
{
  "id": "s_logic_ex-1",
  "level": "2",
  "url": "s_logic.html#s_logic_ex-1",
  "type": "Exercise",
  "number": "0.3.3.1",
  "title": "",
  "body": "    Assign truth values to the propositions and so that the given proposition is false. Use T for true and F for false.   Answer: P: Q: R:    F    No correct answer specified    F       "
},
{
  "id": "s_logic_ex-2",
  "level": "2",
  "url": "s_logic.html#s_logic_ex-2",
  "type": "Exercise",
  "number": "0.3.3.2",
  "title": "",
  "body": "    Determine the truth value of the following statements if the universe of discourse is the set of real numbers.                           "
},
{
  "id": "s_logic_ex-3",
  "level": "2",
  "url": "s_logic.html#s_logic_ex-3",
  "type": "Exercise",
  "number": "0.3.3.3",
  "title": "",
  "body": "    Let be the statement \" has a cat\", let be the statement \" has a dog\" and let be the statement \" has a ferret\". Express each of the following statements in terms of , , and , quantifiers, and logical connectives. Let the universe of discourse consist of all students in your class. Put the appropriate letter next to the corresponding symbolic form.                   a) A student in your class has a cat, a dog, and a ferret.  b) All students in your class have a cat, a dog, or a ferret.  c) Some student in your class has a cat and a ferret but not a dog.  d) No student in this class has a cat, a dog, and a ferret.  e) For each of the three animals, cats, dogs, and ferrets, there is a student in your class who has one of these animals.       "
},
{
  "id": "s_logic_ex-4",
  "level": "2",
  "url": "s_logic.html#s_logic_ex-4",
  "type": "Exercise",
  "number": "0.3.3.4",
  "title": "",
  "body": "    Let P(x) be the statement \"x is a duck\", let Q(x) be the statement \"x is one of my poultry\", let R(x) be the statement \"x is an officer\", and let S(x) be the statement \"x is willing to waltz\". Express each of the following statements in terms of P(x), Q(x), R(x) and S(x), quantifiers, and logical connectives. Let the universe of discourse consist of all living creatures. Put the appropriate letter next to the corresponding symbolic form.                   a) Some ducks are not willing to waltz.  b) No ducks are willing to waltz.  c) No officers ever decline to waltz.  d) All my poultry are ducks.  e) My poultry are not officers.       "
},
{
  "id": "s_logic_ex-5",
  "level": "2",
  "url": "s_logic.html#s_logic_ex-5",
  "type": "Exercise",
  "number": "0.3.3.5",
  "title": "",
  "body": "    Determine whether the given proposition is true or false, for the universe of all real numbers. Use T for true and F for false.   Answer:   Answer:   Answer:   Answer:   Answer:    T    F    T    F    T       "
},
{
  "id": "s_logic_ex-6",
  "level": "2",
  "url": "s_logic.html#s_logic_ex-6",
  "type": "Exercise",
  "number": "0.3.3.6",
  "title": "",
  "body": "    Suppose is an indexed family of sets. For each statement below, write the letter of the equivalent symbolic form.          for every                    "
},
{
  "id": "s_proof_technique",
  "level": "1",
  "url": "s_proof_technique.html",
  "type": "Section",
  "number": "0.4",
  "title": "Proof techniques",
  "body": " Proof techniques  Proof writing is an art, a technical skill you will hone and refine throughout your career; and like any art, proof writing has many tricks of the trade. We gather a few here in the form of a collection of general proof techniques. Part of mastering these techniques involves understanding the circumstances where they can be of use. When selecting a technique, we are guided in part by the logical structure and particular mathematical content of the proposition under consideration. The proof techniques below are organized under this guiding principle.   Logical structure   Implication  By the only time an implication is false is when is true and is false. Accordingly, the direct approach to proving an implication is to assume is true, and use this assumption to prove is true.  A common indirect approach used to prove an implication is to prove its contrapositive  , which is logically equivalent to the original implication. In this case we assume is not true, and show is not true. (Exercise: use a truth table to show the contrapositive is logically equivalent to the original implication.)    The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )      Disjunction  Again, using , to directly show a disjunction is true, we need only show one the two component propositions is true.  Alternatively, we can prove either of the implications or , both of which are logically equivalent to . (Exercise: use a truth table to show these three propositions are indeed equivalent!)    Equivalence  The equivalence is logically equivalent to the conjunction . Accordingly, the standard way of proving is to prove the two implications and separately. (Exercise: use a truth table to show these propositions are indeed equivalent!)    Chains of implications\/equivalences  The relation implies is transitive: , if and , then . Similarly, the relation is equivalent to is transitive. This allows us to prove an implication or equivalence via a chain of implications or chain of equivalences . When writing up a proof using this technique, use a vertically aligned format like the example below, treating one implication or equivalence per line, and adding a brief justification to the right: . It is also possible to build an argument as a hybrid chain of equivalences and implications. In this case the chain is only as strong as its weakest link. For example, a chain of the form only shows that . Indeed, we will have if and only if the intervening implication is in fact an equivalence ( , the arrow goes both ways).    It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.    The example below provides the proof that a function is invertible if and only if it is bijective ( ). The proof nicely illustrates some of the different techniques used for proving implications and equivalences. Additionally, it is a nice example of how to separate out cases of the argument into clearly distinguished steps.   Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .        Proof by contradiction  The technique of proof by contradiction (or reductio ad absurdum ) proves a proposition by (a) assuming the negation is true, and then (b) using this assumption to derive a proposition known to be false. The choice of falsehood is completely up to the person providing the proof. However, in order for the proof to be convincing, it should be clear, either logically or because of theory assumed to be known, that is indeed false.   Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .      Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.       Equalities   Equality is not as simple as it may seem. In general an equality is a mathematical statement of the form . Here LHS and RHS stand for left- and right-hand side, respectively. What exactly such an equality means depends very much on what kind of mathematical objects the two sides of the equation are: , numbers, sets, functions, etc. Below we discuss equality for objects of a particular type in detail. (See and .) In all settings, the notion of equality will be transitive : , if and , then . We use transitivity implicitly when proving an equality via a chain of equalities as described below.    Chain of equalities Often to prove an equality as in we proceed in a sequence of intervening bite-size equalities, each of which is easy for the reader to digest. As with chains of implications\/equivalences, we present such an argument in a vertically aligned format, with brief justifications to the right: .  Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.      Basic set properties   Set inclusion  Let and be sets. By , to prove we must show that for all elements we have . This requires proving the implication above for a general element , and we may use any of the techniques described in and to do so.    Set equality  Let and be sets. To prove directly using we must show that for all elements we have . To prove this universal equivalence, we must give an argument for the equivalence that holds for a general element .  Alternatively, you can prove by proving the two set inclusions and separately. This is equivalent to proving the two implications and separately.     Basic function properties   Function equality  According to , in order to show functions and are equal we must   show that and have the same domain and codomain , and    show that for all .   The universal quantifier for all of item (ii) gives this subtask the feel of proving an identity : we must show that equality holds for all  . By the same token, to show (ii) does not hold, it suffices to show that for some .    Injective, surjective, bijective  Let be a function.   Injectivity  To show is injective, we must show that the implication holds for all . Frequently it will be convenient to prove the (universal) contrapositive: for all .  Similarly, to show is not injective, we simply have to find satisfying and .    Surjectivity  To prove is surjective, we must prove the universal quantification: . To prove is not surjective, we must prove the negation of this proposition ( ): , there exists a for which there is no with .    Bijectivity  To show is bijective directly using , we must show that is injective and surjective. This is equivalent to showing that for there exists a unique element such that .  Alternatively, using we can show that is bijective by providing an inverse function .      mathematical induction  Mathematical induction    Mathematical induction is a technique for proving universal quantifications of the form , where is a fixed starting integer, called the base , and is a predicate defined on the integers. If the setting makes clear that ranges over integers, we write such propositions using logical notation as .    mathematical induction weak induction  Proof by induction  Suppose is a predicate of integers. To prove the proposition by induction (sometimes called weak induction ), we proceed in two steps.   Base step  Show that is true.    Induction step  Prove the universal implication . In practice, if proving the implication directly, this means we assume is true (the induction hypothesis ), and use this assumption to show is true.    Step 0 of induction   When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.     Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.    So why does proof by induction work? In other words, why is it a valid proof technique? Imagine our propositions as forming an infinite ladder that we wish to ascend. Cautious climbers that we are, we only will step on a rung if we know the corresponding proposition is true. Knowing is true (the base step) allows us to step onto the first rung. The universal implication (induction step) gives us a rule that says if rung is secure (i.e., true), then so is rung . Since this rule holds for all rungs (i.e., for all ), we can safely ascend the entire ladder!  Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions          mathematical induction strong induction  Proof by strong induction  Suppose is a predicate of integers. To prove the proposition by strong induction , we proceed in two steps.   Base step:  Show that is true.    Strong induction step  Prove the universal implication . This technique is called strong induction, as now the induction hypothesis is much stronger: to prove this implication directly we assume is true for all (not just as in weak induction), and use this assumption to show is true.   In fact, strong induction is, logically speaking, no stronger than weak induction. Both techniques apply to propositions of the form , and you are free to choose which form of induction to use each time. We typically use strong induction out of convenience, when the nature of the predicate is such that we can prove most elegantly by assuming , as opposed to just . The following example is characteristic in this regard.   Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.      "
},
{
  "id": "sss_implication-4",
  "level": "2",
  "url": "s_proof_technique.html#sss_implication-4",
  "type": "Warning",
  "number": "0.4.1",
  "title": "",
  "body": "  The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )   "
},
{
  "id": "sss_logical_chains-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_logical_chains-3",
  "type": "Warning",
  "number": "0.4.2",
  "title": "",
  "body": "  It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.   "
},
{
  "id": "ex_invertible_bijective",
  "level": "2",
  "url": "s_proof_technique.html#ex_invertible_bijective",
  "type": "Example",
  "number": "0.4.3",
  "title": "Proof: invertible is equivalent to bijective.",
  "body": " Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .     "
},
{
  "id": "ex_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#ex_proof_by_contradiction",
  "type": "Example",
  "number": "0.4.4",
  "title": "Proof by contradiction.",
  "body": " Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .   "
},
{
  "id": "rm_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#rm_proof_by_contradiction",
  "type": "Remark",
  "number": "0.4.5",
  "title": "",
  "body": "  Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.   "
},
{
  "id": "sss_chain_equalities-4",
  "level": "2",
  "url": "s_proof_technique.html#sss_chain_equalities-4",
  "type": "Warning",
  "number": "0.4.6",
  "title": "",
  "body": " Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.  "
},
{
  "id": "ss_mathematical_induction-3-1",
  "level": "2",
  "url": "s_proof_technique.html#ss_mathematical_induction-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base "
},
{
  "id": "sss_weak_induction-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction weak induction "
},
{
  "id": "sss_weak_induction-5-2",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction hypothesis "
},
{
  "id": "rm_induction",
  "level": "2",
  "url": "s_proof_technique.html#rm_induction",
  "type": "Remark",
  "number": "0.4.7",
  "title": "“Step 0” of induction.",
  "body": " Step 0 of induction   When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.   "
},
{
  "id": "eg_weak_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_weak_induction",
  "type": "Example",
  "number": "0.4.8",
  "title": "Weak induction.",
  "body": " Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.   "
},
{
  "id": "fig_proof_induction",
  "level": "2",
  "url": "s_proof_technique.html#fig_proof_induction",
  "type": "Figure",
  "number": "0.4.9",
  "title": "Mathematical induction as ladder of propositions",
  "body": " Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions     "
},
{
  "id": "sss_strong_induction-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_strong_induction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "strong induction "
},
{
  "id": "eg_strong_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_strong_induction",
  "type": "Example",
  "number": "0.4.10",
  "title": "Strong induction.",
  "body": " Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.   "
},
{
  "id": "s_complex_numbers",
  "level": "1",
  "url": "s_complex_numbers.html",
  "type": "Section",
  "number": "0.5",
  "title": "Complex numbers",
  "body": " Complex numbers  In this section we begin with a brief treatment of the complex numbers . As mentioned below, you should think of the complex numbers as an additional link in our chain of number systems . One major advantage of working with is that any polynomial factors as a product of linear terms over ( ). This fact, along with a review of basic definitions and properties of polynomials, will be taken up in . This section is meant mainly as a reference, and as such all theorems will be stated without proof.   Definition of   The complex numbers constitute a number system built by taking the set of all pairs of real numbers and defining operations on these pairs that we call complex addition and complex multiplication .    complex numbers  complex numbers real part  complex numbers imaginary part    the complex numbers     real part of complex number     imaginary part of complex number   Complex numbers    complex numbers    The set of complex numbers is defined as the set of all pairs of real numbers: , . Given a complex number , its first entry is called the real part of , denoted , and its second entry is called the imaginary part of , denoted .     Henceforth we will primarily denote a complex number as . Since and , you can think of the notation as a decomposition of as a sum of its real and imaginary components. In what follows we give actual arithmetic meaning to the symbols and used in this notation, but first and foremost should simply be thought of as an alternative manner of denoting the pair .  Additionally we will adopt the following notational conventions: , , , , and .    Complex equality   When moving to the notation do not lose sight of the essential nature of complex numbers as pairs of real numbers. This is important, for example, for understanding what it means for complex numbers and to be equal. According to the general definition of equality for tuples ( ), we have .     complex numbers addition  complex numbers multiplication  Complex addition and multiplication   We define addition and multiplication operations on as follows. Let and , where .    Complex addition  The sum  is the complex number defined as .    Complex multiplication  The product  is the complex number defined as .        Let and . We have     Our first theorem indicates that complex addition and multiplication behave in much the same way as real addition and multiplication. A number system that satisfies the properties of is called a field . You should think of the field properties as guaranteeing that we can perform arithmetic in the complex numbers (or any fied) essentially as we do with real numbers.   Basic properties of complex arithmetic     Commutativity  For all we have .    Associativity  For all we have .    Distributivity  For all we have .    Additive identity  The complex number satisfies for all . We call the additive identity of .    Additive inverse  For all the element satisfies . We call the additive inverse of .    Multiplicative identity  The complex number satisfies for all . We call the multiplicative identity of .    Multiplicative inverse  For all nonzero complex numbers ( , of ), the complex number satisfies . The complex number , also denoted , is called the multiplicative inverse of .        Let . According to , the multiplicative inverse of is . Let's check that : .     Complex numbers as extension of the reals   From now on we identify the real numbers as the set of complex numbers of the form , where : equivalently, the set of complex numbers satisfying . Under this identification can be thought of as a subset of , and we may add one more link to the chain of subsets given in : . Furthermore, it is easy to verify that the various operations on agree with their real counterparts when restricting to : , . This allows us to think of the complex numbers as a larger number system containing the reals, whose arithmetic operations are extensions of real number operations.      Absolute value and complex conjugation   We end our introduction to the complex numbers with two further operations: the absolute value and complex conjugation . is an indication of their usefulness, and articulates how they interact with the other operations on .    complex numbers modulus  complex numbers absolute value  complex numbers conjugation  Absolute value and complex conjugation   Let be a complex number. The absolute value (or modulus ) of , denoted , is defined as . The complex conjugate of , denoted , is defined as .     Properties of conjugation and modulus   The following properties hold for all .    .    .     .     .     (if ).     .        Let . Observe that and , as claimed in .          Rewrite the following expression into the form of a+b :         By definition, , so we have .  To get rid of in the denominator, we use the difference of squares formula:   The full solution is:             Let . Calculate the following:  (a)     ,  (b)     ,  (c)     .                                          Evaluate the following expressions and write them in the form .   .   .   .   .   .                                     Calculate:  (a)  ,  (b)  ,  (c)  ,  (d)  .                             "
},
{
  "id": "d_complex_numbers",
  "level": "2",
  "url": "s_complex_numbers.html#d_complex_numbers",
  "type": "Definition",
  "number": "0.5.1",
  "title": "Complex numbers.",
  "body": " complex numbers  complex numbers real part  complex numbers imaginary part    the complex numbers     real part of complex number     imaginary part of complex number   Complex numbers    complex numbers    The set of complex numbers is defined as the set of all pairs of real numbers: , . Given a complex number , its first entry is called the real part of , denoted , and its second entry is called the imaginary part of , denoted .   "
},
{
  "id": "ss_complex_definition-4",
  "level": "2",
  "url": "s_complex_numbers.html#ss_complex_definition-4",
  "type": "Notation",
  "number": "0.5.2",
  "title": "",
  "body": " Henceforth we will primarily denote a complex number as . Since and , you can think of the notation as a decomposition of as a sum of its real and imaginary components. In what follows we give actual arithmetic meaning to the symbols and used in this notation, but first and foremost should simply be thought of as an alternative manner of denoting the pair .  Additionally we will adopt the following notational conventions: , , , , and .  "
},
{
  "id": "rm_complex_equality",
  "level": "2",
  "url": "s_complex_numbers.html#rm_complex_equality",
  "type": "Remark",
  "number": "0.5.3",
  "title": "Complex equality.",
  "body": " Complex equality   When moving to the notation do not lose sight of the essential nature of complex numbers as pairs of real numbers. This is important, for example, for understanding what it means for complex numbers and to be equal. According to the general definition of equality for tuples ( ), we have .   "
},
{
  "id": "d_complex_arithmetic",
  "level": "2",
  "url": "s_complex_numbers.html#d_complex_arithmetic",
  "type": "Definition",
  "number": "0.5.4",
  "title": "Complex addition and multiplication.",
  "body": " complex numbers addition  complex numbers multiplication  Complex addition and multiplication   We define addition and multiplication operations on as follows. Let and , where .    Complex addition  The sum  is the complex number defined as .    Complex multiplication  The product  is the complex number defined as .     "
},
{
  "id": "eg_complex_add_mult",
  "level": "2",
  "url": "s_complex_numbers.html#eg_complex_add_mult",
  "type": "Example",
  "number": "0.5.5",
  "title": "",
  "body": "  Let and . We have    "
},
{
  "id": "th_complex_arithmetic_basic",
  "level": "2",
  "url": "s_complex_numbers.html#th_complex_arithmetic_basic",
  "type": "Theorem",
  "number": "0.5.6",
  "title": "Basic properties of complex arithmetic.",
  "body": " Basic properties of complex arithmetic     Commutativity  For all we have .    Associativity  For all we have .    Distributivity  For all we have .    Additive identity  The complex number satisfies for all . We call the additive identity of .    Additive inverse  For all the element satisfies . We call the additive inverse of .    Multiplicative identity  The complex number satisfies for all . We call the multiplicative identity of .    Multiplicative inverse  For all nonzero complex numbers ( , of ), the complex number satisfies . The complex number , also denoted , is called the multiplicative inverse of .     "
},
{
  "id": "ss_complex_definition-10",
  "level": "2",
  "url": "s_complex_numbers.html#ss_complex_definition-10",
  "type": "Example",
  "number": "0.5.7",
  "title": "",
  "body": "  Let . According to , the multiplicative inverse of is . Let's check that : .   "
},
{
  "id": "rm_complex_reals",
  "level": "2",
  "url": "s_complex_numbers.html#rm_complex_reals",
  "type": "Remark",
  "number": "0.5.8",
  "title": "Complex numbers as extension of the reals.",
  "body": " Complex numbers as extension of the reals   From now on we identify the real numbers as the set of complex numbers of the form , where : equivalently, the set of complex numbers satisfying . Under this identification can be thought of as a subset of , and we may add one more link to the chain of subsets given in : . Furthermore, it is easy to verify that the various operations on agree with their real counterparts when restricting to : , . This allows us to think of the complex numbers as a larger number system containing the reals, whose arithmetic operations are extensions of real number operations.   "
},
{
  "id": "d_complex_absolute_conjugation",
  "level": "2",
  "url": "s_complex_numbers.html#d_complex_absolute_conjugation",
  "type": "Definition",
  "number": "0.5.9",
  "title": "Absolute value and complex conjugation.",
  "body": " complex numbers modulus  complex numbers absolute value  complex numbers conjugation  Absolute value and complex conjugation   Let be a complex number. The absolute value (or modulus ) of , denoted , is defined as . The complex conjugate of , denoted , is defined as .   "
},
{
  "id": "th_complex_conjugation_modulus",
  "level": "2",
  "url": "s_complex_numbers.html#th_complex_conjugation_modulus",
  "type": "Theorem",
  "number": "0.5.10",
  "title": "Properties of conjugation and modulus.",
  "body": " Properties of conjugation and modulus   The following properties hold for all .    .    .     .     .     (if ).     .     "
},
{
  "id": "ss_complex_conjugation-5",
  "level": "2",
  "url": "s_complex_numbers.html#ss_complex_conjugation-5",
  "type": "Example",
  "number": "0.5.11",
  "title": "",
  "body": "  Let . Observe that and , as claimed in .   "
},
{
  "id": "s_complex_numbers_ex-1",
  "level": "2",
  "url": "s_complex_numbers.html#s_complex_numbers_ex-1",
  "type": "Exercise",
  "number": "0.5.3.1",
  "title": "",
  "body": "    Rewrite the following expression into the form of a+b :         By definition, , so we have .  To get rid of in the denominator, we use the difference of squares formula:   The full solution is:        "
},
{
  "id": "s_complex_numbers_ex-2",
  "level": "2",
  "url": "s_complex_numbers.html#s_complex_numbers_ex-2",
  "type": "Exercise",
  "number": "0.5.3.2",
  "title": "",
  "body": "    Let . Calculate the following:  (a)     ,  (b)     ,  (c)     .                                     "
},
{
  "id": "s_complex_numbers_ex-3",
  "level": "2",
  "url": "s_complex_numbers.html#s_complex_numbers_ex-3",
  "type": "Exercise",
  "number": "0.5.3.3",
  "title": "",
  "body": "    Evaluate the following expressions and write them in the form .   .   .   .   .   .                                "
},
{
  "id": "s_complex_numbers_ex-4",
  "level": "2",
  "url": "s_complex_numbers.html#s_complex_numbers_ex-4",
  "type": "Exercise",
  "number": "0.5.3.4",
  "title": "",
  "body": "    Calculate:  (a)  ,  (b)  ,  (c)  ,  (d)  .                           "
},
{
  "id": "s_polynomials",
  "level": "1",
  "url": "s_polynomials.html",
  "type": "Section",
  "number": "0.6",
  "title": "Polynomials",
  "body": " Polynomials  Polynomials will play an important role in our treatment of linear algebra both as tools for studying linear transformations. We gather here some basic definitions and properties of polynomials. Although we will primarily be concerned with polynomials with real coefficients in this course, it is convenient to develop the theory over the complex numbers. As with , all theorems will be stated without proof.   Basic definitions   Polynomials  polynomial expression  polynomial degree  polynomial coefficient  polynomial leading coefficient  polynomial leading term  polynomial constant term   Assume a polynomial on is a function of the form , where for all , and there is a positive integer such that for all . Equivalently, is a function of the form , where for all .  We call the -th term of , and the -th coefficient ; is called the constant term of . Furthermore, if in the expression we have , then is called the leading term of , and its leading coefficient . Lastly, a root of is a an element such that .     Polynomials as finite power series  As we see in the expression we have essentially defined a polynomial to be a function with a finite power series representation. This may seem somewhat overkill in terms of the level of abstraction, but makes for simpler exposition in the discussion below. In any case you are always welcome to revert to the more familiar characterization in .    Basic properties of polynomials   Assume .   If and are polynomials on , then so are , , and for any .    If is a polynomial on and is a root of , then there is a polynomial on such that .    If is a nonzero polynomial on , then has at most distinct roots.       An important consequence of statement ( ) of is that the coefficients of a polynomial are uniquely determined by , as long as the domain is infinite . This furnishes us with a useful criterion for polynomial equality based on comparing coefficients.   Polynomial equality via coefficients   Assume is an infinite subset of . Let and be polynomials on of the form .   We have if and only if for all .    In particular, is the zero function on if and only if for all .         Degree of a polynomial   It follows from that if is an infinite subset of and is a nonzero polynomial on , then has a unique expression of the form , where . The integer appearing in this expression is an important invariant of called its degree .    polynomial degree  Degree of a polynomial    degree of polynomial    Assume is an infinite subset of and let be a nonzero polynomial on of the form with . The integer in this expression is called the degree of , denoted .  We call the polynomial  linear if , quadratic if , and cubic if .    Defining the degree of the zero function to be may seem a little peculiar. Do not be disturbed! You can think of this as a convention that allows for clean statements of theorems like the following.   Basic properties of degree   Assume is an infinite subset of . Let and be polynomials on .     .     .        Factoring polynomials   Statement (2) of makes a connection between roots of a polynomial and factorization; and the expression can be thought of as a first step in writing the polynomial as a product of linear polynomials. The existence of roots depends on the given domain of the function. Indeed, there are plenty of polynomials that have no roots whatsoever: for example, from the quadratic formula we know that any quadratic polynomial satisfying has no real roots. According to the fundamental theorem of algebra , the situation over is vastly different: not only does every polymonial have a root in , we can factor it completely as a product of linear polynomials. This is one of the main incentives for introducing the complex numbers as a number system.    Fundamental theorem of algebra   Any polynomial , thought of as a function from to itself, can be factored into linear terms as , where the are (not necessarily distinct) complex numbers.          Find a degree 3 polynomial whose coefficient of equal to 1. The zeros of this polynomial are , , and . Simplify your answer so that it has only real numbers as coefficients.  Your answer is .                 The polynomial has as a root. Give all of the roots of in a comma-separated list, including the given one.  Roots:              "
},
{
  "id": "d_polynomials",
  "level": "2",
  "url": "s_polynomials.html#d_polynomials",
  "type": "Definition",
  "number": "0.6.1",
  "title": "Polynomials.",
  "body": " Polynomials  polynomial expression  polynomial degree  polynomial coefficient  polynomial leading coefficient  polynomial leading term  polynomial constant term   Assume a polynomial on is a function of the form , where for all , and there is a positive integer such that for all . Equivalently, is a function of the form , where for all .  We call the -th term of , and the -th coefficient ; is called the constant term of . Furthermore, if in the expression we have , then is called the leading term of , and its leading coefficient . Lastly, a root of is a an element such that .   "
},
{
  "id": "rm_polynomials_powerseries",
  "level": "2",
  "url": "s_polynomials.html#rm_polynomials_powerseries",
  "type": "Remark",
  "number": "0.6.2",
  "title": "Polynomials as finite power series.",
  "body": " Polynomials as finite power series  As we see in the expression we have essentially defined a polynomial to be a function with a finite power series representation. This may seem somewhat overkill in terms of the level of abstraction, but makes for simpler exposition in the discussion below. In any case you are always welcome to revert to the more familiar characterization in .  "
},
{
  "id": "th_poly_basic",
  "level": "2",
  "url": "s_polynomials.html#th_poly_basic",
  "type": "Theorem",
  "number": "0.6.3",
  "title": "Basic properties of polynomials.",
  "body": " Basic properties of polynomials   Assume .   If and are polynomials on , then so are , , and for any .    If is a polynomial on and is a root of , then there is a polynomial on such that .    If is a nonzero polynomial on , then has at most distinct roots.      "
},
{
  "id": "cor_poly_equality",
  "level": "2",
  "url": "s_polynomials.html#cor_poly_equality",
  "type": "Corollary",
  "number": "0.6.4",
  "title": "Polynomial equality via coefficients.",
  "body": " Polynomial equality via coefficients   Assume is an infinite subset of . Let and be polynomials on of the form .   We have if and only if for all .    In particular, is the zero function on if and only if for all .      "
},
{
  "id": "d_poly_degree",
  "level": "2",
  "url": "s_polynomials.html#d_poly_degree",
  "type": "Definition",
  "number": "0.6.5",
  "title": "Degree of a polynomial.",
  "body": " polynomial degree  Degree of a polynomial    degree of polynomial    Assume is an infinite subset of and let be a nonzero polynomial on of the form with . The integer in this expression is called the degree of , denoted .  We call the polynomial  linear if , quadratic if , and cubic if .   "
},
{
  "id": "th_poly_degree",
  "level": "2",
  "url": "s_polynomials.html#th_poly_degree",
  "type": "Theorem",
  "number": "0.6.6",
  "title": "Basic properties of degree.",
  "body": " Basic properties of degree   Assume is an infinite subset of . Let and be polynomials on .     .     .     "
},
{
  "id": "th_fund_alg",
  "level": "2",
  "url": "s_polynomials.html#th_fund_alg",
  "type": "Theorem",
  "number": "0.6.7",
  "title": "Fundamental theorem of algebra.",
  "body": " Fundamental theorem of algebra   Any polynomial , thought of as a function from to itself, can be factored into linear terms as , where the are (not necessarily distinct) complex numbers.   "
},
{
  "id": "s_polynomials_ex-1",
  "level": "2",
  "url": "s_polynomials.html#s_polynomials_ex-1",
  "type": "Exercise",
  "number": "0.6.4.1",
  "title": "",
  "body": "    Find a degree 3 polynomial whose coefficient of equal to 1. The zeros of this polynomial are , , and . Simplify your answer so that it has only real numbers as coefficients.  Your answer is .            "
},
{
  "id": "s_polynomials_ex-2",
  "level": "2",
  "url": "s_polynomials.html#s_polynomials_ex-2",
  "type": "Exercise",
  "number": "0.6.4.2",
  "title": "",
  "body": "    The polynomial has as a root. Give all of the roots of in a comma-separated list, including the given one.  Roots:            "
},
{
  "id": "s_Rn_and_friends",
  "level": "1",
  "url": "s_Rn_and_friends.html",
  "type": "Section",
  "number": "1.1",
  "title": "Real-valued tuples",
  "body": " Real-valued tuples     Define the notion of a real-valued tuple indexed by an arbitrary set and the set of all such tuples.    Define the basic vector operations on and discuss their important properties.    Visualize points, vectors, and vector operations in and .      Real-valued tuples  Most multivariable courses begin by introducing , the set of all pairs of real numbers, and , the set of all triples of real numbers. Using set notation: . In that setting it is easy to motivate the discussion by interpreting pairs and triples as specifying locations or directions in 2- or 3-space. This both imbues the mathematical objects involved with some familiar concrete meaning and allows us to visualize related constructions as geometric objects in 2- or 3-space.  With the public's ever-growing familiarity with data collection and analysis, however, there is no need to rely as heavily on spatial intuition for motivation. A marketing analyst studying the sales of a certain product might be interested in knowing the height, weight, age, and yearly income of the product's consumers. Thus for each consumer, the marketer collects a quadruple of real numbers, where is the height of the consumer, the weight, the age, and the yearly income. And the aggregate data the marketer collects is a subset of , the set of all quadruples of real numbers.  To give a slightly less simplistic example, consider an internet search engine that, given a search query, assigns to each of its different indexed webpages a real number score in the interval measuring the page's relevance to the given query. For each query entered, the search engine produces a -tuple , where is the score of the first webpage in its index, is the score of the second page in its index, . (Note: as defined more formally in , an -tuple is just a list or sequence of length .)  The point here is that for the modern student of mathematics there should be nothing too forbidding or abstract about -tuples of real numbers of arbitrary length , nor the set of all such tuples. In this course, we will take things one small step further by considering real-valued tuples indexed by an arbitrary index set  . Let us dispense first with the formal definition, then make sense of it.   Real-valued tuple    set of real-valued -tuples    Let be a nonempty set. A real-valued tuple indexed by (or real-valued -tuple ) is a rule that assigns to each index  an element , and is denoted .  Given an -tuple , we call the index set , and for each index , we call the -th component (or coordinate , or entry , or term ) of . We call the set of values of the tuple .  The set of all real-valued -tuples is denoted : , .     All this talk of rules and assignments may remind you of the general definition of a function. Good for you! In truth a tuple is simply a function that assigns to each index a real number . However, since the goal here is to have you understand tuples as a straightforward generalization of pairs and triples, we decided to conceal this function connection somewhat.    More general tuples  You find a more general discussion of tuples in . In this course, since we will primarily be focused on real-valued tuples, we will typically drop the real-valued , and just speak of -tuples.   Do not be intimidated by the formality of ! As a first step to coming to grips with it, let's see how can be understood as a particular example of our more general construction . For concreteness, we consider the case . To define a triple of , we need to specify the three coordinates , , and . This is equivalent to assigning to each of the indices  a real number . Thus a triple in is the same thing as a real-valued tuple indexed by the index set , and furthermore we have . This reasoning generalizes easily to lists of real numbers of arbitrary length : such a list is the same thing as a real-valued tuple indexed by the the set that assigns to each index a real number . This allows us to define for arbitrary as , where . We now make this official and take the opportunity to introduce some special notation and terminology for this particular type of tuple.   Real-valued -tuples    set of real-valued -tuples    Let be a positive integer, and let . A real-valued tuple indexed by is called an -tuple and we call the length of the tuple. We will use any of the following notations for tuples indexed by : . Furthermore, the set of all -tuples is denoted : , .    Notationally, we see already how our more general framework can simplify things for us. When treating , which corresponds to the index set , it is much easier to write or than or even . More generally, once we have set in stone that , the compact notation absorbs the complexity that comes along with dealing with tuples of arbitrary length .  The real power of , however, lies in the fact that our index set can be taken to be anything we like. For example consider the index set consisting of all positive integers: , . In this case, to specify a tuple in we must provide a list of real numbers . Sound familiar? This is just an infinite sequence of real numbers!   Infinite sequences of real numbers    set of all infinite sequences    Let . A real-valued tuple indexed by is called an infinite sequence . We will use any of the following notations for tuples indexed by : . Furthermore, the set of all infinite sequences is denoted : , .     Infinite sequences   For each defined sequence , expand in the form including at least the first four terms.                   , where            .     .     .     .       The last two examples illustrate how our tuple definition nicely unifies the notions of finite and infinite sequences into a more general framework. The two types of tuples are not so very different in nature, and this can be understood as a result of the similarity between their index sets. Indeed the finite index set is what is called an initial segment of the the infinite index set . Furthermore, in both cases, the natural ordering of transfers to an ordering of the elements of a tuple in both these cases, allowing us to speak of its first entry, second entry, . This illustrates how any additional structure of the index set can be used to induce some structure on our tuples . As a result, when modelling different types of data as tuples, a careful choice of index set can capture particular features of the data we study.  For example, suppose we are interested in comparing the first and second half performances of football players and so record for each player and game the number of goals, assists, and tackles made in the first and second halves of the game. A typical datum collected for a given player and game might be displayed in a table as follows.   First and second half performance datum    Goals Assists Tackles    First half 1 0 9    Second half 0 2 4     We can model such a datum as a tuple where , and for : equivalently, is the entry in the -th row and -th column of the table version of our datum displayed as above. Note the big difference between the index set in this example, as contrasted with our previous two examples. Now our indices themselves consist of pairs which reflects the fact that the six components of our datum depend on two independent features: the type of action (goal, assist, or tackle), and the half in which it was made. This brings us to a third tuple type that will play an outsized role in this course: matrices . As defined below, a matrix is just an -tuple where the index set is of the special form . As with -tuples and infinite sequences, we will introduce special notational conventions for this particular type of tuple.   Real-valued matrices   Let and be positive integers, and let . A real-valued tuple indexed by is called a real matrix , and the integers and are called the dimensions of the matrix. To distinguish matrices from -tuples, we will use a bracket notation and write . When naming matrices we will favor capital letters ( , ) and will often display a matrix as a rectangular array as , where the entry in the -th row and -th column of the array is . The set of all real matrices is denoted : , .     Matrices   Display the given matrix as a rectangular array.    , , where      , , , where      , ,      , ,            is in this case (two rows, two columns), and we have .     is in this case (two rows, three columns), and we have .     is in this case (one row, three columns), and we have .     is in this case (three rows, one column), and we have .       The last two examples in reveal a subtlety about the notion of equality between tuples. Consider the tuples . The three are clearly quite similar, each consisting essentially of three entries equal to , and yet visibly no two are quite the same: the third is enclosed in parentheses while the first two use brackets; the first is displayed as a single row while the second is displayed as a single column. Of course, that is not a very rigorous way of distinguishing between tuples. Unpacking our notational conventions allows to more precisely locate the difference between the three tuples: namely, they have three very different index sets. Following the order of the tuples displayed above, the corresponding index sets are . This illustrates the fact that equality between two tuples and depends not just on the entry values and , but also on the index sets and . This detail is made explicit in the general definition of tuple equality given in . Below we repeat this definition for the special case of real-valued tuples.   Tuple equality   Two real-valued tuples and are equal , denoted if the following two conditions hold.    .     for all .   In plain English, two tuples are equal if they have the same index set and assign the same values to each element of the index set.    It is worth further unpacking this definition in the special cases of -tuples and matrices.   Equality of -tuples   The -tuple is equal to the -tuple if and only if and for all .    Unpacking the the notational conventions, we have , where and , where . By , the two tuples are equal if and only if and for all . The first condition is equivalent to , and the second condition is equivalent to for all .     Equality of matrices   The matrix is equal to the matrix if and only if    and ;     for all and .   In other words, two matrices are equal if and only if they have the same dimensions and the same entries in each position.    Unpacking the the notational conventions, we have , where and , where . By , the two matrices are equal if and only if and for all . The first condition is equivalent to and , and the second condition is equivalent to for all and .      Vector operations on  Returning for a moment to the hypothetical multivariable calculus class you took long ago, you may remember that after introducing the sets and , the next thing you did was to define the notions of vector addition and scalar multiplication . For these are defined as . Notice that the two operations are defined component-wise . In plain English, the sum of two triples in is the triple whose -th component is the sum of the two -th components; and to scale a triple by the scalar , we multiply (or scale) each component by . This component-wise nature of the two operations allows us to easily generalize them to the more general setting of for arbitrary index sets .   Vector operations of   Let be a nonempty set. We will call the operations below the standard vector operations on .   Vector addition on  Given elements -tuples and , we define their vector sum  as . The operation is called vector addition .    Scalar multiplication on  Given an -tuple and a real number , the -tuple defined as is called the scalar multiple of by . The operation is called scalar multiplication .        Vector operations input\/output  It is a good habit, when dealing with a variety of types of mathematical operations, to give a qualitative summary of what their inputs and outputs are. For example, vector addition in takes as input a pair of -tuples, and , and returns as output the -tuple . By contrast, scalar multiplication in is a sort of hybrid operation that takes as input a real number and -tuple and returns as output a new -tuple .   Taking the three special types of index sets discussed in , we see that gives rise to naturally defined operations on -tuples, infinite sequences, and matrices. We summarize each in turn below.   -tuples  Let . In this case we have and the two vector operations are given by .    Infinite sequences  Let . In this case we have and the two vector operations are given by .    Matrices  Let . In this case we have and the two vector operations are given by .   The foregoing is another example of the advantage of working with the general notion of -tuples. Taking our single definition of vector operations on , by choosing different types of index sets, we immediately derive a notion of vector addition and scalar multiplication on the set of -tuples , the set of infinite sequences , and the set of matrices .  In we recall the basic spatial interpretation of the vector operations in the context of and . In the meantime, we consider a few explicit examples.   Tuple vector operations      Let and . Compute .    Consider the infinite sequences and . Compute and .    Let and . Compute .          We have .    We have , and .    We have .       In we introduce SageMath (or Sage , for short), an open-source computer algebra system. Our exploration of Sage will be a rather casual one, making use of interactive cells called Sage cells . These cells can be evaluated by clicking the Evaluate (Sage) button, or by typing shift+return . You can experiment by editing the code in these cells and then evaluating.   Vector operations: and   To create an -tuple in Sage, use the vector() command. The input should be a sequence of numbers enclosed in brackets.   You can make use of sequence routines to create special types of -tuples.   If you prefer the two outputs above to not be listed as a pair, you can use the print() command in sequence. (This is a peculiarity of interactive SageCells, not Sage itself.)   The standard vector operations of are implemented using an intuitive syntax in Sage.   Once a vector v is created in Sage, various properties of the vector can be computed using the v.foo() syntax. For example, the command v.length() returns the length of the vector v .   Matrices are created in Sage using the matrix() command, and are entered as a list of lists, where the -th list of this list represents the -th row of the matrix, considered as a rectangular array.      Vector spaces  We now jump to the heart of the matter, which is that , together with its standard vector operations, constitutes an example of an important type of mathematical object called a vector space .   Vector space  vector space definition  vector space zero vector  vector space vector inverse  vector space vector   A real vector space is a set together with two operations , called respectively vector addition and scalar multiplication , that satify the following vector space axioms .   Vector addition is commutative   for all .    Vector addition is associative   for all .    Zero vector  There is an element such that for all , we have . We call the zero vector of .    Vector inverses  For all , there is another element satisfying . We call the vector inverse of .    Distribution over vector addition   for all and .    Distribution over scalar addition   for all and .    Scalar multiplication is associative   for all and all .    Scalar multiplication identity   for all .   We call elements of a vector space vectors and the elements of  scalars .     (Real) vector spaces  It is possible to define the notion of a vector space over number systems other than the real numbers . For example, by replacing every instance of in with , we get the definition of a complex vector space. For our purposes, we will deal almost exclusively with real vector spaces, and accordingly will not use the real modifier unless absolutely necessary.   It is essential to understand the very general nature of . The definition does not specify what the underlying set of the vector space is, or what the vector operations are. Rather, it allows for any set and any choice of operations to be called a vector space, as long as our choices satisfy the vector space axioms. In this sense, the act of establishing a vector space consists of first making a sequence of declarations ( vector addition and scalar multiplication are defined like so , this element is the zero vector of our space , we define the vector inverse of elements like so ), and then verifying that these various choices satisfy the vector axioms. provides a useful model for carrying out these steps.   Verifying vector space axioms   To introduce and verify a vector space, proceed as follows.   Make explicit the underlying set of the vector space.    Define the operations that serve as vector addition and scalar multiplication.    Identify the zero vector of and verify that it satisfies the identity of Axiom .    Define the rule that assigns to each vector its vector inverse and verify that this definition of satisfies the identity of Axiom .    Verify that the vector operations satisfy Axioms i-ii and v-viii.       Note how highlights the special role played by Axioms . These are sometimes called the existential axioms , as they posit the existence of certain special elements of : a vector satisfying the identity of Axiom that is denoted , and for all vectors , a vector inverse denoted that satisfies the identity of Axiom . Note also that our choice of vector inverses in Axiom depends on our choice of the zero vector in Axiom , as this appears in the defining identity of Axiom .  Let's apply to verify that , together with the vector operations defined in , constitutes a vector space.    Fix a positive integer .   The set , together with the vector addition and scalar multiplication operations defined in , is a vector space.    The zero vector of the vector space is the -tuple consisting of all zeros: , we have .    Given a vector , its vector inverse is : , we have .       The statement itself of the theorem has already taken care of some of the steps of : it has identified the underlying set and proposed vector operations (steps (1)-(2)), and it has identified the zero vector and the rule for computing vector inverses (steps (3)-(4)). It remains to show that the proposed zero vectors and vector inverses satisfy the identities of Axioms , and that Axioms (i)-(ii) and (v)-(viii) are satisfied. We first consider Axioms .   Axiom iii  We claim that satisfies the identity of Axiom , and thus that . Indeed, for all we have , as desired.    Axiom iv  We claim that given any , the vector satisfies the identity of Axiom , and thus that . Indeed, we have , as desired.   As for the remaining axioms, we will verify Axioms ii and vi, and leave the rest as an exercise. As you see below, the desired identities here all boil down to a familiar property of real number arithmetic: , commutativity of real number addition, real number distributivity, etc. In what follows, will denote arbitrary elements of , and will denote arbitrary elements of .   Axiom ii  We have .    Axiom vi  For all and , we have .     It should be noted that there are (infinitely) many different ways to define a vector space structure . From now on, however, we will assume without further comment that the vector operations on are the standard ones given in . With respect to these standard operations the zero vector and vector inverses of are as described in . We make this official below.   Vector space terminology for   Fix a positive integer . When treating as a vector space, -tuples are called -vectors .The zero vector of is defined as . Given an -vector , its vector inverse is the vector defined as .    Observe that for all -vectors we have . In other words, the vector inverse of is equal to the scalar multiple . As it turns out, this is not particular to the specific vector space , but rather a general property of all vector spaces, as we see in . In order to prove this and other properties for a general vector space , our arguments must rely only on the vector space axioms. In particular, we cannot assume that along with its standard vector operations, as this is but one example of a vector space.   Basic vector space properties   Let be a vector space.    for all .     for all .     for all .    For all , if , then or . Using logical shorthand: .       We prove (1), leaving (2)-(4) as an exercise.  First observe that , since .  By Axiom (vi) we have . Thus .  Now add , the vector inverse of , to both sides of the last equation: .  Now simplify this equation step by step using the axioms: .    Again, we emphasize that is just one example of a vector space: albeit, the example that we will mostly focus on. For good measure we include a few more examples of vector spaces here. (And we will also meet a few other examples later.) We begin with the simplest of all vector spaces, the zero space . Elementary as this example is, it serves well to illustrate the axiomatic nature of .   Zero space   Let , a set containing exactly one element. There is a unique vector space structure that can be given to , defined as follows.   Vector operations  Vector addition on is defined as ; scalar multiplication on is defined as for all .    Zero vector  The zero vector of is : , .    Vector inverses  The vector inverse of is : , .   Since with respect to this vector space structure, we have . We call a zero space .     makes two claims: that the given operations make into a vector space, and that this is the only way to make into a vector space. As with all claims in mathematics, these need to be proved, but as you will see, the proof is a very light affair.   Proof for  Since only has one item, there is no choice for what vector addition and scalar multiplciation can be. They must be defined in the manner given in . Similarly, we must have and , as once again, is the only element of ! This shows that there can be at most one way of giving a vector space structure.  It is now easy to see that these choices do indeed satisfy the vector space axioms. That satisfies the identity of Axiom defining the zero vector follows from the fact that for all we have (since ), and thus . Thus is the zero vector of the space.  Similarly, to show all elements of have vector inverses amounts to showing that has a vector inverse, since this is the only element of . It is claimed that ( , is its own vector inverse), which follows from the fact that . Lastly, the identities of Axioms i-ii and v-viii in this setting all reduce to trivial statements of the form . Consider Axiom vii, for example. For all , we have , in which case and . Thus for all .  We leave verification of the rest of the axioms to the reader.   We also include two exotic examples of vector spaces. We leave verification of the vector space axioms for these spaces as an exercise. (See and .)   Vector space of infinite sequences   Define to be the set of all infinite sequences: , . Vector addition and scalar multiplication of sequences is defined term-wise , exactly as with . In other words, given sequences and , and scalar , we define . In case you prefer the expanded notation for infinite sequences, we have: . The set together with these operations constitutes the vector space of infinite real sequences .    See .     Vector space of positive reals    vector space of positive real numbers    Define to be the set of all positive real numbers: , . Define vector addition on to be real number multiplication, and define scalar multiplication on to be real number exponentiation: , given vectors and in , and scalar , we define . Note: we have introduced new notation for our vector operations to help distinguish them from familiar real number arithmetic operations.  The set together with these operations constitutes the vector space of positive reals .    See .    Before returning to , we introduce another important notion from general vector spaces: linear combinations. As simple as the idea of a linear combination is, you will see that it plays a crucial role in many concepts to come.   Linear combination   Let be a vector space, and let be a collection of vectors of . A linear combination of the is a vector expression of the form , where for all . The scalars appearing in are called the coefficients of the linear combination. The linear combination is trivial if for all , and nontrivial if for some .  A vector is a linear combination of the if we have for some choice of scalars .     Linear combination   Let . Show that every vector in is a linear combination of the .    Given any vector , we have .     Linear combination   Express as a nontrivial linear combination of and .    Since clearly , we have . This is not the only nontrivial linear combination yielding . In fact we have for any scalar (including ).    It is natural to want to rewrite a linear combination of the form as . But of course this expression doesn't quite make sense. What we are missing is the vector difference operation.   Vector difference   Let be a vector space. Given vectors , we define their difference  as .      Visualizing  We will only explicitly visualize (or graph) elements of for and . However, these special cases bring to light an important point-vector duality in how we conceive of -tuples that carries over into higher values of . Fix for now. We will sometimes conceive of a triple as a point , in which case we will use capital letters to denote the triple ( , ), and will represent the point visually with respect to a coordinate system as the point in -space reached by starting at the origin and moving a directed distance units in the -direction, units in the -direction and units in the -direction.   Point visualization of triple   Point visualization of triple. Made with GeoGebra .   Alternatively, when conceiving of a triple as a vector , we will use lowercase bold letters to denote it ( , or ), and represent it visually as a directed line segment ( , an arrow). In more detail, given the 3-vector , we choose an initial point  and represent as the directed line segment that starts at and ends at the point , the terminal point of . Note that in this manner we get infinitely-many different graphical representations of , one for each choice of starting point . Although these are technically different arrows (they have different starting points), we consider them to be equal as vectors . You can think of each particular choice of arrow-representation as an instance or incarnation of the vector . When the initial point of our arrow representation is chosen to be the origin , we have , where . We call the position vector of the point .   Vector visualization of triple   Vector visualization of triple . Drag to change the vector . Drag to change the initial point of . Made with GeoGebra .   The representation of vectors as arrows gives rise to the so-called tip-to-tail interpretation of vector addition. Let and . Starting with an initial point , we can represent as , where , and , where . But then we have , or alternatively, . In other words, if we choose our arrow representations so that the terminal point (the tip) of is placed at the initial point (the tail) of , then is represented by the arrow whose initial point is , and whose terminal point is reached by first traveling along , and then traveling along .   Tip-to-tail visualization of vector addition   Tip-to-tail visualization of vector addition. Made with GeoGebra .   The tip-to-tail visualization of vector addition gives rise to a similar conceptualization of vector difference. Performing a little vector algebra on the definition , we see that . Using tip-to-tail terminology, this means if we represent and , then is the arrow that starts at the tip of and ends at the tip of . We thus have a tip-to-tip description of vector difference.   Tip-to-tip visualization of vector difference   Tip-to-tip visualization of vector difference. Made with GeoGebra .   Next consider scalar multiplication. Given a vector and a scalar , the scalar multiple can be represented as an arrow that starts at and points along the line containing . As we will see in the next section, the length of the resulting arrow is multiplied by the factor , resulting in a stretched arrow if and a shrunk arrow if . Furthermore, if , then the arrow representing points in the same direction as ; if , it points in the opposite direction.   Tip-to-tail visualization of vector addition   Visualization of scalar multiplication. Drag point labeled to change scalar. Made with GeoGebra .     "
},
{
  "id": "s_Rn_and_friends-2",
  "level": "2",
  "url": "s_Rn_and_friends.html#s_Rn_and_friends-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "   Define the notion of a real-valued tuple indexed by an arbitrary set and the set of all such tuples.    Define the basic vector operations on and discuss their important properties.    Visualize points, vectors, and vector operations in and .    "
},
{
  "id": "d_tuple_real",
  "level": "2",
  "url": "s_Rn_and_friends.html#d_tuple_real",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Real-valued tuple.",
  "body": " Real-valued tuple    set of real-valued -tuples    Let be a nonempty set. A real-valued tuple indexed by (or real-valued -tuple ) is a rule that assigns to each index  an element , and is denoted .  Given an -tuple , we call the index set , and for each index , we call the -th component (or coordinate , or entry , or term ) of . We call the set of values of the tuple .  The set of all real-valued -tuples is denoted : , .   "
},
{
  "id": "ss_R-valued_tuples-8",
  "level": "2",
  "url": "s_Rn_and_friends.html#ss_R-valued_tuples-8",
  "type": "Remark",
  "number": "1.1.2",
  "title": "More general tuples.",
  "body": " More general tuples  You find a more general discussion of tuples in . In this course, since we will primarily be focused on real-valued tuples, we will typically drop the real-valued , and just speak of -tuples.  "
},
{
  "id": "d_ntuples",
  "level": "2",
  "url": "s_Rn_and_friends.html#d_ntuples",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Real-valued <span class=\"process-math\">\\(n\\)<\/span>-tuples.",
  "body": " Real-valued -tuples    set of real-valued -tuples    Let be a positive integer, and let . A real-valued tuple indexed by is called an -tuple and we call the length of the tuple. We will use any of the following notations for tuples indexed by : . Furthermore, the set of all -tuples is denoted : , .   "
},
{
  "id": "d_infinite_sequence",
  "level": "2",
  "url": "s_Rn_and_friends.html#d_infinite_sequence",
  "type": "Definition",
  "number": "1.1.4",
  "title": "Infinite sequences of real numbers.",
  "body": " Infinite sequences of real numbers    set of all infinite sequences    Let . A real-valued tuple indexed by is called an infinite sequence . We will use any of the following notations for tuples indexed by : . Furthermore, the set of all infinite sequences is denoted : , .   "
},
{
  "id": "eg_infinite_sequence_build",
  "level": "2",
  "url": "s_Rn_and_friends.html#eg_infinite_sequence_build",
  "type": "Example",
  "number": "1.1.5",
  "title": "Infinite sequences.",
  "body": " Infinite sequences   For each defined sequence , expand in the form including at least the first four terms.                   , where            .     .     .     .      "
},
{
  "id": "ss_R-valued_tuples-17",
  "level": "2",
  "url": "s_Rn_and_friends.html#ss_R-valued_tuples-17",
  "type": "Table",
  "number": "1.1.6",
  "title": "First and second half performance datum",
  "body": " First and second half performance datum    Goals Assists Tackles    First half 1 0 9    Second half 0 2 4    "
},
{
  "id": "d_matrix",
  "level": "2",
  "url": "s_Rn_and_friends.html#d_matrix",
  "type": "Definition",
  "number": "1.1.7",
  "title": "Real-valued matrices.",
  "body": " Real-valued matrices   Let and be positive integers, and let . A real-valued tuple indexed by is called a real matrix , and the integers and are called the dimensions of the matrix. To distinguish matrices from -tuples, we will use a bracket notation and write . When naming matrices we will favor capital letters ( , ) and will often display a matrix as a rectangular array as , where the entry in the -th row and -th column of the array is . The set of all real matrices is denoted : , .   "
},
{
  "id": "eg_matrix_build",
  "level": "2",
  "url": "s_Rn_and_friends.html#eg_matrix_build",
  "type": "Example",
  "number": "1.1.8",
  "title": "Matrices.",
  "body": " Matrices   Display the given matrix as a rectangular array.    , , where      , , , where      , ,      , ,            is in this case (two rows, two columns), and we have .     is in this case (two rows, three columns), and we have .     is in this case (one row, three columns), and we have .     is in this case (three rows, one column), and we have .      "
},
{
  "id": "d_tuple_equality_real",
  "level": "2",
  "url": "s_Rn_and_friends.html#d_tuple_equality_real",
  "type": "Definition",
  "number": "1.1.9",
  "title": "Tuple equality.",
  "body": " Tuple equality   Two real-valued tuples and are equal , denoted if the following two conditions hold.    .     for all .   In plain English, two tuples are equal if they have the same index set and assign the same values to each element of the index set.   "
},
{
  "id": "prop_tuple_equality_sequences_matrices",
  "level": "2",
  "url": "s_Rn_and_friends.html#prop_tuple_equality_sequences_matrices",
  "type": "Proposition",
  "number": "1.1.10",
  "title": "Equality of <span class=\"process-math\">\\(n\\)<\/span>-tuples.",
  "body": " Equality of -tuples   The -tuple is equal to the -tuple if and only if and for all .    Unpacking the the notational conventions, we have , where and , where . By , the two tuples are equal if and only if and for all . The first condition is equivalent to , and the second condition is equivalent to for all .   "
},
{
  "id": "d_equality_matrix",
  "level": "2",
  "url": "s_Rn_and_friends.html#d_equality_matrix",
  "type": "Proposition",
  "number": "1.1.11",
  "title": "Equality of matrices.",
  "body": " Equality of matrices   The matrix is equal to the matrix if and only if    and ;     for all and .   In other words, two matrices are equal if and only if they have the same dimensions and the same entries in each position.    Unpacking the the notational conventions, we have , where and , where . By , the two matrices are equal if and only if and for all . The first condition is equivalent to and , and the second condition is equivalent to for all and .   "
},
{
  "id": "d_tuples_vec_ops",
  "level": "2",
  "url": "s_Rn_and_friends.html#d_tuples_vec_ops",
  "type": "Definition",
  "number": "1.1.12",
  "title": "Vector operations of <span class=\"process-math\">\\(\\R^I\\)<\/span>.",
  "body": " Vector operations of   Let be a nonempty set. We will call the operations below the standard vector operations on .   Vector addition on  Given elements -tuples and , we define their vector sum  as . The operation is called vector addition .    Scalar multiplication on  Given an -tuple and a real number , the -tuple defined as is called the scalar multiple of by . The operation is called scalar multiplication .      "
},
{
  "id": "ss_tuples_vector_ops-4",
  "level": "2",
  "url": "s_Rn_and_friends.html#ss_tuples_vector_ops-4",
  "type": "Remark",
  "number": "1.1.13",
  "title": "Vector operations input\/output.",
  "body": " Vector operations input\/output  It is a good habit, when dealing with a variety of types of mathematical operations, to give a qualitative summary of what their inputs and outputs are. For example, vector addition in takes as input a pair of -tuples, and , and returns as output the -tuple . By contrast, scalar multiplication in is a sort of hybrid operation that takes as input a real number and -tuple and returns as output a new -tuple .  "
},
{
  "id": "eg_tuple_vector_ops",
  "level": "2",
  "url": "s_Rn_and_friends.html#eg_tuple_vector_ops",
  "type": "Example",
  "number": "1.1.14",
  "title": "Tuple vector operations.",
  "body": " Tuple vector operations      Let and . Compute .    Consider the infinite sequences and . Compute and .    Let and . Compute .          We have .    We have , and .    We have .      "
},
{
  "id": "sage_vec_ops",
  "level": "2",
  "url": "s_Rn_and_friends.html#sage_vec_ops",
  "type": "Sage example",
  "number": "1",
  "title": "Vector operations: <span class=\"process-math\">\\(\\R^n\\)<\/span> and <span class=\"process-math\">\\(\\ML_{m\\times n}(\\R)\\)<\/span>.",
  "body": " Vector operations: and   To create an -tuple in Sage, use the vector() command. The input should be a sequence of numbers enclosed in brackets.   You can make use of sequence routines to create special types of -tuples.   If you prefer the two outputs above to not be listed as a pair, you can use the print() command in sequence. (This is a peculiarity of interactive SageCells, not Sage itself.)   The standard vector operations of are implemented using an intuitive syntax in Sage.   Once a vector v is created in Sage, various properties of the vector can be computed using the v.foo() syntax. For example, the command v.length() returns the length of the vector v .   Matrices are created in Sage using the matrix() command, and are entered as a list of lists, where the -th list of this list represents the -th row of the matrix, considered as a rectangular array.   "
},
{
  "id": "d_vector_space",
  "level": "2",
  "url": "s_Rn_and_friends.html#d_vector_space",
  "type": "Definition",
  "number": "1.1.15",
  "title": "Vector space.",
  "body": " Vector space  vector space definition  vector space zero vector  vector space vector inverse  vector space vector   A real vector space is a set together with two operations , called respectively vector addition and scalar multiplication , that satify the following vector space axioms .   Vector addition is commutative   for all .    Vector addition is associative   for all .    Zero vector  There is an element such that for all , we have . We call the zero vector of .    Vector inverses  For all , there is another element satisfying . We call the vector inverse of .    Distribution over vector addition   for all and .    Distribution over scalar addition   for all and .    Scalar multiplication is associative   for all and all .    Scalar multiplication identity   for all .   We call elements of a vector space vectors and the elements of  scalars .   "
},
{
  "id": "rm_vectorspace_real",
  "level": "2",
  "url": "s_Rn_and_friends.html#rm_vectorspace_real",
  "type": "Remark",
  "number": "1.1.16",
  "title": "(Real) vector spaces.",
  "body": " (Real) vector spaces  It is possible to define the notion of a vector space over number systems other than the real numbers . For example, by replacing every instance of in with , we get the definition of a complex vector space. For our purposes, we will deal almost exclusively with real vector spaces, and accordingly will not use the real modifier unless absolutely necessary.  "
},
{
  "id": "proc_vector_space",
  "level": "2",
  "url": "s_Rn_and_friends.html#proc_vector_space",
  "type": "Procedure",
  "number": "1.1.17",
  "title": "Verifying vector space axioms.",
  "body": " Verifying vector space axioms   To introduce and verify a vector space, proceed as follows.   Make explicit the underlying set of the vector space.    Define the operations that serve as vector addition and scalar multiplication.    Identify the zero vector of and verify that it satisfies the identity of Axiom .    Define the rule that assigns to each vector its vector inverse and verify that this definition of satisfies the identity of Axiom .    Verify that the vector operations satisfy Axioms i-ii and v-viii.      "
},
{
  "id": "th_Rn_vector_space",
  "level": "2",
  "url": "s_Rn_and_friends.html#th_Rn_vector_space",
  "type": "Theorem",
  "number": "1.1.18",
  "title": "",
  "body": "  Fix a positive integer .   The set , together with the vector addition and scalar multiplication operations defined in , is a vector space.    The zero vector of the vector space is the -tuple consisting of all zeros: , we have .    Given a vector , its vector inverse is : , we have .       The statement itself of the theorem has already taken care of some of the steps of : it has identified the underlying set and proposed vector operations (steps (1)-(2)), and it has identified the zero vector and the rule for computing vector inverses (steps (3)-(4)). It remains to show that the proposed zero vectors and vector inverses satisfy the identities of Axioms , and that Axioms (i)-(ii) and (v)-(viii) are satisfied. We first consider Axioms .   Axiom iii  We claim that satisfies the identity of Axiom , and thus that . Indeed, for all we have , as desired.    Axiom iv  We claim that given any , the vector satisfies the identity of Axiom , and thus that . Indeed, we have , as desired.   As for the remaining axioms, we will verify Axioms ii and vi, and leave the rest as an exercise. As you see below, the desired identities here all boil down to a familiar property of real number arithmetic: , commutativity of real number addition, real number distributivity, etc. In what follows, will denote arbitrary elements of , and will denote arbitrary elements of .   Axiom ii  We have .    Axiom vi  For all and , we have .    "
},
{
  "id": "d_Rn_vector_space",
  "level": "2",
  "url": "s_Rn_and_friends.html#d_Rn_vector_space",
  "type": "Definition",
  "number": "1.1.19",
  "title": "Vector space terminology for <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Vector space terminology for   Fix a positive integer . When treating as a vector space, -tuples are called -vectors .The zero vector of is defined as . Given an -vector , its vector inverse is the vector defined as .   "
},
{
  "id": "th_vectorspace_props",
  "level": "2",
  "url": "s_Rn_and_friends.html#th_vectorspace_props",
  "type": "Theorem",
  "number": "1.1.20",
  "title": "Basic vector space properties.",
  "body": " Basic vector space properties   Let be a vector space.    for all .     for all .     for all .    For all , if , then or . Using logical shorthand: .       We prove (1), leaving (2)-(4) as an exercise.  First observe that , since .  By Axiom (vi) we have . Thus .  Now add , the vector inverse of , to both sides of the last equation: .  Now simplify this equation step by step using the axioms: .   "
},
{
  "id": "d_zero_space",
  "level": "2",
  "url": "s_Rn_and_friends.html#d_zero_space",
  "type": "Definition",
  "number": "1.1.21",
  "title": "Zero space.",
  "body": " Zero space   Let , a set containing exactly one element. There is a unique vector space structure that can be given to , defined as follows.   Vector operations  Vector addition on is defined as ; scalar multiplication on is defined as for all .    Zero vector  The zero vector of is : , .    Vector inverses  The vector inverse of is : , .   Since with respect to this vector space structure, we have . We call a zero space .   "
},
{
  "id": "ss_vec_spaces-17",
  "level": "2",
  "url": "s_Rn_and_friends.html#ss_vec_spaces-17",
  "type": "Proof",
  "number": "1.1.3.1",
  "title": "Proof for Definition 1.1.21.",
  "body": " Proof for  Since only has one item, there is no choice for what vector addition and scalar multiplciation can be. They must be defined in the manner given in . Similarly, we must have and , as once again, is the only element of ! This shows that there can be at most one way of giving a vector space structure.  It is now easy to see that these choices do indeed satisfy the vector space axioms. That satisfies the identity of Axiom defining the zero vector follows from the fact that for all we have (since ), and thus . Thus is the zero vector of the space.  Similarly, to show all elements of have vector inverses amounts to showing that has a vector inverse, since this is the only element of . It is claimed that ( , is its own vector inverse), which follows from the fact that . Lastly, the identities of Axioms i-ii and v-viii in this setting all reduce to trivial statements of the form . Consider Axiom vii, for example. For all , we have , in which case and . Thus for all .  We leave verification of the rest of the axioms to the reader.  "
},
{
  "id": "eg_infinite_sequences",
  "level": "2",
  "url": "s_Rn_and_friends.html#eg_infinite_sequences",
  "type": "Example",
  "number": "1.1.22",
  "title": "Vector space of infinite sequences.",
  "body": " Vector space of infinite sequences   Define to be the set of all infinite sequences: , . Vector addition and scalar multiplication of sequences is defined term-wise , exactly as with . In other words, given sequences and , and scalar , we define . In case you prefer the expanded notation for infinite sequences, we have: . The set together with these operations constitutes the vector space of infinite real sequences .    See .   "
},
{
  "id": "eg_positive_reals",
  "level": "2",
  "url": "s_Rn_and_friends.html#eg_positive_reals",
  "type": "Example",
  "number": "1.1.23",
  "title": "Vector space of positive reals.",
  "body": " Vector space of positive reals    vector space of positive real numbers    Define to be the set of all positive real numbers: , . Define vector addition on to be real number multiplication, and define scalar multiplication on to be real number exponentiation: , given vectors and in , and scalar , we define . Note: we have introduced new notation for our vector operations to help distinguish them from familiar real number arithmetic operations.  The set together with these operations constitutes the vector space of positive reals .    See .   "
},
{
  "id": "d_lin_comb",
  "level": "2",
  "url": "s_Rn_and_friends.html#d_lin_comb",
  "type": "Definition",
  "number": "1.1.24",
  "title": "Linear combination.",
  "body": " Linear combination   Let be a vector space, and let be a collection of vectors of . A linear combination of the is a vector expression of the form , where for all . The scalars appearing in are called the coefficients of the linear combination. The linear combination is trivial if for all , and nontrivial if for some .  A vector is a linear combination of the if we have for some choice of scalars .   "
},
{
  "id": "ss_vec_spaces-23",
  "level": "2",
  "url": "s_Rn_and_friends.html#ss_vec_spaces-23",
  "type": "Example",
  "number": "1.1.25",
  "title": "Linear combination.",
  "body": " Linear combination   Let . Show that every vector in is a linear combination of the .    Given any vector , we have .   "
},
{
  "id": "ss_vec_spaces-24",
  "level": "2",
  "url": "s_Rn_and_friends.html#ss_vec_spaces-24",
  "type": "Example",
  "number": "1.1.26",
  "title": "Linear combination.",
  "body": " Linear combination   Express as a nontrivial linear combination of and .    Since clearly , we have . This is not the only nontrivial linear combination yielding . In fact we have for any scalar (including ).   "
},
{
  "id": "d_vec_difference",
  "level": "2",
  "url": "s_Rn_and_friends.html#d_vec_difference",
  "type": "Definition",
  "number": "1.1.27",
  "title": "Vector difference.",
  "body": " Vector difference   Let be a vector space. Given vectors , we define their difference  as .   "
},
{
  "id": "fig_point",
  "level": "2",
  "url": "s_Rn_and_friends.html#fig_point",
  "type": "Figure",
  "number": "1.1.28",
  "title": "Point visualization of triple",
  "body": " Point visualization of triple   Point visualization of triple. Made with GeoGebra .  "
},
{
  "id": "ss_Rn_visual-4",
  "level": "2",
  "url": "s_Rn_and_friends.html#ss_Rn_visual-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial point terminal point position vector "
},
{
  "id": "fig_vec_vis",
  "level": "2",
  "url": "s_Rn_and_friends.html#fig_vec_vis",
  "type": "Figure",
  "number": "1.1.29",
  "title": "Vector visualization of triple",
  "body": " Vector visualization of triple   Vector visualization of triple . Drag to change the vector . Drag to change the initial point of . Made with GeoGebra .  "
},
{
  "id": "fig_tip_tail",
  "level": "2",
  "url": "s_Rn_and_friends.html#fig_tip_tail",
  "type": "Figure",
  "number": "1.1.30",
  "title": "Tip-to-tail visualization of vector addition",
  "body": " Tip-to-tail visualization of vector addition   Tip-to-tail visualization of vector addition. Made with GeoGebra .  "
},
{
  "id": "fig_tip_tip",
  "level": "2",
  "url": "s_Rn_and_friends.html#fig_tip_tip",
  "type": "Figure",
  "number": "1.1.31",
  "title": "Tip-to-tip visualization of vector difference",
  "body": " Tip-to-tip visualization of vector difference   Tip-to-tip visualization of vector difference. Made with GeoGebra .  "
},
{
  "id": "fig_scal_mult",
  "level": "2",
  "url": "s_Rn_and_friends.html#fig_scal_mult",
  "type": "Figure",
  "number": "1.1.32",
  "title": "Tip-to-tail visualization of vector addition",
  "body": " Tip-to-tail visualization of vector addition   Visualization of scalar multiplication. Drag point labeled to change scalar. Made with GeoGebra .  "
},
{
  "id": "s_systems",
  "level": "1",
  "url": "s_systems.html",
  "type": "Section",
  "number": "1.2",
  "title": "Systems of linear equations",
  "body": " Systems of linear equations   Computing and studying solutions to equations, and systems of equations , unquestionably plays an important role in mathematics; though we hasten to add that this is not all that mathematicians do! In this chapter we will develop an essentially complete theory of a particularly simple family of mathematical equations: namely, linear equations . This will serve as a somewhat indirect introduction to our study of linear algebra, as lurking below our parametric descriptions of solutions to linear systems lie vector space notions like subspace, span, and linear independence. Furthermore, we will introduce one of the most important computational tools of linear algebra: Gaussian elimination .    Systems of linear equations   Linear equations  linear equation   A linear expression in the unknowns (or variables) is an expression of the form , where are fixed real numbers.  A linear equation in the unknowns is an equation that can be simplified, using only addition and subtraction, to an equation of the form which we call its standard form . An equation in the unknowns is nonlinear if it cannot be simplified to the form using only addition and subtraction.  Given a linear equation with standard form , the equation is called homogeneous if , and nonhomogeneous if .     Linear and nonlinear equations      Consider . This is a linear equation in the unknowns . Its standard form is . Since the right-hand side is nonzero, we see that the equation is nonhomogeneous.    The equation is a nonlinear equation in the unknowns and .    The equation is nonlinear. Interestingly, however, the set of solutions to this equation is equal to the set of solutions to the linear equation . This illustrates that is concerned strictly with the form of an equation, and not with the solutions to that equation.       We next provide a precise definition of a solution of a linear equation. This definition will involve -tuples of real numbers.   Solutions to linear equations   A solution to a linear equation  is an -tuple of real numbers for which the variable assignment makes the equation true: , the tuple satisfies . We say  solves the equation in this case.    Given a linear equation , we will be interested in finding and describing the set of all of its solutions. As you may recall, a (nontrivial) linear equation in two unknowns defines a line in , and a (nontrivial) equation in three unknowns defines a plane in . These types of subsets (of and , respectively) have distinctive geometric properties that we will elucidate in coming sections. Generalizing this notion to an arbitrary number of unknowns leads to the notion of a hyperplane .   Hyperplane   A linear equation is nontrivial if for some . Given a nontrivial equation , the set of solutions is called a hyperplane in . We have the two following special cases, corresponding to and :   A hyperplane in is the set of solutions to a nontrivial equation , and is called a line .    A hyperplane in is the set of solutions to a nontrivial equation , and is called a plane .        Visualizing lines in  Let be a line: , is the solution to some nontrivial linear equation . Since the equation is nontrivial, we have or . If , we may put the equation in the form , in which case we recognize as the slope of and as the -intercept. If , then , and the equation can be solved as , which we recognize as the vertical line passing through the point .  It is easy to see that the equation defining is homogenous if and only if is a point on : , is defined by a homogeneous equation if and only if it passes through the origin.   Lines in   Lines in R2       Visualizing planes in  Let be a plane defined by the nontrivial equation . Later we will describe an approach to visualizing in terms of its normal vector  . For now we recall a more elementary approach. Namely, simply find by inspection three non-colinear points satisfying , sketch the triangle in they define, and then envision as the plane in containing this triangle. In practice we can find three such points by picking arbitrary values for two of the three variables, and solving for the third variable using .  For example, if is the plane with equation , we see easily that lie on , allowing us to produce the graph in .  As with lines, it is easy to see that the equation defining is homogeneous if and only if passes through the origin .   Using Sage to visualize via normal vector  Visualizing        Next we introduce linear systems , which are just collections of linear equations.   Systems of linear equations  linear system   A system of linear equations (or linear system ) is a set of linear equations. The linear system is homogeneous if each of its equations is homogeneous: , if for all .  A solution to the system is an -tuple that is a solution to each of the system's equations. We say  solves the system in this case.  A linear system is consistent if a solution to the system exists, and inconsistent otherwise.    When displaying a system of equations in the unknowns , we typically write each equation in standard form and align the corresponding terms of each equation into columns: A homogeneous system is thus typically written as:    Displaying linear systems  As indicated in , when displaying a system of equations in the unknowns , we typically write each individual equation in standard form and align the corresponding terms of each equation into columns. The presence of multiple equations and multiple unknowns necessitates the use of double-indexing for the coefficients appearing in the system. The following breakdown will hopefully help you orient yourself with respect to the double-indexing:   The appearing in and indicates the -th row in our displayed system, or equivalently, the -th equation.    The appearing in indicates the -th column in our displayed system, which is associated to the -th variable, for .       Solutions to elementary systems   For each system, compute the set of solutions.                 The first equation implies . Substituting for in the second equation, we would then have , a contradiction. Thus there are no solutions: i.e., is the empty set, denoted or .    The first equation implies . Making this substitution in the second equation yields , or . Thus is the unique solution, and .    The second equation is just twice the first. It follows that both equations have the exact same set of solutions, and so we need only find all solutions to . Note that we can set for any real number . Solving for in terms of we get for any , and thus , an infinite set!       The solutions to the the three linear systems of can be described qualitatively as follows: nonexistent, unique, and infinite. This turns out to be characteristic more generally of all linear systems. In other words, given a linear system , the set of solutions will take one of three qualitative forms:    : , there are no solutions and the system is inconsistent.     contains exactly one element: , there is a unique solution.     is infinite: , there are infinitely many solutions.   We will prove this in full rigor in . However, we get an inkling of why this should be true in the case of two or three unknowns, where we can put our geometric understanding to work. For example, consider a general system of equations in just two unknowns and : Assume for simplicity that each equation in the system is nontrivial, and thus that for each , the -th equation of this system defines a line . A solution of the system, being a solution of each equation , must lie on each of the lines . In other words, the set of solutions to the system is precisely the set of points lying in the common intersection of all of these lines. Thus our qualitative description of the set of solutions to this system amounts to the geometric fact that the intersection of any collection of lines in is either empty, contains a unique point, or is infinite. has you prove this geometric fact, as well as the analogous statement for systems of equations in three unknowns. For now we illustrate this by reexamining from a geometric point of view.   Solutions to elementary systems (again)   For each system in , use a geometric argument to determine how many solutions there are.    We proceed geometrically by observing that each equation in a given system defines a line, that a pair is a solution to the given equation if and only if it is a point on the corresponding line, and thus that a pair is a solution to both equations if and only if it is a point lying on both lines. Thus, geometrically speaking, the set of solutions to a given system is equal to the intersection of the two corresponding lines.   In this case the two lines and are parallel (and not equal to one another). It follows that their intersection is empty. We conclude that there are no solutions to the system.    In this case the two lines and are nonparallel. It follows that they intersect in a single point. We conclude that the system has a unique solution.    In this case the two equations and define the same line , and thus that their intersection is also equal to . The set of solutions to the system is then equal to the set of points of , which is infinite.         Row operations  In we were able to combine some simple logic and arithmetic to solve each system completely. Of course, things get more complicated as the number of equations and\/or unknowns in the system increases.  For example, consider the system Observe first that the triple is not a solution to the system; one easily checks that is satisfies the first and second equations, but not the third. Similarly, it is easy to verify that and are both solutions to the system. The question remains: How do we find all solutions to the linear system in a systematic way?   Notice the somewhat funny spacing in . This is in force in order to align the unknowns in separate columns. In general, when handed a linear system in the wild, your first step should be to write each equation in standard form, and make sure the unknowns are aligned vertically in this manner.    Some systems are easier to solve than others  Below you find two systems of three equations in three unknowns. The staircase pattern of allows us to solve easily by backwards substitution . In more detail:   Equation 3 in tells us that .    Now substitute into Equation 2 of and solve for to get .    Finally, substitute and into Equation 1 of and solve for to get . We conclude that is a solution to .    Furthermore, since at each step we had no choice in the matter ( must be equal to 2, then must be equal to 4, etc.), we see that in fact is the only solution to .   Our method for solving a more complicated system, like above, will be to transform it to a simpler system like .   Key point . In order for this method to work, we need to make sure that the transformed system has exactly the same solutions as the original system! To this end we will restrict our permissible transformations to the elementary operations define below.   Elementary operations on linear systems  elementary operations linear systems  elementary operations linear systems scalar multiplication  elementary operations linear systems equation swap  elementary operations linear systems equation addition  row reduction of systems   An elementary operation (or elementary row operation ) is one of the three types of operations on linear systems described below.   Scalar multiplication  Multiply an equation by a nonzero number : i.e., replace the -th equation of the system with for . Note: is the result of multiplying the left and right sides of equation by .    Equation swap  Swap the -th and -th equations of the system, : i.e., replace equation of the system with , and replace equation with .    Equation addition  Add a multiple of one equation to another: i.e., replace with for some , , and .   The act of transforming a system of equations using elementary operations is called reduction (or row reduction ).    After reducing a linear system using elementary operations, we are left with a new system . The systems and will generally look very different from one another. Note, however, that the two systems will have the same number of equations, and the same number of variables. More importantly, the two systems will have identical sets of solutions; that is, the set of solutions of the new system is identical to the set of solutions to !  To convince ourselves of this last assertion, it suffices to show that the application of any one of these elementary row operations produces a new system with exactly the same set of solutions as ; if this is so, then performing any finite sequence of elementary row operations must also preserve the set of solutions in this sense. makes this argument official. First we introduce the notion of equivalent linear systems , mainly to spare ourselves from the mouthful that is obtained by applying a finite sequence of elementary row operations .   Row equivalent linear systems   We say two systems of linear equations are row equivalent if the one can be obtained from the other by a finite sequence of elementary operations.     Row equivalence theorem   Row equivalent systems of linear equations have identical sets of solutions.    We prove by induction that if system is the result of applying elementary operations to system , , then and have the same set of solutions.   Base case:  In this case (we have applied no operations) and the statement is obvious.    Induction step  Assume that applying a sequence of elementary operations to a linear system preserves the set of solutions.  Suppose is the result of applying elementary operations to the system . Let be the result of applying the first of these operations. By the induction hypothesis, systems and have the same set of solutions.  Since the system is obtained from by applying exactly one elementary operation, it now suffices to show that applying a single row operation does not change the set of solutions to a linear system. This is the result of . (Note that a solution is provided to that exercise.)  We conclude that and have the same set of solutions, as desired.       Complete example  Consider again the linear system   We transform the system as as follows:   Now put the logic together. Our original linear system was transformed by a sequence of elementary row operations to a new system :   We saw already that the second system has exactly one solution, namely the triple .  Since transforming a system by row operations preserves solutions, the first and second systems have exactly the same solutions .  Thus is the only solution to the original system!    Notation  As we will see later, keeping track of the exact sequence of row operations is important in some situations. The notation used in the last example is useful for this bookkeeping. Let's explicate the notation somewhat.  The notation indicates that system is obtained from by replacing equation with .  The notation indicates that system is obtained from by swapping rows and .  The notation indicates that system is obtained from by replacing equation with .    Mandate  You may be tempted to do multiple operations in a single step during this procedure. Resist this temptation for now until we have a better understanding of things.  Furthermore, if later on you do give in to this temptation, make sure that the two (or more row operations) you perform are independent of one another. For example, do not swap with and replace with in the same step.      WeBWork Exercises      Determine whether the following system has no solution, an infinite number of solutions or a unique solution.                       Suppose that the following   is a consistent system. Then                  Find the set of solutions for the linear system  Use s1 , s2 , etc. for the free variables if necessary.   , ,                   SOLUTION: Equation 3 . Substitute into equation 2, . Substitute into equation 1, .            Give a geometric description of the following systems of equations                       Give a geometric description of the following system of equations                     Written exercises   Geometry of linear systems   In this exercise we will use the geometry of lines in and planes in to help analyze solutions to systems of equations in two and three unknowns, respectively.   Fix and consider a system of linear equations in the two unknowns and . What does a solution to this system of linear equations correspond to geometrically?    Use your interpretation in (a) to give a geometric argument that a system of equations in two unknowns will have either (i) zero solutions, (ii) exactly one solution, or (iii) infinitely many solutions.    Use your geometric interpretation to help produce explicit examples of systems in two variables satisfying these three different cases (i)-(iii).    Now repeat (a)-(b) for a system of linear equations in three variables .       (a) Geometrically, each equation in the system represents a line . A solution to the -th equation corresponds to a point on . Thus a solution to the system corresponds to a point lying on all of the lines: i.e., a point of intersection of the lines.  (b) First of all to prove the desired or statement it suffices to prove that if the number of solutions is greater than 1, then there are infinitely many solutions.  Now suppose there is more than one solution. Then there are at least two different solutions: and . Take any of the two lines . By above the intersection of and contains and . But two distinct lines intersect in at most one point. It follows that and must be equal. Since and were arbitrary, it follows all of the lines are in fact the same line . But this means the common intersection of the lines is , which has infinitely many points. It follows that the system has infinitely many solutions.  (c) We will get 0 solutions if the system includes two different parallel lines: e.g., and .  We will get exactly one solution when the slopes of each line in the system are distinct.  We will get infinitely many solutions when all equations in the system represent the same line . This happens when all equations are multiples of one another.  (d) Now each equation in our system defines a plane . A solution to the system corresponds to a point of intersection of the planes. We recall two facts from Euclidean geometry:   Fact 1  Given two distinct points, there is a unique line containing both of them.    Fact 2  Given any number of distinct planes, they either do not intersect, or intersect in a line.     We proceed as in part (b) above: that is show that if there are two distinct solutions to the system, then there are infinitely many solutions. First, for simplicity, we may assume that the equations define distinct planes; if we have two equations defining the same plane, we can delete one of them and not change the set of solutions to the system.  Now suppose and are two distinct solutions to the system. Let be the unique line containing and (Fact 1). I claim that is precisely the set of solutions to the system. To see this, take any two equations in the system and . Since the two corresponding planes are distinct, and intersect in at least the points and , they must intersect in a line (Fact 2); since this line contains and , it must be the line (Fact 1). Thus any two planes in the system intersect in the line . From this it follows that: (a) a point satisfying the system must lie in ; and (b) all points on satisfy the system (since we have shown that lies in all the planes). It follows that is precisely the set of solutions, and hence that there are infinitely many solutions.     Row operations preserve solutions   We made the claim that each of our three row operations   scalar multiplication ( for ),    swap ( ),    addition ( for some )   do not change the set of solutions of a linear system. To prove this claim, let be a general linear system . Now consider each type of row operation separately, write down the new system you get by applying this row operation, and prove that an -tuple is a solution to the original system if and only if it is a solution to the new system .    Let be the original system with equations . For each specified row operation, we will call the resulting new system and its equations .   Row swap  In this case systems and have exactly the same equations, just written in a different order. Thus the -tuple satisfies if and only if it satisfies each of the equations , if and only if it satisfies each of the equations , since these are the same equations! It follows that is a solution of if and only if it is a solution to .    Scalar multiplication  In this case for all , and for some . Since only the -th equation has changed, it suffices to show that is a solution to if and only if is a solution to . Let's prove each direction of this if and only if separately.  If satisfies , then . Multiplying both sides by we see that and hence that is also a solution of .  For the other direction, if satisfies , then Now, since , we can multiply both sides of this equation by to see that and hence that is a solution to .    Row addition  The only equation of that differs from is . Writing this equation out in terms of coefficients gives us . Now if satisfies , then it satisfies and , in which case evaluating the RHS of the above at yields showing that satisfies . Now suppose satisfies . Since satisfies , we have Since satisfies , we have Substituting into the equation above we get , and hence . This shows that satisfies . It follows that satisfies .      Nonlinear systems  A nonlinear system of equations is a collection of equations, at least one of which is nonlinear. Our definition of a solution to a linear system generalizes easily to any system of equations.   Consider the following nonlinear system in the unknowns : .   Sketch the graphs of each of the two equations in the system on a common coordinate system.    Describe geometrically what a solution to the system is in terms of your sketch. Explain your reasoning. How many solutions to the system are there, according to your sketch?    Compute the set of all solutions to the system algebraically.       Now consider a more general system where are fixed constants and at least one of or is nonzero.    Explain geometrically what a solution to the system corresponds to in terms of the graphs of its two equations.    Use your geometric interpretation in (i) to argue that the system has either 0, 1, or 2 solutions. Give explicit examples of such systems corresponding to each of these three cases.         Not all arithmetic operations preserve solutions   In this exercise we investigate how the operation of squaring both sides of an equation changes the set of solutions. Let represent a general equation (linear or nonlinear) in the unknowns , let be the equation obtained by squaring both sides of the , let be the set of solutions to , and let be the set of solutions to .    Show that .    Given an explicit example of an equation of the form in two variables for which .        "
},
{
  "id": "d_lin-equation",
  "level": "2",
  "url": "s_systems.html#d_lin-equation",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Linear equations.",
  "body": " Linear equations  linear equation   A linear expression in the unknowns (or variables) is an expression of the form , where are fixed real numbers.  A linear equation in the unknowns is an equation that can be simplified, using only addition and subtraction, to an equation of the form which we call its standard form . An equation in the unknowns is nonlinear if it cannot be simplified to the form using only addition and subtraction.  Given a linear equation with standard form , the equation is called homogeneous if , and nonhomogeneous if .   "
},
{
  "id": "ss_linear_equations-3",
  "level": "2",
  "url": "s_systems.html#ss_linear_equations-3",
  "type": "Example",
  "number": "1.2.2",
  "title": "Linear and nonlinear equations.",
  "body": " Linear and nonlinear equations      Consider . This is a linear equation in the unknowns . Its standard form is . Since the right-hand side is nonzero, we see that the equation is nonhomogeneous.    The equation is a nonlinear equation in the unknowns and .    The equation is nonlinear. Interestingly, however, the set of solutions to this equation is equal to the set of solutions to the linear equation . This illustrates that is concerned strictly with the form of an equation, and not with the solutions to that equation.      "
},
{
  "id": "d_lin_eq_sol",
  "level": "2",
  "url": "s_systems.html#d_lin_eq_sol",
  "type": "Definition",
  "number": "1.2.3",
  "title": "Solutions to linear equations.",
  "body": " Solutions to linear equations   A solution to a linear equation  is an -tuple of real numbers for which the variable assignment makes the equation true: , the tuple satisfies . We say  solves the equation in this case.   "
},
{
  "id": "d_hyperplane",
  "level": "2",
  "url": "s_systems.html#d_hyperplane",
  "type": "Definition",
  "number": "1.2.4",
  "title": "Hyperplane.",
  "body": " Hyperplane   A linear equation is nontrivial if for some . Given a nontrivial equation , the set of solutions is called a hyperplane in . We have the two following special cases, corresponding to and :   A hyperplane in is the set of solutions to a nontrivial equation , and is called a line .    A hyperplane in is the set of solutions to a nontrivial equation , and is called a plane .      "
},
{
  "id": "eg_vis_lines_R2",
  "level": "2",
  "url": "s_systems.html#eg_vis_lines_R2",
  "type": "Example",
  "number": "1.2.5",
  "title": "Visualizing lines in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " Visualizing lines in  Let be a line: , is the solution to some nontrivial linear equation . Since the equation is nontrivial, we have or . If , we may put the equation in the form , in which case we recognize as the slope of and as the -intercept. If , then , and the equation can be solved as , which we recognize as the vertical line passing through the point .  It is easy to see that the equation defining is homogenous if and only if is a point on : , is defined by a homogeneous equation if and only if it passes through the origin.   Lines in   Lines in R2     "
},
{
  "id": "eg_vis_plane",
  "level": "2",
  "url": "s_systems.html#eg_vis_plane",
  "type": "Example",
  "number": "1.2.7",
  "title": "Visualizing planes in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Visualizing planes in  Let be a plane defined by the nontrivial equation . Later we will describe an approach to visualizing in terms of its normal vector  . For now we recall a more elementary approach. Namely, simply find by inspection three non-colinear points satisfying , sketch the triangle in they define, and then envision as the plane in containing this triangle. In practice we can find three such points by picking arbitrary values for two of the three variables, and solving for the third variable using .  For example, if is the plane with equation , we see easily that lie on , allowing us to produce the graph in .  As with lines, it is easy to see that the equation defining is homogeneous if and only if passes through the origin .   Using Sage to visualize via normal vector  Visualizing       "
},
{
  "id": "d_lin-sys",
  "level": "2",
  "url": "s_systems.html#d_lin-sys",
  "type": "Definition",
  "number": "1.2.9",
  "title": "Systems of linear equations.",
  "body": " Systems of linear equations  linear system   A system of linear equations (or linear system ) is a set of linear equations. The linear system is homogeneous if each of its equations is homogeneous: , if for all .  A solution to the system is an -tuple that is a solution to each of the system's equations. We say  solves the system in this case.  A linear system is consistent if a solution to the system exists, and inconsistent otherwise.   "
},
{
  "id": "ss_linear_equations-13",
  "level": "2",
  "url": "s_systems.html#ss_linear_equations-13",
  "type": "Remark",
  "number": "1.2.10",
  "title": "Displaying linear systems.",
  "body": " Displaying linear systems  As indicated in , when displaying a system of equations in the unknowns , we typically write each individual equation in standard form and align the corresponding terms of each equation into columns. The presence of multiple equations and multiple unknowns necessitates the use of double-indexing for the coefficients appearing in the system. The following breakdown will hopefully help you orient yourself with respect to the double-indexing:   The appearing in and indicates the -th row in our displayed system, or equivalently, the -th equation.    The appearing in indicates the -th column in our displayed system, which is associated to the -th variable, for .     "
},
{
  "id": "s_systems_eg_2eqns2varss",
  "level": "2",
  "url": "s_systems.html#s_systems_eg_2eqns2varss",
  "type": "Example",
  "number": "1.2.11",
  "title": "Solutions to elementary systems.",
  "body": " Solutions to elementary systems   For each system, compute the set of solutions.                 The first equation implies . Substituting for in the second equation, we would then have , a contradiction. Thus there are no solutions: i.e., is the empty set, denoted or .    The first equation implies . Making this substitution in the second equation yields , or . Thus is the unique solution, and .    The second equation is just twice the first. It follows that both equations have the exact same set of solutions, and so we need only find all solutions to . Note that we can set for any real number . Solving for in terms of we get for any , and thus , an infinite set!      "
},
{
  "id": "eg_system_of_lines",
  "level": "2",
  "url": "s_systems.html#eg_system_of_lines",
  "type": "Example",
  "number": "1.2.12",
  "title": "Solutions to elementary systems (again).",
  "body": " Solutions to elementary systems (again)   For each system in , use a geometric argument to determine how many solutions there are.    We proceed geometrically by observing that each equation in a given system defines a line, that a pair is a solution to the given equation if and only if it is a point on the corresponding line, and thus that a pair is a solution to both equations if and only if it is a point lying on both lines. Thus, geometrically speaking, the set of solutions to a given system is equal to the intersection of the two corresponding lines.   In this case the two lines and are parallel (and not equal to one another). It follows that their intersection is empty. We conclude that there are no solutions to the system.    In this case the two lines and are nonparallel. It follows that they intersect in a single point. We conclude that the system has a unique solution.    In this case the two equations and define the same line , and thus that their intersection is also equal to . The set of solutions to the system is then equal to the set of points of , which is infinite.      "
},
{
  "id": "ss_row_equivalence-4",
  "level": "2",
  "url": "s_systems.html#ss_row_equivalence-4",
  "type": "Remark",
  "number": "1.2.13",
  "title": "",
  "body": " Notice the somewhat funny spacing in . This is in force in order to align the unknowns in separate columns. In general, when handed a linear system in the wild, your first step should be to write each equation in standard form, and make sure the unknowns are aligned vertically in this manner.  "
},
{
  "id": "d_eqops",
  "level": "2",
  "url": "s_systems.html#d_eqops",
  "type": "Definition",
  "number": "1.2.14",
  "title": "Elementary operations on linear systems.",
  "body": " Elementary operations on linear systems  elementary operations linear systems  elementary operations linear systems scalar multiplication  elementary operations linear systems equation swap  elementary operations linear systems equation addition  row reduction of systems   An elementary operation (or elementary row operation ) is one of the three types of operations on linear systems described below.   Scalar multiplication  Multiply an equation by a nonzero number : i.e., replace the -th equation of the system with for . Note: is the result of multiplying the left and right sides of equation by .    Equation swap  Swap the -th and -th equations of the system, : i.e., replace equation of the system with , and replace equation with .    Equation addition  Add a multiple of one equation to another: i.e., replace with for some , , and .   The act of transforming a system of equations using elementary operations is called reduction (or row reduction ).   "
},
{
  "id": "d_rowequivalent",
  "level": "2",
  "url": "s_systems.html#d_rowequivalent",
  "type": "Definition",
  "number": "1.2.15",
  "title": "Row equivalent linear systems.",
  "body": " Row equivalent linear systems   We say two systems of linear equations are row equivalent if the one can be obtained from the other by a finite sequence of elementary operations.   "
},
{
  "id": "s_systems_th_rowops",
  "level": "2",
  "url": "s_systems.html#s_systems_th_rowops",
  "type": "Theorem",
  "number": "1.2.16",
  "title": "Row equivalence theorem.",
  "body": " Row equivalence theorem   Row equivalent systems of linear equations have identical sets of solutions.    We prove by induction that if system is the result of applying elementary operations to system , , then and have the same set of solutions.   Base case:  In this case (we have applied no operations) and the statement is obvious.    Induction step  Assume that applying a sequence of elementary operations to a linear system preserves the set of solutions.  Suppose is the result of applying elementary operations to the system . Let be the result of applying the first of these operations. By the induction hypothesis, systems and have the same set of solutions.  Since the system is obtained from by applying exactly one elementary operation, it now suffices to show that applying a single row operation does not change the set of solutions to a linear system. This is the result of . (Note that a solution is provided to that exercise.)  We conclude that and have the same set of solutions, as desired.    "
},
{
  "id": "eg_systems_eg_long",
  "level": "2",
  "url": "s_systems.html#eg_systems_eg_long",
  "type": "Example",
  "number": "1.2.17",
  "title": "Complete example.",
  "body": " Complete example  Consider again the linear system   We transform the system as as follows:   Now put the logic together. Our original linear system was transformed by a sequence of elementary row operations to a new system :   We saw already that the second system has exactly one solution, namely the triple .  Since transforming a system by row operations preserves solutions, the first and second systems have exactly the same solutions .  Thus is the only solution to the original system!  "
},
{
  "id": "s_systems_notation_rowops",
  "level": "2",
  "url": "s_systems.html#s_systems_notation_rowops",
  "type": "Remark",
  "number": "1.2.18",
  "title": "Notation.",
  "body": " Notation  As we will see later, keeping track of the exact sequence of row operations is important in some situations. The notation used in the last example is useful for this bookkeeping. Let's explicate the notation somewhat.  The notation indicates that system is obtained from by replacing equation with .  The notation indicates that system is obtained from by swapping rows and .  The notation indicates that system is obtained from by replacing equation with .  "
},
{
  "id": "s_systems_rm_oneoperation",
  "level": "2",
  "url": "s_systems.html#s_systems_rm_oneoperation",
  "type": "Remark",
  "number": "1.2.19",
  "title": "Mandate.",
  "body": " Mandate  You may be tempted to do multiple operations in a single step during this procedure. Resist this temptation for now until we have a better understanding of things.  Furthermore, if later on you do give in to this temptation, make sure that the two (or more row operations) you perform are independent of one another. For example, do not swap with and replace with in the same step.  "
},
{
  "id": "s_systems_ex-1-2",
  "level": "2",
  "url": "s_systems.html#s_systems_ex-1-2",
  "type": "Exercise",
  "number": "1.2.3.1",
  "title": "",
  "body": "    Determine whether the following system has no solution, an infinite number of solutions or a unique solution.                  "
},
{
  "id": "s_systems_ex-1-3",
  "level": "2",
  "url": "s_systems.html#s_systems_ex-1-3",
  "type": "Exercise",
  "number": "1.2.3.2",
  "title": "",
  "body": "    Suppose that the following   is a consistent system. Then             "
},
{
  "id": "s_systems_ex-1-4",
  "level": "2",
  "url": "s_systems.html#s_systems_ex-1-4",
  "type": "Exercise",
  "number": "1.2.3.3",
  "title": "",
  "body": "    Find the set of solutions for the linear system  Use s1 , s2 , etc. for the free variables if necessary.   , ,                   SOLUTION: Equation 3 . Substitute into equation 2, . Substitute into equation 1, .       "
},
{
  "id": "s_systems_ex-1-5",
  "level": "2",
  "url": "s_systems.html#s_systems_ex-1-5",
  "type": "Exercise",
  "number": "1.2.3.4",
  "title": "",
  "body": "    Give a geometric description of the following systems of equations                  "
},
{
  "id": "s_systems_ex-1-6",
  "level": "2",
  "url": "s_systems.html#s_systems_ex-1-6",
  "type": "Exercise",
  "number": "1.2.3.5",
  "title": "",
  "body": "    Give a geometric description of the following system of equations                  "
},
{
  "id": "ex_solving_sys_geom",
  "level": "2",
  "url": "s_systems.html#ex_solving_sys_geom",
  "type": "Exercise",
  "number": "1.2.3.6",
  "title": "Geometry of linear systems.",
  "body": " Geometry of linear systems   In this exercise we will use the geometry of lines in and planes in to help analyze solutions to systems of equations in two and three unknowns, respectively.   Fix and consider a system of linear equations in the two unknowns and . What does a solution to this system of linear equations correspond to geometrically?    Use your interpretation in (a) to give a geometric argument that a system of equations in two unknowns will have either (i) zero solutions, (ii) exactly one solution, or (iii) infinitely many solutions.    Use your geometric interpretation to help produce explicit examples of systems in two variables satisfying these three different cases (i)-(iii).    Now repeat (a)-(b) for a system of linear equations in three variables .       (a) Geometrically, each equation in the system represents a line . A solution to the -th equation corresponds to a point on . Thus a solution to the system corresponds to a point lying on all of the lines: i.e., a point of intersection of the lines.  (b) First of all to prove the desired or statement it suffices to prove that if the number of solutions is greater than 1, then there are infinitely many solutions.  Now suppose there is more than one solution. Then there are at least two different solutions: and . Take any of the two lines . By above the intersection of and contains and . But two distinct lines intersect in at most one point. It follows that and must be equal. Since and were arbitrary, it follows all of the lines are in fact the same line . But this means the common intersection of the lines is , which has infinitely many points. It follows that the system has infinitely many solutions.  (c) We will get 0 solutions if the system includes two different parallel lines: e.g., and .  We will get exactly one solution when the slopes of each line in the system are distinct.  We will get infinitely many solutions when all equations in the system represent the same line . This happens when all equations are multiples of one another.  (d) Now each equation in our system defines a plane . A solution to the system corresponds to a point of intersection of the planes. We recall two facts from Euclidean geometry:   Fact 1  Given two distinct points, there is a unique line containing both of them.    Fact 2  Given any number of distinct planes, they either do not intersect, or intersect in a line.     We proceed as in part (b) above: that is show that if there are two distinct solutions to the system, then there are infinitely many solutions. First, for simplicity, we may assume that the equations define distinct planes; if we have two equations defining the same plane, we can delete one of them and not change the set of solutions to the system.  Now suppose and are two distinct solutions to the system. Let be the unique line containing and (Fact 1). I claim that is precisely the set of solutions to the system. To see this, take any two equations in the system and . Since the two corresponding planes are distinct, and intersect in at least the points and , they must intersect in a line (Fact 2); since this line contains and , it must be the line (Fact 1). Thus any two planes in the system intersect in the line . From this it follows that: (a) a point satisfying the system must lie in ; and (b) all points on satisfy the system (since we have shown that lies in all the planes). It follows that is precisely the set of solutions, and hence that there are infinitely many solutions.   "
},
{
  "id": "ex_row_ops_preserve",
  "level": "2",
  "url": "s_systems.html#ex_row_ops_preserve",
  "type": "Exercise",
  "number": "1.2.3.7",
  "title": "Row operations preserve solutions.",
  "body": " Row operations preserve solutions   We made the claim that each of our three row operations   scalar multiplication ( for ),    swap ( ),    addition ( for some )   do not change the set of solutions of a linear system. To prove this claim, let be a general linear system . Now consider each type of row operation separately, write down the new system you get by applying this row operation, and prove that an -tuple is a solution to the original system if and only if it is a solution to the new system .    Let be the original system with equations . For each specified row operation, we will call the resulting new system and its equations .   Row swap  In this case systems and have exactly the same equations, just written in a different order. Thus the -tuple satisfies if and only if it satisfies each of the equations , if and only if it satisfies each of the equations , since these are the same equations! It follows that is a solution of if and only if it is a solution to .    Scalar multiplication  In this case for all , and for some . Since only the -th equation has changed, it suffices to show that is a solution to if and only if is a solution to . Let's prove each direction of this if and only if separately.  If satisfies , then . Multiplying both sides by we see that and hence that is also a solution of .  For the other direction, if satisfies , then Now, since , we can multiply both sides of this equation by to see that and hence that is a solution to .    Row addition  The only equation of that differs from is . Writing this equation out in terms of coefficients gives us . Now if satisfies , then it satisfies and , in which case evaluating the RHS of the above at yields showing that satisfies . Now suppose satisfies . Since satisfies , we have Since satisfies , we have Substituting into the equation above we get , and hence . This shows that satisfies . It follows that satisfies .    "
},
{
  "id": "ex_solving_nonlinear_system",
  "level": "2",
  "url": "s_systems.html#ex_solving_nonlinear_system",
  "type": "Exercise",
  "number": "1.2.3.8",
  "title": "Nonlinear systems.",
  "body": " Nonlinear systems  A nonlinear system of equations is a collection of equations, at least one of which is nonlinear. Our definition of a solution to a linear system generalizes easily to any system of equations.   Consider the following nonlinear system in the unknowns : .   Sketch the graphs of each of the two equations in the system on a common coordinate system.    Describe geometrically what a solution to the system is in terms of your sketch. Explain your reasoning. How many solutions to the system are there, according to your sketch?    Compute the set of all solutions to the system algebraically.       Now consider a more general system where are fixed constants and at least one of or is nonzero.    Explain geometrically what a solution to the system corresponds to in terms of the graphs of its two equations.    Use your geometric interpretation in (i) to argue that the system has either 0, 1, or 2 solutions. Give explicit examples of such systems corresponding to each of these three cases.       "
},
{
  "id": "s_systems_ex-2-5",
  "level": "2",
  "url": "s_systems.html#s_systems_ex-2-5",
  "type": "Exercise",
  "number": "1.2.3.9",
  "title": "Not all arithmetic operations preserve solutions.",
  "body": " Not all arithmetic operations preserve solutions   In this exercise we investigate how the operation of squaring both sides of an equation changes the set of solutions. Let represent a general equation (linear or nonlinear) in the unknowns , let be the equation obtained by squaring both sides of the , let be the set of solutions to , and let be the set of solutions to .    Show that .    Given an explicit example of an equation of the form in two variables for which .     "
},
{
  "id": "s_ge",
  "level": "1",
  "url": "s_ge.html",
  "type": "Section",
  "number": "1.3",
  "title": "Gaussian elimination",
  "body": " Gaussian elimination   In we sketched a procedure for solving a linear system . That procedure involved applying a sequence of row operations to to obtain a simpler system .  We will fill out this sketch in the next two sections. Specifically, we will   describe precisely what we mean by a simpler system,    provide an algorithm (or recipe) that decides exactly what sequence of row operations to apply to obtain this simpler system,    explain how to find all solutions of the resulting simpler system.       Row echelon matrices  Our first step in this direction will be to introduce a notational convenience. As you may have noticed, when performing row operations on a system of equations, we essentially treat the unknowns, as well as the plus and equals symbols, as placeholders; the only things that actually change in a given step are the coefficients in the equations. The augmented matrix associated to a linear system is a formal way of extracting just the information of the coefficients from a linear system.   Augmented matrix  augmented matrix    augmented matrix    Let be the linear system . The augmented matrix associated to  is the matrix .     As defined more thoroughly in , a matrix is just a rectangular array of numbers.    Note that a system of equations in unknowns gives rise to an augmented matrix that has rows (one row for each equation) and columns (one column for each unknown and an additional column for the right-hand side constants ). The vertical line in the augmented matrix helps distinguish between the columns corresponding to unknowns (to the left of the vertical line) and the column of constants (to the right of the vertical line). When we wish to further emphasize this distinction among the columns, we will label the first columns with their corresponding variable name as in .   Augmented matrix with labeled columns   Augmented matrix with labeled columns      Here is our precise formulation of a simple linear system; it is a system whose associated augmented matrix is in row echelon form , as described below.   Row echelon form   A zero row of a matrix, is a row whose entries are all equal to zero; a nonzero row is a row that contains at least one nonzero entry.  A matrix is in row echelon form if the following conditions hold.  (i)  In any nonzero row the first (i.e., leftmost) nonzero entry is equal to one. A leading one of a matrix is such an entry: i.e., an entry of a row that is equal to one, and that is also the first nonzero entry of that row.   (ii)  All zero rows are grouped together at the bottom of the matrix.   (iii)  Given any two nonzero rows in the matrix, the leading one of the lower row occurs strictly to the right of the leading one of the row above it.     A matrix is in reduced row echelon form if in addition to conditions (i)-(iii) it also satisfies the following condition.   (iv) Any column of the matrix that contains a leading one has zeros elsewhere. In other words, if a column contains a leading one, then that is the only nonzero entry of that column.    A linear system is in row echelon form (resp. reduced row echelon form ) if its augmented matrix is in row echelon form (resp. reduced row echelon form).    A matrix in row echelon form displays a staircase pattern of ones as illustrated in .  Staircase pattern of row echelon form   Staircase pattern of row echelon form    In practice to decide whether a matrix is in in (reduced) row echelon form, follow these steps:   First verify whether all zero rows are at the bottom.    For each nonzero row, determine whether the first nonzero entry is a 1, and put a box around it.    Make sure your boxes make a staircase pattern.    (For reduced row echelon form only.) Decide whether each column with a box has 0's everywhere else.      Row echelon versus reduced row echelon form   For each matrix decide (a) whether it is in row echelon form, and (b) whether it is in reduced row echelon form.                  Below you find the matrix with leading ones boxed. This matrix fails to be in row echelon form (and hence also reduced row echelon form) for a variety of reasons: the zero rows are not all grouped at the bottom; the first row is nonzero, but does not have a leading one; the leading one of the fourth row is to the left of the leading one of the leading one in the row above it.     Below you find the matrix with leading ones boxed. This matrix is in row echelon form: the zero rows (rows 4 and 5) are grouped at the bottom; each nonzero row has a leading one (boxed in the matrix below); the leading ones step strictly to the right as we move down the rows. The matrix is not in reduced row echelon form, as the last column contains a leading one in its third row, and a nonzero entry in its first row.        Gaussian elimination  We will now describe a systematic procedure, called Gaussian elimination , that allows us to reduce a given linear system to a system in row echelon form. In keeping with the foregoing discussion, we will identify a system with its augmented matrix . Furthermore, reducing a linear system using elementary operations on equations is now cast as performing elementary row operations on matrices. At the risk of redundancy we now officially translate a number of our former notions regarding reduction of linear systems to the setting of matrices.   Elementary row operations on matrices  elementary row operations  elementary row operations scalar multiplication  elementary row operations row swap  elementary row operations row addition  row reduction of matrices  row equivalence of matrices   An elementary row operation is one of the three following types of matrix operations. Let be a given matrix, and denote by the -th row of .    Scalar multplication  Multiply a row by a nonzero number : i.e., replace with , the result of multiplying all entries of the row by .    Row swap  Swap two rows of .    Row addition  Add a multiple of one row to another: i.e., replace with for some , , and .    The act of transforming a matrix using elementary row operations is called row reduction .  Two matrices are row equivalent if the one can be obtained from the other by performing a finite sequence of elementary row operations.     Notation    scalar multiplication     row swap     replace with  Our former elementary operation notation easily transfers to row operations on matrices. The expressions denote the operations that replace row in with , swap rows and in , and replace in with , respectively.  At last we are ready to define Gaussian elimination. In its essence this is simply a procedure, or algorithm , that takes an input matrix and row reduces it to a matrix in row echelon form. It is important to note that although we employ Gaussian elimination in this chapter primarily to the end of simplifying and solving linear systems, this is not its only application. Indeed, we will come back to the procedure again and again, in a great variety of contexts and to greatly diverse ends. Gaussian elimination is one of linear algebra's most important tools. We memorialize this here as an official principle.   Gaussian elimination mantra   Gaussian elimination is the workhorse of linear algebra.     Gaussian elimination  Gaussian elimination    Gaussian elimination is the algorithm described below. It takes as an input a matrix and returns as an output a row equivalent matrix in row echelon form.    Step 1  Find the leftmost nonzero column and perform a row swap to move the row with this nonzero entry to the top of the matrix.    Step 2  Scale the new top row to produce a leading one in the row. Call this new row .    Step 3  For each row below perform a row operation of the form to replace all entries below the leading one of with zeros.    Step 4  Begin again with Step 1 applied to the matrix consisting of all rows below . Continue until the matrix is in row echelon form.       Model example  Use the following example as a model of how to both perform and annotate the steps in Gaussian elimination. When first learning this procedure, make sure to follow it to the letter . In particular, in the spirit of the mandate issued in , you should only perform one row operation at a time, and only in the sequence prescribed in Steps 1-4 of .   Row echelon form  We use Gaussian elimination to reduce the linear system to a system in row echelon form.  First we apply Gaussian elimination to the augmented matrix associated to our system. . We conclude that our original system is equivalent to the system , which is in row echelon form.   The matrix outputted by Gaussian elimination is guaranteed to be in row echelon form, but it may not be in reduced row echelon form. Gauss-Jordan elimination describes a systematic way to continue reducing to this even simpler state.    Gauss-Jordan elimination    Gauss-Jordan elimination is the algorithm described below. It takes as an input a matrix and returns a row equivalent matrix in reduced row echelon form.    Steps 1-4  Apply Gaussian elimination to transform to a matrix in row echelon form.    Step 5  Find the rightmost column of the matrix containing a leading one. Let be the row containing this leading one. For each row above perform a row operation of the form to replace all entries above the leading one with zeros.    Step 6  Begin again with Step 5 applied to the next column to the left that contains a leading one. Continue until the matrix is in reduced row echelon form.       Reduced row echelon form  We continue our work in to reach a matrix in reduced row echelon form. . Notice that the resulting system is slightly simpler than the system in row echelon form of : .    and are really theorems in disguise, and we make this official in .   Row equivalent matrix forms     Row echelon forms exist  Any matrix is row equivalent to a matrix in row echelon form. Indeed, Gaussian elimination row reduces any matrix to a matrix in row echelon form.    Reduced row echelon forms exist  Any matrix is row equivalent to a matrix in reduced row echelon form. Indeed, Gauss-Jordan elimination row reduces any matrix to a matrix in reduced row echelon form.    Reduced row echelon forms are unique  Any matrix is row equivalent to a unique matrix in reduced row echelon form.      We will make heavy use of the first two results of . The proofs of these statements are not difficult, but not especially illuminating. Accordingly we omit them here, and point the interested reader to Robert Beezer's A First Course in Linear Algebra . (See Theorem REMEF .)  The third statement of , that every matrix is row equivalent to a unique matrix in reduced row echelon form, does in fact have an enlightening proof. We will postpone this proof, however, until we have a little more theory at our disposal. (See .) Until then we will conscientiously not make use of this fact when developing any of our further theory.   Row echelon form is not unique   Show that a matrix may be row equivalent to two or more matrices in row echelon form.    Take . This row reduces to using Gaussian elimination; and it row reduces further to using Gauss-Jordan elimination. Thus we see that is row equivalent to two different matrices in row echelon form. (According to , the matrix is the only matrix in reduced row echelon that is row equivalent to .)     Gaussian elimination  In the first Sage cell below you find a recursive implementation of Gaussian elimination in Sage that includes explanatory comments. Evaluate this cell in order to load the row_echelon_form function. The second cell allows you to apply the Gaussian elimination algorithm to a matrix of your choosing. As you can see, the show function provides a nice latex version of the output.    Sage has its own row reduction method, rref , which transforms a matrix to reduced row echelon form. Let's compare the outputs of these two algorithms.   The following activities could be useful for implementing Gaussian elimination in a manner that shows all intervening steps. Use the empty Sage cell below to experiment.   Modify the row_echelon_form code to make a non-recursive algorithm.    Add show commands to your non-recursive version of row_echelon_form to show steps in the row reduction.          WeBWork Exercises      Determine if the matrix   is in echelon form, reduced row echelon form, or neither. Choose the most appropriate answer.  Answer:  select   echelon form   reduced row echelon form   not in echelon form  .        SOLUTION: Reduced row echelon form.                On the augmented matrix below , perform all three row operations in the order given, ((a) followed by (b) followed by (c)) and then write the resulting augmented matrix.                                                                                              Written Exercises    Explain why each of the following matrices fails to be in row echelon form.          The first nonzero term in the second row is not a one.                       For each of the given linear systems, find an equivalent system in row echelon form. Use augmented matrices and follow the Gaussian elimination algorithm to the letter.          First bring the system into standard form: . Then perform Gaussian elimination on the associated augmented matrix: . The corresponding equivalent system is .                                   "
},
{
  "id": "d_augmented_matrix",
  "level": "2",
  "url": "s_ge.html#d_augmented_matrix",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Augmented matrix.",
  "body": " Augmented matrix  augmented matrix    augmented matrix    Let be the linear system . The augmented matrix associated to  is the matrix .   "
},
{
  "id": "s_ge_rm_see_def",
  "level": "2",
  "url": "s_ge.html#s_ge_rm_see_def",
  "type": "Remark",
  "number": "1.3.2",
  "title": "",
  "body": " As defined more thoroughly in , a matrix is just a rectangular array of numbers.  "
},
{
  "id": "ss_ge_row_echelon-5",
  "level": "2",
  "url": "s_ge.html#ss_ge_row_echelon-5",
  "type": "Remark",
  "number": "1.3.3",
  "title": "",
  "body": " Note that a system of equations in unknowns gives rise to an augmented matrix that has rows (one row for each equation) and columns (one column for each unknown and an additional column for the right-hand side constants ). The vertical line in the augmented matrix helps distinguish between the columns corresponding to unknowns (to the left of the vertical line) and the column of constants (to the right of the vertical line). When we wish to further emphasize this distinction among the columns, we will label the first columns with their corresponding variable name as in .   Augmented matrix with labeled columns   Augmented matrix with labeled columns     "
},
{
  "id": "d_row_echelon",
  "level": "2",
  "url": "s_ge.html#d_row_echelon",
  "type": "Definition",
  "number": "1.3.5",
  "title": "Row echelon form.",
  "body": " Row echelon form   A zero row of a matrix, is a row whose entries are all equal to zero; a nonzero row is a row that contains at least one nonzero entry.  A matrix is in row echelon form if the following conditions hold.  (i)  In any nonzero row the first (i.e., leftmost) nonzero entry is equal to one. A leading one of a matrix is such an entry: i.e., an entry of a row that is equal to one, and that is also the first nonzero entry of that row.   (ii)  All zero rows are grouped together at the bottom of the matrix.   (iii)  Given any two nonzero rows in the matrix, the leading one of the lower row occurs strictly to the right of the leading one of the row above it.     A matrix is in reduced row echelon form if in addition to conditions (i)-(iii) it also satisfies the following condition.   (iv) Any column of the matrix that contains a leading one has zeros elsewhere. In other words, if a column contains a leading one, then that is the only nonzero entry of that column.    A linear system is in row echelon form (resp. reduced row echelon form ) if its augmented matrix is in row echelon form (resp. reduced row echelon form).   "
},
{
  "id": "fig_echelon",
  "level": "2",
  "url": "s_ge.html#fig_echelon",
  "type": "Figure",
  "number": "1.3.6",
  "title": "",
  "body": " Staircase pattern of row echelon form   Staircase pattern of row echelon form    "
},
{
  "id": "ss_ge_row_echelon-9",
  "level": "2",
  "url": "s_ge.html#ss_ge_row_echelon-9",
  "type": "Example",
  "number": "1.3.7",
  "title": "Row echelon versus reduced row echelon form.",
  "body": " Row echelon versus reduced row echelon form   For each matrix decide (a) whether it is in row echelon form, and (b) whether it is in reduced row echelon form.                  Below you find the matrix with leading ones boxed. This matrix fails to be in row echelon form (and hence also reduced row echelon form) for a variety of reasons: the zero rows are not all grouped at the bottom; the first row is nonzero, but does not have a leading one; the leading one of the fourth row is to the left of the leading one of the leading one in the row above it.     Below you find the matrix with leading ones boxed. This matrix is in row echelon form: the zero rows (rows 4 and 5) are grouped at the bottom; each nonzero row has a leading one (boxed in the matrix below); the leading ones step strictly to the right as we move down the rows. The matrix is not in reduced row echelon form, as the last column contains a leading one in its third row, and a nonzero entry in its first row.     "
},
{
  "id": "d_rowops",
  "level": "2",
  "url": "s_ge.html#d_rowops",
  "type": "Definition",
  "number": "1.3.8",
  "title": "Elementary row operations on matrices.",
  "body": " Elementary row operations on matrices  elementary row operations  elementary row operations scalar multiplication  elementary row operations row swap  elementary row operations row addition  row reduction of matrices  row equivalence of matrices   An elementary row operation is one of the three following types of matrix operations. Let be a given matrix, and denote by the -th row of .    Scalar multplication  Multiply a row by a nonzero number : i.e., replace with , the result of multiplying all entries of the row by .    Row swap  Swap two rows of .    Row addition  Add a multiple of one row to another: i.e., replace with for some , , and .    The act of transforming a matrix using elementary row operations is called row reduction .  Two matrices are row equivalent if the one can be obtained from the other by performing a finite sequence of elementary row operations.   "
},
{
  "id": "s_ge_notation",
  "level": "2",
  "url": "s_ge.html#s_ge_notation",
  "type": "Remark",
  "number": "1.3.9",
  "title": "Notation.",
  "body": " Notation    scalar multiplication     row swap     replace with  Our former elementary operation notation easily transfers to row operations on matrices. The expressions denote the operations that replace row in with , swap rows and in , and replace in with , respectively. "
},
{
  "id": "princ_GE",
  "level": "2",
  "url": "s_ge.html#princ_GE",
  "type": "Mantra",
  "number": "1.3.10",
  "title": "Gaussian elimination mantra.",
  "body": " Gaussian elimination mantra   Gaussian elimination is the workhorse of linear algebra.   "
},
{
  "id": "d_GE",
  "level": "2",
  "url": "s_ge.html#d_GE",
  "type": "Procedure",
  "number": "1.3.11",
  "title": "Gaussian elimination.",
  "body": " Gaussian elimination  Gaussian elimination    Gaussian elimination is the algorithm described below. It takes as an input a matrix and returns as an output a row equivalent matrix in row echelon form.    Step 1  Find the leftmost nonzero column and perform a row swap to move the row with this nonzero entry to the top of the matrix.    Step 2  Scale the new top row to produce a leading one in the row. Call this new row .    Step 3  For each row below perform a row operation of the form to replace all entries below the leading one of with zeros.    Step 4  Begin again with Step 1 applied to the matrix consisting of all rows below . Continue until the matrix is in row echelon form.     "
},
{
  "id": "eg_model_example",
  "level": "2",
  "url": "s_ge.html#eg_model_example",
  "type": "Example",
  "number": "1.3.12",
  "title": "Row echelon form.",
  "body": " Row echelon form  We use Gaussian elimination to reduce the linear system to a system in row echelon form.  First we apply Gaussian elimination to the augmented matrix associated to our system. . We conclude that our original system is equivalent to the system , which is in row echelon form.  "
},
{
  "id": "d_GaussJordan",
  "level": "2",
  "url": "s_ge.html#d_GaussJordan",
  "type": "Procedure",
  "number": "1.3.13",
  "title": "Gauss-Jordan elimination.",
  "body": " Gauss-Jordan elimination    Gauss-Jordan elimination is the algorithm described below. It takes as an input a matrix and returns a row equivalent matrix in reduced row echelon form.    Steps 1-4  Apply Gaussian elimination to transform to a matrix in row echelon form.    Step 5  Find the rightmost column of the matrix containing a leading one. Let be the row containing this leading one. For each row above perform a row operation of the form to replace all entries above the leading one with zeros.    Step 6  Begin again with Step 5 applied to the next column to the left that contains a leading one. Continue until the matrix is in reduced row echelon form.     "
},
{
  "id": "eg_model_rref",
  "level": "2",
  "url": "s_ge.html#eg_model_rref",
  "type": "Example",
  "number": "1.3.14",
  "title": "Reduced row echelon form.",
  "body": " Reduced row echelon form  We continue our work in to reach a matrix in reduced row echelon form. . Notice that the resulting system is slightly simpler than the system in row echelon form of : .  "
},
{
  "id": "th_matrixforms",
  "level": "2",
  "url": "s_ge.html#th_matrixforms",
  "type": "Theorem",
  "number": "1.3.15",
  "title": "Row equivalent matrix forms.",
  "body": " Row equivalent matrix forms     Row echelon forms exist  Any matrix is row equivalent to a matrix in row echelon form. Indeed, Gaussian elimination row reduces any matrix to a matrix in row echelon form.    Reduced row echelon forms exist  Any matrix is row equivalent to a matrix in reduced row echelon form. Indeed, Gauss-Jordan elimination row reduces any matrix to a matrix in reduced row echelon form.    Reduced row echelon forms are unique  Any matrix is row equivalent to a unique matrix in reduced row echelon form.     "
},
{
  "id": "s_ge_ex_REFnotunique",
  "level": "2",
  "url": "s_ge.html#s_ge_ex_REFnotunique",
  "type": "Example",
  "number": "1.3.16",
  "title": "Row echelon form is not unique.",
  "body": " Row echelon form is not unique   Show that a matrix may be row equivalent to two or more matrices in row echelon form.    Take . This row reduces to using Gaussian elimination; and it row reduces further to using Gauss-Jordan elimination. Thus we see that is row equivalent to two different matrices in row echelon form. (According to , the matrix is the only matrix in reduced row echelon that is row equivalent to .)   "
},
{
  "id": "sage_ge",
  "level": "2",
  "url": "s_ge.html#sage_ge",
  "type": "Sage example",
  "number": "2",
  "title": "Gaussian elimination.",
  "body": " Gaussian elimination  In the first Sage cell below you find a recursive implementation of Gaussian elimination in Sage that includes explanatory comments. Evaluate this cell in order to load the row_echelon_form function. The second cell allows you to apply the Gaussian elimination algorithm to a matrix of your choosing. As you can see, the show function provides a nice latex version of the output.    Sage has its own row reduction method, rref , which transforms a matrix to reduced row echelon form. Let's compare the outputs of these two algorithms.   The following activities could be useful for implementing Gaussian elimination in a manner that shows all intervening steps. Use the empty Sage cell below to experiment.   Modify the row_echelon_form code to make a non-recursive algorithm.    Add show commands to your non-recursive version of row_echelon_form to show steps in the row reduction.      "
},
{
  "id": "s_ge_ex-1-2",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-1-2",
  "type": "Exercise",
  "number": "1.3.3.1",
  "title": "",
  "body": "   Determine if the matrix   is in echelon form, reduced row echelon form, or neither. Choose the most appropriate answer.  Answer:  select   echelon form   reduced row echelon form   not in echelon form  .        SOLUTION: Reduced row echelon form.       "
},
{
  "id": "s_ge_ex-1-3",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-1-3",
  "type": "Exercise",
  "number": "1.3.3.2",
  "title": "",
  "body": "    On the augmented matrix below , perform all three row operations in the order given, ((a) followed by (b) followed by (c)) and then write the resulting augmented matrix.                                                                                           "
},
{
  "id": "s_ge_ex-2-2-2",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-2-2",
  "type": "Exercise",
  "number": "1.3.3.3",
  "title": "",
  "body": "       The first nonzero term in the second row is not a one.   "
},
{
  "id": "s_ge_ex-2-2-3",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-2-3",
  "type": "Exercise",
  "number": "1.3.3.4",
  "title": "",
  "body": "       "
},
{
  "id": "s_ge_ex-2-2-4",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-2-4",
  "type": "Exercise",
  "number": "1.3.3.5",
  "title": "",
  "body": "       "
},
{
  "id": "s_ge_equivsys",
  "level": "2",
  "url": "s_ge.html#s_ge_equivsys",
  "type": "Exercise",
  "number": "1.3.3.6",
  "title": "",
  "body": "       First bring the system into standard form: . Then perform Gaussian elimination on the associated augmented matrix: . The corresponding equivalent system is .   "
},
{
  "id": "s_ge_ex-2-3-3",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-3-3",
  "type": "Exercise",
  "number": "1.3.3.7",
  "title": "",
  "body": "      "
},
{
  "id": "s_ge_ex-2-3-4",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-3-4",
  "type": "Exercise",
  "number": "1.3.3.8",
  "title": "",
  "body": "      "
},
{
  "id": "s_ge_ex-2-3-5",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-3-5",
  "type": "Exercise",
  "number": "1.3.3.9",
  "title": "",
  "body": "      "
},
{
  "id": "s_ge_ex-2-3-6",
  "level": "2",
  "url": "s_ge.html#s_ge_ex-2-3-6",
  "type": "Exercise",
  "number": "1.3.3.10",
  "title": "",
  "body": "      "
},
{
  "id": "s_solving",
  "level": "1",
  "url": "s_solving.html",
  "type": "Section",
  "number": "1.4",
  "title": "Solving linear systems",
  "body": " Solving linear systems   Let's continue with our model example . Summarizing the various steps, we have . The new system in row echelon form is undoubtedly simpler, but describing all of its solutions still requires some subtle analysis.    Model example continued  We begin by illustrating the general method for solving a linear system, continuing with our model example . A careful description of the procedure, along with a proof of its validity, is found in .  A key first step involves separating the variables of the system into free and leading variables.   Free and leading variables   variables  leading    variables  free    Let be a linear system in the unknowns , and let be its associated augmented matrix. Assume (and hence ) is in row echelon form.  The unknown is a leading variable if the corresponding column in (i.e., the -th column) contains a leading one; it is a free variable if the corresponding column in does not contain a leading one.     Free and leading variables   Let be the linear system in the unknowns with augmented matrix . Then are leading variables, since the first, second, and fourth columns of have leading ones, as indicated by the boxes. The variable is free since the third column of has no leading one.     Solving linear systems  In our model example we transformed the original system to the equivalent system below: . The free variables of are and ; the leading variables are , and . Observe that if we assign and , where and are any real numbers, then we are left with a system in three unknowns ( ) of the form . Using back-substitution, we see that the unknowns are then uniquely expressed in terms of and as Thus for any choice of real numbers and we get a unique solution of the form . We conclude the set of solutions to is given as Alternatively, we can describe the solutions to with the parametric equations  .    Mandate  parametric equations  Get used to describing solutions to linear systems using either the set notation format of or the parametric equation format of .  Note also the distinct roles played by free and leading variables in the description of solutions. We assign each free variable freely to any choice of real parameters ( and in our example), and then solve for the leading variables in terms of these parameters in a unique manner. In particular, the leading variables are completely determined by our assignment of free variables.     General method for solving linear systems  Before describing a precise algorithm for computing the set of solutions to a linear system, we must address the possibility that there are no solutions to the system whatsoever. Such a system is called inconsistent .   Consistent and inconsistent systems  consistent  inconsistent   A linear system is consistent if it has at least one solution; it is inconsistent if it has no solutions.    We are now in a position to describe an algorithm for computing the set of solutions of a linear system.   Solving linear systems   Let be a linear system in the unknowns , and let be the set of all solutions of . We compute as follows.    Step 1  Apply Gaussian elimination to reduce to an equivalent system in row echelon form.    Step 2  Let be the augmented matrix associated to . If the last column of has a leading one, then is inconsistent: , is the empty set. Otherwise, proceed to the next step.    Step 3  Determine which if any of the unknowns are free variables of .    Step 4  If there are no free variables, solve for each unknown using back-substitution. In this case, there is a unique solution to : , contains exactly one element.  Otherwise, let be the leading variables of , and let be the free variables. Back-substitution allows us to express each leading variable in terms of the free variables. In other words, we can write , where each is a linear expression in the free variables. Each solution of thus corresponds to a unique variable assignment of the form , where are any real numbers.       First recall that and have the same set of solutions ( ). So it suffices to show that the algorithm returns the correct set of solutions to .  Regarding consistency: if the last column of the augmented matrix associated to has a leading one in the -th row, then the corresponding equation in is Clearly this equation has no solutions, and hence the set of solutions to is empty.  Suppose now that the last column of does not have a leading one.   Case 1: no free variables   Suppose in Step 3 you determine that there are no free variables. Then each of the first columns of has a leading one in it. If follows that for each the -th equation of is of the form Since does not have a leading one in the last column, it follows that all equations beyond the -th equation are of the form , and as such may be disregarded since they are satisfied by any choice of the . The remaining system of equations in unknowns can be solved by back-substitution, yielding a unique solution of the form Do not concern yourself overly with the exact formulas. The important point here is that once we know there is a unique assignment of the variables that satisfies the system, allows us to solve for in terms of the the , . As such working our way up from the last equation, we find there is a unique solution to the system.     Case 2: free variables  Suppose now that are the leading variables of , and are the free variables. Again, since does not have a leading one in the last column, there are exactly nonzero equations in : one for each leading variable. After bringing any terms involving free variables to the right, the -th such equation takes the form . As in the previous case, back-substitution now allows us to solve for each leading variable as a function of the free variables: This new system of equations clearly has the same set of solutions as (and ), since it was obtained from by deleting zero rows of and using only addition and subtraction operations. Furthermore, it is clear that any assignment of the free variables extends uniquely to the solution of that further assigns . The idea behind uniqueness here, is that once you assign values to the free variables, the values of the leading variables are completely determined by the equations .  Lastly, we show that every solution of (and ) is obtained in this way. Suppose is a solution. According to the discussion above must be the unique solution to corresponding to the free variable assignment and corresponding leading variable assignment .     Video: solving linear systems    Video: solving linear systems  Video: solving linear systems       Video: solving linear systems    Video: solving linear systems 2  Video: solving linear systems 2       Solving linear systems  Sage has a number of means of solving systems of equations, both linear and nonlinear. In the cell below we compute the set of solutions to this section's working example. Note that the three equations are entered as a list.   Notice that the algorithm used here does not seem to follow the method we describe: the unknowns and are set as free parameters r1 and r2 , and the rest of the unknowns are expressed in terms of these. The solve routine in Sage allows for an additional option that selects a specific algorithm for solving the system. In the next cell, we specify the sympy algorithm and get an answer more in line with our example.   Now all unknowns are expressed in terms of the second and fourth unknowns and , which are treated as free variables, just as in our computed example.  Lastly, we can take a matrix approach with Sage to solve the system. Below we create the augmented matrix associated to our starting system and then reduce the system to reduced row echelon form using the rref method. From there it is a simple matter of assigning parameter names and using back-substitution, as described in . We will elaborate this method further in     In addition to providing a recipe for describing the full set of solutions to a linear system, also tells us that qualitatively this set must take one of three forms: the set is empty (inconsistent, no solutions); there is a unique solution (consistent, no free variables); there are infinitely many solutions (consistent, free variables). We record this fact, useful in its own right, as a corollary.   , , or -many solutions   Let be a linear system of equations, let be an equivalent system in row reduced form, and let be the augmented matrix associated to .  The system has either no solutions, exactly one solution, or infinitely many solutions. In more detail:    If has a leading one in its last column, then has no solutions.    If does not have a leading one in its last column and has no free variables, then has a unique solution.    If does not have a leading one in its last column and has a free variable, then has infinitely many solutions.      The decision tree in concisely summarizes the different cases articulated in .   Decision tree for number of solutions to a system  Decision tree for the number of solutions to a linear system with augmented matrix in row echelon form.       Consider the special case of a homogeneous system Such a system is always consistent. Why? Observe that is guaranteed to be a solution. Alternatively, it is easy to see that row reducing the system results in an augmented matrix whose last column is a zero column: a zero column certainly contains no leading ones. Thus, in the special case of a homogeneous system, boils down to the following result.   Solutions to homogeneous equations   Fix a homogeneous linear system in variables. There are two possibilities:   if all the variables are leading variables, then the system has a unique solution (i.e., solution);    if there is a free variable, then the system has infinitely many solutions.         Vector parametrization description  Consider again the solution set to the linear system in , which we described using parametric equations as , and using set building notation as . Using the vector space structure of , we can give yet another description of the general solution: . We will call this the vector parametrization description of the solution set. This description is obtained in steps by first breaking up the expression into a constant vector plus a vector involving the parameters and , and then rewriting the latter as a linear combination of two vectors with and as the coefficients: . The solution set of any consistent linear system can be described in this manner. In general, given a consistent system in unknowns with free variables, the general solution of the system is given by a vector parametrization of the form . The vector parametrization leads to a useful geometric understanding of the set of solutions to a linear system. The point can be thought of as a particular solution to the equation: the solution you obtain by choosing in . The general solution is then obtained by adding to the point any linear combination of the vectors .   Vector parametrization  Consider the linear equation . The corresponding augmented matrix of this equation is , which is already in row echelon form. Using , we see that the general solution is . This vector parametrization description allows us to visualize the plane with equation as the set of all points obtained by translating the point by various linear combinations of and . In this manner, the two vectors and determine a (non-rectangular) grid on .  Vector parametrization of plane    Vector parametrization of plane          WeBWork Exercises      Solve the following system using augmented matrix methods:  (a) The initial matrix is:              (b) First, perform the Row Operation . The resulting matrix is:              (c) Next, perform the operation . The resulting matrix is:              (d) Finish simplifying the augmented matrix to reduced row echelon form. The reduced matrix is:              (e) How many solutions does the system have? If infinitely many, enter \"Infinity\".  (f) What are the solutions to the system?  If there are no solutions, write \"No Solution\" or \"None\" for each answer. If there are infinitely many solutions let and solve for in terms of .                                                                                                                                                       Solve the following system using augmented matrix methods:  (a) The initial matrix is:                      (b) First, perform the Row Operation . The resulting matrix is:                      (c) Next, perform the operations   .  The resulting matrix is:                      (d) Finish simplifying the augmented matrix down to reduced row echelon form. The reduced matrix is:                      Remember: This matrix must be simplified all the way to reduced form.  (e) How many solutions does the system have? If infinitely many, enter \"Infinity\". If none, enter 0.  (f) What are the solutions of the system?        Note: In part (f), if there are no solutions, write \"No Solution\" or \"None\" in the answer blank after each equal sign. If there are infinitely many solutions, and the solution set describes a line (that is, if there is only one free variable), set and solve for the remaining variables in terms of . If there are infinitely many solutions, and the solution set describes a plane (that is, if the solution set has two free variables), set the variables and , and then solve for in terms of and .                                                                                                                                                                                                                                                                                Solve  = , = , = , = .                                Determine whether the following system has no solution, an infinite number of solutions or a unique solution.                        Written Exercises   Solving linear systems   Solve the following systems of equations.   When row reducing follow Gaussian elimination to the letter.    Make sure to indicate how variables are sorted into free and leading variables.    Express your answer in both the parametric equation format and set notation format.             We saw in that the system is equivalent to a system with augmented matrix . The row echelon matrix tells us that is the only free variable of . Back substitution then yields the parametric equation description: . Thus the set of solutions is .                                   For each system below determine all values of for which the system below has (a) no solutions, (b) a unique solution, and (c) infinitely many solutions.                Show that a linear system with more unknowns than equations has either 0 solutions or infinitely many solutions.       True or false. If true, provide a proof; if false, provide an explicit counterexample.    Every matrix has a unique row echelon form.    Any homogeneous linear system with more unknowns than equations has infinitely many solutions.    If a homogeneous linear system of equations in unknowns has a corresponding augmented matrix with a reduced row echelon form containing leading ones, then the linear system has the unique solution .    All leading ones in of a matrix in row echelon form must occur in distinct columns.    If the reduced row echelon form of the augmented matrix for a linear system has a zero row, then the system must have infinitely many solutions.    If a linear system has more unknowns than equations, then it must have infinitely many solutions.        Interpret each matrix below as an augmented matrix of a linear system. Asterisks represent an unspecified real number. For each matrix, determine whether the corresponding system is consistent or inconsistent. If the system is consistent, decide further whether the solution is unique or not. If there is not enough information answer inconclusive and back up your claim by giving an explicit example where the system is consistent, and an explicit example where the system is inconsistent.                            What condition must and satisfy in order for the system below to be consistent? Express your answer as an equation involving and .       Solve the system of equations below for , , and .     First replace the given nonlinear system with a linear one using a change of variable substitution.      If is a matrix with three rows and five columns, then what is the maximum possible number of leading ones in its reduced row echelon form? Justify your answer.  Provide an explicit example of a matrix that attains this maximum number of leading ones.      If is a matrix with three rows and six columns, then what is the maximum possible number of free variables in the general solution of the linear system with augmented matrix ? Justify your answer.  Provide an explicit example of a matrix that attains this maximal number of free variables.      If is a matrix with five rows and three columns, then what is the minimum possible number of zero rows in any row echelon form of ?  Provide an explicit example of a matrix that attains this minimal number of zero rows.      "
},
{
  "id": "d_free-leading",
  "level": "2",
  "url": "s_solving.html#d_free-leading",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Free and leading variables.",
  "body": " Free and leading variables   variables  leading    variables  free    Let be a linear system in the unknowns , and let be its associated augmented matrix. Assume (and hence ) is in row echelon form.  The unknown is a leading variable if the corresponding column in (i.e., the -th column) contains a leading one; it is a free variable if the corresponding column in does not contain a leading one.   "
},
{
  "id": "s_solving_eg_free-leading",
  "level": "2",
  "url": "s_solving.html#s_solving_eg_free-leading",
  "type": "Example",
  "number": "1.4.2",
  "title": "Free and leading variables.",
  "body": " Free and leading variables   Let be the linear system in the unknowns with augmented matrix . Then are leading variables, since the first, second, and fourth columns of have leading ones, as indicated by the boxes. The variable is free since the third column of has no leading one.   "
},
{
  "id": "eg_solving_system",
  "level": "2",
  "url": "s_solving.html#eg_solving_system",
  "type": "Example",
  "number": "1.4.3",
  "title": "Solving linear systems.",
  "body": " Solving linear systems  In our model example we transformed the original system to the equivalent system below: . The free variables of are and ; the leading variables are , and . Observe that if we assign and , where and are any real numbers, then we are left with a system in three unknowns ( ) of the form . Using back-substitution, we see that the unknowns are then uniquely expressed in terms of and as Thus for any choice of real numbers and we get a unique solution of the form . We conclude the set of solutions to is given as Alternatively, we can describe the solutions to with the parametric equations  .  "
},
{
  "id": "s_solving_rm_parametric",
  "level": "2",
  "url": "s_solving.html#s_solving_rm_parametric",
  "type": "Remark",
  "number": "1.4.4",
  "title": "Mandate.",
  "body": " Mandate  parametric equations  Get used to describing solutions to linear systems using either the set notation format of or the parametric equation format of .  Note also the distinct roles played by free and leading variables in the description of solutions. We assign each free variable freely to any choice of real parameters ( and in our example), and then solve for the leading variables in terms of these parameters in a unique manner. In particular, the leading variables are completely determined by our assignment of free variables.  "
},
{
  "id": "d_consistent",
  "level": "2",
  "url": "s_solving.html#d_consistent",
  "type": "Definition",
  "number": "1.4.5",
  "title": "Consistent and inconsistent systems.",
  "body": " Consistent and inconsistent systems  consistent  inconsistent   A linear system is consistent if it has at least one solution; it is inconsistent if it has no solutions.   "
},
{
  "id": "proc_solveSystem",
  "level": "2",
  "url": "s_solving.html#proc_solveSystem",
  "type": "Procedure",
  "number": "1.4.6",
  "title": "Solving linear systems.",
  "body": " Solving linear systems   Let be a linear system in the unknowns , and let be the set of all solutions of . We compute as follows.    Step 1  Apply Gaussian elimination to reduce to an equivalent system in row echelon form.    Step 2  Let be the augmented matrix associated to . If the last column of has a leading one, then is inconsistent: , is the empty set. Otherwise, proceed to the next step.    Step 3  Determine which if any of the unknowns are free variables of .    Step 4  If there are no free variables, solve for each unknown using back-substitution. In this case, there is a unique solution to : , contains exactly one element.  Otherwise, let be the leading variables of , and let be the free variables. Back-substitution allows us to express each leading variable in terms of the free variables. In other words, we can write , where each is a linear expression in the free variables. Each solution of thus corresponds to a unique variable assignment of the form , where are any real numbers.     "
},
{
  "id": "ss_solveSystem-6",
  "level": "2",
  "url": "s_solving.html#ss_solveSystem-6",
  "type": "Proof",
  "number": "1.4.2.1",
  "title": "",
  "body": " First recall that and have the same set of solutions ( ). So it suffices to show that the algorithm returns the correct set of solutions to .  Regarding consistency: if the last column of the augmented matrix associated to has a leading one in the -th row, then the corresponding equation in is Clearly this equation has no solutions, and hence the set of solutions to is empty.  Suppose now that the last column of does not have a leading one.   Case 1: no free variables   Suppose in Step 3 you determine that there are no free variables. Then each of the first columns of has a leading one in it. If follows that for each the -th equation of is of the form Since does not have a leading one in the last column, it follows that all equations beyond the -th equation are of the form , and as such may be disregarded since they are satisfied by any choice of the . The remaining system of equations in unknowns can be solved by back-substitution, yielding a unique solution of the form Do not concern yourself overly with the exact formulas. The important point here is that once we know there is a unique assignment of the variables that satisfies the system, allows us to solve for in terms of the the , . As such working our way up from the last equation, we find there is a unique solution to the system.     Case 2: free variables  Suppose now that are the leading variables of , and are the free variables. Again, since does not have a leading one in the last column, there are exactly nonzero equations in : one for each leading variable. After bringing any terms involving free variables to the right, the -th such equation takes the form . As in the previous case, back-substitution now allows us to solve for each leading variable as a function of the free variables: This new system of equations clearly has the same set of solutions as (and ), since it was obtained from by deleting zero rows of and using only addition and subtraction operations. Furthermore, it is clear that any assignment of the free variables extends uniquely to the solution of that further assigns . The idea behind uniqueness here, is that once you assign values to the free variables, the values of the leading variables are completely determined by the equations .  Lastly, we show that every solution of (and ) is obtained in this way. Suppose is a solution. According to the discussion above must be the unique solution to corresponding to the free variable assignment and corresponding leading variable assignment .   "
},
{
  "id": "vid_eg_GE1",
  "level": "2",
  "url": "s_solving.html#vid_eg_GE1",
  "type": "Example",
  "number": "1.4.7",
  "title": "Video: solving linear systems.",
  "body": " Video: solving linear systems    Video: solving linear systems  Video: solving linear systems     "
},
{
  "id": "vid_eg_GE2",
  "level": "2",
  "url": "s_solving.html#vid_eg_GE2",
  "type": "Example",
  "number": "1.4.9",
  "title": "Video: solving linear systems.",
  "body": " Video: solving linear systems    Video: solving linear systems 2  Video: solving linear systems 2     "
},
{
  "id": "sage_solve_system",
  "level": "2",
  "url": "s_solving.html#sage_solve_system",
  "type": "Sage example",
  "number": "3",
  "title": "Solving linear systems.",
  "body": " Solving linear systems  Sage has a number of means of solving systems of equations, both linear and nonlinear. In the cell below we compute the set of solutions to this section's working example. Note that the three equations are entered as a list.   Notice that the algorithm used here does not seem to follow the method we describe: the unknowns and are set as free parameters r1 and r2 , and the rest of the unknowns are expressed in terms of these. The solve routine in Sage allows for an additional option that selects a specific algorithm for solving the system. In the next cell, we specify the sympy algorithm and get an answer more in line with our example.   Now all unknowns are expressed in terms of the second and fourth unknowns and , which are treated as free variables, just as in our computed example.  Lastly, we can take a matrix approach with Sage to solve the system. Below we create the augmented matrix associated to our starting system and then reduce the system to reduced row echelon form using the rref method. From there it is a simple matter of assigning parameter names and using back-substitution, as described in . We will elaborate this method further in    "
},
{
  "id": "c_qualitative",
  "level": "2",
  "url": "s_solving.html#c_qualitative",
  "type": "Corollary",
  "number": "1.4.11",
  "title": "<span class=\"process-math\">\\(0\\text{,}\\)<\/span> <span class=\"process-math\">\\(1\\text{,}\\)<\/span> or <span class=\"process-math\">\\(\\infty\\)<\/span>-many solutions.",
  "body": " , , or -many solutions   Let be a linear system of equations, let be an equivalent system in row reduced form, and let be the augmented matrix associated to .  The system has either no solutions, exactly one solution, or infinitely many solutions. In more detail:    If has a leading one in its last column, then has no solutions.    If does not have a leading one in its last column and has no free variables, then has a unique solution.    If does not have a leading one in its last column and has a free variable, then has infinitely many solutions.     "
},
{
  "id": "fig_decision_tree",
  "level": "2",
  "url": "s_solving.html#fig_decision_tree",
  "type": "Figure",
  "number": "1.4.12",
  "title": "Decision tree for number of solutions to a system",
  "body": " Decision tree for number of solutions to a system  Decision tree for the number of solutions to a linear system with augmented matrix in row echelon form.     "
},
{
  "id": "s_solving_homogeneous",
  "level": "2",
  "url": "s_solving.html#s_solving_homogeneous",
  "type": "Corollary",
  "number": "1.4.13",
  "title": "Solutions to homogeneous equations.",
  "body": " Solutions to homogeneous equations   Fix a homogeneous linear system in variables. There are two possibilities:   if all the variables are leading variables, then the system has a unique solution (i.e., solution);    if there is a free variable, then the system has infinitely many solutions.      "
},
{
  "id": "s_solving-5-3",
  "level": "2",
  "url": "s_solving.html#s_solving-5-3",
  "type": "Example",
  "number": "1.4.14",
  "title": "Vector parametrization.",
  "body": " Vector parametrization  Consider the linear equation . The corresponding augmented matrix of this equation is , which is already in row echelon form. Using , we see that the general solution is . This vector parametrization description allows us to visualize the plane with equation as the set of all points obtained by translating the point by various linear combinations of and . In this manner, the two vectors and determine a (non-rectangular) grid on .  Vector parametrization of plane    Vector parametrization of plane      "
},
{
  "id": "s_solving_ex-1-2",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-1-2",
  "type": "Exercise",
  "number": "1.4.4.1",
  "title": "",
  "body": "    Solve the following system using augmented matrix methods:  (a) The initial matrix is:              (b) First, perform the Row Operation . The resulting matrix is:              (c) Next, perform the operation . The resulting matrix is:              (d) Finish simplifying the augmented matrix to reduced row echelon form. The reduced matrix is:              (e) How many solutions does the system have? If infinitely many, enter \"Infinity\".  (f) What are the solutions to the system?  If there are no solutions, write \"No Solution\" or \"None\" for each answer. If there are infinitely many solutions let and solve for in terms of .                                                                                                                                                  "
},
{
  "id": "s_solving_ex-1-3",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-1-3",
  "type": "Exercise",
  "number": "1.4.4.2",
  "title": "",
  "body": "    Solve the following system using augmented matrix methods:  (a) The initial matrix is:                      (b) First, perform the Row Operation . The resulting matrix is:                      (c) Next, perform the operations   .  The resulting matrix is:                      (d) Finish simplifying the augmented matrix down to reduced row echelon form. The reduced matrix is:                      Remember: This matrix must be simplified all the way to reduced form.  (e) How many solutions does the system have? If infinitely many, enter \"Infinity\". If none, enter 0.  (f) What are the solutions of the system?        Note: In part (f), if there are no solutions, write \"No Solution\" or \"None\" in the answer blank after each equal sign. If there are infinitely many solutions, and the solution set describes a line (that is, if there is only one free variable), set and solve for the remaining variables in terms of . If there are infinitely many solutions, and the solution set describes a plane (that is, if the solution set has two free variables), set the variables and , and then solve for in terms of and .                                                                                                                                                                                                                                                                           "
},
{
  "id": "s_solving_ex-1-4",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-1-4",
  "type": "Exercise",
  "number": "1.4.4.3",
  "title": "",
  "body": "    Solve  = , = , = , = .                           "
},
{
  "id": "s_solving_ex-1-5",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-1-5",
  "type": "Exercise",
  "number": "1.4.4.4",
  "title": "",
  "body": "    Determine whether the following system has no solution, an infinite number of solutions or a unique solution.                     "
},
{
  "id": "s_solving_ex-2-2-3",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-2-3",
  "type": "Exercise",
  "number": "1.4.4.5",
  "title": "",
  "body": "       We saw in that the system is equivalent to a system with augmented matrix . The row echelon matrix tells us that is the only free variable of . Back substitution then yields the parametric equation description: . Thus the set of solutions is .   "
},
{
  "id": "s_solving_ex-2-2-4",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-2-4",
  "type": "Exercise",
  "number": "1.4.4.6",
  "title": "",
  "body": "      "
},
{
  "id": "s_solving_ex-2-2-5",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-2-5",
  "type": "Exercise",
  "number": "1.4.4.7",
  "title": "",
  "body": "      "
},
{
  "id": "s_solving_ex-2-2-6",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-2-6",
  "type": "Exercise",
  "number": "1.4.4.8",
  "title": "",
  "body": "      "
},
{
  "id": "s_solving_ex-2-2-7",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-2-7",
  "type": "Exercise",
  "number": "1.4.4.9",
  "title": "",
  "body": "      "
},
{
  "id": "s_solving_ex-2-3",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-3",
  "type": "Exercise",
  "number": "1.4.4.10",
  "title": "",
  "body": "  For each system below determine all values of for which the system below has (a) no solutions, (b) a unique solution, and (c) infinitely many solutions.             "
},
{
  "id": "s_solving_ex-2-4",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-4",
  "type": "Exercise",
  "number": "1.4.4.11",
  "title": "",
  "body": "  Show that a linear system with more unknowns than equations has either 0 solutions or infinitely many solutions.    "
},
{
  "id": "s_solving_ex-2-5",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-5",
  "type": "Exercise",
  "number": "1.4.4.12",
  "title": "",
  "body": "  True or false. If true, provide a proof; if false, provide an explicit counterexample.    Every matrix has a unique row echelon form.    Any homogeneous linear system with more unknowns than equations has infinitely many solutions.    If a homogeneous linear system of equations in unknowns has a corresponding augmented matrix with a reduced row echelon form containing leading ones, then the linear system has the unique solution .    All leading ones in of a matrix in row echelon form must occur in distinct columns.    If the reduced row echelon form of the augmented matrix for a linear system has a zero row, then the system must have infinitely many solutions.    If a linear system has more unknowns than equations, then it must have infinitely many solutions.     "
},
{
  "id": "s_solving_ex-2-6",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-6",
  "type": "Exercise",
  "number": "1.4.4.13",
  "title": "",
  "body": "  Interpret each matrix below as an augmented matrix of a linear system. Asterisks represent an unspecified real number. For each matrix, determine whether the corresponding system is consistent or inconsistent. If the system is consistent, decide further whether the solution is unique or not. If there is not enough information answer inconclusive and back up your claim by giving an explicit example where the system is consistent, and an explicit example where the system is inconsistent.                         "
},
{
  "id": "s_solving_ex-2-7",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-7",
  "type": "Exercise",
  "number": "1.4.4.14",
  "title": "",
  "body": "  What condition must and satisfy in order for the system below to be consistent? Express your answer as an equation involving and .    "
},
{
  "id": "s_solving_ex-2-8",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-8",
  "type": "Exercise",
  "number": "1.4.4.15",
  "title": "",
  "body": "  Solve the system of equations below for , , and .     First replace the given nonlinear system with a linear one using a change of variable substitution.   "
},
{
  "id": "s_solving_ex-2-9",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-9",
  "type": "Exercise",
  "number": "1.4.4.16",
  "title": "",
  "body": "  If is a matrix with three rows and five columns, then what is the maximum possible number of leading ones in its reduced row echelon form? Justify your answer.  Provide an explicit example of a matrix that attains this maximum number of leading ones.   "
},
{
  "id": "s_solving_ex-2-10",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-10",
  "type": "Exercise",
  "number": "1.4.4.17",
  "title": "",
  "body": "  If is a matrix with three rows and six columns, then what is the maximum possible number of free variables in the general solution of the linear system with augmented matrix ? Justify your answer.  Provide an explicit example of a matrix that attains this maximal number of free variables.   "
},
{
  "id": "s_solving_ex-2-11",
  "level": "2",
  "url": "s_solving.html#s_solving_ex-2-11",
  "type": "Exercise",
  "number": "1.4.4.18",
  "title": "",
  "body": "  If is a matrix with five rows and three columns, then what is the minimum possible number of zero rows in any row echelon form of ?  Provide an explicit example of a matrix that attains this minimal number of zero rows.   "
},
{
  "id": "appendix-notation",
  "level": "1",
  "url": "appendix-notation.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation   "
},
{
  "id": "appendix-exercises",
  "level": "1",
  "url": "appendix-exercises.html",
  "type": "Appendix",
  "number": "B",
  "title": "Exercises",
  "body": " Exercises   "
},
{
  "id": "appendix-defs",
  "level": "1",
  "url": "appendix-defs.html",
  "type": "Appendix",
  "number": "C",
  "title": "Definitions",
  "body": " Definitions   "
},
{
  "id": "appendix-thms",
  "level": "1",
  "url": "appendix-thms.html",
  "type": "Appendix",
  "number": "D",
  "title": "Theory and procedures",
  "body": " Theory and procedures   "
},
{
  "id": "appendix-egs",
  "level": "1",
  "url": "appendix-egs.html",
  "type": "Appendix",
  "number": "E",
  "title": "Examples",
  "body": " Examples   "
},
{
  "id": "appendix-sage",
  "level": "1",
  "url": "appendix-sage.html",
  "type": "Appendix",
  "number": "F",
  "title": "Sage examples",
  "body": " Sage examples   "
},
{
  "id": "appendix-figures",
  "level": "1",
  "url": "appendix-figures.html",
  "type": "Appendix",
  "number": "G",
  "title": "Figures and video examples",
  "body": " Figures and video examples   "
},
{
  "id": "appendix-matnras",
  "level": "1",
  "url": "appendix-matnras.html",
  "type": "Appendix",
  "number": "H",
  "title": "Mantras and fiats",
  "body": " Mantras and fiats   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
