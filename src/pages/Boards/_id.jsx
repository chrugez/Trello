import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/apis/mock-data'
import { fetchBoardDetailsAPI } from '~/apis'

const Board = () => {
  const [board, setBoard] = useState(null)

  useEffect(() => {
    const boardId = '667532bd75c4737a61cd14a5'
    fetchBoardDetailsAPI(boardId).then(board => {
      setBoard(board)
    })
  }, [])
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
        <AppBar />
        <BoardBar board={board?.board} />
        <BoardContent board={board?.board} />
      </Container>
    </>
  )
}

export default Board