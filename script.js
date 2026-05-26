//Questions and answers list
const answerOptions = [
    ["a.HMTL tag that do not do anything functional",
        "b.HTML tag that helps screen reader",
        "c.A type of poem"],
    ["a.body is the main content and head is the meta information",
        "b.body is the body and head is the head",
        "c.body has a heart and head has a brain"],
    ["a.navigation", 
        "b.see the element", 
        "c.contain links that help navigate the page"]
];

const answerKey = ["\n1.a.\n",
    "2.a.\n",
    "3.c\n"];


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

const submitButton = document.getElementById("submit-button")

submitButton.addEventListener("click", (e) => {
    alert(`The right answers:${answerKey}`);
    // test to see if it display the right answers
    console.log(`The right answers:${answerKey}`);
})