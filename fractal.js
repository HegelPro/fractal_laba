import { rotateMatrix } from './matrix.js'


const START_VECTOR = [0, 1]

const START_POINT = [0, 0]

export function generateNextFractalName(fractalName, rules) {
  return rules.reduce((res, elem) => res.replace(new RegExp(elem[0], 'g'), elem[1]), fractalName)
}

export function generateFractalName(fractalName, rules, index) {
  for(let i = 0; i < index; i++) {
    fractalName = generateNextFractalName(fractalName, rules)
  }
  return fractalName
}

export function generateFractalLines(fractalName, alpha) {
  let stack = []
  let result = [[START_POINT]]

  let point = math.matrix([
    [0, 0],
    START_POINT,
  ])
  let vector = math.matrix([
    [0, 0],
    START_VECTOR,
  ])

  fractalName
    .split('')
    .forEach(char => {
      if(
        char.charCodeAt() >= 'A'.charCodeAt()
        && char.charCodeAt() <= 'Z'.charCodeAt()
      ) {
        point = math.add(point, vector)
        result[result.length-1].push([
          point.valueOf()[1][0],
          point.valueOf()[1][1],
        ])
      } else if(char === '+') {
        vector = rotateMatrix(vector, alpha)
      } else if(char === '-') {
        vector = rotateMatrix(vector, -alpha)
      } else if(char === '[') {
        stack.push({
          vector: vector.clone(),
          point: point.clone(),
        })
      } else if(char === ']') {
        const saved = stack.pop()
        point = saved.point
        vector = saved.vector
        result.push([ point.valueOf()[1] ])
      } else {
        throw new Error('Symble wasn\'t find.')
      }
    })
  return result
}