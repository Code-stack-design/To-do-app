document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  const list = document.getElementById('taskList');
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  themeToggle.addEventListener('click', () => {
    const theme = root.getAttribute('data-theme') === 'dark' ? '' : 'dark';
    root.setAttribute('data-theme', theme);
    themeToggle.textContent = theme ? '☀️' : '🌙';
  });

  addBtn.addEventListener('click', addTask);

  function addTask() {
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    li.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;

    checkbox.addEventListener('change', () => {
      span.classList.toggle('completed', checkbox.checked);
    });

    const btn = document.createElement('button');
    btn.className = 'delete-btn';
    btn.innerHTML = '✖';
    btn.addEventListener('click', () => {
      li.classList.add('hide');
      setTimeout(() => li.remove(), 300);
    });

    li.append(checkbox, span, btn);
    list.appendChild(li);
    input.value = '';

    requestAnimationFrame(() => li.classList.add('show'));
  }
});
