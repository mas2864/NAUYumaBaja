import * as data from '../JSON/members.json' with { type: 'json' };
console.log(data);
function sample(data){
    let memberList= document.getElementById("TeamMembListID");
    memberList.innerHTML="<div class='MemberCard'><h4 class='CardName'>"+data.Members[1].Name+"</h4></div>";
}

sample(data);

