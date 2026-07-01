(function () {
  var yearEls = document.querySelectorAll("[data-year]");
  var year = String(new Date().getFullYear());
  for (var i = 0; i < yearEls.length; i++) {
    yearEls[i].textContent = year;
  }
})();
