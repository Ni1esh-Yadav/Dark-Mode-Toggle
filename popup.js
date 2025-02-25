document.getElementById("toggleDarkMode").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: toggleDarkMode,
    });
  });
});

function toggleDarkMode() {
  let darkModeStyle = document.getElementById("dark-mode-style");
  if (darkModeStyle) {
    darkModeStyle.remove();
  } else {
    darkModeStyle = document.createElement("style");
    darkModeStyle.id = "dark-mode-style";
    darkModeStyle.innerText =
      "body { background-color: black !important; color: white !important; }";
    document.head.appendChild(darkModeStyle);
  }
}
