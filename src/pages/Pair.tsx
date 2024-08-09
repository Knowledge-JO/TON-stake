import { useParams } from "react-router-dom";

export default function Pair() {
  const { pair } = useParams();
  const pairList = pair?.split("-");
  const pair1 = pairList[0];
  const pair2 = pairList[1];

  return (
    <div className="md:px-20 lg:px-32 xl:px-96">
      <div className="bg-blue-950/30 rounded-[30px] w-full  h-fit text-white  px-5 sm:px-10 py-10">
        <div>
          <div className="flex justify-center">
            <img className="w-20 z-10" src="/ton.png" alt="" />
            <img className="w-20 ml-[-10px]" src="/usdt.png" alt="" />
          </div>
          <p className="text-center mt-2 font-bold text-xl">
            {pair1}/{pair2}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-5 mt-10">
          <div className="w-full lg:w-[50%] ">
            <div className="border rounded-[30px] px-5 py-5 border-slate-600 mb-5">
              <input
                className="block px-5 bg-transparent border rounded-2xl h-12 w-full mb-2"
                type="number"
              />
              <button className="bg-blue-950 px-5 py-3 rounded-2xl w-full">
                Stake
              </button>
            </div>
            <div className="border rounded-[30px] py-5 border-slate-600 ">
              <p className="font-bold text-xl px-5">My Position</p>

              <div className="border-t border-slate-600 mt-5 py-5 px-5">
                <p className="text-gray-400 text-xl ">Staked</p>
                <p className="text-3xl font-extralight">500 TON</p>
              </div>

              <div className="border-y border-slate-600  py-5 px-5">
                <p className="text-gray-400 text-xl ">Claimable Reward</p>
                <p className="text-3xl font-extralight">5000 {pair2}</p>
              </div>

              <div className="px-5 pt-5 ">
                <button className="bg-blue-950 px-5 py-3 rounded-2xl ">
                  unstake
                </button>
                <button className="bg-blue-950 px-5 py-3 ml-2 rounded-xl">
                  Compound
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[50%]">
            <div className="border rounded-[30px] px-5 py-8 border-slate-600 mb-5 h-36">
              <p className="text-gray-400 text-xl ">Pool Value</p>
              <p className="text-3xl font-extralight">50000 TON</p>
            </div>

            <div className="border rounded-[30px] px-5 py-8 border-slate-600 mb-5 h-36">
              <p className="text-gray-400 text-xl ">APR</p>
              <p className="text-3xl font-extralight">30%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
