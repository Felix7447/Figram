import { useRouteError } from "react-router-dom";
import { Div } from "./styles";
import { Layout } from "../../components/Layout";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Layout>
      <Div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>Status: {error.status} {error.statusText || error.message}</i>
        </p>
      </Div>
    </Layout>
  );
}