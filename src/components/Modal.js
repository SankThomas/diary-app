import React, { useContext } from "react";
import EntriesContext from "../context/context";

export default function Modal({ id }) {
  const { handleDelete, setOpenModal } = useContext(EntriesContext);

  return (
    <article className="bg-black bg-opacity-60 fixed top-0 left-0 right-0 bottom-0">
      <div className="bg-white p-4 rounded shadow text-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9/12 mx-auto md:max-w-md">
        <h2 className="font-bold text-2xl mb-4 text-slate-800">Danger Zone!</h2>
        <p className="text-slate-600">
          You are about to delete your diarry entry. Please note that this is an
          irreversible action. Proceed with caution!
        </p>

        <ul className="flex items-center justify-start gap-4 flex-wrap mt-8">
          <li>
            <button
              onClick={() => handleDelete(id)}
              className="py-1 px-4 rounded hover:bg-slate-100 text-slate-600 border hover:bg-transparent transition-all duration-150 "
            >
              Delete
            </button>
          </li>
          <li>
            <button
              onClick={() => setOpenModal(false)}
              className="py-1 px-4 rounded shadow bg-red-500 text-white border border-red-500 hover:bg-transparent transition-all duration-150 hover:text-red-500"
            >
              Cancel
            </button>
          </li>
        </ul>
      </div>
    </article>
  );
}
