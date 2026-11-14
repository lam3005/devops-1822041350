const versionButton = document.querySelector("#version-button");
const versionOutput = document.querySelector("#version");

versionButton.addEventListener("click", () => {
  versionOutput.textContent = "Phiên bản 2.0";
});
