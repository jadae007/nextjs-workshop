import React, { ReactNode } from "react";
import { Container, Toolbar } from "@mui/material";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {/* <Menu /> */}
      <main style={{
        marginTop:20,
        
      }}>
      <Toolbar />
      <Container
        style={{
          // backgroundColor: "red",
        }}
      >
        {children}
      </Container>
      </main>
      <Footer
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          backgroundColor: "#EEEEEE",
          color: "black",
          fontSize: 13,
          textAlign: "left",
          height: 30,
          paddingLeft: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          fontWeight: 900,
        }}
      />
      <style jsx global>
        {`
          body {
            margin: 0px;
          }
        `}
      </style>
      </>
  );
}
