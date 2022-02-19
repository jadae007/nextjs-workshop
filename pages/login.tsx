import React from 'react';
import { makeStyles } from '@mui/styles';
import loginStyle from '../styles/loginStyle'

type Props = {}

const useStyles = makeStyles(loginStyle);


export default function Login({}: Props) {
  const classes = useStyles();

  return (
    <div>
      <h1>Login</h1>
      <div className={classes.subtitle}>test</div>

    </div>
  )
}