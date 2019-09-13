var exploreElementArray = document.getElementsByClassName("explore");
var exploreElement = exploreElementArray[0];

exploreElement.addEventListener('mouseover', () => {
    exploreElement.textContent = exploreElement.textContent.toUpperCase();
  });