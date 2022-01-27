import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import { routes } from "../../routes";

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
