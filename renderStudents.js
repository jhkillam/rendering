function renderStudents(students) {

    // this builds the full HTML that eventually ends up
    // passed to content.innterHTML at the end of the code
    function buildStudentsHTML(){
        
        // this iterates through the studentsAbstraction object
        // and checks whether the student is present or absent.
        // The result is stored in studentReturnArray
        function buildStudentList(obj){
            let className = "";
            let presentText = "";
            if (obj.isPresent) {
                className = "studentPresent";
                presentText = "Present";
            } else {
                className = "studentAbsent";
                presentText = "Absent";
            }

            return `
                <div class="studentContainer ${className}">
                    <p class="studentNameText">${obj.name}</p>
                    <p>${presentText}</p>
                </div>`
        }

        // This is where the buildStudentList function is called
        // and subsequently stored in studentReturnArray
        let studentReturnArray = students.map(buildStudentList);
        
        // This is the final return value for this exercise where the 
        // parent container is created, then the list of students
        // created with function buildStudentList is inserted within
        // that parent container
        return `
            <div class="text-center mt-5">
                <div class="studentRollContainer">
                    <h1>Roll Call!</h1>` + studentReturnArray.join("") + `
                </div>
            </div>`
                    
    }

    return buildStudentsHTML();

    // let studentReturnString = buildStudentsHTML();
    
    // return studentReturnString;

}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}