import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { TextField } from "@mui/material";
import Router from "next/router";

type Props = {};

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  submit: {
    marginTop: 24,
    marginBottom: 16,
  },
}));

export default function Register({}: Props): React.ReactElement {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.container}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            className={classes.media}
            component="img"
            height="140"
            image="/static/img/next_register.jpg"
            alt="green iguana"
          />
          <CardContent>
            <form noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Register
              </Button>
              <Button
                fullWidth
                size="small"
                color="primary"
                onClick={() => {
                  Router.push("/login");
                }}
              >
                Cancel
              </Button>
            </form>
          </CardContent>
        </Card>
        <style jsx global>
          {`
            body {
              min-height: 100vh;
              position: relative;
              margin: 0;
              background-size: cover;
              background-image: url("/static/img/bg4.jpg");
              text-align: center;
            }
          `}
        </style>
      </div>
    </React.Fragment>
  );
}
