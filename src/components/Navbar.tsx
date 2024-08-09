export default function Navbar() {
  return (
    <div className="text-white flex justify-between items-center px-5 md:px-[80px] lg:px-[128px] xl:px-[384px] py-10 ">
      <div className="text-2xl">
        <a href="/">Yield</a>
      </div>
      <button className="bg-blue-900 p-3 rounded-2xl">connect wallet</button>
    </div>
  );
}
