import { styled, TextField } from '@mui/material'
import Column from '@/components/common/flexs/column'
import Checkbox from '@mui/material/Checkbox'
const SC = {
  Title: styled(TextField)(() => ({})),
  Description: styled(TextField)(() => ({})),
  FormContainer: styled(Column)(() => ({
    rowGap: 20,
    padding: '20px',
    margin: '20px',
  })),
  CheckBox: styled(Checkbox)(() => ({})),
}

export default SC
