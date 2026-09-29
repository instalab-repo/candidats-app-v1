"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="alert alert-info mt-3">
      <strong>Layout counter :</strong> {count}{" "}
      <button
        className="btn btn-sm btn-primary ms-2"
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>
    </div>
  );
}
