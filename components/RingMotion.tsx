'use client';

import { useEffect, useRef } from 'react';

const curves: ReadonlyArray<readonly [number, number, number]> = [
  [244.7, 63.57653, 1.60134],
  [251.9, 65.6091, 1.61862],
  [258.6, 68.02309, 1.6359],
  [265.1, 70.65564, 1.65318],
  [271.3, 73.45284, 1.67045],
  [277.3, 76.34086, 1.68773],
  [283.0, 79.47516, 1.70501],
  [288.23807, 82.82588, 1.72208],
  [294.5389, 86.40469, 1.74009],
  [299.8, 90.23531, 1.75908],
  [304.62239, 94.32123, 1.77755],
  [309.3752, 98.70185, 1.79659],
  [313.94816, 103.39438, 1.81588],
  [319.59128, 108.41443, 1.83525],
  [323.71691, 113.80481, 1.85521],
  [327.87596, 119.57404, 1.87552],
  [331.64157, 125.77114, 1.89628],
  [335.33282, 132.40839, 1.9172],
  [338.53336, 139.54143, 1.93873],
  [341.49694, 147.18884, 1.96049],
  [344.06462, 155.3961, 1.9828],
  [346.38572, 164.21986, 2.00541],
  [348.42143, 173.68311, 2.02833],
  [350.16157, 183.83965, 2.05181],
  [351.59419, 194.74376, 2.07554],
  [353.28743, 206.44957, 2.10051],
  [354.22402, 219.00882, 2.12484],
  [354.91259, 232.46916, 2.14951],
  [355.43384, 246.87899, 2.1745],
  [355.89694, 262.28743, 2.19954],
  [356.23378, 278.87254, 2.22699],
  [356.27098, 296.53084, 2.25243],
  [356.28413, 315.35837, 2.27889],
  [356.3619, 335.57011, 2.30693],
  [356.55, 356.55, 0],
];

export function RingMotion() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const art = canvas?.parentElement;
    if (!canvas || !ctx || !art) return;

    const surface: HTMLCanvasElement = canvas;
    const context: CanvasRenderingContext2D = ctx;
    const artElement: HTMLElement = art;

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const tau = 2 * Math.PI;
    const cycle = 10400 / 0.7 / 0.75;

    function drawTrail(
      major: number,
      minor: number,
      angle: number,
      head: number,
      direction: number,
    ) {
      const tail = head - direction * 1.38;
      const end = head + direction * 0.16;
      context.save();
      context.rotate(angle);
      const gradient = context.createLinearGradient(
        major * Math.cos(tail),
        minor * Math.sin(tail),
        major * Math.cos(end),
        minor * Math.sin(end),
      );
      gradient.addColorStop(0, 'rgba(255,97,19,0)');
      gradient.addColorStop(0.3, 'rgba(255,113,29,.30)');
      gradient.addColorStop(0.61, 'rgba(255,144,46,.76)');
      gradient.addColorStop(0.82, 'rgba(255,181,83,1)');
      gradient.addColorStop(0.92, 'rgba(255,171,67,.92)');
      gradient.addColorStop(1, 'rgba(255,143,40,0)');
      context.beginPath();
      context.ellipse(0, 0, major, minor, 0, tail, end, direction < 0);
      context.strokeStyle = gradient;
      context.globalAlpha = 0.15;
      context.lineWidth = 7.3;
      context.stroke();
      context.globalAlpha = 1;
      context.lineWidth = 3.35;
      context.stroke();
      context.restore();
    }

    function draw(t: number) {
      const phase = t * tau;
      const pulse = Math.sin(phase);
      const roll = phase + 0.14 * Math.sin(2 * phase);
      const breath = 1 + 0.022 * Math.sin(2 * phase);
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, surface.width, surface.height);
      context.setTransform(
        surface.width / 762,
        0,
        0,
        surface.height / 762,
        surface.width / 2,
        surface.height / 2,
      );
      context.rotate(roll);
      context.scale(breath, breath);
      const shapes: Array<{ height: number; width: number; tilt: number; i: number }> = [];
      context.lineWidth = 2.05;
      for (let i = curves.length - 1; i >= 0; i--) {
        const [major, minor, angle] = curves[i];
        const u = i / (curves.length - 1);
        const influence = Math.pow(1 - u, 1.7);
        const angleLag = 0.24 * influence * (Math.sin(phase - 2.8 * u) + Math.sin(2.8 * u));
        const width = minor * (1 + influence * (0.27 * pulse + 0.09 * Math.sin(2 * phase)));
        const height = major * (1 + influence * 0.09 * Math.sin(phase));
        const tilt = angle + angleLag;
        shapes.push({ height, width, tilt, i });
        context.strokeStyle = 'rgb(180,76,20)';
        context.beginPath();
        context.ellipse(0, 0, height, width, tilt, 0, tau);
        context.stroke();
      }
      for (const { height, width, tilt, i } of shapes) {
        const direction = Math.floor(i / 4) % 2 === 0 ? 1 : -1;
        const start = i * 0.126 + (direction === 1 ? -1.15 : 2.25);
        const head = start + direction * phase * 2;
        drawTrail(height, width, tilt, head, direction);
      }
    }

    let inView = true;
    let animation = 0;
    let elapsed = 0;
    let last = 0;
    let active = false;

    function tick(now: number) {
      if (last) elapsed = (elapsed + now - last) % cycle;
      last = now;
      draw(elapsed / cycle);
      animation = requestAnimationFrame(tick);
    }

    function update() {
      const running = !preference.matches && inView && !document.hidden;
      artElement.classList.toggle('ready', !preference.matches);
      if (running === active) return;
      active = running;
      last = 0;
      if (active) {
        animation = requestAnimationFrame(tick);
      } else {
        cancelAnimationFrame(animation);
      }
    }

    draw(0);
    preference.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);

    let observer: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        update();
      });
      observer.observe(artElement);
    }

    update();

    return () => {
      cancelAnimationFrame(animation);
      observer?.disconnect();
      preference.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="ring-motion"
      width={800}
      height={800}
      aria-hidden="true"
    />
  );
}
