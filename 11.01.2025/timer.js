//task3 

function startTimer(targetDate, display) {
    function updateTimer() {
      const now = new Date();
      const difference = targetDate - now;
  
      if (difference <= 0) {
        display.textContent = "0 days 0 hours 0 minutes and 0 seconds";
        clearInterval(timerInterval);
        return;
      }
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
  
      display.textContent = `${days} days ${hours} hours ${minutes} minutes and ${seconds} seconds`;
    }
  
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
  }
  
  window.onload = function () {
    const targetDate = new Date('2025-02-01T00:00:00');
    const display = document.createElement('div');
    display.id = 'time';
    display.style.fontSize = '24px';
    display.style.marginTop = '20px';
    document.body.appendChild(display);
    startTimer(targetDate, display);
  };
  