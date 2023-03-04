// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count")
let saveEl = document.getElementById('save-el')
let count = 0

function increment() {
    count += 1
    countEl.innerHTML = count
}

function save() {
    let countLog = count + " - "
    saveEl.innerHTML += countLog
    count = 0
    countEl.innerHTML = 0
}


