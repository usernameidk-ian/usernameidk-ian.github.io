// script.js
document.addEventListener('DOMContentLoaded', () => {
  const bgm = document.getElementById('bgm');
  const playBtn = document.getElementById('playBtn');
  const muteBtn = document.getElementById('muteBtn');
  const goBtn = document.getElementById('goBtn');
  const input = document.getElementById('codeInput');

  // Toggle play/pause
  playBtn.addEventListener('click', () => {
    if (bgm.paused) {
      bgm.play().catch(()=>{ /* some browsers require gesture - click handles that */ });
      playBtn.textContent = '⏸ Pause music';
    } else {
      bgm.pause();
      playBtn.textContent = '▶ Play music';
    }
  });

  // Mute toggle
  muteBtn.addEventListener('click', () => {
    bgm.muted = !bgm.muted;
    muteBtn.textContent = bgm.muted ? '🔇' : '🔊';
  });

  // ID box example - replace with ARG logic later
  goBtn.addEventListener('click', () => {
    const v = input.value.trim();
    if (!v) { alert('Enter an ID to continue.'); return; }
    alert('You entered: ' + v + '\n(You can hook custom logic in script.js.)');
  });

  // Flashing document title
  let alt = false;
  setInterval(() => {
    document.title = alt ? '⚠ ARG Site ⚠' : 'T7 Style Website';
    alt = !alt;
  }, 1200);
});
// Auto-start music on first click anywhere
document.addEventListener('click', () => {
  const bgm = document.getElementById('bgm');
  if (bgm.paused) {
    bgm.play().catch(()=>{});
  }
}, { once: true });
