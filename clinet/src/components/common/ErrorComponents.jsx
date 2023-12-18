


import React from 'react'
import {Box , Typography} from '@mui/material'
import { useRouteError } from 'react-router-dom'

export default function ErrorComponents() {
    const error = useRouteError();
    console.log(error);

  return (
    <Box>
      <Typography >There was an error whlie loading a components</Typography>
    </Box>
  )
}
