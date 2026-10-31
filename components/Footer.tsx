import { cacheLife } from "next/cache";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");

  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="mt-auto bg-slate-900 px-6 py-6 text-center text-white">
      <p className="text-sm">
        Copyright &copy; {year} | Leonardo Salvatierra
        {" | "}All rights reserved
      </p>
    </footer>
  );
}