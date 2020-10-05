<!-- IF Statement example -->
<script type="text/javascript">
    var age = prompt("Please enter your age");
    if(age>=18)
    document.write("You are an adult <br />");
    if(age<18)
    document.write("You are NOT an adult <br />");
</script>


<!-- IF..Else statement example -->
<script type="text/javascript">
    // Get the current hours
    var hours = new Date().getHours();
    if(hours<12)
    document.write("Good Morning!!!<br />");
    else
    document.write("Good Afternoon!!!<br />");
</script>

<!-- IF..Else-if..Else statment example -->
<script type="text/javascript">
    var one = prompt("Enter the first number");
    var two = prompt("Enter the second number");
    one = parseInt(one);
    two = parseInt(two);
    if (one == two)
        document.write(one + " is equal to " + two + ".");
    else if (one<two)
        document.write(one + " is less than " + two + ".");
    else
        document.write(one + " is greater than " + two + ".");
</script>
