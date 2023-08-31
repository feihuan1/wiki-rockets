"use client";  //client component

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";


export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>
    ) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };

  return (
    <form
      className="flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 text-xl rounded-xl"
        placeholder="search"
      />
      <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2">
        🚀
      </button>
    </form>
  );
}
