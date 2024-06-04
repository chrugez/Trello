import Box from '@mui/material/Box'
import Card from './Card/Card'

const ListCards = () => {
  return (
    < Box sx={{
      padding: '0 5px',
      margin: '0 5px',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: (theme) => `calc(
            ${theme.trello.boardContentHeight} -
            ${theme.spacing(5)} - 
            ${theme.trello.columnHeaderHeight} - 
            ${theme.trello.columnFooterHeight}
            )`,
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ced0da',
        cursor: 'pointer'
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#bfc2cf'
      }
    }}>
      <Card />
      <Card temporyHideCard />
      <Card temporyHideCard />
      <Card temporyHideCard />
      <Card temporyHideCard />
      <Card temporyHideCard />
      <Card temporyHideCard />
    </Box >
  )
}

export default ListCards