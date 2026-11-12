import type { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <main className="flex-1">{children}</main>;
};

export default MainLayout;
