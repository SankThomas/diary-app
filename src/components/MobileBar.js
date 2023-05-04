import React from "react"
import { RiChatNewLine } from "react-icons/ri"
import { AiOutlineFolder, AiOutlineRollback } from "react-icons/ai"
import { RiPatreonLine } from "react-icons/ri"
import { NavLink } from "react-router-dom"

export default function MobileBar() {
  let activeStyle = {
    fontWeight: "bold",
    backgroundColor: "#334155",
    padding: 4,
    borderRadius: 10,
  };
  
  return (
    <>
      <article className="md:hidden fixed left-0 bottom-0 px-5 py-2 bg-slate-800 w-full">
        <ul className="flex items-center justify-between sm:justify-evenly">
          <li>
            <NavLink
              to="/diarry" style={({ isActive }) => isActive ? activeStyle : undefined }
              className="flex flex-col items-center justify-center p-1"
            >
              <button className="btn-icon">
                <RiChatNewLine className="text-white" />{" "}
              </button>
              <span className="text-slate-400 text-xs mt-2">New entry</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-entries" style={({ isActive }) => isActive ? activeStyle : undefined }
              className="flex flex-col items-center justify-center p-1"
            >
              <button className="btn-icon">
                <AiOutlineFolder className="text-white" />
              </button>
              <span className="text-slate-400 text-xs mt-2">All entries</span>
            </NavLink>
          </li>
          <li>
            <a
              href="https://patreon.com/tsbsankara"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center"
            >
              <button className="btn-icon xl:mr-2">
                <RiPatreonLine className="text-white" />
              </button>
              <span className="text-slate-400 text-xs mt-2">Patreon</span>
            </a>
          </li>
          <li className="">
            <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined } className="flex flex-col items-center justify-center p-1">
              <button className="btn-icon">
                <AiOutlineRollback className="text-white" />
              </button>
              <span className="text-slate-400 text-xs mt-2">Homepage</span>
            </NavLink>
          </li>
        </ul>
      </article>
    </>
  )
}
