const input = document.querySelector(".input-box input");
const button = document.querySelector(".input-box button");
const tasks = document.querySelector(".tasks");

button.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  tasks.innerHTML += `
    <div class="task">
      <input type="checkbox" />
      <p>${text}</p>
      <i class="fa-regular fa-trash-can"></i>
    </div>
  `;

  input.value = "";
});
