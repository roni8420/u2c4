// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",submitForm())



function submitForm(){

    var matcharr=JSON.parse(localStorage.getItem("schedule")) || []

  var matchObj={
     match: masaiForm.matchNum.value,
     teamA: masaiForm.teamA.value,
     teammB: masaiForm.teamB.value,
     date: masaiForm.date.value,
     place: masaiForm.venue.value,
    }
 
     matcharr.push(matchObj)
     console.log(matcharr)
     
     localStorage.setItem("schedule",JSON.stringify(matcharr));
 
}


