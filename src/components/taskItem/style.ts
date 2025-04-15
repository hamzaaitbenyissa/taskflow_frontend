import { Button, styled } from '@mui/material'
import Row from '@/components/common/flexs/row'
import Checkbox from '@mui/material/Checkbox'

const SC = {
  TaskItemContainer: styled(Row)({
    padding: '10px',
    marginTop: 20,
    marginBottom: 20,
    margin: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    columnGap: '20px',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  DeleteButton: styled(Button)({}),

  Title: styled('h1')({
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
  }),
  CheckBox: styled(Checkbox)({}),
}
export default SC
