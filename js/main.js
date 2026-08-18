/**
 * TECHNOCRACY NIT RAIPUR — SPATIAL ARCANE MAXIMALIST ENGINE
 * Includes: Web Audio Synth, 3D Gyroscopic Hextech Reactor, Overcharge Battery,
 * Multi-Depth Spatial Particle Canvas, Dynamic Specular Light Spotlight,
 * Dual Realm Switcher (Piltover & Zaun), Parallax Scroll, & Lore Easter Eggs.
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. WEB AUDIO SYNTHESIZER (ARCANE HEXTECH & CHEMTECH SOUNDSCAPES)
  // =========================================================================
  class ArcaneAudioEngine {
    constructor() {
      this.ctx = null;
      this.enabled = true;
      this.initOnInteraction = this.initOnInteraction.bind(this);
      
      window.addEventListener('click', this.initOnInteraction, { once: true });
      window.addEventListener('keydown', this.initOnInteraction, { once: true });
      window.addEventListener('touchstart', this.initOnInteraction, { once: true });
    }

    initOnInteraction() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
    }

    ensureContext() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playClick() {
      if (!this.enabled) return;
      try {
        this.ensureContext();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.05);

        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.05);
      } catch (e) {}
    }

    playHover() {
      if (!this.enabled) return;
      try {
        this.ensureContext();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.linearRampToValueAtTime(740, now + 0.04);

        gain.gain.setValueAtTime(0.025, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.04);
      } catch (e) {}
    }

    playOverchargeSweep() {
      if (!this.enabled) return;
      try {
        this.ensureContext();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(1760, now + 0.6);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.12, now + 0.4);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.65);
      } catch (e) {}
    }

    playHextechChord() {
      if (!this.enabled) return;
      try {
        this.ensureContext();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const notes = [220, 277.18, 329.63, 440, 554.37, 659.25, 880];

        notes.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq * 0.5, now);
          osc.frequency.exponentialRampToValueAtTime(freq, now + 0.35);

          gain.gain.setValueAtTime(0.001, now);
          gain.gain.linearRampToValueAtTime(0.08, now + 0.2);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 2.2);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(now);
          osc.stop(now + 2.2);
        });
      } catch (e) {}
    }

    playChemtechSurge() {
      if (!this.enabled) return;
      try {
        this.ensureContext();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(110, now);
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.4);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(200, now);
        filter.frequency.exponentialRampToValueAtTime(1800, now + 0.3);

        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 1.1);
      } catch (e) {}
    }

    playJinxChaos() {
      if (!this.enabled) return;
      try {
        this.ensureContext();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;

        [300, 600, 1200, 2400, 4800].forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(freq, now + idx * 0.04);
          osc.frequency.exponentialRampToValueAtTime(80, now + idx * 0.04 + 0.25);

          gain.gain.setValueAtTime(0.07, now + idx * 0.04);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.25);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(now + idx * 0.04);
          osc.stop(now + idx * 0.04 + 0.25);
        });
      } catch (e) {}
    }

    toggle() {
      this.enabled = !this.enabled;
      return this.enabled;
    }
  }

  const sound = new ArcaneAudioEngine();

  // =========================================================================
  // 2. DUAL REALM SWITCHER (PILTOVER & ZAUN)
  // =========================================================================
  let currentRealm = 'piltover';
  const body = document.getElementById('app-body');
  const btnPiltover = document.getElementById('btn-realm-piltover');
  const btnZaun = document.getElementById('btn-realm-zaun');
  const introBtnPiltover = document.getElementById('intro-btn-piltover');
  const introBtnZaun = document.getElementById('intro-btn-zaun');

  const piltoverParticles = ['#d4af37', '#f5df9e', '#00d4ff', '#7b5cff'];
  const zaunParticles = ['#00e68a', '#00c9a7', '#f472b6', '#7b5cff'];
  let activeParticleColors = piltoverParticles;

  function switchRealm(realm) {
    currentRealm = realm;
    if (realm === 'zaun') {
      body.classList.remove('realm-piltover');
      body.classList.add('realm-zaun');
      if (btnPiltover) btnPiltover.classList.remove('active');
      if (btnZaun) btnZaun.classList.add('active');
      if (introBtnPiltover) introBtnPiltover.classList.remove('active');
      if (introBtnZaun) introBtnZaun.classList.add('active');
      activeParticleColors = zaunParticles;
      sound.playChemtechSurge();
    } else {
      body.classList.remove('realm-zaun');
      body.classList.add('realm-piltover');
      if (btnZaun) btnZaun.classList.remove('active');
      if (btnPiltover) btnPiltover.classList.add('active');
      if (introBtnZaun) introBtnZaun.classList.remove('active');
      if (introBtnPiltover) introBtnPiltover.classList.add('active');
      activeParticleColors = piltoverParticles;
      sound.playHextechChord();
    }
    initParticles();
  }

  if (btnPiltover) btnPiltover.addEventListener('click', () => switchRealm('piltover'));
  if (btnZaun) btnZaun.addEventListener('click', () => switchRealm('zaun'));
  if (introBtnPiltover) introBtnPiltover.addEventListener('click', () => switchRealm('piltover'));
  if (introBtnZaun) introBtnZaun.addEventListener('click', () => switchRealm('zaun'));

  // =========================================================================
  // 3. SPATIAL CANVAS PARTICLE ENGINE (MULTI-DEPTH 3D SIMULATION)
  // =========================================================================
  const canvas = document.getElementById('cyber-canvas');
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouse = {
    x: width / 2,
    y: height / 2,
    radius: 140,
    active: false
  };

  let reverseTime = false;

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
  });

  let particles = [];

  class SpatialArcaneParticle {
    constructor(startX, startY, speedMult) {
      this.x = startX !== undefined ? startX : Math.random() * width;
      this.y = startY !== undefined ? startY : Math.random() * height;
      this.z = Math.random() * 3 + 1;
      this.size = (Math.random() * 2.2 + 0.8) * (this.z / 2);
      const mult = speedMult || 1;
      this.vx = ((Math.random() - 0.5) * 0.75 * mult) * (this.z / 2);
      this.vy = ((Math.random() - 0.5) * 0.75 * mult) * (this.z / 2);
      this.color = activeParticleColors[Math.floor(Math.random() * activeParticleColors.length)];
      this.baseAlpha = (Math.random() * 0.5 + 0.2) * (this.z / 3);
      this.alpha = this.baseAlpha;
    }

    update() {
      const speedMultiplier = reverseTime ? -2.8 : 1;
      this.x += this.vx * speedMultiplier;
      this.y += this.vy * speedMultiplier;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      if (mouse.active) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius * (this.z / 2)) {
          const force = ((mouse.radius * (this.z / 2)) - dist) / (mouse.radius * (this.z / 2));
          this.x -= (dx / dist) * force * 4 * (this.z / 2);
          this.y -= (dy / dist) * force * 4 * (this.z / 2);
          this.alpha = 0.95;
        } else {
          this.alpha = this.baseAlpha;
        }
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 12 * (this.z / 2);
      ctx.shadowColor = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function initParticles() {
    particles = [];
    const count = Math.min(Math.floor((width * height) / 12000), 100);
    for (let i = 0; i < count; i++) {
      particles.push(new SpatialArcaneParticle());
    }
  }

  initParticles();

  function animateParticles() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.save();
          ctx.globalAlpha = (1 - dist / 120) * 0.18;
          ctx.strokeStyle = currentRealm === 'zaun' ? '#00e68a' : '#d4af37';
          ctx.lineWidth = 0.85;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animateParticles);
  }

  animateParticles();

  // =========================================================================
  // 4. INTERACTIVE 3D GYROSCOPIC HEXTECH REACTOR IN INTRO
  // =========================================================================
  const gyroStage = document.getElementById('gyro-reactor-stage');
  const gyroOuter = document.getElementById('gyro-ring-outer');
  const gyroMiddle = document.getElementById('gyro-ring-middle');
  const hexCoreHub = document.getElementById('hextech-core-btn');

  if (gyroStage) {
    const handleGyroMove = (clientX, clientY) => {
      const rect = gyroStage.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (clientX - centerX) / (rect.width / 2);
      const deltaY = (clientY - centerY) / (rect.height / 2);

      const tiltX = -deltaY * 24;
      const tiltY = deltaX * 24;

      gyroStage.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.04)`;
      if (gyroOuter) gyroOuter.style.transform = `rotateX(${tiltX * 0.5}deg) rotateY(${tiltY * 0.5}deg)`;
      if (gyroMiddle) gyroMiddle.style.transform = `rotateX(${-tiltX * 0.8}deg) rotateY(${-tiltY * 0.8}deg)`;
      if (hexCoreHub) hexCoreHub.style.transform = `translateZ(45px) rotateX(${tiltX * 1.2}deg) rotateY(${tiltY * 1.2}deg)`;
    };

    window.addEventListener('mousemove', (e) => {
      handleGyroMove(e.clientX, e.clientY);
    });

    gyroStage.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        handleGyroMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    gyroStage.addEventListener('mouseleave', () => {
      gyroStage.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
      if (gyroOuter) gyroOuter.style.transform = `rotateX(0deg) rotateY(0deg)`;
      if (gyroMiddle) gyroMiddle.style.transform = `rotateX(0deg) rotateY(0deg)`;
      if (hexCoreHub) hexCoreHub.style.transform = `translateZ(0px) rotateX(0deg) rotateY(0deg)`;
    });
  }

  // Core Overcharge Voltage Button
  const btnOvercharge = document.getElementById('btn-overcharge-core');
  const coreChargeBar = document.getElementById('core-charge-bar');
  const coreChargeVal = document.getElementById('core-charge-val');
  let currentCharge = 100;

  if (btnOvercharge) {
    btnOvercharge.addEventListener('click', () => {
      sound.playOverchargeSweep();
      currentCharge = Math.min(currentCharge + 25, 200);

      if (coreChargeBar) {
        coreChargeBar.style.width = `${Math.min(currentCharge, 100)}%`;
        coreChargeBar.style.background = currentCharge > 100 ? 'linear-gradient(90deg, #ff0055, #ffd700)' : '';
      }
      if (coreChargeVal) {
        coreChargeVal.textContent = `${currentCharge}% OVERCHARGED`;
        coreChargeVal.classList.add('text-glow-purple');
      }

      // Spawn rapid energy spark particles
      for (let i = 0; i < 20; i++) {
        particles.push(new SpatialArcaneParticle(width / 2, height / 2, 4));
      }

      // Quick core jitter vibration
      if (gyroStage) {
        gyroStage.animate([
          { transform: 'scale(1) translate(2px, -2px)' },
          { transform: 'scale(1.08) translate(-3px, 3px)' },
          { transform: 'scale(1) translate(0, 0)' }
        ], { duration: 300, iterations: 2 });
      }
    });
  }

  // Live Time Display in Intro
  const introTimeDisplay = document.getElementById('intro-time-display');
  function updateLiveClock() {
    if (!introTimeDisplay) return;
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour12: false });
    introTimeDisplay.textContent = `2026 // ${timeStr} IST`;
  }
  setInterval(updateLiveClock, 1000);
  updateLiveClock();

  // =========================================================================
  // 5. CINEMATIC DETONATION & PORTAL TRANSITION
  // =========================================================================
  const introScreen = document.getElementById('intro-screen');
  const mainApp = document.getElementById('main-app');
  const btnEnterMatrix = document.getElementById('btn-enter-matrix');
  const btnSkipIntro = document.getElementById('btn-skip-intro');
  const shockwaveBurst = document.getElementById('intro-shockwave-burst');
  const btnReplayIntro = document.getElementById('btn-replay-intro');

  function triggerEnterPortal() {
  sound.playHextechChord();

  // 1. Fire the Arcane Swish
  const swish = document.getElementById('arcane-swish');
  if (swish) {
    swish.classList.add('active');
  }

  // 2. Original shockwave flash (still looks good together)
  if (shockwaveBurst) {
    shockwaveBurst.classList.add('active');
  }

  // 3. Extra particles
  for (let i = 0; i < 60; i++) {
    particles.push(new SpatialArcaneParticle(width / 2, height / 2, 5));
  }

  // 4. Start the fade after the blade has started moving
  setTimeout(() => {
    introScreen.classList.add('fade-out');
    mainApp.classList.remove('hidden');
  }, 180);

  // 5. Cleanup
  setTimeout(() => {
    introScreen.classList.add('hidden');
    if (shockwaveBurst) shockwaveBurst.classList.remove('active');
    if (swish) swish.classList.remove('active');
  }, 950);
}

  if (btnEnterMatrix) btnEnterMatrix.addEventListener('click', triggerEnterPortal);
  if (hexCoreHub) hexCoreHub.addEventListener('click', triggerEnterPortal);

  // Global Keyboard Trigger: Press [Space] or [Enter] on intro screen to enter
  window.addEventListener('keydown', (e) => {
    if (!introScreen.classList.contains('hidden') && (e.code === 'Space' || e.code === 'Enter')) {
      if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
      e.preventDefault();
      triggerEnterPortal();
    }
  });

  if (btnSkipIntro) {
    btnSkipIntro.addEventListener('click', () => {
      sound.playClick();
      introScreen.classList.add('fade-out');
      mainApp.classList.remove('hidden');
      setTimeout(() => {
        introScreen.classList.add('hidden');
      }, 800);
    });
  }

  if (btnReplayIntro) {
    btnReplayIntro.addEventListener('click', () => {
      sound.playHextechChord();
      introScreen.classList.remove('hidden');
      setTimeout(() => {
        introScreen.classList.remove('fade-out');
      }, 50);
    });
  }

  // =========================================================================
  // 6. SPATIAL CURSOR SPECULAR SPOTLIGHT & 3D TILT ENGINE (MAIN APP CARDS)
  // =========================================================================
  const spatialCards = document.querySelectorAll('.glass-panel, .stat-card');

  spatialCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)';
      card.style.removeProperty('--mouse-x');
      card.style.removeProperty('--mouse-y');
    });
  });

  // Spatial Parallax Scroll on Ambient Orbs & Floating Runes
  const orb1 = document.querySelector('.orb-1');
  const orb2 = document.querySelector('.orb-2');
  const orb3 = document.querySelector('.orb-3');
  const floatingRunes = document.querySelectorAll('.spatial-floating-rune');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (orb1) orb1.style.transform = `translate3d(0, ${scrollY * 0.12}px, 0)`;
    if (orb2) orb2.style.transform = `translate3d(0, ${scrollY * -0.08}px, 0)`;
    if (orb3) orb3.style.transform = `translate3d(0, ${scrollY * 0.06}px, 0)`;

    floatingRunes.forEach((rune) => {
      const speed = parseFloat(rune.getAttribute('data-speed') || '0.1');
      rune.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
    });
  }, { passive: true });

  // =========================================================================
  // 7. TOP HUD ACTIONS & MOBILE NAVIGATION
  // =========================================================================
  const audioToggleBtn = document.getElementById('btn-audio-toggle');
  const audioIcon = document.getElementById('audio-icon');

  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      const isEnabled = sound.toggle();
      audioIcon.textContent = isEnabled ? '🔊' : '🔇';
      sound.playClick();
    });
  }

  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobLinks = document.querySelectorAll('.mob-link');

  if (mobileMenuToggle && mobileNavDrawer) {
    mobileMenuToggle.addEventListener('click', () => {
      sound.playClick();
      mobileNavDrawer.classList.add('open');
    });
  }

  if (mobileMenuClose && mobileNavDrawer) {
    mobileMenuClose.addEventListener('click', () => {
      sound.playClick();
      mobileNavDrawer.classList.remove('open');
    });
  }

  mobLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileNavDrawer.classList.remove('open');
    });
  });

const navToggle = document.getElementById('nav-dropdown-toggle');
const navWrapper = document.querySelector('.nav-dropdown-wrapper');

if (navToggle && navWrapper) {
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navWrapper.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    navWrapper.classList.remove('open');
  });
}

  document.querySelectorAll('button, .nav-link, .cyber-btn, .color-btn, .size-btn').forEach((elem) => {
    elem.addEventListener('mouseenter', () => sound.playHover());
    elem.addEventListener('click', () => sound.playClick());
  });

  // =========================================================================
  // 8. VIGYAAN 10 ENGINEERING DISCIPLINES DATA & TAB SWITCHER
  // =========================================================================
  const vigyaanData = {
    cse: {
      name: 'Computer Science, IT & MCA',
      tag: 'DEPARTMENT OF CSE / IT / MCA',
      icon: '💻',
      summary: 'Architecting intelligent software agents, decentralized ledgers, distributed computing pipelines, and zero-trust cybersecurity frameworks.',
      problems: [
        { code: 'VIG-CSE-01', title: 'Autonomous Real-time Campus Surveillance via Edge AI', desc: 'Deploy low-latency computer vision models on edge microcontrollers to detect anomalies, crowd bottlenecks, and emergency alerts.' },
        { code: 'VIG-CSE-02', title: 'Decentralized Academic Credential & MoU Ledger', desc: 'Build an immutable, verifiable smart contract system for institutional credentials and inter-university research partnerships.' },
        { code: 'VIG-CSE-03', title: 'Zero-Trust Data Pipeline for Hybrid Cloud Environments', desc: 'Design microsegmentation and identity-based access frameworks to safeguard critical research databases from exfiltration.' }
      ]
    },
    ece: {
      name: 'Electronics & Communication Engineering',
      tag: 'DEPARTMENT OF ECE',
      icon: '📡',
      summary: 'Advancing ultra-low-power VLSI architectures, Next-Gen 6G telemetry protocols, FPGA acceleration, and smart IoT sensor nodes.',
      problems: [
        { code: 'VIG-ECE-01', title: 'FPGA-Accelerated Edge Signal Processing for Telemetry', desc: 'Implement high-throughput digital signal processing on FPGA for high-frequency sensor telemetry in remote environments.' },
        { code: 'VIG-ECE-02', title: 'Energy-Harvesting Mesh Nodes for Smart Agriculture', desc: 'Develop solar/RF energy-harvesting IoT nodes capable of multi-hop ad-hoc networking across large rural fields.' }
      ]
    },
    ee: {
      name: 'Electrical Engineering',
      tag: 'DEPARTMENT OF EE',
      icon: '⚡',
      summary: 'Innovating smart grid synchronizers, next-gen electric vehicle (EV) battery management systems, and high-frequency renewable inverters.',
      problems: [
        { code: 'VIG-EE-01', title: 'AI-Powered Battery Management System (BMS) with Thermal Runaway Prevention', desc: 'Construct neural state-of-charge (SoC) and state-of-health (SoH) estimators for lithium-ion and solid-state batteries.' },
        { code: 'VIG-EE-02', title: 'Microgrid Frequency Stabilization under High Solar Penetration', desc: 'Design adaptive droop control algorithms for islanded and grid-tied renewable microgrids.' }
      ]
    },
    mech: {
      name: 'Mechanical Engineering',
      tag: 'DEPARTMENT OF MECHANICAL',
      icon: '⚙️',
      summary: 'Pioneering autonomous industrial cobots, aerodynamic CFD optimizations, generative 3D additive manufacturing, and smart thermal systems.',
      problems: [
        { code: 'VIG-ME-01', title: 'Multi-Terrain Autonomous Disaster Reconnaissance Rover', desc: 'Develop a rugged rover with active suspension and terrain-mapping LiDAR for hazardous search-and-rescue.' },
        { code: 'VIG-ME-02', title: 'Generative Topology Optimization for Lightweight Aerospace Brackets', desc: 'Utilize algorithmic generative design and additive manufacturing constraints to reduce component weight by 45%.' }
      ]
    },
    civil: {
      name: 'Civil Engineering',
      tag: 'DEPARTMENT OF CIVIL',
      icon: '🏗️',
      summary: 'Engineering self-healing concrete composites, intelligent IoT urban traffic monitoring, seismic retrofitting, and sustainable geotechnics.',
      problems: [
        { code: 'VIG-CE-01', title: 'Bio-Mineralized Self-Healing Concrete with Microencapsulation', desc: 'Formulate bacterial spore-infused concrete mixes that naturally seal microcracks upon moisture exposure.' },
        { code: 'VIG-CE-02', title: 'Smart Stormwater Drainage Network with Real-Time Flood Prediction', desc: 'Combine sensor telemetry and hydraulic modeling to mitigate urban flooding in metropolitan zones.' }
      ]
    },
    chem: {
      name: 'Chemical Engineering',
      tag: 'DEPARTMENT OF CHEMICAL',
      icon: '🧪',
      summary: 'Advancing green hydrogen generation, industrial carbon capture and utilization (CCU), nano-catalysis, and zero-liquid discharge wastewater systems.',
      problems: [
        { code: 'VIG-CH-01', title: 'Direct Electrochemical CO2 Reduction into Syngas Fuel', desc: 'Design high-efficiency transition metal nano-catalysts for ambient temperature carbon dioxide electrolysis.' },
        { code: 'VIG-CH-02', title: 'Low-Energy Desalination via Forward Osmosis Membranes', desc: 'Synthesize graphene oxide composite membranes for hyper-saline industrial effluent recovery.' }
      ]
    },
    biotech: {
      name: 'Biotechnology',
      tag: 'DEPARTMENT OF BIOTECHNOLOGY',
      icon: '🧬',
      summary: 'Harnessing genomic computing algorithms, CRISPR-based field diagnostic kits, biodegradable polymers, and microbial enzyme bioreactors.',
      problems: [
        { code: 'VIG-BT-01', title: 'Point-of-Care CRISPR Biosensor for Pathogen Detection', desc: 'Create a paper-based microfluidic assay for rapid on-site detection of viral and bacterial vectors.' },
        { code: 'VIG-BT-02', title: 'Microbial Synthesis of PHA Bioplastics from Agricultural Waste', desc: 'Optimize bacterial fermentation kinetics using crop residue feedstocks to produce industrial biopolymers.' }
      ]
    },
    biomed: {
      name: 'Biomedical Engineering',
      tag: 'DEPARTMENT OF BIOMEDICAL',
      icon: '🫀',
      summary: 'Developing non-invasive neural interfaces, AI-powered diagnostic imaging, myoelectric prosthetics, and wearable hemodynamic sensors.',
      problems: [
        { code: 'VIG-BM-01', title: 'Myoelectric Bionic Hand with Multi-Grip Haptic Feedback', desc: 'Build an affordable EMG-controlled prosthetic hand equipped with pressure and temperature tactile feedback.' },
        { code: 'VIG-BM-02', title: 'Non-Invasive Continuous Glucose & Lactate Optical Telemetry', desc: 'Utilize multi-wavelength photoplethysmography (PPG) and machine learning for painless blood biomarker tracking.' }
      ]
    },
    meta: {
      name: 'Metallurgical & Materials Engineering',
      tag: 'DEPARTMENT OF METALLURGY',
      icon: '🛡️',
      summary: 'Formulating high-entropy superalloys for extreme aerospace environments, corrosion-resistant nanocomposites, and slag waste valorization.',
      problems: [
        { code: 'VIG-MM-01', title: 'High-Entropy Alloys with Superior Cryogenic Fracture Toughness', desc: 'Model and synthesize novel multi-principal element alloys for cryogenic rocket propellant containment.' },
        { code: 'VIG-MM-02', title: 'Zero-Waste Blast Furnace Slag Conversion to Structural Geopolymers', desc: 'Transform industrial metallurgical byproducts into green Portland-cement alternatives with enhanced strength.' }
      ]
    },
    mining: {
      name: 'Mining Engineering',
      tag: 'DEPARTMENT OF MINING',
      icon: '⛏️',
      summary: 'Implementing autonomous open-cast drone volumetric mapping, AI rock mass classification, smart blast telemetry, and green mineral extraction.',
      problems: [
        { code: 'VIG-MN-01', title: 'Autonomous LiDAR UAV for Underground Mine Tunnel Inspection', desc: 'Deploy GPS-denied SLAM drones to safely inspect unsupported stopes and hazardous deep underground shafts.' },
        { code: 'VIG-MN-02', title: 'Real-Time Blast Induced Ground Vibration Prediction via ML', desc: 'Predict and mitigate seismic shockwaves and flyrock hazards in open-cast mines using seismic telemetry.' }
      ]
    }
  };

  const domainTabs = document.querySelectorAll('.domain-tab');
  const vigyaanContentBox = document.getElementById('vigyaan-content-box');
  const domainActiveCounter = document.getElementById('domain-active-counter');

  function renderDomainContent(key) {
    const data = vigyaanData[key];
    if (!data || !vigyaanContentBox) return;

    if (domainActiveCounter) {
      domainActiveCounter.textContent = `ACTIVE: ${data.name.toUpperCase()}`;
    }

    let problemsHtml = '';
    data.problems.forEach((p) => {
      problemsHtml += `
        <div class="problem-box">
          <div class="problem-code">${p.code}</div>
          <div class="problem-name">${p.title}</div>
          <div class="problem-desc">${p.desc}</div>
        </div>
      `;
    });

    vigyaanContentBox.innerHTML = `
      <div class="domain-display-card">
        <div class="domain-hero-flex">
          <div>
            <span class="domain-stream-tag">${data.tag}</span>
            <h3 class="domain-head-title">${data.name}</h3>
          </div>
          <div class="domain-icon-large">${data.icon}</div>
        </div>
        <p class="domain-summary-text">${data.summary}</p>
        
        <h4 style="font-family: var(--font-arcane); font-size: 1.1rem; color: var(--piltover-gold); margin-bottom: 1.2rem;">
          // SAMPLE PROBLEM STATEMENTS & R&D TRACKS:
        </h4>
        <div class="problems-grid">
          ${problemsHtml}
        </div>

        <div style="display: flex; gap: 1.4rem; align-items: center; flex-wrap: wrap;">
          <button class="cyber-btn btn-arcane primary-gold btn-open-reg-flow" data-domain="${key}">
            <span class="btn-icon">📝</span>
            <span class="btn-text">SUBMIT ABSTRACT FOR ${key.toUpperCase()}</span>
          </button>
          <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">
            ✦ 2–3 Member Squad Submission Protocol
          </span>
        </div>
      </div>
    `;

    const regBtn = vigyaanContentBox.querySelector('.btn-open-reg-flow');
    if (regBtn) {
      regBtn.addEventListener('click', () => {
        sound.playClick();
        openRecruitmentModal();
      });
    }
  }

  domainTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      domainTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const domainKey = tab.getAttribute('data-domain');
      renderDomainContent(domainKey);
    });
  });

  renderDomainContent('cse');

  // =========================================================================
  // 9. DOMAIN FINDER INTERACTIVE QUIZ ("FIND YOUR CALLING")
  // =========================================================================
  const quizQuestions = [
    {
      question: "1. What excites you most when building a massive project?",
      options: [
        { text: "Architecting web systems, APIs, codebases, and databases", wing: "tech", label: "A" },
        { text: "Orchestrating grand logistics, stage timelines, and managing 10k+ crowds", wing: "event", label: "B" },
        { text: "Conducting scientific research, evaluating hardware/software prototypes", wing: "vigyaan", label: "C" },
        { text: "Creating 3D renders, cyberpunk visual art, and motion graphics", wing: "design", label: "D" },
        { text: "Negotiating corporate deals, closing sponsorships, and networking with leaders", wing: "sponsorship", label: "E" }
      ]
    },
    {
      question: "2. How do you prefer spending an intensive weekend with a team?",
      options: [
        { text: "Hacking overnight at a hackathon and shipping live features", wing: "tech", label: "A" },
        { text: "Managing backstage operations and directing live festival shows", wing: "event", label: "B" },
        { text: "Reviewing research papers and testing engineering prototypes", wing: "vigyaan", label: "C" },
        { text: "Designing viral video teasers and polishing UI aesthetics", wing: "design", label: "D" },
        { text: "Pitching proposals to top corporate executives and tech founders", wing: "sponsorship", label: "E" }
      ]
    },
    {
      question: "3. Which personal strength represents your ultimate superpower?",
      options: [
        { text: "Logical problem-solving and rapid software execution", wing: "tech", label: "A" },
        { text: "Crisis resilience, leadership, and high-pressure coordination", wing: "event", label: "B" },
        { text: "Curiosity for deep tech, multidisciplinary science, and innovation", wing: "vigyaan", label: "C" },
        { text: "Aesthetic vision, storytelling, and visual creativity", wing: "design", label: "D" },
        { text: "Persuasive communication, strategic networking, and deal closing", wing: "sponsorship", label: "E" }
      ]
    }
  ];

  let currentQuizStep = 0;
  let quizAnswers = [];
  const quizStepBox = document.getElementById('quiz-step-box');

  const wingDetails = {
    tech: {
      name: "Tech Team",
      icon: "💻",
      color: "text-glow-cyan",
      desc: "Your analytical and algorithmic skills make you a natural fit for the Tech Team! You will build high-traffic web applications, hackathon portals, and production infrastructure."
    },
    event: {
      name: "Event Management",
      icon: "🎯",
      color: "text-glow-gold",
      desc: "Your leadership, calm under pressure, and organizational flair make you prime for Event Management! You will command stage logistics, timelines, and festival crowds."
    },
    vigyaan: {
      name: "Vigyaan (Science & Innovation)",
      icon: "🔬",
      color: "text-glow-green",
      desc: "Your scientific curiosity and research drive map perfectly to Vigyaan! You will curate multidisciplinary problem statements and evaluate breakthrough prototypes."
    },
    design: {
      name: "Design & Editing",
      icon: "🎨",
      color: "text-glow-purple",
      desc: "Your creative eye and storytelling brilliance belong in Design & Editing! You will shape the visual universe, 3D artwork, and brand aesthetics of Technocracy."
    },
    sponsorship: {
      name: "Sponsorship & PR",
      icon: "🤝",
      color: "text-glow-gold",
      desc: "Your strategic negotiation and charismatic networking make you an ideal candidate for Sponsorship & PR! You will partner with Fortune 500 tech companies."
    },
    media: {
      name: "Media & PR",
      icon: "📣",
      color: "text-glow-cyan",
      desc: "Your voice and media savvy will amplify Technocracy across the nation through high-impact campaigns and public outreach."
    },
    doc: {
      name: "Documentation",
      icon: "📑",
      color: "text-glow-gold",
      desc: "Your structured clarity and analytical drafting will preserve institutional excellence and official governance records."
    }
  };

  function renderQuizQuestion() {
    if (!quizStepBox) return;

    if (currentQuizStep < quizQuestions.length) {
      const q = quizQuestions[currentQuizStep];
      let optionsHtml = '';

      q.options.forEach((opt) => {
        optionsHtml += `
          <button class="quiz-option-btn" data-wing="${opt.wing}">
            <span class="quiz-opt-letter">[${opt.label}]</span>
            <span>${opt.text}</span>
          </button>
        `;
      });

      quizStepBox.innerHTML = `
        <div class="quiz-question-box">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--piltover-gold); margin-bottom: 0.6rem;">
            STEP ${currentQuizStep + 1} OF ${quizQuestions.length}
          </div>
          <h4 class="quiz-q-title">${q.question}</h4>
          <div class="quiz-options-list">
            ${optionsHtml}
          </div>
        </div>
      `;

      quizStepBox.querySelectorAll('.quiz-option-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          sound.playClick();
          const selectedWing = btn.getAttribute('data-wing');
          quizAnswers.push(selectedWing);
          currentQuizStep++;
          renderQuizQuestion();
        });
      });
    } else {
      const frequency = {};
      quizAnswers.forEach((w) => {
        frequency[w] = (frequency[w] || 0) + 1;
      });

      let topWing = 'tech';
      let maxCount = 0;
      for (const wing in frequency) {
        if (frequency[wing] > maxCount) {
          maxCount = frequency[wing];
          topWing = wing;
        }
      }

      const result = wingDetails[topWing] || wingDetails.tech;

      quizStepBox.innerHTML = `
        <div class="quiz-result-view">
          <div class="quiz-result-icon">${result.icon}</div>
          <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--piltover-gold); margin-bottom: 0.4rem;">
            MATCHED WITH 98.4% AFFINITY:
          </div>
          <h3 class="quiz-result-wing ${result.color}">${result.name}</h3>
          <p class="quiz-result-desc">${result.desc}</p>
          
          <div style="display: flex; gap: 1.2rem; justify-content: center; flex-wrap: wrap;">
            <button class="cyber-btn btn-arcane primary-gold" id="btn-quiz-apply">
              <span class="btn-icon">🚀</span>
              <span class="btn-text">APPLY FOR ${result.name.toUpperCase()}</span>
            </button>
            <button class="cyber-btn secondary-ghost" id="btn-quiz-restart">
              <span class="btn-text">Retake Quiz</span>
            </button>
          </div>
        </div>
      `;

      sound.playHextechChord();

      const applyBtn = quizStepBox.querySelector('#btn-quiz-apply');
      const restartBtn = quizStepBox.querySelector('#btn-quiz-restart');

      if (applyBtn) {
        applyBtn.addEventListener('click', () => {
          sound.playClick();
          openRecruitmentModal(topWing);
        });
      }

      if (restartBtn) {
        restartBtn.addEventListener('click', () => {
          sound.playClick();
          currentQuizStep = 0;
          quizAnswers = [];
          renderQuizQuestion();
        });
      }
    }
  }

  renderQuizQuestion();

  // =========================================================================
  // 10. MERCHANDISE CUSTOMIZER
  // =========================================================================
  const colorBtns = document.querySelectorAll('.color-btn');
  const sizeBtns = document.querySelectorAll('.size-btn');
  const merchCard = document.getElementById('merch-card');
  const merchIcon = document.getElementById('merch-icon');
  const btnOrderMerch = document.getElementById('btn-order-merch');

  const colorShades = {
    obsidian: { bg: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(14, 14, 28, 0.85) 100%)', border: '#d4af37', filter: 'drop-shadow(0 0 25px #d4af37)' },
    gold: { bg: 'radial-gradient(circle, rgba(212, 175, 55, 0.35) 0%, rgba(35, 25, 5, 0.9) 100%)', border: '#f5df9e', filter: 'drop-shadow(0 0 35px #f5df9e)' },
    purple: { bg: 'radial-gradient(circle, rgba(123, 92, 255, 0.35) 0%, rgba(25, 12, 45, 0.9) 100%)', border: '#a78bfa', filter: 'drop-shadow(0 0 35px #a78bfa)' },
    green: { bg: 'radial-gradient(circle, rgba(0, 230, 138, 0.35) 0%, rgba(5, 30, 20, 0.9) 100%)', border: '#00e68a', filter: 'drop-shadow(0 0 35px #00e68a)' }
  };

  colorBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      colorBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const color = btn.getAttribute('data-color');
      const shade = colorShades[color];
      if (shade && merchCard && merchIcon) {
        merchCard.style.background = shade.bg;
        merchCard.style.borderColor = shade.border;
        merchIcon.style.filter = shade.filter;
      }
    });
  });

  sizeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  if (btnOrderMerch) {
    btnOrderMerch.addEventListener('click', () => {
      sound.playHextechChord();
      alert("⚡ HEXTECH ATTIRE RESERVATION: Your Aavartan '25 Arcane Hoodie reservation (₹350) has been recorded in the Council Log! Collect at the Aavartan Campus Desk.");
    });
  }

  // =========================================================================
  // 11. JINX GRAFFITI EASTER EGG OVERLAY CONTROLLER
  // =========================================================================
  const jinxLayer = document.getElementById('jinx-graffiti-layer');
  const jinxDismissBtn = document.getElementById('jinx-dismiss-btn');

  function triggerJinxEasterEgg() {
    sound.playJinxChaos();
    if (jinxLayer) {
      jinxLayer.classList.remove('hidden');
    }
  }

  if (jinxDismissBtn) {
    jinxDismissBtn.addEventListener('click', () => {
      sound.playClick();
      if (jinxLayer) jinxLayer.classList.add('hidden');
    });
  }

  let typedKeys = '';
  window.addEventListener('keydown', (e) => {
    typedKeys += e.key.toLowerCase();
    if (typedKeys.length > 10) typedKeys = typedKeys.slice(-10);

    if (typedKeys.includes('jinx')) {
      triggerJinxEasterEgg();
      typedKeys = '';
    } else if (typedKeys.includes('arcane')) {
      sound.playHextechChord();
      switchRealm(currentRealm === 'piltover' ? 'zaun' : 'piltover');
      typedKeys = '';
    }
  });

  // =========================================================================
  // 12. INTERACTIVE ARCANE MATRIX TERMINAL MODAL & EASTER EGGS
  // =========================================================================
  const terminalModal = document.getElementById('terminal-modal');
  const terminalTrigger = document.getElementById('btn-terminal-trigger');
  const termCloseBtn = document.getElementById('term-close-btn');
  const termClearBtn = document.getElementById('term-clear-btn');
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  const mobTerminalBtn = document.getElementById('mob-terminal-btn');
  const footerTerminalLink = document.getElementById('footer-terminal-link');

  function openTerminal() {
    sound.playClick();
    terminalModal.classList.remove('hidden');
    if (terminalInput) terminalInput.focus();
  }

  function closeTerminal() {
    sound.playClick();
    terminalModal.classList.add('hidden');
  }

  if (terminalTrigger) terminalTrigger.addEventListener('click', openTerminal);
  if (mobTerminalBtn) mobTerminalBtn.addEventListener('click', openTerminal);
  if (footerTerminalLink) footerTerminalLink.addEventListener('click', openTerminal);
  if (termCloseBtn) termCloseBtn.addEventListener('click', closeTerminal);

  terminalModal.addEventListener('click', (e) => {
    if (e.target === terminalModal) closeTerminal();
  });

  if (termClearBtn) {
    termClearBtn.addEventListener('click', () => {
      sound.playClick();
      terminalOutput.innerHTML = `
        <div class="term-line welcome-line text-glow-gold">
          ⚡ Screen buffer cleared. Ready for instructions. Type 'help'.
        </div>
      `;
    });
  }

  const termCommands = {
    help: `
Available Technocracy commands:
  - <span class="term-keyword">about</span>        : Mission protocol of Team Technocracy
  - <span class="term-keyword">history</span>      : Chronicles & milestones from 2007 to present
  - <span class="term-keyword">aavartan</span>     : Details on Central India's Largest Tech Fest
  - <span class="term-keyword">vigyaan</span>      : 10-domain science & innovation exhibition
  - <span class="term-keyword">tech-team</span>    : Core developers and engineering coordinators
  - <span class="term-keyword">leadership</span>   : High Council Coordinators & Heads
  - <span class="term-keyword">merch</span>        : Official Aavartan '25 apparel (₹350)
  - <span class="term-keyword">piltover</span>     : Switch site aura to Topside Gold
  - <span class="term-keyword">zaun</span>         : Switch site aura to Undercity Chemtech
  - <span class="term-keyword">apply</span>        : Launch recruitment application portal
  - <span class="term-keyword">clear</span>        : Clear terminal output

⚡ Arcane Easter Eggs:
  - <span class="term-keyword">jinx</span>, <span class="term-keyword">'shimmer'</span>, <span class="term-keyword">'vi'</span>, <span class="term-keyword">'viktor'</span>, <span class="term-keyword">'silco'</span>, <span class="term-keyword">'ekko'</span>, <span class="term-keyword">'hexcore'</span>, <span class="term-keyword">'firelights'</span>, <span class="term-keyword">'heimerdinger'</span>
`,
    about: `
[IDENTITY // TEAM TECHNOCRACY]:
Official Technical Committee of NIT Raipur (Estd. 2007).
Dedicated to year-round innovation, technical skill mastery, real-world project deployments, and organizing Aavartan.
Central India's leading innovation powerhouse.
`,
    history: `
[CHRONICLES OF TECHNOCRACY]:
- 2007: Established at NIT Raipur; Inception of Vigyaan National Science Exhibition.
- 2011: Vigyaan transformed into full-scale annual technical festival — Aavartan.
- 2019: Record-breaking footfall crossing 10,000+ participants nationwide.
- 2022-23: 14th Edition resurgence post-pandemic with 120+ Vigyaan research teams.
- 2025-26: Modern cyber-arcane platforms, agentic AI, and advanced robotics.
`,
    aavartan: `
[FLAGSHIP FESTIVAL // AAVARTAN]:
Central India's Largest Annual Technical Festival.
Features: 24/36h Hackathons, Robotics arenas, IoT workshops, Guest keynotes, and electrifying cultural nights with Nrityam (Dance) and Raaga (Music) clubs + DJ Night.
`,
    vigyaan: `
[SCIENCE EXHIBITION // VIGYAAN]:
Multi-disciplinary 2-3 member team competition spanning 10 engineering disciplines:
1. CSE/IT/MCA  2. ECE  3. EE  4. Mechanical  5. Civil
6. Chemical  7. Biotechnology  8. Biomedical  9. Metallurgy  10. Mining
`,
    'tech-team': `
[CORE TECH CREW // "BRINGING IMAGINATION TO LIFE"]:
- Head Coordinator: Piyush Kumar
- Core Coordinators: Nehil Sahu, B. Deewakar Rao, Aditya Kumar Sah, Prabhat Sharma
- Executives: Ayush Patel, Devesh Agarwal, Gourav Deep Shahni
`,
    leadership: `
[EXECUTIVE COUNCIL // OVERALL COORDINATORS]:
Shivam Vyas, Prafulla Mishra, Shantanu Tripathy, Nimesh Kumar Kashyap, Chirag Ruchandani.
`,
    merch: `
[OFFICIAL GEAR]:
Aavartan '25 Cyber-Hex Hoodie / Tee.
Price: ₹350 (Exclusive student discount).
Available in Obsidian, Gold, Purple, and Green.
`,
    piltover: () => {
      switchRealm('piltover');
      return "⚙️ [PILTOVER REALM ACTIVE]: The City of Progress shines in gold and order.";
    },
    zaun: () => {
      switchRealm('zaun');
      return "🧪 [ZAUN REALM ACTIVE]: The Undercity awakes with toxic emerald and Shimmer fury.";
    },
    jinx: () => {
      closeTerminal();
      triggerJinxEasterEgg();
      return "💣 [CHAOS INITIATED]: 'You think I'm crazy? You should see my sister!'";
    },
    shimmer: () => {
      switchRealm('zaun');
      sound.playChemtechSurge();
      return "🧪 [SHIMMER OVERLOAD]: Enhanced reflexes and unconstrained power surging through the veins.";
    },
    vi: () => {
      sound.playChemtechSurge();
      return "🥊 [ATLAS GAUNTLETS ENGAGED]: 'Punch first. Ask questions while punching.' — Vi";
    },
    viktor: () => {
      sound.playHextechChord();
      return "⚙️ [THE GLORIOUS EVOLUTION]: 'In the pursuit of great, we failed to do good.' — Viktor";
    },
    jayce: () => {
      sound.playHextechChord();
      return "🔨 [DEFENDER OF TOMORROW]: 'Hextech is the key to humanity's future.' — Jayce";
    },
    silco: () => {
      sound.playChemtechSurge();
      return "👁️ [THE EYE OF ZAUN]: 'Is there anything so undoing as a daughter?' — Silco";
    },
    ekko: () => {
      sound.playClick();
      reverseTime = true;
      setTimeout(() => { reverseTime = false; }, 4000);
      return "⏳ [Z-DRIVE TIME REWIND]: 'It's not about how much time you have, it's about how you use it.' Particle flow inverted for 4 seconds!";
    },
    hexcore: () => {
      sound.playHextechChord();
      return "✦ [HEXCORE SINGULARITY]: Organic matter fusing with arcane technology. The matrix is stable.";
    },
    firelights: () => {
      sound.playHover();
      return "🦗 [THE FIRELIGHTS]: Gliding above the smog, fighting for a free tomorrow.";
    },
    heimerdinger: () => {
      sound.playHover();
      return "🧪 [PROFESSOR HEIMERDINGER]: 'Progress is a slow, meticulous beast. We must be patient.'";
    },
    apply: () => {
      closeTerminal();
      openRecruitmentModal();
      return "Launching Candidature Application Portal...";
    }
  };

  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = terminalInput.value.trim().toLowerCase();
        terminalInput.value = '';

        if (!cmd) return;

        sound.playClick();

        const cmdLine = document.createElement('div');
        cmdLine.className = 'term-line';
        cmdLine.innerHTML = `<span style="color: var(--piltover-gold)">hextech@nitrr:~$</span> ${cmd}`;
        terminalOutput.appendChild(cmdLine);

        if (cmd === 'clear') {
          terminalOutput.innerHTML = '';
          return;
        }

        const respLine = document.createElement('div');
        respLine.className = 'term-line';

        if (termCommands[cmd]) {
          if (typeof termCommands[cmd] === 'function') {
            respLine.innerHTML = termCommands[cmd]();
          } else {
            respLine.innerHTML = termCommands[cmd];
          }
        } else {
          respLine.innerHTML = `<span style="color: #ef4444">Command not recognized: '${cmd}'. Type 'help' for manual.</span>`;
        }

        terminalOutput.appendChild(respLine);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
      }
    });
  }

  // =========================================================================
  // 13. RECRUITMENT APPLICATION MODAL
  // =========================================================================
  const appModal = document.getElementById('app-modal');
  const appModalClose = document.getElementById('app-modal-close');
  const btnOpenAppModal = document.getElementById('btn-open-application-modal');
  const btnFestRegTrigger = document.getElementById('btn-fest-reg-trigger');
  const recruitmentForm = document.getElementById('recruitment-form');
  const formSuccessMsg = document.getElementById('form-success-msg');
  const applicantDomainSelect = document.getElementById('applicant-domain');

  function openRecruitmentModal(preselectedDomain) {
    sound.playClick();
    if (appModal) {
      appModal.classList.remove('hidden');
      if (preselectedDomain && applicantDomainSelect) {
        applicantDomainSelect.value = preselectedDomain;
      }
      if (recruitmentForm) recruitmentForm.classList.remove('hidden');
      if (formSuccessMsg) formSuccessMsg.classList.add('hidden');
    }
  }

  function closeRecruitmentModal() {
    sound.playClick();
    if (appModal) appModal.classList.add('hidden');
  }

  if (btnOpenAppModal) btnOpenAppModal.addEventListener('click', () => openRecruitmentModal());
  if (btnFestRegTrigger) btnFestRegTrigger.addEventListener('click', () => openRecruitmentModal());
  if (appModalClose) appModalClose.addEventListener('click', closeRecruitmentModal);

  if (appModal) {
    appModal.addEventListener('click', (e) => {
      if (e.target === appModal) closeRecruitmentModal();
    });
  }

  if (recruitmentForm) {
    recruitmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      sound.playHextechChord();
      recruitmentForm.classList.add('hidden');
      if (formSuccessMsg) formSuccessMsg.classList.remove('hidden');
    });
  }

  // =========================================================================
  // 14. SCROLLSPY & NAVIGATION HIGHLIGHTING
  // =========================================================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 220;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

})();
