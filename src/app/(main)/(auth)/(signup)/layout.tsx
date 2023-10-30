import React from "react";

export default function layout({
  children,
  signup,
}: {
  children: React.ReactNode;
  signup: React.ReactNode;
}) {
  return (
    <>
      {children}
      {signup}
    </>
  );
}
