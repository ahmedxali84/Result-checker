const studentResults = {
    "271965":{Name: "Adeem Amir", Percentage:"32" / 35 * 100 , Marks:"32",  Status:"Excellent"},
    "258317":{Name: "Syed Anus", Percentage:"31" / 35 * 100,Marks:"31" , Status:"Excellent"},
    "260679":{Name: "Abdul Muizz", Percentage:"31" / 35 * 100,Marks:"31", Status:"Excellent"},
    "260682":{Name: "Affan Ali", Percentage:"31" / 35 * 100, Marks:"31", Status:"Excellent"},
    "266865":{Name: "Abdul Hadi", Percentage:"28" / 35 * 100, Marks:"28", Status:"Good"},
    "299695":{Name: "Mustufa Pervez", Percentage:"27" / 35 * 100, Marks:"27",Status:"Passed"},
    "267832":{Name: "Muhammad", Percentage:"27" / 35 * 100, Marks:"27",Status:"Passed"},
    "267133":{Name: "Muhammad Mustafa Hussain", Percentage:"27" / 35 * 100, Marks:"27",Status:"Passed"},
    "259144 ":{Name: "Abdul Moiz", Percentage:"27" / 35 * 100, Marks:"27",Status:"Passed"},
    "263630":{Name: "Mohammad Wasif", Percentage:"26" / 35 * 100, Marks:"26",Status:"Passed"},
    "265627 ":{Name: "Hasnain Ali", Percentage:"26" / 35 * 100, Marks:"26",Status:"Passed"},
    "262365":{Name: "Muhammad Faizan Khan", Percentage:"25" / 35 * 100, Marks:"25",Status:"Passed"},
    "252944":{Name: "Muhammad Faizan", Percentage:"25" / 35 * 100, Marks:"25",Status:"Passed"},
    "269662":{Name: "Huzaifa", Percentage:"25" / 35 * 100, Marks:"25",Status:"Passed"},
    "258032":{Name: "Noor ul Hasan Siddique", Percentage:"24" / 35 * 100, Marks:"24",Status:"Passed"},
    "265599":{Name: "Musab Bin Ahsan", Percentage:"23" / 35 * 100, Marks:"23",Status:"Passed"},
    "258595":{Name: "ather junaid siddique", Percentage:"23" / 35 * 100, Marks:"23",Status:"Passed"},
    "286820":{Name: "Mohsnain Raza", Percentage:"23" / 35 * 100, Marks:"23",Status:"Passed"},
    "265416":{Name: "Abdullah", Percentage:"22" / 35 * 100, Marks:"22",Status:"Passed"},
    "265887":{Name: "Azeem Shahid", Percentage:"22" / 35 * 100, Marks:"22",Status:"Passed"},
    "272187":{Name: "Hafiz sharim sohail", Percentage:"21" / 35 * 100, Marks:"21",Status:"Need Improvement"},
    "265811":{Name: "syed saad zaidi", Percentage:"21" / 35 * 100, Marks:"21",Status:"Need Improvement"},
    "261523":{Name: "Aman ul haq", Percentage:"20" / 35 * 100, Marks:"20",Status:"Need Improvement"},
    "255275":{Name: "Muhammad Moosa", Percentage:"19" / 35 * 100, Marks:"19",Status:"Need Improvement"},
    "265812":{Name: "syed anas zaidi ", Percentage:"19" / 35 * 100, Marks:"19",Status:"Need Improvement"},
    "284822 ":{Name: "Hamdan", Percentage:"18" / 35 * 100, Marks:"18",Status:"FAIL"},
    "265584":{Name: "Saleh Raza", Percentage:"16" / 35 * 100, Marks:"16",Status:"FAIL"},
    "271752":{Name: "syed shariq ahmed", Percentage:"13" / 35 * 100, Marks:"13",Status:"FAIL"},
};

function getResult() {
    const rollNumber = document.getElementById('rollNumber').value;
    const resultDiv = document.getElementById('result');
    
    const result = studentResults[rollNumber];
    
    if (result) {
        totalMarks = result
        const average = result.Percentage 

        
        resultDiv.innerHTML = `
            <h2>Results for Roll Number: ${rollNumber}</h2>
            <p><strong>Name:</strong> ${result.Name} </p> 
            <p><strong>Percentage:</strong> ${result.Percentage}%</p>
            <p><strong>Marks Obtained:</strong> ${result.Marks}</p>
            <p><strong>STATUS:</strong> ${result.Status}</p>
        `;
    } else {
        resultDiv.innerHTML = "<p>Roll number not found.</p>";
    }
}
