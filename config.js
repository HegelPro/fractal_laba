// const Alpha = math.pi / 3
// const START_FRACTAL_NAME = 'F'
// const RULES = [
//   [/F/g, 'F-F++F-F'],
// ]
// export const ALPHA = math.pi / 5
// export const START_FRACTAL_NAME = 'F'
// export const RULES = [
//   [/F/g, 'F[+FF][-FF]F[-F][+F]F'],
// ]
// const Alpha = math.pi / 8
// const START_FRACTAL_NAME = 'F'
// const RULES = [
//   [/F/g, 'FF+[+F-F-F]-[-F+F+F]'],
// ]
// const Alpha = math.pi / 2
// const START_FRACTAL_NAME = 'F'
// const RULES = [
//   [/F/g, 'FFF[+FFF+FFF+FFF]'],
// ]
export const ALPHA = math.pi / 9
export const START_FRACTAL_NAME = 'X'
export const RULES = [
  [/F/g, 'FF'],
  [/X/g, 'F[+X]F[-X]+X'],
]

export const FRACTAL_INDEX = 3