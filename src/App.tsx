import { useState } from "react";
import ProductList from "./expense-tracker/components/ProductList";
function App() {
  const [category, setCategory] = useState("");
  return (
    <div className="mb-3">
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Households">Households</option>
      </select>
      <ProductList category={category}></ProductList>
    </div>
  );
}

export default App;
