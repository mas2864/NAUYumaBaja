import * as data from "../JSON/TeamMembers.json"
with {type:"json"};

let namesample="the name";
function sample(){
    memberList=document.getElementById("TeamMembListID");
    memberList.innerHTML="<div class='MemberCard'><h4 class='CardName'>"+namesample+"</h4></div>";
}

sample();
