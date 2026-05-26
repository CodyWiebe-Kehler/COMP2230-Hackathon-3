//Questions and answers list
const answerOptions = [
    ["1.1 the answer is 4","1.2","1.3"],
    ["2.1","2.2","2.3"],
    ["3.1"]
];

const answerKey = [1,2,0];


const questionSections = document.querySelectorAll(".multiple-question")

//console.log(questionSections)

//for each section, add radio buttons for each answer
questionSections.forEach((section,sectionIndex) =>{
    //console.log(section)
    secDiv = section.querySelector(".multiple-button")
    //console.log(secDiv)
    //gets the answers array for this question based on index
    answers = answerOptions[sectionIndex]
    answers.forEach((answer,answerIndex) =>{
        //console.log(answer)
        //makes a radio button for each answer to this question
        newRadioButton = document.createElement("input")
        newRadioButton.setAttribute("type","radio")
        newRadioButton.setAttribute("name",sectionIndex)
        newRadioButton.setAttribute("value",answers[answerIndex])
        newRadioButton.setAttribute("id",`Question:${sectionIndex} Answer: ${answerIndex}`)

        //makes an associated label for each question
        newLabel = document.createElement("label")
        newLabel.setAttribute("for",`Question:${sectionIndex} Answer: ${answerIndex}`)
        newLabel.textContent = answers[answerIndex]

        //appends radio button and label to a group 
        questionDiv = document.createElement("div")
        questionDiv.appendChild(newRadioButton)
        questionDiv.appendChild(newLabel)

        secDiv.appendChild(questionDiv)
        console.log(secDiv)
    })
})