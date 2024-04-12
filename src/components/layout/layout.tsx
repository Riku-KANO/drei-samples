import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
}

type PageListProps = {
  to: string;
  name: string;
};

const PageList = ({
  to,
  name
}: PageListProps) => {
  return (
    <div>
      <a href={to}>{name}</a>
    </div>
  );
}

export const Layout = ({
  children
}: LayoutProps) => {
  return (
    <div className="flex h-screen w-screen">
      <div className="w-1000 bg-slate-200">
        <h2>sidebar</h2>
        <div>
          <PageList to="/geometries/Box" name="Box" />
          <PageList to="/geometries/RoundedBox" name="RoundedBox" />
          <PageList to="/gepmetries/MyRoundedBox" name="MyRoundedBox" />
        </div>
      </div>
      <div className="w-screen">{children}</div>
    </div>
  );
};