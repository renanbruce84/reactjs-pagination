import React from "react"
import { useParams } from "react-router-dom"
import { Container, ProductCardContainer } from "../example/example"
import PaginationBar from "../PaginationBar"

// NOTE: todos ítem recebidos devem estar previamente estilizados.
// manualAmount 1* - dever ser usado apenas quando o backend já vier paginado, é a quantidade total de ítens
// manualAmount 2* - quando === zero, definirá a quantidade de links do PaginationBar
// manualAmount 2* - quando === zero, mostra imediatamente o conteúdo recebido pela API

// allItems - é o conjunto de todos os components que devem ser paginados/renderizados.
// itemsRange - é a quantidade de componentes que devem ser rendezidados na página atual.
// paginationBarRange - quantidade de links do PaginationBar que devem ser mostrados, contando a partir link que esta no meio do valor total de links.
export default function Pagination({
  allItems,
  itemsRange = 6,
  paginationBarRange = 2,
  manualAmount = 0,
}) {
  let currentPage = parseInt(useParams().id)

  currentPage = currentPage > 0 ? currentPage : 1

  //   Recupera a quantidade total de todos os items
  const countCards = manualAmount ? manualAmount : allItems.length

  //   Faz a montagem dos produtos que devem ser mostrados na página atual
  const Products = (
    <ProductCardContainer>
      {/* Se tiver a manualQuantit */}
      {!manualAmount
        ? allItems
            .filter(
              (a, index) =>
                index >= (currentPage - 1) * itemsRange &&
                index < (currentPage - 1) * itemsRange + itemsRange
            )
            .map((filtered, index) => (
              <React.Fragment key={index}>{filtered}</React.Fragment>
            ))
        : allItems.map((a, index) => (
            <React.Fragment key={index}>{a}</React.Fragment>
          ))}
    </ProductCardContainer>
  )

  const Body = (
    <Container>
      {Products}

      {/* Barra de navegação dapaginação */}
      <PaginationBar
        countCards={countCards}
        showPagination={itemsRange}
        currentPage={currentPage}
        paginationBarRange={paginationBarRange}
      />
    </Container>
  )

  return <>{Body}</>
}
