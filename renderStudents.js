
function renderStudents(students) {
    
    function buildStudentsHTML(obj){

    return `
        <div class="text-center mt-5">
            <div style="height: 350px; width: 200px; border: 1px solid black">
                <h1>Roll Call!</h1>
                <div style="height: 50px; width: 175px; border: 1px solid black">
                    <p style="font-size: 2em">${obj.name}</p>
                </div>
            </div>
        </div>
    `

    }   

    let studentReturnArray = students.map(buildStudentsHTML);
    let studentReturnString = studentReturnArray.join("");
    return studentReturnString;
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