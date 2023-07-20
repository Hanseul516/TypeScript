// The DOM

const img = document.querySelector('img')! 
const myimg = document.getElementById('#img')! as HTMLImageElement  // !는 변수가 null이 아님을 확신할 때 사용
const nextimg = <HTMLImageElement>document.getElementById('#img')

img.src
myimg.src