import { styled } from '@mui/material'
import Row from '@/components/common/flexs/row'
import Column from '@/components/common/flexs/column'

const SC = {
  TaskDetailsContainer: styled(Column)(({ theme }) => ({
    padding: '40px',
    borderRadius: '12px',
    rowGap: '30px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '40px auto',
  })),
  Header: styled(Column)({
    rowGap: '20px',
    paddingBottom: '20px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  }),
  TitleContainer: styled(Row)({
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  Title: styled('h1')(({ theme }) => ({
    fontSize: '28px',
    fontWeight: '600',
    color: theme.palette.text.primary,
    margin: 0,
  })),
  StatusContainer: styled(Row)({
    gap: '20px',
    alignItems: 'center',
  }),
  EditButton: styled('button')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    '& svg': {
      fontSize: '20px',
    },
  })),
  MetaContainer: styled(Row)({
    gap: '30px',
  }),
  MetaItem: styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '8px',
    color: theme.palette.text.secondary,
  })),
  MetaLabel: styled('span')({
    fontWeight: '500',
  }),
  MetaValue: styled('span')({
    fontWeight: '400',
  }),
  DescriptionContainer: styled(Column)({
    rowGap: '12px',
  }),
  DescriptionLabel: styled('h3')(({ theme }) => ({
    fontSize: '18px',
    fontWeight: '500',
    color: theme.palette.text.primary,
    margin: 0,
  })),
  Description: styled('p')(({ theme }) => ({
    fontSize: '16px',
    lineHeight: '1.6',
    color: theme.palette.text.secondary,
    margin: 0,
    padding: '16px',
    backgroundColor: theme.palette.background.default,
    borderRadius: '8px',
  })),
  BackButton: styled('button')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.text.primary,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: theme.palette.grey[400],
    },
    '& svg': {
      fontSize: '20px',
    },
  })),
}

export default SC
