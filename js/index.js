function clickDetails(place) {
  const detailsDivs = document.getElementsByClassName("place-details");
  const showDetailDiv = document.getElementsByClassName("place-details "+place)[0]

  for (let i = 0; i < detailsDivs.length; i++) {
    if(detailsDivs[i] != showDetailDiv){
      detailsDivs[i].style.display = "none";
    }
  }


  if(showDetailDiv.style.display === "block"){
    showDetailDiv.style.display = "none";
  }else{
    showDetailDiv.style.display = "block";
  }
}
