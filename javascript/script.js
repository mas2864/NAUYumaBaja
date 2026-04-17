async function fetchData() {
  try {
    const response = await fetch("./JSON/TeamMembers.json"); // Path to your file
    if (!response.ok) throw new Error("Network response was not ok");
    const membList = await response.json(); // Parses JSON into a JS object
    console.log(membList);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchData();

function getMemberList(askfor){
    if(askfor=="leaders"){
        var lookfor=true;
        var memberList = document.getElementById("TeamLeadListID");
    }
    else{
        var lookfor=false;
        var memberList = document.getElementById("TeamMembListID");
    }
    memberList.innerHTML = ""; //cleans current content
    
    for (let i = 0; i < data.length; i++) {
        if(data[i].TeamLeader==lookfor){
            
        }
    }

}