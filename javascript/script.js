import * as data from '../JSON/members.json' with { type: 'json' };
console.log(data);
let samplename="sombrero";
function sample(samplename){
    let memberList= document.getElementById("TeamMembListID");
    memberList.innerHTML="<div class='MemberCard'><h4 class='CardName'>"+samplename+"</h4></div>";
}

sample(samplename);

