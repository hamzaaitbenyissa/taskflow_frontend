import { styled } from '@mui/material'
import Row from '@/components/common/flexs/row'

const SC = {
  StatusContainer: styled(Row)({
    padding: '10px',
    margin: '10px',
    border: '1px solid',
    borderRadius: '5px',
    columnGap: '10px',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
}

export default SC
