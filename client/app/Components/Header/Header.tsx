"use client";
import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import { profile } from "@/utils/Icons";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import { useRouter } from "next/navigation";
import React from "react";

function Header() {
  const { user } = useUserContext();
  const { openModalForAdd, activeTasks, openProfileModal } = useTasks();
  const router = useRouter();

  const { name } = user;

  const userId = user._id;

  return (
    <header className="px-6 my-4 w-full flex items-center justify-between ">
      <div>
        <h1 className="text-lg font-medium">
          <span role="img" aria-label="wave">
            👋
          </span>
          {userId ? `Welcome, ${name}!` : "Welcome to Taskfyer"}
        </h1>
        <p className="text-sm">
          {userId ? (
            <>
              You have{" "}
              <span className="font-bold text-[#3aafae]">
                {activeTasks.length}
              </span>
              &nbsp;active tasks
            </>
          ) : (
            "Please login or register to view your tasks"
          )}
        </p>
      </div>
      <div className="h-[50px] flex items-center gap-[10.4rem]">
        <button
          className="px-10 py-3 bg-[#3aafae] text-white rounded-[50px]
          hover:bg-[#00A1F1] hover:text-white transition-all duration-200 ease-in-out"
          onClick={() => {
            if (userId) {
              openModalForAdd();
            } else {
              router.push("/login");
            }
          }}
        >
          {userId ? "Add a new Task" : "Login / Register"}
        </button>

        <div className="flex gap-4 items-center">
          <ThemeSwitcher />

          <button
            className="h-[40px] w-[40px] text-purple-500 rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]"
            onClick={openProfileModal}
          >
            {profile}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
