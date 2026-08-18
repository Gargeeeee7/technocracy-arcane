# Technocracy NIT Raipur — Spatial Arcane Website

Official technical committee website with full Arcane / Hextech / Piltover–Zaun theme.

## Project Structure

```
technocracy-arcane/
├── index.html
├── css/
│   ├── variables.css     # Colors, fonts, realm modes
│   ├── base.css          # Reset, ambient, glass, buttons
│   ├── intro.css         # Intro gateway + 3D gyro
│   ├── components.css    # Header, nav, realm switcher
│   ├── sections.css      # Hero, About, History, etc.
│   └── animations.css    # Keyframes + responsive
├── js/
│   └── main.js           # All interactions (audio, particles, terminal…)
└── README.md
```

## How to run

```bash
# Option 1 – Python
python -m http.server 8000

# Option 2 – Node
npx serve .

# Option 3 – VS Code Live Server
# Right-click index.html → Open with Live Server
```

Then open: http://localhost:8000

## Features
- Dual Realm switcher (Piltover Gold ↔ Zaun Chemtech)
- 3D Gyroscopic Hextech Reactor intro (centered)
- Interactive Arcane Terminal (try `jinx`, `shimmer`, `ekko`…)
- Web Audio soundscape
- Spatial particle canvas
- Domain quiz + recruitment form
