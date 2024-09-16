export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>

      {children}

      <h3>This is a custom layout Only For products</h3>

    </>

  );
}
