// STARFIELD
(function () {
  var c = document.getElementById("stars"),
    ctx = c.getContext("2d"),
    W,
    H,
    stars = [],
    sy = 0;
  function resize() {
    W = c.width = window.innerWidth;
    H = c.height = window.innerHeight;
  }
  function seed() {
    stars = Array.from({ length: 200 }, function () {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.2 + 0.1,
        base: Math.random() * 0.42 + 0.1,
        freq: Math.random() * 0.016 + 0.004,
        phase: Math.random() * Math.PI * 2,
        pf: Math.random() * 0.26 + 0.04,
      };
    });
  }
  window.addEventListener(
    "scroll",
    function () {
      sy = window.scrollY;
    },
    { passive: true },
  );
  window.addEventListener("resize", function () {
    resize();
    seed();
  });
  resize();
  seed();
  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(function (s) {
      var tw = (Math.sin(t * s.freq + s.phase) + 1) * 0.5,
        a = s.base * (0.28 + tw * 0.72);
      var dy = (((s.y - sy * s.pf) % H) + H) % H;
      ctx.beginPath();
      ctx.arc(s.x, dy, s.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(189,211,240," + a + ")";
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();

// NAV + FLOAT CTA
var nav = document.getElementById("nav"),
  floatCta = document.getElementById("float-cta");
window.addEventListener(
  "scroll",
  function () {
    var sy = window.scrollY;
    nav.classList.toggle("scrolled", sy > 80);
    floatCta.classList.toggle("visible", sy > window.innerHeight * 0.6);
  },
  { passive: true },
);

// REVEAL OBSERVER
var ro = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target,
        d = parseInt(el.dataset.delay || 0) * 110;
      setTimeout(function () {
        el.classList.add("in");
      }, d);
      ro.unobserve(el);
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
);
document.querySelectorAll("[data-r]").forEach(function (el) {
  ro.observe(el);
});

// HORIZONTAL SCROLL — JS-driven fixed positioning (avoids overflow:hidden sticky bug)
(function () {
  var section = document.getElementById("ingredients-section");
  var sticky = section.querySelector(".ing-sticky");
  var track = document.getElementById("ing-track");
  var cards = Array.from(track.querySelectorAll(".ing-card"));
  var dots = Array.from(document.querySelectorAll(".ing-dot"));
  var N = cards.length,
    W = 0,
    H = 0,
    scrollRange = 0;
  function setup() {
    W = window.innerWidth;
    H = window.innerHeight;
    scrollRange = (N - 1) * W;
    section.style.position = "relative";
    section.style.height = H + scrollRange + "px";
    sticky.style.width = W + "px";
    sticky.style.height = H + "px";
    sticky.style.left = "0";
    track.style.display = "flex";
    track.style.flexDirection = "row";
    track.style.width = N * W + "px";
    track.style.height = H + "px";
    cards.forEach(function (card) {
      card.style.width = W + "px";
      card.style.height = H + "px";
      card.style.minHeight = H + "px";
    });
    onScroll();
  }
  function onScroll() {
    var rect = section.getBoundingClientRect(),
      sTop = rect.top,
      sBottom = rect.bottom;
    if (sTop <= 0 && sBottom >= H) {
      sticky.style.position = "fixed";
      sticky.style.top = "0px";
    } else if (sTop > 0) {
      sticky.style.position = "absolute";
      sticky.style.top = "0px";
    } else {
      sticky.style.position = "absolute";
      sticky.style.top = scrollRange + "px";
    }
    var scrolled = Math.max(0, Math.min(scrollRange, -sTop));
    track.style.transform = "translateX(" + -scrolled + "px)";
    var idx = Math.min(N - 1, Math.round(scrolled / W));
    dots.forEach(function (d, i) {
      d.classList.toggle("active", i === idx);
    });
  }
  setup();
  window.addEventListener(
    "resize",
    function () {
      setup();
    },
    { passive: true },
  );
  window.addEventListener("scroll", onScroll, { passive: true });
  requestAnimationFrame(function () {
    requestAnimationFrame(onScroll);
  });
})();

// CANVAS: BENEFIT 01 — Hectic city night → serene moonlit calm
(function () {
  var el = document.getElementById("c-sleep"),
    W,
    H,
    t = 0;
  // City lights: random positions generated once
  var cityLights = Array.from({ length: 55 }, function () {
    return {
      x: Math.random(),
      y: 0.55 + Math.random() * 0.45,
      r: Math.random() * 2 + 0.5,
      freq: Math.random() * 0.08 + 0.04,
      phase: Math.random() * Math.PI * 2,
      color: Math.random() < 0.6 ? 0 : 1,
    };
  });
  var streaks = Array.from({ length: 6 }, function () {
    return {
      x: Math.random(),
      y: 0.55 + Math.random() * 0.35,
      speed: (Math.random() * 0.003 + 0.001) * (Math.random() < 0.5 ? 1 : -1),
      len: Math.random() * 0.12 + 0.04,
      active: Math.random(),
    };
  });
  function resize() {
    W = el.width = el.offsetWidth || 400;
    H = el.height = el.offsetHeight || 500;
  }
  function lerp(a, b, t) {
    return a + (b - a) * t;
  }
  function draw() {
    var ctx = el.getContext("2d");
    t += 0.006;
    // Phase: 0=hectic city, 1=calm moon — slow oscillation ~17s cycle
    var phase = (Math.sin(t * 1.4) + 1) * 0.5;
    ctx.clearRect(0, 0, W, H);
    // Sky gradient — city orange glow at bottom transitions to deep navy
    var sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, phase < 0.5 ? "#0d0408" : "#020710");
    sky.addColorStop(0.6, phase < 0.5 ? "#1a0808" : "#060d1e");
    sky.addColorStop(1, phase < 0.5 ? "#2e1005" : "#0d1a0d");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);
    // City ground glow (hectic phase)
    var cityAlpha = Math.max(0, 1 - phase * 1.8);
    if (cityAlpha > 0) {
      var ggl = ctx.createLinearGradient(0, H * 0.5, 0, H);
      ggl.addColorStop(0, "transparent");
      ggl.addColorStop(1, "rgba(180,80,20," + cityAlpha * 0.25 + ")");
      ctx.fillStyle = ggl;
      ctx.fillRect(0, 0, W, H);
    }
    // City lights (visible when hectic)
    if (cityAlpha > 0.02) {
      cityLights.forEach(function (l) {
        var flicker = (Math.sin(t * l.freq * 14 + l.phase) + 1) * 0.5;
        var a = cityAlpha * (0.5 + flicker * 0.5);
        var col =
          l.color === 0
            ? "rgba(255,200,80," + a + ")"
            : "rgba(255,140,60," + a + ")";
        ctx.beginPath();
        ctx.arc(l.x * W, l.y * H, l.r, 0, Math.PI * 2);
        ctx.fillStyle = col;
        ctx.fill();
        // glow
        var g = ctx.createRadialGradient(
          l.x * W,
          l.y * H,
          0,
          l.x * W,
          l.y * H,
          l.r * 5,
        );
        g.addColorStop(
          0,
          l.color === 0
            ? "rgba(255,180,60," + a * 0.15 + ")"
            : "rgba(255,120,40," + a * 0.12 + ")",
        );
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(l.x * W, l.y * H, l.r * 5, 0, Math.PI * 2);
        ctx.fill();
      });
      // Traffic streaks
      streaks.forEach(function (s) {
        s.active = (s.active + Math.abs(s.speed)) % 1;
        var sx = s.active * W,
          sy2 = s.y * H,
          a = cityAlpha * 0.6;
        ctx.beginPath();
        ctx.moveTo(sx, sy2);
        ctx.lineTo(Math.max(0, Math.min(W, sx - s.speed * W * 60)), sy2);
        ctx.strokeStyle =
          s.speed > 0
            ? "rgba(255,220,150," + a + ")"
            : "rgba(220,60,60," + a + ")";
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    }
    // Stars (visible in calm phase)
    var starAlpha = Math.max(0, (phase - 0.2) * 1.4);
    if (starAlpha > 0.02) {
      [
        [0.12, 0.08],
        [0.28, 0.14],
        [0.44, 0.06],
        [0.62, 0.11],
        [0.78, 0.07],
        [0.9, 0.17],
        [0.35, 0.2],
        [0.55, 0.25],
        [0.72, 0.19],
      ].forEach(function (p, i) {
        var tw = (Math.sin(t * 1.4 + i) + 1) * 0.5,
          a = starAlpha * (0.4 + tw * 0.6);
        ctx.beginPath();
        ctx.arc(p[0] * W, p[1] * H, 1.1, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(189,211,240," + a + ")";
        ctx.fill();
      });
    }
    // Moon (rises as phase → 1)
    var moonAlpha = Math.max(0, (phase - 0.35) * 1.7);
    if (moonAlpha > 0.02) {
      var mx = W * 0.65,
        my = lerp(H * 0.08, H * 0.15, 1 - phase) * 1.0,
        mr = Math.min(W, H) * 0.09;
      var mg = ctx.createRadialGradient(mx, my, 0, mx, my, mr * 2.2);
      mg.addColorStop(0, "rgba(225,235,255," + moonAlpha * 0.92 + ")");
      mg.addColorStop(0.5, "rgba(189,211,240," + moonAlpha * 0.7 + ")");
      mg.addColorStop(1, "transparent");
      ctx.fillStyle = mg;
      ctx.beginPath();
      ctx.arc(mx, my, mr * 2.2, 0, Math.PI * 2);
      ctx.fill();
      // Moon beam
      var beam = ctx.createLinearGradient(mx, my + mr, mx * 0.3, H * 0.55);
      beam.addColorStop(0, "rgba(189,211,240," + moonAlpha * 0.06 + ")");
      beam.addColorStop(1, "transparent");
      ctx.fillStyle = beam;
      ctx.beginPath();
      ctx.moveTo(mx - mr * 0.4, my + mr);
      ctx.lineTo(mx + mr * 0.4, my + mr);
      ctx.lineTo(mx * 0.3, H * 0.6);
      ctx.lineTo(mx * 0.1, H * 0.6);
      ctx.closePath();
      ctx.fill();
    }
    // Horizon silhouette (city buildings - hectic, trees - calm)
    var silAlpha = cityAlpha;
    if (silAlpha > 0.02) {
      ctx.fillStyle = "rgba(6,3,2," + silAlpha * 0.9 + ")";
      var bx = 0;
      [0.05, 0.12, 0.09, 0.15, 0.06, 0.11, 0.08, 0.14, 0.07, 0.1, 0.13].forEach(
        function (bh) {
          var bw = W / 11;
          ctx.fillRect(bx, H * (1 - bh * 0.6), bw - 1, H * bh * 0.6);
          bx += bw;
        },
      );
    }
    requestAnimationFrame(draw);
  }
  new ResizeObserver(function () {
    resize();
  }).observe(el.parentElement);
  resize();
  draw();
})();

// CANVAS: BENEFIT 02 — Mental chatter → peace of mind
(function () {
  var el = document.getElementById("c-calm"),
    W,
    H,
    t = 0;
  var particles = [];
  function resize() {
    W = el.width = el.offsetWidth || 400;
    H = el.height = el.offsetHeight || 500;
    particles = Array.from({ length: 80 }, function () {
      var angle = Math.random() * Math.PI * 2;
      var spd = Math.random() * 0.8 + 0.2;
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        r: Math.random() * 2.2 + 0.3,
        baseA: Math.random() * 0.7 + 0.2,
        phase: Math.random() * Math.PI * 2,
        homeX: W * 0.5,
        homeY: H * 0.47,
      };
    });
  }
  function draw() {
    var ctx = el.getContext("2d");
    t += 0.005;
    // Phase: 0=chaotic, 1=still — slow oscillation ~20s
    var phase = (Math.sin(t * 1.2) + 1) * 0.5;
    ctx.clearRect(0, 0, W, H);
    // Background
    var bg = ctx.createLinearGradient(0, 0, W * 0.5, H);
    bg.addColorStop(0, "#030812");
    bg.addColorStop(1, "#0a1830");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);
    // Harsh overlay when hectic (subtle blue-white flash)
    var noiseAlpha = Math.max(0, 1 - phase * 2) * 0.04;
    if (noiseAlpha > 0) {
      ctx.fillStyle = "rgba(200,220,255," + noiseAlpha + ")";
      ctx.fillRect(0, 0, W, H);
    }
    // Particles
    var speedMult = 1 - phase * 0.94; // nearly stops at phase=1
    var cx2 = W * 0.5,
      cy2 = H * 0.47;
    particles.forEach(function (p) {
      p.x += p.vx * speedMult;
      p.y += p.vy * speedMult;
      // Wrap
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
      // In calm phase, drift toward center
      if (phase > 0.4) {
        var pull = (phase - 0.4) * 1.6;
        p.x += (p.homeX - p.x) * pull * 0.008;
        p.y += (p.homeY - p.y) * pull * 0.008;
      }
      var dist = Math.hypot(p.x - cx2, p.y - cy2);
      var distFade = Math.max(0, 1 - dist / (W * 0.52));
      var flicker = phase < 0.6 ? (Math.sin(t * 8 + p.phase) + 1) * 0.5 : 0; // fast flicker when hectic
      var a =
        p.baseA *
        (phase < 0.5 ? 0.5 + flicker * 0.5 : Math.max(0.05, 1 - phase * 0.85)) *
        distFade;
      // Color: harsh cyan-white when chaotic, soft blue when calm
      var r = Math.round(160 + phase * 29),
        g = Math.round(190 + phase * 21),
        b = 255;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * (1 - phase * 0.5), 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
      ctx.fill();
    });
    // Connection lines (many when chaotic, none when calm)
    var lineVis = Math.max(0, 1 - phase * 1.5);
    if (lineVis > 0.02) {
      var near = particles.slice(0, 35);
      for (var i = 0; i < near.length; i++)
        for (var j = i + 1; j < near.length; j++) {
          var d = Math.hypot(near[i].x - near[j].x, near[i].y - near[j].y);
          var maxD = W * (phase < 0.3 ? 0.22 : 0.15);
          if (d < maxD) {
            ctx.beginPath();
            ctx.moveTo(near[i].x, near[i].y);
            ctx.lineTo(near[j].x, near[j].y);
            ctx.strokeStyle =
              "rgba(100,160,240," + lineVis * (1 - d / maxD) * 0.18 + ")";
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
    }
    // Noise lines (chaotic only — random short segments suggesting thoughts/text)
    if (phase < 0.4) {
      var noiseVis = (1 - phase * 2.5) * 0.12;
      for (var k = 0; k < 8; k++) {
        var nx = Math.sin(t * 3 + k * 1.3) * W * 0.25 + cx2,
          ny = Math.cos(t * 2.2 + k * 1.7) * H * 0.2 + cy2;
        ctx.beginPath();
        ctx.moveTo(nx, ny);
        ctx.lineTo(nx + Math.sin(t * 5 + k) * 40, ny + Math.cos(t * 4 + k) * 8);
        ctx.strokeStyle = "rgba(220,240,255," + noiseVis + ")";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
    // Central peace orb (grows in calm phase)
    var orbSize = lerp2(0, W * 0.22, phase);
    if (orbSize > 1) {
      var og = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, orbSize);
      og.addColorStop(0, "rgba(189,211,240," + phase * 0.14 + ")");
      og.addColorStop(0.5, "rgba(100,160,240," + phase * 0.06 + ")");
      og.addColorStop(1, "transparent");
      ctx.fillStyle = og;
      ctx.beginPath();
      ctx.arc(cx2, cy2, orbSize, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  function lerp2(a, b, t) {
    return a + (b - a) * t;
  }
  new ResizeObserver(function () {
    resize();
  }).observe(el.parentElement);
  resize();
  draw();
})();

// CANVAS: BENEFIT 03 — Sustained deep sleep waveform
(function () {
  var el = document.getElementById("c-stay"),
    W,
    H,
    t = 0;
  var waves = [];
  function resize() {
    W = el.width = el.offsetWidth || 400;
    H = el.height = el.offsetHeight || 500;
    waves = [
      {
        freq: 0.8,
        amp: 0.09,
        phase: 0,
        speed: 0.007,
        alpha: 0.55,
        color: "189,211,240",
      },
      {
        freq: 0.5,
        amp: 0.06,
        phase: 1.4,
        speed: 0.005,
        alpha: 0.35,
        color: "160,190,230",
      },
      {
        freq: 1.1,
        amp: 0.04,
        phase: 0.7,
        speed: 0.009,
        alpha: 0.22,
        color: "210,220,245",
      },
    ];
  }
  function drawWave(ctx, w) {
    ctx.beginPath();
    var y0 = H * 0.5;
    for (var x = 0; x <= W; x += 2) {
      var y =
        y0 +
        Math.sin(x * 0.01 * w.freq + t * w.speed * 60 + w.phase) * H * w.amp +
        Math.sin(x * 0.018 * w.freq + t * w.speed * 40 + w.phase + 0.9) *
          H *
          w.amp *
          0.4;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "rgba(" + w.color + "," + w.alpha + ")";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
  function draw() {
    var ctx = el.getContext("2d");
    t += 1;
    ctx.clearRect(0, 0, W, H);
    // Deep navy background
    var bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#020612");
    bg.addColorStop(1, "#06102a");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);
    // Soft centre glow — resting pulse
    var glow = ctx.createRadialGradient(
      W * 0.5,
      H * 0.5,
      0,
      W * 0.5,
      H * 0.5,
      W * 0.45,
    );
    var pulse = (Math.sin(t * 0.04) + 1) * 0.5;
    glow.addColorStop(0, "rgba(100,140,220," + (pulse * 0.05 + 0.03) + ")");
    glow.addColorStop(1, "transparent");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H);
    // Stable sleep waves
    waves.forEach(function (w) {
      drawWave(ctx, w);
    });
    // Horizontal midline (very subtle)
    ctx.beginPath();
    ctx.moveTo(0, H * 0.5);
    ctx.lineTo(W, H * 0.5);
    ctx.strokeStyle = "rgba(100,140,200,.1)";
    ctx.lineWidth = 1;
    ctx.stroke();
    // Drifting sleep particles
    if (!el._pts) {
      el._pts = Array.from({ length: 28 }, function () {
        return {
          x: Math.random() * W,
          y: Math.random() * H,
          vy: -(Math.random() * 0.18 + 0.04),
          r: Math.random() * 1.4 + 0.2,
          a: Math.random() * 0.35 + 0.1,
        };
      });
    }
    el._pts.forEach(function (p) {
      p.y += p.vy;
      if (p.y < 0) {
        p.y = H;
        p.x = Math.random() * W;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle =
        "rgba(189,211,240," +
        p.a * (0.4 + Math.sin(t * 0.03 + p.x) * 0.6) +
        ")";
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  new ResizeObserver(function () {
    resize();
  }).observe(el.parentElement);
  resize();
  draw();
})();

// CANVAS: BENEFIT 04 — Night → Dawn + person waking in bed
(function () {
  var el = document.getElementById("c-dawn"),
    W,
    H,
    t = 0;
  var motes = [];
  function resize() {
    W = el.width = el.offsetWidth || 400;
    H = el.height = el.offsetHeight || 500;
    motes = Array.from({ length: 60 }, function () {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vy: -Math.random() * 0.35 - 0.1,
        r: Math.random() * 2 + 0.3,
        a: Math.random() * 0.4 + 0.15,
      };
    });
  }

  function draw() {
    var ctx = el.getContext("2d");
    t += 0.005;
    // Phase: 0=deep night, 1=bright dawn — slow cycle ~21s
    var phase = (Math.sin(t * 1.2) + 1) * 0.5;
    ctx.clearRect(0, 0, W, H);
    // Sky
    var dawnBlend = phase;
    var sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, lerpColor("#020810", "#03080e", dawnBlend * 0.3));
    sky.addColorStop(0.45, lerpColor("#06122a", "#07122a", dawnBlend * 0.2));
    sky.addColorStop(0.72, lerpColor("#06122a", "#1c1a08", dawnBlend));
    sky.addColorStop(0.88, lerpColor("#06122a", "#3d2800", dawnBlend));
    sky.addColorStop(1, lerpColor("#040810", "#7a4400", dawnBlend));
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);
    // Horizon glow
    var hglowA = phase * 0.55;
    if (hglowA > 0.01) {
      var hy = H * 0.74;
      var hg = ctx.createRadialGradient(W * 0.5, hy, 0, W * 0.5, hy, W * 0.65);
      hg.addColorStop(0, "rgba(220,155,50," + hglowA + ")");
      hg.addColorStop(0.3, "rgba(180,100,20," + hglowA * 0.45 + ")");
      hg.addColorStop(1, "transparent");
      ctx.fillStyle = hg;
      ctx.fillRect(0, 0, W, H);
      // Sun
      var sg = ctx.createRadialGradient(
        W * 0.5,
        hy - 0.02 * H,
        0,
        W * 0.5,
        hy,
        W * 0.2,
      );
      sg.addColorStop(0, "rgba(255,220,140," + phase * 0.7 + ")");
      sg.addColorStop(0.2, "rgba(220,150,40," + phase * 0.38 + ")");
      sg.addColorStop(1, "transparent");
      ctx.fillStyle = sg;
      ctx.fillRect(0, 0, W, H);
    }
    // Stars fade as dawn rises
    var starVis = Math.max(0, 1 - phase * 1.8);
    if (starVis > 0.02) {
      [
        [0.1, 0.05],
        [0.28, 0.1],
        [0.47, 0.07],
        [0.66, 0.04],
        [0.82, 0.09],
        [0.55, 0.21],
      ].forEach(function (p, i) {
        var fade = starVis * (0.5 + Math.sin(t + i) * 0.5) * 0.6;
        ctx.beginPath();
        ctx.arc(p[0] * W, p[1] * H, 1, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(189,211,240," + fade + ")";
        ctx.fill();
      });
    }
    // Warm motes rising
    motes.forEach(function (m) {
      m.y += m.vy;
      if (m.y < 0) {
        m.y = H;
        m.x = Math.random() * W;
      }
      var wm = m.y / H,
        fade =
          Math.max(0, (1 - wm) * 0.65 + 0.05) *
          m.a *
          phase *
          (wm < 0.4 ? 1 : Math.max(0, 1 - (wm - 0.4) / 0.6));
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(200,140,50," + fade + ")";
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  function lerpColor(c1, c2, t) {
    function h(c) {
      return [
        parseInt(c.slice(1, 3), 16),
        parseInt(c.slice(3, 5), 16),
        parseInt(c.slice(5, 7), 16),
      ];
    }
    var a = h(c1),
      b = h(c2);
    return (
      "rgb(" +
      Math.round(a[0] + (b[0] - a[0]) * t) +
      "," +
      Math.round(a[1] + (b[1] - a[1]) * t) +
      "," +
      Math.round(a[2] + (b[2] - a[2]) * t) +
      ")"
    );
  }
  new ResizeObserver(function () {
    resize();
  }).observe(el.parentElement);
  resize();
  draw();
})();

// CANVAS: FINAL
(function () {
  var el = document.getElementById("c-final"),
    W,
    H,
    t = 0,
    stars2 = [];
  function resize() {
    W = el.width = el.offsetWidth || window.innerWidth;
    H = el.height = el.offsetHeight || window.innerHeight;
    stars2 = Array.from({ length: 140 }, function () {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.1 + 0.1,
        a: Math.random() * 0.45 + 0.1,
        freq: Math.random() * 0.013 + 0.003,
        phase: Math.random() * Math.PI * 2,
      };
    });
  }
  function draw() {
    var ctx = el.getContext("2d");
    t += 0.006;
    ctx.clearRect(0, 0, W, H);
    stars2.forEach(function (s) {
      var tw = (Math.sin(t * s.freq + s.phase) + 1) * 0.5;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(189,211,240," + s.a * (0.28 + tw * 0.72) + ")";
      ctx.fill();
    });
    var gg = ctx.createRadialGradient(W * 0.5, H, 0, W * 0.5, H, W * 0.55);
    gg.addColorStop(0, "rgba(196,145,42,.16)");
    gg.addColorStop(1, "transparent");
    ctx.fillStyle = gg;
    ctx.fillRect(0, 0, W, H);
    requestAnimationFrame(draw);
  }
  new ResizeObserver(function () {
    resize();
  }).observe(el.parentElement || document.body);
  resize();
  draw();
})();

// FAQ ACCORDION
(function () {
  var items = document.querySelectorAll(".faq-item");
  items.forEach(function (item) {
    item.querySelector(".faq-q").addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      items.forEach(function (i) {
        i.classList.remove("open");
      });
      if (!isOpen) item.classList.add("open");
    });
  });
})();

// QUANTITY SELECTOR + SHOPIFY CART
(function () {
  // Update DEEP_SLEEP_VARIANT_ID with the actual Shopify variant ID for Deep Sleep
  var VARIANT_ID = window.productVariantId || "45387387928599";
  var PRICE = 105;
  var FREE_SHIP = 420;
  var qty = 1;
  var numEl = document.getElementById("qty-num");
  var priceEl = document.getElementById("qty-price");
  var downBtn = document.getElementById("qty-down");
  var upBtn = document.getElementById("qty-up");
  var shopBtn = document.getElementById("shop");
  var shipEl = document.getElementById("qty-shipping");

  function update() {
    var total = PRICE * qty;
    numEl.textContent = qty;
    priceEl.textContent = "RM " + total.toFixed(2);
    shopBtn.href = "https://shortcutx.com.my/cart/" + VARIANT_ID + ":" + qty;
    var gap = FREE_SHIP - total;
    if (gap <= 0) {
      shipEl.classList.remove("qty-shipping-hint");
      shipEl.classList.add("qty-shipping-eligible");
      shipEl.textContent = "✓ You're eligible for free shipping!";
    } else {
      shipEl.classList.remove("qty-shipping-eligible");
      shipEl.classList.add("qty-shipping-hint");
      shipEl.textContent =
        "Add RM" + gap + " more for free shipping (after vouchers)";
    }
  }

  downBtn.addEventListener("click", function () {
    if (qty > 1) {
      qty--;
      update();
    }
  });
  upBtn.addEventListener("click", function () {
    if (qty < 10) {
      qty++;
      update();
    }
  });
  update();
})();
