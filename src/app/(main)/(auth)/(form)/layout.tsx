export default function layout({
  children,
  form,
}: {
  children: React.ReactNode;
  form: React.ReactNode;
}) {
  return (
    <>
      {form}
      {children}
    </>
  );
}
