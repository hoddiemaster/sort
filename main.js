StudentnameArray=[];

function submit(){
    var displaystudentArray=[];
   for (var j = 1; j <= 4; j++)
   {
       var studentname =document.getElementById("name_of_the_student_"+j).value;
        StudentnameArray.push(studentname);
   }
   console.log(StudentnameArray);
   for (var k = 0; k<StudentnameArray.length;k++){
       displaystudentArray.push("<h4>Name-"+StudentnameArray[k]+"</h4>");
   }
   document.getElementById("display_name_with_commas").innerHTML = displaystudentArray;
   var remove_commas = displaystudentArray.join(" ");
   document.getElementById("display_name_without_commas").innerHTML = displaystudentArray;
document.getElementById("submit_button").style.display = "none"; 
document.getElementById("sort_button").style.display = "inline-block";
}
function sorting (){
    StudentnameArray.sort();
    document.getElementById("display_name_without_commas").innerHTML=StudentnameArray;
}