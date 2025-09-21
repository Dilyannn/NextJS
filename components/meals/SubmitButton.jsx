"use client";

import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Submiting..." : "Share Meal"}
    </button>
  );
}

export default SubmitButton;