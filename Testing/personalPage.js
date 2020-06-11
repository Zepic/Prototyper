let thoughtsText = '';
function show(){
    document.getElementById('app').innerHTML = `
    <div class="thoughts">${thoughtsText}</div>
    <input type="text" onchange="personalNotes(this.value)">
    <div class="strenghts">${null}</div>
    `;
}
function personalNotes(personText){
    thoughtsText += personText;
    show()
}