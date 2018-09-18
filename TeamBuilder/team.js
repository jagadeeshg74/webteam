window.onload= function(){

team=[];

//{ name: "John", age: 31, city: "New York" };
member1= { name:"Sasee"  ,
          dob :"21/3/1988" ,
          grade: 5 , 
          skill:"Power BI,web app",
          place:"chennai" };
member2= { name:"Jayakumar"  , dob :"15/7/1989" , grade: 5 , skill:"Power BI,web app",place:"chennai" };
member3= { name:"Sasee"  , dob :"21/3/1988" , grade: 5 , skill:"Power BI,web app",place:"chennai" };
member4= { name:"Jayakumar"  , dob :"15/7/1989" , grade: 5 , skill:"Power BI,web app",place:"chennai" };

team.push(member1);
team.push(member2);
team.push(member3);
team.push(member4);
    
    displayGrid();
    
}




function displayGrid(){
    
   var innerHTML='<div class="card-deck">'; 
          
     for (var i=0 ; i<team.length ; i++){
         innerHTML+=' <div class="card bg-light">';
    innerHTML+= '<img class="img-thumbnail" src="./images/img_avatar1.png" height="50px" alt="Card image">';
    innerHTML+= '<div class="card-body text-center">';
    innerHTML+= 'Name :'+'<strong>'+ team[i].name  +'</strong><br>';
    innerHTML+= 'DateOfBirth :<strong>'+ team[i].dob+ '</strong><br>';
    innerHTML+= 'Grade :<strong>'+ team[i].grade+ '</strong><br>';
    innerHTML+='</div> </div>'  ;  
     }
    
    innerHTML+='</div>'; 
  

   document.getElementById("teamlist").innerHTML=innerHTML;

     
    
}