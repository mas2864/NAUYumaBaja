async function getData(){
    const requestURL="../JSON/members.json";
    const request=new Request(requestURL);
    const response=await fetch(request);
    const jsonData=await response.json();
    console.log(jsonData);
    sample(jsonData);
}
getData();
let memberList=[];
function sample(data=jsonData){
    memberList=document.getElementById("TeamMembListID");
    memberList.innerHTML="<div class='MemberCard'><h4 class='CardName'>"+data[1].Name+" aa</h4></div>";
}



