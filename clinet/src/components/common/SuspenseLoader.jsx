import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Box , Typography , styled} from '@mui/material';

const Loader = styled(Box)({
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

export default function SuspenseLoader() {
  return (
    <Loader>
        <CircularProgress />
        <Typography>Loading ...</Typography>
    </Loader>
  )
}
