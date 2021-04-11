import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { StoreContext } from "../../store/store";

const ProtectedRoute = ({ render: C, path }) => {
  const [state] = useContext(StoreContext);
  console.log(path);
  return <Route exact path={path} render={() => <C />} />;
};

export default ProtectedRoute;
