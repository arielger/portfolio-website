import { length } from '../modules/play.core/src/modules/vec2';

// Globals have module scope
const chars = '░▒▓▔▕▖▗▘▙▚▛▜▝▞▟';

// This is the main loop.
// Character coordinates are passed in coord {x, y, index}.
// The function must return a single character or, alternatively, an object:
// {char, color, background, weight}.
export function main(coord: any, context: any, cursor: any, buffer: any) {
  const aspectRatio = context.metrics.aspect;

  const m = Math.min(context.cols * aspectRatio, context.rows);

  const st = {
    x: ((2.0 * (coord.x - context.cols / 2)) / m) * aspectRatio, // apply aspect
    y: (2.0 * (coord.y - context.rows / 2)) / m,
  };

  const distance = length(st);

  return distance < 0.9 ? chars[Math.floor(Math.random() * chars.length)] : ' ';
}
