import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRouter } from '../src/musicApp/router'
import DefaultLayout from "./musicApp/compoments/layout/DefaultLayout";
function App() {
  return (
    <Router>
      <Routes>
        {
          publicRouter.map((e, idx) => {
            const Page = e.element;
            let Layout = DefaultLayout;
            if (e.layout) {
              Layout = e.layout
            } else if (e.layout === null) {
              Layout = ({ children }) => <>{children}</>;
            }
            return (
              <Route key={idx} path={e.path} element={
                <Layout>
                  <Page/>
                </Layout>
              } />
            );
          })
        }
      </Routes>
    </Router>
  );
}

export default App;
