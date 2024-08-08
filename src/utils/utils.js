export const scrollToElementById = (id) => {
  const element = document.getElementById(id)
  if (element) {
    window.scroll({
      top: element.offsetTop,
      left: 0,
      behavior: "smooth",
    })
  }
}