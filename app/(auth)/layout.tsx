export default function AuthLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <main className="flex flex-col flex-1 justify-center items-center bg-gradient-to-bl from-white to-indigo-600">
      {children}
    </main>
  );
}
