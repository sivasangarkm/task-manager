import { useLayoutEffect, useRef } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div className="mb-3">
      <input autoFocus ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default App;
