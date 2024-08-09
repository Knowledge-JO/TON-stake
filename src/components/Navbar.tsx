export default function Navbar() {
  return (
    <div className="text-white flex justify-between items-center px-5 md:px-10 lg:px-16 xl:px-48 py-10 ">
      <div className="text-2xl">
        <a href="/">Yield</a>
      </div>
      <button className="bg-blue-900 p-3 rounded-2xl">connect wallet</button>
    </div>
  );
}
