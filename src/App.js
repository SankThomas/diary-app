import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Scroll } from "./components"
import { Error, Home, Diarry, AllEntries, Help } from "./pages"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Scroll />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/diarry" element={<Diarry />}></Route>
          <Route path="/all-entries" element={<AllEntries />}></Route>
          <Route path="/markdown-help" element={<Help />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
