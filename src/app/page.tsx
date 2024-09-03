import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 justify-center text-center items-center">
      <h1 className="mt-10 text-lg">Bem vindo(a)</h1>
      <p className="text-md">
        Para se inscrever na newsletter clique no botão abaixo.
      </p>
      <div className="mt-4 flex flex-col gap-4 md:flex-row">
        <Link
          href="/newsletter/subscribe"
          className="flex items-center gap-5 self-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Redirecionar</span>
        </Link>
      </div>
    </main>
  );
}
