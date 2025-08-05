const rainContainer = document.getElementById("rain-container");
const cursor = document.getElementById("cursor");
const numDrops = 100;
const drops = [];

function createRain() {
  for (let i = 0; i < numDrops; i++) {
    const drop = document.createElement("div");
    drop.classList.add("raindrop");
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.animationDuration = `${Math.random() * 1 + 1}s`;
    drop.style.animationDelay = `${Math.random() * 2}s`;
    rainContainer.appendChild(drop);
    drops.push(drop);
  }
}

function updateRain(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  drops.forEach((drop) => {
    const dropRect = drop.getBoundingClientRect();
    const dropX = dropRect.left + dropRect.width / 2;
    const dropY = dropRect.top + dropRect.height / 2;
    const distance = Math.hypot(dropX - mouseX, dropY - mouseY);
    if (distance < 50) {
      const angle = Math.atan2(dropY - mouseY, dropX - mouseX);
      drop.style.transform = `translate(${Math.cos(angle) * 1}px, ${
        Math.sin(angle) * 50
      }px)`;
      setTimeout(() => {
        drop.style.opacity = "0";
      }, 200);
    } else {
      drop.style.transform = "";
    }
  });
}

function moveCursor(e) {
  cursor.style.transform = `translate(${e.clientX - 15}px, ${
    e.clientY - 15
  }px)`;
}

createRain();
// window.addEventListener("mousemove", updateRain);
// window.addEventListener("mousemove", moveCursor);
