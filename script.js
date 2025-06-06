const toggleBtn = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", (event) => {
  event.preventDefault(); // ✅ Only prevents the eye icon button's default action

  const isPassword = passwordInput.getAttribute("type") === "password";
  passwordInput.setAttribute("type", isPassword ? "text" : "password");

  icon.classList.toggle("bx-show");
  icon.classList.toggle("bx-hide");
});
