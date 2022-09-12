let number =  prompt("Give me a number to play FizzBuzz");

for (var i = 0; i < number; i++) {

    if ( i % 3 == 0 ) {
        document.write("Fizz");
    } 
    else if ( i % 5 == 0) 
    {
        document.write("Buzz");
    }
    else if (i % 3 == 0 && i % 5 == 0) 
    {
        document.write("FizzBuzz");
    }
    else 
    {
        document.write(i);
    }
    document.write("<br>");
   /* document.write(i);
    document.write("<br>"); */
}

