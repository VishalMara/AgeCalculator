const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function agecalculate(){
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);

    let birthMonth,birthDate, birthYear;

    let birthdetails= {
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();

    let currentMonth = today.getMonth()+1;

    let currentDate = today.getDate();

    leapChecker(currentYear);    

    if(
        birthdetails.year > currentYear ||
        (birthdetails.month > currentMonth && birthdetails.year == currentYear) || 
        (birthdetails.date > currentDate && birthdetails.month == currentMonth && birthdetails.year == currentYear)
    ){
        alert("Not Born Yet");
        displayResult("-","-","-");
        return;
    }
    birthYear = currentYear - birthdetails.year;

    if(currentMonth >= birthdetails.month){
        birthMonth = currentMonth - birthdetails.month;
    }
    else{
        birthYear--;
        birthMonth = 12 + currentMonth - birthdetails.month;
    }

    if(currentDate >= birthdetails.date){
        birthDate = currentDate - birthdetails.date;
    }
    else{
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthdetails.date;

        if(birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }
    // console.log(birthYear, birthMonth, birthDate)
    displayResult(birthDate, birthMonth, birthYear);
}

function displayResult(bDate, bMonth, bYear){
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;   
}
    
function leapChecker(year){
    if(year%4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] = 29;
    }        
    else{
        months[1] = 28;
    }
    // console.log(year, months[1]);
}

