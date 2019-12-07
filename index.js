import * as config from './config.js'

import {
  generateFractalName,
  generateFractalLines,
} from './fractal.js'
import { drawTrack } from './draw.js'
import {
  moveMatrix,
  scallMatrix,
} from './matrix.js'


const fractalName = generateFractalName(config.START_FRACTAL_NAME, config.RULES, config.FRACTAL_INDEX)

const fractalLines = generateFractalLines(
  fractalName,
  config.ALPHA,
)

///

// перед надо отчищать контекст
// ctx.clearRect(0, 0, canvas.width, canvas.height)

fractalLines.forEach(line => {
  line = math.matrix(line)
  line = scallMatrix(line, 10)
  line = moveMatrix(line, [canvas.width / 2, 0])
  drawTrack(line.valueOf())
})
