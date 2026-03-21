import { useEffect, useRef, useState, useCallback } from "react";

// ─── Constants ─────
const COLS = 24;
const ROWS = 14;
const BASE_INTERVAL = 130; // ms per tick at speed 1

type Dir = "UP" | "DOWN" | "LEFT" | "RIGHT";
type Point = { x: number; y: number };

function pointEq(a: Point, b: Point) {
  return a.x === b.x && a.y === b.y;
}

function randomFood(snake: Point[]): Point {
  let p: Point;
  do {
    p = {
      x: Math.floor(Math.random() * COLS),
      y: Math.floor(Math.random() * ROWS),
    };
  } while (snake.some((s) => pointEq(s, p)));
  return p;
}

function useSnake() {
  const [snake, setSnake] = useState<Point[]>([
    { x: 6, y: 7 }, { x: 5, y: 7 }, { x: 4, y: 7 },
  ]);
  const [food, setFood] = useState<Point>({ x: 15, y: 7 });
  const [dir, setDir] = useState<Dir>("RIGHT");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem("snake_hs") ?? "0", 10);
  });
  const [running, setRunning] = useState(false);
  const [dead, setDead] = useState(false);
  const [speed, setSpeed] = useState(1);

  const dirRef = useRef<Dir>("RIGHT");
  const snakeRef = useRef(snake);
  snakeRef.current = snake;

  const reset = useCallback(() => {
    const initial = [{ x: 6, y: 7 }, { x: 5, y: 7 }, { x: 4, y: 7 }];
    setSnake(initial);
    setFood(randomFood(initial));
    setDir("RIGHT");
    dirRef.current = "RIGHT";
    setScore(0);
    setDead(false);
    setSpeed(1);
    setRunning(true);
  }, []);

  // Keyboard controls
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const map: Record<string, Dir> = {
        ArrowUp: "UP", ArrowDown: "DOWN",
        ArrowLeft: "LEFT", ArrowRight: "RIGHT",
        w: "UP", s: "DOWN", a: "LEFT", d: "RIGHT",
      };
      const next = map[e.key];
      if (!next) return;
      e.preventDefault();
      const opposites: Record<Dir, Dir> = { UP: "DOWN", DOWN: "UP", LEFT: "RIGHT", RIGHT: "LEFT" };
      if (next !== opposites[dirRef.current]) {
        dirRef.current = next;
        setDir(next);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Game tick
  useEffect(() => {
    if (!running || dead) return;
    const interval = BASE_INTERVAL - (speed - 1) * 12;
    const id = setInterval(() => {
      setSnake((prev) => {
        const head = prev[0];
        const deltas: Record<Dir, Point> = {
          UP:    { x: 0,  y: -1 },
          DOWN:  { x: 0,  y:  1 },
          LEFT:  { x: -1, y:  0 },
          RIGHT: { x: 1,  y:  0 },
        };
        const d = deltas[dirRef.current];
        const newHead = { x: head.x + d.x, y: head.y + d.y };

        // Wall collision
        if (newHead.x < 0 || newHead.x >= COLS || newHead.y < 0 || newHead.y >= ROWS) {
          setDead(true);
          setRunning(false);
          return prev;
        }
        // Self collision
        if (prev.some((s) => pointEq(s, newHead))) {
          setDead(true);
          setRunning(false);
          return prev;
        }

        const ate = pointEq(newHead, food);
        const newSnake = ate ? [newHead, ...prev] : [newHead, ...prev.slice(0, -1)];

        if (ate) {
          setFood(randomFood(newSnake));
          setScore((sc) => {
            const next = sc + 10;
            setHighScore((hs) => {
              const best = Math.max(hs, next);
              localStorage.setItem("snake_hs", String(best));
              return best;
            });
            setSpeed((sp) => Math.min(10, 1 + Math.floor(next / 50)));
            return next;
          });
        }

        return newSnake;
      });
    }, interval);
    return () => clearInterval(id);
  }, [running, dead, food, speed]);

  return { snake, food, score, highScore, running, dead, speed, dir: dirRef.current, reset, setRunning };
}

// ─── Component ────────────────────────────────────────────────────────────────
export function SnakeGame() {
  const { snake, food, score, highScore, running, dead, speed, reset, setRunning } = useSnake();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Draw
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const cellW = W / COLS;
    const cellH = H / ROWS;

    // Background
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.fillRect(0, 0, W, H);

    // Grid dots
    ctx.fillStyle = "rgba(91,155,213,0.08)";
    for (let x = 0; x < COLS; x++) {
      for (let y = 0; y < ROWS; y++) {
        ctx.beginPath();
        ctx.arc(x * cellW + cellW / 2, y * cellH + cellH / 2, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Food — glowing node
    const fx = food.x * cellW + cellW / 2;
    const fy = food.y * cellH + cellH / 2;
    const foodGrad = ctx.createRadialGradient(fx, fy, 0, fx, fy, cellW * 0.7);
    foodGrad.addColorStop(0, "rgba(240,168,50,0.9)");
    foodGrad.addColorStop(1, "rgba(240,168,50,0)");
    ctx.fillStyle = foodGrad;
    ctx.beginPath();
    ctx.arc(fx, fy, cellW * 0.7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#f0a832";
    ctx.beginPath();
    ctx.arc(fx, fy, cellW * 0.28, 0, Math.PI * 2);
    ctx.fill();

    // Snake — PCB trace segments
    snake.forEach((seg, i) => {
      const x = seg.x * cellW;
      const y = seg.y * cellH;
      const isHead = i === 0;
      const alpha = isHead ? 1 : Math.max(0.25, 1 - i * 0.04);
      const color = isHead ? "#7ab3e0" : "#5b9bd5";

      // Segment fill
      ctx.fillStyle = isHead
        ? `rgba(122,179,224,${alpha})`
        : `rgba(91,155,213,${alpha * 0.8})`;
      const pad = isHead ? 2 : 3;
      const radius = 3;
      const rx = x + pad, ry = y + pad;
      const rw = cellW - pad * 2, rh = cellH - pad * 2;
      ctx.beginPath();
      ctx.moveTo(rx + radius, ry);
      ctx.lineTo(rx + rw - radius, ry);
      ctx.quadraticCurveTo(rx + rw, ry, rx + rw, ry + radius);
      ctx.lineTo(rx + rw, ry + rh - radius);
      ctx.quadraticCurveTo(rx + rw, ry + rh, rx + rw - radius, ry + rh);
      ctx.lineTo(rx + radius, ry + rh);
      ctx.quadraticCurveTo(rx, ry + rh, rx, ry + rh - radius);
      ctx.lineTo(rx, ry + radius);
      ctx.quadraticCurveTo(rx, ry, rx + radius, ry);
      ctx.closePath();
      ctx.fill();

      // Glow on head
      if (isHead) {
        ctx.shadowColor = "rgba(91,155,213,0.6)";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    });
  }, [snake, food]);

  // D-pad handler fi mobile
  const handleDpad = (d: string) => {
    const map: Record<string, KeyboardEvent["key"]> = {
      up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight",
    };
    window.dispatchEvent(new KeyboardEvent("keydown", { key: map[d], bubbles: true }));
  };

  return (
    <div className="snake-game-wrapper">
      <div className="snake-score-row">
        <span className="snake-stat">
          <span className="snake-stat-label">Score</span>
          <span className="snake-stat-value">{String(score).padStart(4, "0")}</span>
        </span>
        <span className="snake-stat">
          <span className="snake-stat-label">Best</span>
          <span className="snake-stat-value">{String(highScore).padStart(4, "0")}</span>
        </span>
        <span className="snake-stat">
          <span className="snake-stat-label">Speed</span>
          <span className="snake-stat-value">×{speed}</span>
        </span>
      </div>

      {/* Canvas */}
      <div className="snake-canvas-wrapper">
        <canvas
          ref={canvasRef}
          width={480}
          height={280}
          className="snake-canvas"
        />

        {/* Overlay — start / dead */}
        {!running && (
          <div className="snake-overlay">
            {dead ? (
              <>
                <p className="snake-overlay-title">SIGNAL LOST</p>
                <p className="snake-overlay-score">Score: {score}</p>
                <button className="snake-overlay-btn" onClick={reset}>Retry →</button>
              </>
            ) : (
              <>
                <p className="snake-overlay-title">SIGNAL CHAIN</p>
                <p className="snake-overlay-sub">Arrow keys or WASD to move</p>
                <button className="snake-overlay-btn" onClick={reset}>Start →</button>
              </>
            )}
          </div>
        )}
      </div>

      {/* d-pad */}
      <div className="snake-dpad">
        <div className="snake-dpad-row">
          <button className="snake-dpad-btn" onClick={() => handleDpad("up")}>▲</button>
        </div>
        <div className="snake-dpad-row">
          <button className="snake-dpad-btn" onClick={() => handleDpad("left")}>◀</button>
          <button className="snake-dpad-btn" onClick={() => handleDpad("down")}>▼</button>
          <button className="snake-dpad-btn" onClick={() => handleDpad("right")}>▶</button>
        </div>
      </div>
    </div>
  );
}
