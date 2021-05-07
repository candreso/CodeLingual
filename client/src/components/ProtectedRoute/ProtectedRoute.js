import { React } from "react";
import { Route } from "react-router-dom";
// import { StoreContext } from "../../store/store";
// note from chloe to v: useContext and Redirect were removed on 04.12.21
// to resolve eslint errors

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ render: C, path }) => {
  // const [state] = useContext(StoreContext);
  console.log(path);
  return <Route exact path={path} render={() => <C />} />;
};

export default ProtectedRoute;
