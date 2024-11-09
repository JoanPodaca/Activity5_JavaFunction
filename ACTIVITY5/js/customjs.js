function displayName(name){
    alert("Your name is" + name);
    document.write("Your name is " + name);
    console.log("Your name is " + name);
}

function sumOfTwoNumbers(a,b, d){
    let c = a + b;
    document.getElementById(d).innerHTML = " The Sum of 2 numbers is:  " + c;
}

function product( a,b,c){
    document.getElementsByClassName(c)[0].innerHTML ="The product is: " +(a*b);
}

function inputTwoNumbers(){
    let num1 = parseFloat(prompt("Enter the First Number: "));
    let num2 = parseFloat(prompt("Enter the Second Number: "));
    let sum = num1 + num2;
    alert("The sum of the two numbers is: " + sum);
}

function inputGrade(){
    let name = prompt("Enter your Name: ");
    let totalScore = parseInt(prompt("Enter the TotalScore: "));
    let totalItem = parseInt(prompt("Enter the TotalItem: "));
    let compute = parseFloat((-4 * (totalScore/totalItem) + 5).toFixed(2));
    var remarks = checkRemarks(compute);

    if (compute <= 3.0) {
        ("Failed", remarks); 
    } else {
        ("Passed", remarks); 
    }


    

    return "Hello "+ name + " your grade is: " + compute + " and your remarks is: " + remarks;
   
}
   
function checkRemarks(grade){
    var remarks = (grade <= 3.0)? "Passed" : "Failed";
    return remarks;
}

function finalGrade(totalScore, totalItem, grade) {
    let compute = -4 * (totalScore / totalItem) + 5;
    
    document.getElementById(grade).innerHTML = "The Final Grade: " + compute.toFixed(2);
}

function finalRemarks(remarks, c) {
    document.getElementsByClassName(c)[0].innerHTML = "The Final Remarks is: " + remarks;
}

// Automatically update content when the page loads
window.onload = function() {
   
    finalRemarks('Passed', 'remarks' ); // Example remark: "Pass"
};


window.onload = function() {
    finalGrade(60, 100, "grade"); 
}        