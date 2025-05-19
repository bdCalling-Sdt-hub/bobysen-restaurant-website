import Navbar from "@/components/Navbar/Navbar";

export default function WithNavLayout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
