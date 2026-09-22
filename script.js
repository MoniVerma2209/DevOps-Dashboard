// Simulate system metrics
function updateMetrics() {
  document.getElementById('cpu').textContent = Math.floor(Math.random() * 100) + "%";
  document.getElementById('memory').textContent = Math.floor(Math.random() * 100) + "%";
  document.getElementById('disk').textContent = Math.floor(Math.random() * 100) + "%";
}

// Simulate logs
function addLog() {
  const logs = document.getElementById('logs');
  const timestamp = new Date().toLocaleTimeString();
  const messages = [
    "Deploy started...",
    "Running tests...",
    "Build successful ✅",
    "Monitoring services...",
    "Scaling containers..."
  ];
  const msg = messages[Math.floor(Math.random() * messages.length)];
  logs.innerHTML += `[${timestamp}] ${msg}<br>`;
  logs.scrollTop = logs.scrollHeight;
}

// Simulate alerts
function updateAlerts() {
  const alerts = document.getElementById('alerts');
  const random = Math.random();
  if (random > 0.8) {
    alerts.textContent = "⚠️ High CPU usage detected!";
    alerts.style.color = "red";
  } else {
    alerts.textContent = "No alerts 🚀";
    alerts.style.color = "green";
  }
}

// Run updates every 2 seconds
setInterval(updateMetrics, 2000);
setInterval(addLog, 3000);
setInterval(updateAlerts, 5000);





