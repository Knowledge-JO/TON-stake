import { useEffect, useState } from "react";

export default function Home() {
  const [baseURL, setBaseURL] = useState("");
  useEffect(() => {
    const base = location.origin;
    setBaseURL(base);
  }, []);
  return (
    <>
      <div className=" md:px-10 lg:px-16 xl:px-48">
        <div className="bg-blue-950/30 rounded-[30px] w-full  h-fit text-white  px-5 py-10">
          <p className="text-3xl font-bold">Pools</p>

          <div className="border px-5 py-10 rounded-[30px] mt-8">
            <table className=" w-full">
              <thead>
                <tr>
                  <th className="text-left sm:text-2xl pb-5">Pairs</th>
                  <th className="text-left sm:text-2xl pb-5">tvl</th>
                  <th className="text-left sm:text-2xl pb-5">APR</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  className="cursor-pointer"
                  onClick={() => open(`${baseURL}/pool/TON-USDT`, "_parent")}
                >
                  <td className="pb-8 text-sm sm:text-lg">
                    <div className=" relative flex items-center">
                      <img
                        className="w-[20px] sm:w-[32px]  z-10"
                        src="/ton.png"
                        alt=""
                      />
                      <img
                        className="w-[20px] sm:w-[32px] ml-[-5px] sm:ml-[-10px]"
                        src="/usdt.png"
                        alt=""
                      />
                      <p className="">TON/USDT</p>
                    </div>
                  </td>
                  <td className="pb-8 text-sm sm:text-lg">$200.12m</td>
                  <td className="pb-8 text-sm sm:text-lg">20%</td>
                </tr>
                <tr
                  className="cursor-pointer"
                  onClick={() => open(`${baseURL}/pool/TON-SCALE`, "_parent")}
                >
                  <td className="pb-8 text-sm sm:text-lg">
                    <div className=" relative flex items-center">
                      <img
                        className="w-[20px] sm:w-[32px]  z-10"
                        src="/ton.png"
                        alt=""
                      />
                      <img
                        className="w-[20px] sm:w-[32px] ml-[-5px] sm:ml-[-10px]"
                        src="/usdt.png"
                        alt=""
                      />
                      <p className="">TON/SCALE</p>
                    </div>
                  </td>
                  <td className="pb-8 text-sm sm:text-lg">$30.44m</td>
                  <td className="pb-8 text-sm sm:text-lg">30%</td>
                </tr>
                <tr
                  className="cursor-pointer"
                  onClick={() => open(`${baseURL}/pool/TON-NOT`, "_parent")}
                >
                  <td className=" text-sm sm:text-lg">
                    <div className=" relative flex items-center">
                      <img
                        className="w-[20px] sm:w-[32px]  z-10"
                        src="/ton.png"
                        alt=""
                      />
                      <img
                        className="w-[20px] sm:w-[32px] ml-[-5px] sm:ml-[-10px]"
                        src="/usdt.png"
                        alt=""
                      />
                      <p className="">TON/NOT</p>
                    </div>
                  </td>
                  <td className="text-sm sm:text-lg">$50.58m</td>
                  <td className=" text-sm sm:text-lg">50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
