(function () {
  var KEY = "y11bs";
  var TOKEN = "nc-123456";
  if (localStorage.getItem(KEY) === TOKEN) return;
  try {
    sessionStorage.setItem("y11bs-next", location.href);
  } catch (e) {}
  var dest = location.pathname.indexOf("/topics/") !== -1 ? "../../login.html" : "login.html";
  location.replace(dest);
})();
