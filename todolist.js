 function myFunction() {
         var x, text;

            // Get the value of the input field with id="myid"
          x = document.getElementById("myid").value;

              // If x is Not valid
             if (x=="") {
                         text = "Input not valid";
		                alert('Plese add an element');
						document.getElementById('lk').style.color = 'blue';
						document.getElementById("demo").style.color = "#ff0000";
						document.body.style.backgroundColor = "yellow";
						document.getElementById("demo").innerHTML = text;
		                return false;
                }  
				else  {
				document.getElementById("demo").style.color = "#7FFF00";
				document.getElementById('lk').style.color = "#7FFF00";
				document.body.style.backgroundColor = "gray";
              x = $('#myid').val();
               $("#todo-list").append(`<li class="list-item">${x}</li>`);

              
               

                    text = "Input OK";
    }
                    document.getElementById("demo").innerHTML = text;
					
					
					var liList = document.getElementById("todo-list").getElementsByTagName("li");

                    var largo = liList.length
					
	                document.getElementById("demo1").innerHTML = largo;
		            
					
					
	               return true;
}
		 $('#todo-list').on('click','li', function() {
       let selectedElement = $(this);

        selectedElement.hide(500);
   
   
        $('#done-list')
        .append($('<li></li>')
       .text(selectedElement.text()));
	   
	   var liList = document.getElementById("done-list").getElementsByTagName("li");

                    var Margo = liList.length
		
		            document.getElementById("demo2").innerHTML = Margo;
	   
	   });
	   
	   $('#done-list').on('click','li', function() {
        let selectedElement = $(this);

        selectedElement.hide(500);
   
   
        $('#todo-list')
       .append($('<li></li>')
       .text(selectedElement.text()));
   
    
     });

	