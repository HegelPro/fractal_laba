export const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

export function drawTrack(points) {
  ctx.lineWidth = 1
  ctx.strokeStyle = '#000000'
  ctx.beginPath()
  points.forEach((point, index) => {
    if(index === 0) {
      ctx.moveTo(...point)
    } else {
      ctx.lineTo(...point)
    }
  })
  ctx.stroke()
}

export function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}