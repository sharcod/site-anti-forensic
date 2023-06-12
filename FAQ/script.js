const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

var footer = document.createElement("footer");
footer.id = "myFooter";
var text = document.createTextNode("추가적인 문의는 다음 메일로 문의주세요.  test@mail.com");
footer.appendChild(text);

document.body.appendChild(footer);
