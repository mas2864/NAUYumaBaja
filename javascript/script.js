import * as data from '../JSON/members.json' with { type: 'json' };
console.log(data);
function sample(){
    let memberList= document.getElementById("TeamMembListID");
    memberList.innerHTML="<div class='MemberCard'><h4 class='CardName'>"+"sample"+"</h4></div>";
}

sample();

