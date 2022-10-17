import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

import { scrollToTop } from "../utils/scrollToTop"

import { Link, Navigation, Reticence } from "./PaginationBar.styles"

// countCards -É a quantidade de cards na tela
// showPagination -É o ponto de partida para quando a paginação deve ser mostrada
// currentPage - É a página atual
export default function PaginationBar({
  countCards = 1,
  showPagination = 1,
  currentPage = 1,
  paginationBarRange = 2,
}) {
  const arrowLeft = faCaretLeft
  const arrowRight = faCaretRight

  const previousPage = `./${currentPage - 1}`
  const nextPage = `./${currentPage + 1}`

  // Calcula a quantidade total de links da barra de navegação
  const totalPages = Math.ceil(countCards / showPagination)

  const sides = paginationBarRange + 1

  // Os Links que serão renderizado
  const [mainPages, setMainPages] = useState([])

  /**
   *  Criação dos Links para navegação
   */
  useEffect(() => {
    const ttt = []
    for (let id = 1; id <= totalPages; id++) {
      ttt.push(
        <Link
          to={`./${id}`}
          onClick={scrollToTop}
          page={currentPage === id ? +true : +false}
          key={id}
          show={
            (currentPage < sides && id < sides * 2) ||
            (currentPage > totalPages - sides &&
              id > totalPages - sides * 2 + 1)
              ? +true
              : id > currentPage - sides && id < currentPage + sides
              ? +true
              : +false
          }
        >
          {id}
        </Link>
      )
    }
    setMainPages(ttt)
  }, [currentPage, totalPages, sides])

  const Body = (
    // Previous Page
    <Navigation>
      <Link
        to={previousPage}
        onClick={scrollToTop}
        disable={currentPage > 1 ? +false : +true}
        arrow={+true}
      >
        <FontAwesomeIcon icon={arrowLeft} />
      </Link>

      {/* Reticências */}
      {totalPages > sides * 2 - 1 && currentPage > sides && (
        <Reticence>...</Reticence>
      )}

      {/* Links da barra de navegação */}
      {mainPages}

      {/* Reticências */}
      {totalPages > sides * 2 - 1 && currentPage <= totalPages - sides && (
        <Reticence>...</Reticence>
      )}

      {/* Next Page */}
      <Link
        to={nextPage}
        onClick={scrollToTop}
        disable={currentPage < totalPages ? +false : +true}
        arrow={+true}
      >
        <FontAwesomeIcon icon={arrowRight} />
      </Link>
    </Navigation>
  )

  return <>{countCards >= showPagination && Body}</>
}
