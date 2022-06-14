var nameOfStudentArray = [];

function submit(){
    var displayStudentArray = [];
    
    for(var j=1; j<=4; j++){
        var nameOfStudent = document.getElementById("name_of_the_student_"+j).value;
        console.log(nameOfStudent);
        nameOfStudentArray.push(nameOfStudent);
    }
    console.log(nameOfStudentArray);

    var lengthOfNameOfStudentArray = nameOfStudentArray.length;
    console.log(lengthOfNameOfStudentArray);

    for(var k=0; k<lengthOfNameOfStudentArray; k++){
        displayStudentArray.push("<h4> Name: "+nameOfStudentArray[k]+"</h4>");
        console.log(displayStudentArray);
    }

    console.log(displayStudentArray);
    document.getElementById("display_name_with_commas").innerHTML = displayStudentArray;

    var remove_commas = displayStudentArray.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting(){
    nameOfStudentArray.sort();
    console.log(nameOfStudentArray);

    var displayStudentArraySorting = [];

    var lengthOfNameOfStudentArray = nameOfStudentArray.length;
    console.log(lengthOfNameOfStudentArray);

    for(var k=0; k<lengthOfNameOfStudentArray; k++){
        displayStudentArraySorting.push("<h4> Name: "+nameOfStudentArray[k]+"</h4>");
        console.log(displayStudentArraySorting);
    }

    var remove_commas = displayStudentArraySorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}