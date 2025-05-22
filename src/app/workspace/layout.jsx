"use client";
import React from "react";

function WorkspaceLayout({ children }) {
  return (
    <div className="bg-neutral-900 dark:bg-neutral-900 min-h-screen w-full flex flex-col">
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

export default WorkspaceLayout;