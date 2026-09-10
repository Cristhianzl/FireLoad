import Link from "next/link";
import { ROUTES } from "@/lib/config";
import { notFound } from "@/locales/pt-BR";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <p className="font-display text-primary/70 text-6xl font-bold">404</p>
      <h1 className="font-display mt-4 text-2xl font-bold">{notFound.h1}</h1>
      <p className="text-base-content/70 mt-3">{notFound.text}</p>
      <Link href={ROUTES.home} className="btn btn-primary mt-6">
        {notFound.cta}
      </Link>
    </div>
  );
}
