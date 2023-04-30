import { Route, Routes } from "react-router-dom";
import { Administration} from "../page";

export const RealEstateRoutes = () => {
  return (
    <Routes>
        <Route path="administration" element={<Administration />}/>
    </Routes>
  )
}
