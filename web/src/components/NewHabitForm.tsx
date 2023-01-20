import { Check } from "phosphor-react";

export function NewHabitForm() {
  return (
    <form className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>

      <input
        type="text"
        id="title"
        placeholder="ex.: Exercício, dormir cedo, etc"
        autoFocus
        className={`
          p-4 rounded-lg mt-3 mb-3 bg-zinc-800 text-white placeholder:text-zinc-400
        `}
      />

      <label htmlFor="" className="font-semibold leading-tight">
        Qual a recorrência?
      </label>

      <button
        type="submit"
        className={`
          mt-6 rounded-lg p-4 flex items-center justify-center gap-3
          font-semibold bg-green-600 hover:bg-green-500
        `}
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  )
}
