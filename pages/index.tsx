import React from "react";

type Props = {};

export default function index({}: Props) {
  return <div></div>;
}

index.getInitialProps = ({ res, err }) => {
  res.writeHead(301, { Location: "/login" });
  res.end();
  return {};
};
