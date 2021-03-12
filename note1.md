# Java Script Basic

<strong>This note taken from frontmaster course during learning "JavaScript:From fundamentat to functional v2</strong>

<h3>Objects</h3>

<ul>
<li>Assignment with dots</li>

   ```
     
      let person = {};

      person.name="zawzawwin";

      //person = {"name":"zawzawwin"};

   ```
<li>Asset with dots</li>

   ```

    var person = {};

    person.name = "zawzawwin";

    var who = person.name;

    who; //??

    person.name = "hareom";

    who; //??


   ```

<li>Arrays </li>

```
   
    var person = [];

    person.name = "zawzawwin";

    var who = person.name;

    typeof(who);//???

    //above will return object who can't check by using typeof() method 
    // There is a way to check this

    var check = Array.isarray(person);

    //it will return true
    //if you check to object it will return false
   
    var person[0] = "I am learning js";

    person.length; //1???

    person[1] = "It is fun";

    person.length; //2 


```
<li>Define array without with brackets</li>

```
    var person = [];

    person[taken] = "I am taken";

    //above line will get error if you want to fix it use "person.taken" instead of it.

    var taken ="status";

    person[taken] = "I am taken";


```

<li>The rules of using dots and brackets</li>

 |Type| Dots | Brackets
 |----|------|---------|
 |Sting|✅|✅|
 |Numbers|❌|✅|
 |quotations|❌|✅|
 |weird characters|❌|✅|
 |expressions|❌|✅|


 <li>Destructuring in Js<li>
[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

<li>Nesting </li>

   <ol>
      <li> .foreach loop</li>



</ul>
