// frontend/js/dashboard.js
const token = localStorage.getItem("token");
if (!token) window.location.href = "login.html";

fetch("https://your-backend-api-url.com/api/user", {
  headers: { Authorization: `Bearer ${token}` },
})
  .then(res => res.json())
  .then(data => {
    document.getElementById("userData").innerHTML = `
      <p>Name: ${data.name}</p>
      <p>Email: ${data.email}</p>
    `;
  })
  .catch(() => {
    alert("Please login again");
    localStorage.removeItem("token");
    window.location.href = "login.html";
  });

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "login.html";
});
