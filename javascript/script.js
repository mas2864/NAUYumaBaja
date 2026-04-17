async function fetchData() {
  try {
    const response = await fetch("./JSON/TeamMembers.json"); // Path to your file
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json(); // Parses JSON into a JS object
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchData();

function getMemberList(askfor){
    if(askfor=="leaders"){
        var lookfor=true;
    }
    else{
        var lookfor=false;
    }
    const memberList = document.getElementById("TeamList");
}