const studentResults = [
    {roll_number: '271238', Name: 'Muhammad Umair Khan ', htmlMarks: "30/28", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '270914', Name: 'Muhammad Junaid Khan', htmlMarks: "30/27", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '254515', Name: 'Muhammad Ibrahim', htmlMarks: "30/27", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '265574', Name: 'Areeb Khan Anwar', htmlMarks: "30/26", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '254684', Name: 'Asad Ullah ', htmlMarks: "30/25", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '265887', Name: 'Azeem Shahid ', htmlMarks: "30/25", cssmarks: "", jsmarks: "22/35"},
    {roll_number: '255284', Name: 'Ahmed Ali ', htmlMarks: "30/25", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '259144', Name: 'Abdul moiz', htmlMarks: "30/25", cssmarks: "", jsmarks: "27/35 "},
    {roll_number: '260679', Name: 'ABDUL MUIZZ', htmlMarks: "30/25", cssmarks: "", jsmarks: "31/35"},
    {roll_number: '252944', Name: 'Muhammad Faizan', htmlMarks: "30/24", cssmarks: "", jsmarks: "25/35"},
    {roll_number: '257764', Name: 'M Rehan Shahid', htmlMarks: "30/24", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '260682', Name: 'Affan Ali ', htmlMarks: "30/24", cssmarks: "", jsmarks: "31/35 "},
    {roll_number: '257410', Name: 'Muhammad Bilal', htmlMarks: "30/24", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '265416', Name: 'Abdullah', htmlMarks: "30/24", cssmarks: "", jsmarks: "22/35"},
    {roll_number: '269521', Name: 'imtiaz', htmlMarks: "30/23", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '264939', Name: 'Shahab Ali', htmlMarks: "30/23", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '268417', Name: 'Ali salahuddin', htmlMarks: "30/23", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '267133', Name: 'Muhammad Mustafa Hussain', htmlMarks: "30/23", cssmarks: "", jsmarks: "27/35"},
    {roll_number: '265599', Name: 'Musab Bin Ahsan', htmlMarks: "30/23", cssmarks: "", jsmarks: "23/35"},
    {roll_number: '258496', Name: 'Zaid Ullah Shirazi', htmlMarks: "30/23", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '274750', Name: 'Ahnaf Hafeez', htmlMarks: "30/23", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '286820', Name: 'Mohsnain raza', htmlMarks: "30/23", cssmarks: "", jsmarks: "23/35"},
    {roll_number: '286819', Name: 'hassnainbaloch ', htmlMarks: "30/23", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '272187', Name: 'Hafiz sharim sohail', htmlMarks: "30/23", cssmarks: "", jsmarks: "21/35"},
    {roll_number: '255275', Name: 'Muhammad Moosa', htmlMarks: "30/23", cssmarks: "", jsmarks: "19/35"},
    {roll_number: '265627', Name: 'Hasnain Ali', htmlMarks: "30/22", cssmarks: "", jsmarks: "26/35"},
    {roll_number: '261728', Name: 'MUHMMAD SHAHZAD', htmlMarks: "30/22", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '267927', Name: 'Adnan Asghar', htmlMarks: "30/21", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '261523', Name: 'Muhammad Aman ul haq khan', htmlMarks: "30/21", cssmarks: "", jsmarks: "20 / 35"},
    {roll_number: '269662', Name: 'huzaifa ahmed ', htmlMarks: "30/21", cssmarks: "", jsmarks: "25/35"},
    {roll_number: '269504', Name: 'Arsalan Zaheer', htmlMarks: "30/21", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '271752', Name: 'SYED SHARIQAHMED', htmlMarks: "30/21", cssmarks: "", jsmarks: "13/35"},
    {roll_number: '261500', Name: 'Ubaid Raza', htmlMarks: "30/21", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '266865', Name: 'Abdul Hadi', htmlMarks: "30/20", cssmarks: "", jsmarks: "28/35"},
    {roll_number: '263630', Name: 'Mohammad Wasif', htmlMarks: "30/19", cssmarks: "", jsmarks: "26/35"},
    {roll_number: '255324', Name: 'syed muhammad huzaifa iqbal', htmlMarks: "30/19", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '265584', Name: 'Saleh Raza', htmlMarks: "30/16", cssmarks: "", jsmarks: "16/35"},
    {roll_number: '271551', Name: 'Asad Javed', htmlMarks: "30/16", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '259125', Name: 'elahibaksha', htmlMarks: "30/12", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '264807', Name: 'muhammad sohaib', htmlMarks: "30/10", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '264830', Name: 'muhammad abdullah', htmlMarks: "30/6", cssmarks: "", jsmarks: "Not Given"},
    {roll_number: '271965', Name: 'adeem', htmlMarks: "Not Given", cssmarks: "", jsmarks: "32/35"},
    {roll_number: '258317', Name: 'SYED ANAS', htmlMarks: "Not Given", cssmarks: "", jsmarks: "31/35"},
    {roll_number: '299695', Name: 'MUSTAFA PERVEZ', htmlMarks: "Not Given", cssmarks: "", jsmarks: "27/35"},
    {roll_number: '267832', Name: 'Muhammad', htmlMarks: "Not Given", cssmarks: "", jsmarks: "27/35"},
    {roll_number: '262365', Name: 'Muhammad Faizan Khan', htmlMarks: "Not Given", cssmarks: "", jsmarks: "25/35"},
    {roll_number: '258032', Name: 'Noor ul Hasan Siddique', htmlMarks: "Not Given", cssmarks: "", jsmarks: "24/35 "},
    {roll_number: '258595', Name: 'ather junaid siddique', htmlMarks: "Not Given", cssmarks: "", jsmarks: "23/35"},
    {roll_number: '265811', Name: 'syed saad zaidi ', htmlMarks: "Not Given", cssmarks: "", jsmarks: "21/35"},
    {roll_number: '265812', Name: 'syed anas zaidi', htmlMarks: "Not Given", cssmarks: "", jsmarks: "19/35"},
    {roll_number: '284822', Name: 'Hamdan', htmlMarks: "Not Given", cssmarks: "", jsmarks: "18/35"},
];

function getResult() {
    const roll_number = document.getElementById("rollNumber").value;
    const student = studentResults.find(student => student.roll_number === roll_number);
    let output;
    if(student){
       output = 
          `<p><strong>Roll Number:</strong> ${student.roll_number}</p>
           <p><strong>Name :</strong> ${student.Name}</p>
           <p><strong>HTML-Marks:</strong> ${student.htmlMarks}</p>
           <p><strong>JavaScript-Marks:</strong> ${student.jsmarks}</p>
           <p><strong>CSS-Marks:</strong>${student.cssmarks}</p>`}
    document.getElementById("result").innerHTML = output;
}   
