import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import SC from './style'

const TaskStatus = ({ isCompleted }: { isCompleted: boolean }) => {
  return (
    <SC.StatusContainer>
      {isCompleted ? 'Completed' : 'Not Completed'}
      {isCompleted ? (
        <CheckCircleIcon color="success" sx={{ marginRight: 1 }} />
      ) : (
        <CancelIcon color="error" sx={{ marginRight: 1 }} />
      )}
    </SC.StatusContainer>
  )
}

export default TaskStatus
