import React from "react"
import { RiChatNewLine } from "react-icons/ri"
import { AiOutlineFolder, AiOutlineRollback } from "react-icons/ai"
import { RiPatreonLine } from "react-icons/ri"
import { NavLink } from "react-router-dom"
// when opened import {AiOutlineFolderOpen} from "react-icons/ai"

export default function Sidebar() {
  let activeStyle = {
    fontWeight: "bold",
    backgroundColor: "#cbd5e1",
    padding: 4,
    borderRadius: 5,
  };
  
  return (
    <>
      <aside className="hidden md:block bg-slate-800 h-full fixed left-0 top-0 px-5">
        <ul className="mt-10 flex flex-col items-start">
          <li>
            <NavLink
              to="/diarry" style={({ isActive }) => isActive ? activeStyle : undefined }
              className="mb-5 flex items-center justify-center"
            >
              <button className="btn-icon xl:mr-2">
                <RiChatNewLine className="text-white" />{" "}
              </button>
              <span className="hidden xl:block text-slate-400 text-xs">
                New entry
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-entries" style={({ isActive }) => isActive ? activeStyle : undefined }
              className="flex items-center justify-center"
            >
              <button className="btn-icon xl:mr-2">
                <AiOutlineFolder className="text-white" />
              </button>
              <span className="hidden xl:block text-slate-400 text-xs">
                All entries
              </span>
            </NavLink>
          </li>
          <li className="mt-5">
            <a
              href="https://patreon.com/tsbsankara"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center"
            >
              <button className="btn-icon xl:mr-2">
                <RiPatreonLine className="text-white" />
              </button>
              <span className="hidden xl:block text-slate-400 text-xs">
                Support me on patreon
              </span>
            </a>
          </li>

          <li className="absolute left-5 bottom-5">
            <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined } className="flex items-center justify-center">
              <button className="btn-icon xl:mr-2">
                <AiOutlineRollback className="text-white" />
              </button>
              <span className="hidden xl:block text-slate-400 text-xs">
                Homepage
              </span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  )
}
