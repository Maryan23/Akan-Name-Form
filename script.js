function generateName(){
    var date = document.getElementById('date').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var birthDay= new Date(year+ '/' +month + '/' + date);
    var dayOfWeek=birthDay.getDay();
    
    var genders = document.getElementById("gender");
    var gender = genders.options[genders.selectedIndex].text;


    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    

    if (Number(date) <=0 && Number(date)>31){
        document.getElementById("result").innerHTML="Please enter a valid date!"
    }
    else if(Number(month)<0 && Number(month)>12){
        alert("Please enter a valid month!")
    }
    else if((gender != "Female") && (gender != "Male")){
        alert("Please select gender!")
    }
    else if (gender === "Male"){
        document.getElementById("result").innerHTML="You were born on a "+ days[dayOfWeek]+" and "+" Your Akan name is "+maleName[dayOfWeek]
    }
    else if (gender === "Female"){
        document.getElementById("result").innerHTML="You were born on a "+days[dayOfWeek]+" and "+" Your Akan name is "+femaleName[dayOfWeek]
    }
    else{document.getElementById("result").innerHTML=" Please check your input! "}
 }