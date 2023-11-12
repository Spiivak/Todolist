'use strict'

var gUserInputs = []
console.log('gUserInputs', gUserInputs)

document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        collectAndRenderInput();
        clearInput()
    }
});

function collectInput() {
    const userInput = document.querySelector('input').value
    if (userInput === '' || userInput === undefined) return
    gUserInputs.push(userInput)
}

function clearInput() {
    document.querySelector('input').value = '';
}

function renderUserInput() {
    const elList = document.querySelector('.list')
    var strHtml = ''

    // if (!gUserInputs.length) return

    for (let i = 0; i < gUserInputs.length; i++) {
        strHtml += `<li><input type="checkbox" value="${gUserInputs[i]}"><span onclick="updateTask(this, ${i})">${gUserInputs[i]}</span></li>\n`
    }

    elList.innerHTML = strHtml
}

function collectAndRenderInput() {
    collectInput();
    renderUserInput();
}

function removeTodo() {
    const elCheckboxs = document.querySelectorAll('input[type="checkbox"]')
    var checkboxArr = []
    console.log(elCheckboxs)

    for (let i = 0; i < elCheckboxs.length; i++) {
        var currCheckBox = elCheckboxs[i]

        if (!currCheckBox.checked) {
            checkboxArr.push(gUserInputs[i])
        }
    }
    gUserInputs = checkboxArr
    renderUserInput()
    console.log(gUserInputs)
}


function updateTask(elTask, index) {

    var newInput = prompt(`${elTask.textContent}`)
    gUserInputs.splice(index, 1)
    elTask.innerText = newInput
    gUserInputs.push(newInput)
}

// function updateTask(elTask) {
//     var newInput = document.createElement('input');
//     newInput.type = 'text';

//     newInput.value = elTask.textContent;

//     // Replace the content of elTask with the input element
//     elTask.innerHTML = '';
//     elTask.appendChild(newInput);

//     // Focus on the input to allow the user to start typing
//     newInput.focus();

//     // Add an event listener for the Enter key to save changes
//     newInput.addEventListener('keydown', function (e) {
//         if (e.key === 'Enter') {
//             saveChanges(elTask, newInput.value);
//         }
//     });
// }

// function saveChanges(elTask, newValue) {
//     // Create a new span element with the updated value
//     var newSpan = document.createElement('span');
//     newSpan.textContent = newValue;

//     // Replace the content of elTask with the new span element
//     elTask.innerHTML = '';
//     elTask.appendChild(newSpan);

//     // Add the onclick event again
//     newSpan.addEventListener('click', function () {
//         updateTask(elTask);
//     });
// }
