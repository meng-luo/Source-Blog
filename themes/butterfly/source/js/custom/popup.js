window.onload = function() {
    setTimeout(showPopup, 1000); // 2秒后显示弹窗
  };
  
  function showPopup() {
    var popupContainer = document.createElement("div");
    popupContainer.classList.add("popup-container");
  
    var popupContent = document.createElement("div");
    popupContent.classList.add("popup-content");
  
    var heading = document.createElement("h2");
    heading.textContent = "网址已经更新，是否跳转？";

    var yesButton = document.createElement("button");
    yesButton.textContent = "是";
    yesButton.onclick = redirectToNewWebsite;
    yesButton.classList.add("popup-button");
  
    var noButton = document.createElement("button");
    noButton.textContent = "否";
    noButton.onclick = closePopup;
    noButton.classList.add("popup-button");
  
    popupContent.appendChild(heading);
    popupContent.appendChild(yesButton);
    popupContent.appendChild(noButton);
  
    popupContainer.appendChild(popupContent);
    document.body.appendChild(popupContainer);
  
    popupContainer.style.display = "flex";
  }
  
  function redirectToNewWebsite() {
    window.location.href = "https://blog.dreamfall.cn";
  }
  
  function closePopup() {
    var popupContainer = document.querySelector(".popup-container");
    popupContainer.style.display = "none";
  }