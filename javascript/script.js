function loadJson() {
  fetch("../json/TeamMembers.json").then(response => response.json()).then(data =>
    {
      // store json data in jsonData
      jsonData = data;
    }
  )
}

let namesample="the name";
let memberList=[];

function sample(){
    memberList=document.getElementById("TeamMembListID");
    memberList.innerHTML="<div class='MemberCard'><h4 class='CardName'> Hola </h4></div>";
}

sample();
