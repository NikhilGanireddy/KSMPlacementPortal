"use client"

import Link from "next/link";
import React from "react";
import {UserSidebarLinks} from "@/utils/SidebarLinks";

const Sidebar = () => {

    return <main className={`sticky top-0 max-w-[250px] border shadow-2xl h-full flex-1 flex gap-8 flex-col rounded-2xl p-6`}>
        <Link href={"/"}>
            <h1 className={`text-xl font-semibold p-4`}>Placement Portal</h1>
        </Link>
        <ul className={`flex flex-col gap-4 `}>
            {UserSidebarLinks.map((link, index) => <li className={`flex flex-row justify-start items-center px-4 py-2 rounded-lg border`} key={index}>
                <Link href={link.url}>{link.label}</Link>
            </li>)}
        </ul>
    </main>
}

export default Sidebar
