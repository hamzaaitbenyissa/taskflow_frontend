import { styled } from '@mui/material'
import Column from '@/components/common/flexs/column'

const SC = {
  TasksContainer: styled(Column)(({}) => ({
    rowGap: 20,
    padding: '0 20px',
    marginTop: 20,
    marginBottom: 20,
  })),
}

export default SC
