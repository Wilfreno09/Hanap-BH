import React from "react";

export default function layout({
  children,
  login,
}: {
  children: React.ReactNode;
  login: React.ReactNode;
}) {
  return (
    <>
      {login}
      {children}
    </>
  );
}
