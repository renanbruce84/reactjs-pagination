import styled, { css } from "styled-components"
import { PalletColors } from "../utils/colors"
import { Link as l } from "react-router-dom"

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`

export const Reticence = styled.div`
  font-size: 26px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  user-select: none;
`

export const Link = styled(l)`
  color: ${PalletColors.originalWhite};
  font-size: 26px;
  text-decoration: none;

  display: ${({ show, arrow }) => (show || arrow ? "flex" : "none")};  

  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 3px;
  background-color: ${PalletColors.peterRiverBlue};
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${PalletColors.belizeHoleBlue};
    ${({ page }) =>
      page &&
      css`
        background-color: ${PalletColors.strangerBlue};
      `}
  }

  &:active {
    background-color: ${PalletColors.strangerBlue};
  }

  /* Identifica a pagina ativa */
  ${({ page }) =>
    page &&
    css`
      background-color: ${PalletColors.strangerBlue};
    `}

  /* Desabilita todas as ações  */
  ${({ disable }) =>
    disable &&
    css`
      pointer-events: none;
      background-color: ${PalletColors.gray};
    `}
`
