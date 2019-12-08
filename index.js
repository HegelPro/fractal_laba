import * as config from './config.js'

import {
  generateFractalName,
  generateFractalLines,
} from './fractal.js'
import {
  clearCanvas,
  drawTrack,
} from './canvas.js'
import {
  moveMatrix,
  scallMatrix,
} from './matrix.js'

let fractalIndex = config.START_FRACTAL_INDEX
let startFractalName = config.START_FRACTAL_NAME
let fractalRules = config.START_FRACTAL_RULES
let alpha = config.ALPHA


const fractalNameText = document.querySelector('#fractal-name')

function drawFractal() {
  const fractalName = generateFractalName(
    startFractalName,
    fractalRules,
    fractalIndex,
  )
  const fractalLines = generateFractalLines(
    fractalName,
    math.evaluate(alpha),
  )
  
  clearCanvas()
  fractalLines.forEach(line => {
    line = math.matrix(line)
    line = scallMatrix(line, 10)
    line = moveMatrix(line, [canvas.width / 2, 0])
    drawTrack(line.valueOf())
  })

  fractalNameText.textContent = fractalName
}

const nextIterationBtn = document.querySelector('#next-iteration')
nextIterationBtn.addEventListener('click', () => {
  fractalIndex++
  drawFractal()
})

const previousIterationBtn = document.querySelector('#previous-iteration')
previousIterationBtn.addEventListener('click', () => {
  fractalIndex--
  drawFractal()
})

const alphaInput = document.querySelector('#alpha')
alphaInput.value = alpha

const startFractalNameInput = document.querySelector('#start-fractal-name')
startFractalNameInput.value = startFractalName

const fractalRuleKeyInputs = document.querySelectorAll('.rule-key')
const fractalRuleValueInputs = document.querySelectorAll('.rule-value')
fractalRules.forEach((rule, index) => {
  fractalRuleKeyInputs[index].value = rule[0]
  fractalRuleValueInputs[index].value = rule[1]
})

const setFractalPropertiesBtn = document.querySelector('#set-fractal-properties')
setFractalPropertiesBtn.addEventListener('click', () => {
  let newFractalRules = []
  fractalRuleKeyInputs.forEach((keyElem, index) => {
    const valueElem = fractalRuleValueInputs[index]
    if(keyElem.value && valueElem.value) {
      newFractalRules.push([keyElem.value, valueElem.value])
    }
  })
  fractalRules = newFractalRules
  alpha = alphaInput.value
  startFractalName = startFractalNameInput.value
  drawFractal()
})

drawFractal()