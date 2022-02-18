import React from "react";
import Router from "next/router";
type Props = {
  statusCode: string;
};

export default function Error({ statusCode }: Props) {
  React.useEffect(() => {
    Router.push("/");
  }, []);

  return (
    <div>
     <h1>Error :{statusCode}</h1>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode: statusCode };
};
