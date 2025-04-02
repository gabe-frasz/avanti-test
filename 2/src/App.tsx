import { FormEvent, useRef, useState } from 'react'

interface User {
  avatarUrl: string;
  name: string;
  bio: string;
}

export function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userInput = inputRef.current?.value.trim().toLowerCase();
    if (!userInput) return;

    const cachedInput = sessionStorage.getItem("avanti-test-" + userInput);
    if (cachedInput) {
      const cachedUser = JSON.parse(cachedInput);
      setUser(cachedUser);
      setError(cachedUser === null);
      return;
    }

    const res = await fetch(`https://api.github.com/users/${userInput}`);
    const data = await res.json();

    let user = null, error = true;

    if (res.ok) {
      user = {
        avatarUrl: data.avatar_url,
        name: data.name,
        bio: data.bio
      };
      error = false;
    }

    sessionStorage.setItem("avanti-test-" + userInput, JSON.stringify(user));
    setUser(user);
    setError(error);
  }

  return (
    <main className="w-full min-h-screen px-4 py-9 flex flex-col items-center bg-black text-white">
      <h1 className="sr-only">Perfil GitHub</h1>

      <img src="/project-title.png" alt="Perfil GitHub" className="mb-7" />

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[503px] h-16 mb-8 bg-[#DDDDDD] border border-white text-black rounded-[10px]"
      >
        <input
          ref={inputRef}
          type="text"
          name="search"
          placeholder="Digite um usuário do Github"
          className="px-4 placeholder:text-black focus:outline-none flex-1"
        />

        <button
          type="submit"
          className="h-full aspect-square flex justify-center items-center bg-primary-500 rounded-[10px] cursor-pointer"
        >
          <img src="/magnifier.svg" alt="lupa" />
        </button>
      </form>

      {user && !error && (
        <div className="w-full max-w-[804px] px-8 py-4 flex flex-col sm:flex-row justify-center items-center gap-8 rounded-[25px] bg-[#D9D9D9]">
          <img
            src={user.avatarUrl}
            alt={user.name + " avatar"}
            className="w-full max-w-[220px] rounded-full border-2 border-primary-500 flex-1"
          />

          <div className="flex-2">
            <h2 className="mb-4 font-bold text-lg text-primary-500">{user.name}</h2>

            <p className="font-light text-sm text-black">{user.bio}</p>
          </div>
        </div>
      )}

      {error && (
        <div className="w-full max-w-[710px] p-4 flex justify-center items-center bg-[#D9D9D9] rounded-[25px]">
          <p className="text-error-500 text-lg text-center">
            Nenhum perfil foi encontrado com esse nome de usuário. <br />
            Tente novamente
          </p>
        </div>
      )}
    </main>
  )
}
