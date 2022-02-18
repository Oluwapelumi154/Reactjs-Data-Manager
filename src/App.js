import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
const OrganizationForm = lazy(() => import("./Components/Organization/OrganizationForm"));
const InfoTable = lazy(() => import("./Components/Table/InfoTable"));
const NotFound = lazy(() => import("./Components/NotFound/NofFound"));
const LogOut = lazy(() => import("./Components/LogOut/logOut"));
const Auth = lazy(() => import("./Components/Auth/Auth"));
const Table = lazy(() => import("./Components/Table/Table"));
const Header = lazy(() => import("./Layout/Header/Header"));
function App() {
  const state = useSelector((state) => state.auth);
  return (
    <div className='App'>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path='/login' element={<Auth />} />
          <Route path='/logOut' element={<LogOut />} />
          <Route path='/users' element={<Table />} />
          <Route path='/details' element={<InfoTable />} />
          <Route path='/credentialsForm' element={<OrganizationForm />} />
          <Route path='/' element={<Navigate to='/login' />}></Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
