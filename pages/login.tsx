import React from 'react';
import { makeStyles } from '@mui/styles';
import { createStyles } from '@mui/styles';

type Props = {}
const styles = createStyles ({
  section: {
    color:"red",
    fontSize: 100,
   },
})

const useStyles = makeStyles({
  section: {
   color:"red",
  },
});


export default function Login({}: Props) {
  const classes = useStyles();

  return (
    <div>
      <h1>Login</h1>
      <div className={classes.section}>test</div>

    </div>
  )
}