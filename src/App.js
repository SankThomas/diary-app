import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Error, Home, Diarry } from "./pages"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/diarry" element={<Diarry />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
