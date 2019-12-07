export function scallMatrix(matrix, scallIndex) {
  return math.multiply(
    matrix,
    math.matrix([[scallIndex, 0], [0, scallIndex]])
  )
}

export function moveMatrix(matrix, [x, y]) {
  const deltaMatrix = math.multiply(
    math.ones(matrix.size()[0], 2),
    math.matrix([[x, 0], [0, y]]),
  )
  return math.add(matrix, deltaMatrix)
}

export function rotateMatrix(matrix, rotateIndex, oxis = [0, 0]) {
  const withDiffrentOxis = moveMatrix(matrix, [-oxis[0], -oxis[1]])
  const rotatedMatrixWithDiffrentOxis = math.multiply(
    withDiffrentOxis,
    math.matrix([
      [math.cos(rotateIndex), -math.sin(rotateIndex)],
      [math.sin(rotateIndex), math.cos(rotateIndex)],
    ])
  )
  const rotatedMatrix = moveMatrix(rotatedMatrixWithDiffrentOxis, oxis)
  return rotatedMatrix
}