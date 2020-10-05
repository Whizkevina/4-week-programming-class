<!-- Creating a function -->
<script type="text/javascript">
    function myFunction()
    {
        document.write("This is a simple function.<br />");
    }
    // To call a function use the function-name not with the function keyword
      myFunction();
      myFunction();
      myFunction();
      myFunction();
      myFunction();
</script>

<!-- Function with argument -->
    <script type="text/javascript">
		var count = 0;
		function countVowels(name)
		{
			for (var i=0;i<name.length;i++)
			{
              if(name[i] == "a" || name[i] == "e" || name[i] == "i" || name[i] == "o" || name[i] == "u")
              count = count + 1;
			}
		document.write("Hello " + name + "!!! Your name has " + count + " vowels.");
		}
   	 	var myName = prompt("Please enter your name");
    	countVowels(myName);
    </script>
    

    <!-- Function with Return value -->
    <script type="text/javascript">
		function returnSum(first, second)
        {
          var sum = first + second;
          return sum;
        }
      var firstNo = 78;
      var secondNo = 22;
      document.write(firstNo + " + " + secondNo + " = " + returnSum(firstNo,secondNo));
	</script>