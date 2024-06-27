import React from "react";

export default function Nav() {
  return (
    <nav className="flex sm:flex-col sm:items-end sticky top-12 sm:right-12 self-end">
      <li>
        <a href="" className="text-slate-500 hover:text-slate-400">
          Hero
        </a>
      </li>
      <li>
        <a href="" className="text-slate-500 hover:text-slate-400">
          Portfolio
        </a>
      </li>
    </nav>
  );
}
