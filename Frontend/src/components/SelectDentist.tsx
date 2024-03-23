"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface ButtonProps {
  Text: string;
  url: string;
  prop: any;
}

export default function Button({ Text, url, prop }: ButtonProps) {
  const router = useRouter();

  const goto = url + `?Dentist=${prop}`;

  const handleClick = useCallback(() => {
    router.push(goto);
  }, [router, goto]);

  return (
    <button
      onClick={handleClick}
      className="rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white h-fit mb-0"
    >
      {Text}
    </button>
  );
}
