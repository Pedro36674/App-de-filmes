import { Navigate, Route, Routes } from "react-router"
import { Home } from "../movies/pages/Home"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<h1>Este e a pagina de Login</h1>} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  )
}