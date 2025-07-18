/* components/EwaweCanvas.tsx */
"use client";
import { useRef, useEffect } from "react";

interface Sprite {
  x: number;
  y: number;
  w: number;
  h: number;
  speed: number;
  type: "cloud" | "ship" | "plane";
  opacity: number;
}

export function EwaweCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const sprites = useRef<Sprite[]>([]);

  // init sprites once
  useEffect(() => {
    const makeSprites = (w: number, h: number) => {
      const arr: Sprite[] = [];
      const cloudCount = 8;
      for (let i = 0; i < cloudCount; i++) {
        arr.push({
          x: Math.random() * w,
          y: Math.random() * h * 0.5,
          w: 100 + Math.random() * 200,
          h: 40 + Math.random() * 60,
          speed: 5 + Math.random() * 10, // px/s
          type: "cloud",
          opacity: 0.25 + Math.random() * 0.35,
        });
      }
      // subtle decorative ship + plane
      arr.push({
        x: Math.random() * w,
        y: h * 0.75,
        w: 120,
        h: 40,
        speed: 8,
        type: "ship",
        opacity: 0.15,
      });
      arr.push({
        x: Math.random() * w,
        y: h * 0.3,
        w: 80,
        h: 30,
        speed: 20,
        type: "plane",
        opacity: 0.2,
      });
      sprites.current = arr;
    };

    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth * devicePixelRatio);
    let h = (canvas.height = window.innerHeight * devicePixelRatio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.scale(devicePixelRatio, devicePixelRatio);

    makeSprites(w / devicePixelRatio, h / devicePixelRatio);

    const handleResize = () => {
      w = (canvas.width = window.innerWidth * devicePixelRatio);
      h = (canvas.height = window.innerHeight * devicePixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.resetTransform?.();
      ctx.scale(devicePixelRatio, devicePixelRatio);
      makeSprites(w / devicePixelRatio, h / devicePixelRatio);
    };
    window.addEventListener("resize", handleResize);

    let last = performance.now();
    const loop = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      draw(ctx, w / devicePixelRatio, h / devicePixelRatio, dt);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 -z-10 pointer-events-none select-none"
      aria-hidden="true"
    />
  );

  function draw(
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    dt: number,
  ) {
    // gradient background
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, "#4FC3F7");
    grad.addColorStop(1, "#0288D1");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // low wave band
    ctx.globalAlpha = 0.25;
    ctx.fillStyle = "#ffffff";
    const waveH = 60;
    ctx.beginPath();
    ctx.moveTo(0, h - waveH);
    const steps = 6;
    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * w;
      const y =
        h -
        waveH -
        Math.sin((i / steps) * Math.PI * 2) * 10; // subtle undulation
      ctx.lineTo(x, y);
    }
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;

    // sprites
    const arr = sprites.current;
    arr.forEach((s) => {
      s.x += s.speed * dt; // move right
      if (s.x > w + s.w) s.x = -s.w; // wrap
      drawSprite(ctx, s);
    });
  }

  function drawSprite(ctx: CanvasRenderingContext2D, s: Sprite) {
    ctx.save();
    ctx.globalAlpha = s.opacity;
    ctx.translate(s.x, s.y);
    switch (s.type) {
      case "cloud":
        drawCloudShape(ctx, s.w, s.h);
        break;
      case "ship":
        drawShipShape(ctx, s.w, s.h);
        break;
      case "plane":
        drawPlaneShape(ctx, s.w, s.h);
        break;
    }
    ctx.restore();
  }

  function drawCloudShape(ctx: CanvasRenderingContext2D, w: number, h: number) {
    const r = h / 2;
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(r, r, r, Math.PI * 0.5, Math.PI * 1.5);
    ctx.arc(w - r, r, r, Math.PI * 1.5, Math.PI * 0.5);
    ctx.closePath();
    ctx.fill();
    // soft blur halo
    ctx.filter = "blur(8px)";
    ctx.fill();
    ctx.filter = "none";
  }

  function drawShipShape(ctx: CanvasRenderingContext2D, w: number, h: number) {
    const hullH = h * 0.5;
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.moveTo(0, hullH);
    ctx.lineTo(w * 0.85, hullH);
    ctx.lineTo(w, hullH + hullH * 0.4);
    ctx.lineTo(0, hullH + hullH * 0.4);
    ctx.closePath();
    ctx.fill();
    // stack boxes
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    const cols = 5;
    const boxW = (w * 0.8) / cols;
    const boxH = hullH * 0.6;
    for (let i = 0; i < cols; i++) {
      ctx.fillRect(i * boxW + 5, hullH - boxH, boxW - 4, boxH - 4);
    }
  }

  function drawPlaneShape(ctx: CanvasRenderingContext2D, w: number, h: number) {
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.moveTo(0, h * 0.5);
    ctx.lineTo(w * 0.7, h * 0.5);
    ctx.lineTo(w, 0);
    ctx.lineTo(w * 0.8, h * 0.5);
    ctx.lineTo(w, h);
    ctx.lineTo(w * 0.7, h * 0.5);
    ctx.closePath();
    ctx.fill();
  }
}
