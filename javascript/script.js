let jsonData={};
function loadJson() {
  fetch("../JSON/TeamMembers.json").then(response => response.json()).then(data =>
    {
      // store json data in jsonData
      jsonData = data.Members;
    }
  )
}
let namesample="the name";
let memberList=[];

function sample(){
    memberList=document.getElementById("TeamMembListID");
    memberList.innerHTML="<div class='MemberCard'><h4 class='CardName'>"+jsonData[1[.Name+" aa</h4></div>";
}

sample();
loadJson();


