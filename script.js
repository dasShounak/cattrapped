if (window.history && window.history.pushState) {
  window.history.pushState("forward", null, "./#forward");

  window.addEventListener("popstate", function () {
    //alert("Back pressed!");
    downloadCatPhoto();
  });
}

const downloadCatPhoto = () => {
  let anchor = document.createElement("a");
  let index = Math.floor(Math.random() * 30);

  anchor.href = `./cats/${index}.jpg`;
  anchor.download = "";

  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
