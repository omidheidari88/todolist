import { Route } from "react-router-dom";
import routes from "./routes";

const Routes = () => {
  const result = routes.map(({ path, Component, props }) => {
    return (
      <Route exact path={path}>
        <Component {...props} />
      </Route>
    );
  });

  return <>{result}</>;
};

export default Routes;
