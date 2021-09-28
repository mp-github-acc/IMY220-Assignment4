console.log('script.js file');
var $count=0;
//CHANGE EDIT BUTTONS BACK
$('.btn').on('click', function(event) {

// console.log(this.innerHTML);
// console.log(this.siblings);
// if(this.innerHTML="Edit")
	onButtonClick(this, event);
});



function onButtonClick(element,event){
	var buttonArray=$('button');
	var spanArray=$('span');
	var index, button, contents, span;
	var name="<b>Name: </b>";
	var surname="<b>Surname: </b>";
	var email="<b>Email: </b>";
	var birthdate="<b>Birth date: </b>";
	var newContents;

	for(var i=0;i<buttonArray.length;i++)
	{
		if(element==buttonArray[i])//this
		{
			index=i;
		}
	}

	button=$('button')[index];
	button.innerHTML="Update";
	span=$('span')[index];
	contents=span.innerHTML;
	console.log(contents);

	if(index==0){//name
		$('span:eq(0)').hide();
		$('div.details:eq(0)').append('<input type="text" class="col-6" id="name" value= "'+contents+'"></input>');
		$('button:eq(0)').on('click', function() {
			if(button.innerHTML=="Update"){
				newContents=$('#name').value;
				console.log($('#name').value);
				$('div.details:eq(0)').empty();
				$('div.details:eq(0)').append(name);
				$('div.details:eq(0)').append("<span></span>");
				$('div.details:eq(0)').append(newContents);
				$('div.details:eq(0)').append('<button class="btn btn-dark pull-right" name="Edit">Edit</button>');
			}
	
		});
	}
	else if(index==1){//surname
		$('span:eq(1)').hide();
		$('div.details:eq(1)').append('<input type="text" class="col-6" id="surname" value= "'+contents+'"></input>');
		$('button:eq(1)').on('click', function() {
			if(button.innerHTML=="Update"){
				newContents=$('#surname').value;
				console.log($('#surname').value);
				$('div.details:eq(1)').empty();
				$('div.details:eq(1)').append(surname);
				$('div.details:eq(1)').append("<span></span>");
				$('div.details:eq(1)').append(newContents);
				$('div.details:eq(1)').append('<button class="btn btn-dark pull-right" name="Edit">Edit</button>');
			}
		
		});
	}
	else if(index==2){//email
		$('span:eq(2)').hide();
		$('div.details:eq(2)').append('<input type="email" class="col-6" id="email" value= "'+contents+'"></input>');
		$('button:eq(2)').on('click', function() {
			if(button.innerHTML=="Update"){
				newContents=$('#email').value;
				console.log($('#email').value);
				$('div.details:eq(2)').empty();
				$('div.details:eq(2)').append(email);
				$('div.details:eq(2)').append("<span></span>");
				$('div.details:eq(2)').append(newContents);
				$('div.details:eq(2)').append('<button class="btn btn-dark pull-right" name="Edit">Edit</button>');
			}
	
		});
	}
	else{//index==3 , bday
		$('span:eq(3)').hide();
		//13 April 2006
		//yyyy mm dd
		// var  months = ["January", "February", "March", "April",
		//  "May", "June", "July", "August", "September", "October", "November", "December"];
		//  var date=new Date();
		// var oldDate=contents;
		// console.log(date.getMonth())
		// var newDate=moment(oldDate, "DD MMMM YYYY")
		$('div.details:eq(3)').append('<input type="date" class="col-6" id="birthdate" value= ""></input>');
		$('button:eq(3)').on('click', function() {
			if(button.innerHTML=="Update"){
				newContents=$('#birthdate').value;
				console.log($('#birthdate').value);
				$('div.details:eq(3)').empty();
				$('div.details:eq(3)').append(birthdate);
				$('div.details:eq(3)').append("<span></span>");
				$('div.details:eq(3)').append(newContents);
				$('div.details:eq(3)').append('<button class="btn btn-dark pull-right" name="Edit">Edit</button>');
			}
	
		});
	}





	
	
	// let inputelement=$('',{
	// 	type: 'text'
	// });
	
	



	

	
	
	


}











	// if(index==0){
	// 	$('span:first').replaceWith(contents);
	// }
	// else if(index==1){
	// 	$('span:second').replaceWith(contents);
	// }
	// else if(index==2){
	// 	$('span:third').replaceWith(contents);
	// }
	// else if(index==3){
	// 	$('span:third').replaceWith(contents);
	// }