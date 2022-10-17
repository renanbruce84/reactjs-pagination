// If ctrl or shift was not pressed, scrolls the page to the top
export const scrollToTop = (e) => {
  if (e.ctrlKey || e.shiftKey) {
    return
  }
  window.scrollTo(0, 0)
}
