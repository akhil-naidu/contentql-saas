export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>this is routes layout header</div>
      {children}
      <div>this is routes layout footer</div>
    </>
  );
}
