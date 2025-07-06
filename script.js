function taggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") //adiciona e tira o "light" if e else

  // pegar a tag imag
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/fotosedutor.png")
  } else {
    // se estiver sem o light mode, manter a imagem normal
    img.setAttribute(
      "src",
      "./assets/Avatar 3d Mulher Pintora Degradê Verde Azul (1).png"
    )
  }
}
