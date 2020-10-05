<!-- For loop example -->
<script type="text/javascript">
    var students = new Array("John", "Ann", "Aaron", "Edwin", "Elizabeth");
    document.write("<b>Using for loops </b><br />");
    for (i=0;i<students.length;i++)
    {
    document.write(students[i] + "<br />");
    }
</script>


<!-- While loop example -->
    <script type="text/javascript">
		document.write("<b>Using while loops </b><br />");
		var i = 0, j = 1, k;
		document.write("Fibonacci series less than 40<br />");
		while(i<40)
		{
			document.write(i + "<br />");
			k = i+j;
			i = j;
			j = k;
		}
    </script>
    
    <!-- do-while loop -->
    <script type="text/javascript">
		document.write("<b>Using do...while loops </b><br />");
		var i = 2;
		document.write("Even numbers less than 20<br />");
		do
		{
			document.write(i + "<br />");
			i = i + 2;
		}while(i<20)
	</script>
