const preventBack = () => {
  window.history.forward();
  downloadCatPhoto();
};

setTimeout("preventBack()", 0);
window.onunload = () => {
  null;
};

const downloadCatPhoto = () => {
  let anchor = document.createElement("a");
  let index = Math.floor(Math.random() * 30);

  anchor.href = `/cats/${index}.jpg`;
  anchor.download = "cat.jpg";

  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};
