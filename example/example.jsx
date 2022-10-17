import React from "react"
import Pagination from "./Pagination"

/**
 * Arquivo apenas para demostração
 */
export default function HomeContent() {
  const itemsRange = 5
  const paginationBarRange = 2

  // NOTE: todos os componentes devem estar preparados para a renderização
  // Conteúdo apenas para teste, substituir pelo conteúdo com o que deve ser mostrado
  const allProducts = [
    <p>1</p>,
    <p>2</p>,
    <p>3</p>,
    <p>4</p>,
    <p>5</p>,
    <p>6</p>,
    <p>7</p>,
    <p>8</p>,
    <p>9</p>,
    <p>10</p>,
    <p>11</p>,
    <p>12</p>,
    <p>13</p>,
    <p>14</p>,
    <p>15</p>,
    <p>16</p>,
    <p>17</p>,
    <p>18</p>,
    <p>19</p>,
    <p>20</p>,
  ]

  return (
    <>
      <Pagination
        allItems={allProducts}
        itemsRange={itemsRange}
        paginationBarRange={paginationBarRange}        
        // manualAmount ={20} // É a quantidade toral de items. Informar apenas os items virem paginados da API.
      />
    </>
  )
}
