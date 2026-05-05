function populateList(AllMemb){
    let memberList= document.getElementById("TeamMembListID");
    let leadList= document.getElementById("TeamLeadListID");
    memberList.innerHTML="";//empties the list to remove sample cards
    leadList.innerHTML="";
    for(let i=0; i<AllMemb.length; i++){
        //Creates a card and places it in member ot leader list
        let memberCard= document.createElement("div");
        memberCard.className="MemberCard";
        if(AllMemb[i].TeamLeader){
            leadList.appendChild(memberCard);
        }
        else{
            memberList.appendChild(memberCard);
        }
        //Adds the picture of the member
        let memberPicture= document.createElement("img");
        memberPicture.className="CardPicture";
        memberPicture.src="./images/MemberPics/"+AllMemb[i].Picture;
        memberCard.appendChild(memberPicture);

        //Adds the name of the member
        let memberName= document.createElement("h4");
        memberName.className="CardName";
        memberName.innerHTML=AllMemb[i].Name;
        memberCard.appendChild(memberName);

        //Adds the team of the member
        let memberTeam= document.createElement("p");
        memberTeam.className="CardTeam";
        memberTeam.innerHTML=AllMemb[i].Team;
        memberCard.appendChild(memberTeam);

        if(AllMemb[i].Linkedin!="x"){
            //Adds the linkedin of the member
            let memberLink= document.createElement("a");
            memberLink.className="MemberLink";
            memberLink.href="https://"+AllMemb[i].Linkedin;
            memberLink.target="_blank";
            
            memberCard.appendChild(memberLink);

            let linkLogo= document.createElement("img");
            linkLogo.className="LinkLogo";
            linkLogo.src="./images/linkedin.png";
            memberLink.appendChild(linkLogo);
            memberLink.innerHTML+="LinkedIn";
        }
    }
}

async function populateMembers() {
    const requestURL1 =
        "JSON/members.json";
    const request1 = new Request(requestURL1);

    const response1 = await fetch(request1);
    const AllMembers = await response1.json();

    populateList(AllMembers.Members);
}
populateMembers();

function populateSpons(AllSpons){
    let SponsList= document.getElementById("SponsorID");
    SponsList.innerHTML="";//empties the list to remove sample cards
    for(let i=0; i<AllSpons.length; i++){

        //Creates a card border
        let SponsBorder=document.createElement("a");
        SponsBorder.href=AllSpons[i].Link;
        SponsBorder.target="_blank";
        SponsBorder.classList.add("SponsorBorder",AllSpons[i].Tier);
        SponsList.appendChild(SponsBorder);

        //Adds the Tier of the member
        let SponsorTier= document.createElement("div");
        SponsorTier.className="SponsorTier";
        SponsorTier.innerHTML=AllSpons[i].Tier;
        SponsBorder.appendChild(SponsorTier);

        //Creates a card and places it in member ot leader list
        let SponsCard= document.createElement("a");
        SponsCard.className="SponsorCard";
        SponsBorder.appendChild(SponsCard);

        //Adds the picture of the member
        let SponsorImage= document.createElement("img");
        SponsorImage.className="SponsorImage";
        SponsorImage.src="./images/Sponsors/"+AllSpons[i].Logo;
        SponsCard.appendChild(SponsorImage);

        //Adds a space
        let SponsorSpace=document.createElement("br");
        SponsCard.appendChild(SponsorSpace);

        //Adds the Name of the member
        let SponsorName= document.createElement("div");
        SponsorName.className="SponsorName";
        SponsorName.innerHTML=AllSpons[i].Name;
        SponsCard.appendChild(SponsorName);

    }
}

async function populateSponsors() {
    const requestURL2 =
        "JSON/sponsors.json";
    const request2 = new Request(requestURL2);

    const response2 = await fetch(request2);
    const AllSponsors = await response2.json();

    populateSpons(AllSponsors.Sponsors);
}

populateSponsors();



function populateGallery(){
    let Gallery= document.getElementById("GalleryID");
    Gallery.innerHTML="";

    for(let i=0;i<19;i++){
        //creates a card container for the anchor
        let GalleryContainer=document.createElement("a");
        GalleryContainer.className="GalleryContainer";
        GalleryContainer.href="./images/Gallery/"+i+".jpg";
        GalleryContainer.target="_blank";
        Gallery.appendChild(GalleryContainer);

        //creates the image element
        let GalleryImage=document.createElement("img");
        GalleryImage.className="GalleryImage";
        GalleryImage.id="GalleryImage"+i;
        GalleryImage.src="./images/Gallery/"+i+".jpg";
        GalleryContainer.appendChild(GalleryImage);
        let GalleryCheck=document.getElementById("GalleryImage"+i)
        
    }
}

populateGallery();