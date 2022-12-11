type Props = {};

function Ads(propsIn: Props) {
  return (
    <div className="flex w-full h-40 items-center justify-center overflow-hidden relative rounded-md">
      <div className="w-full h-full flex items-center">
        <div className="w-full h-full bg-black/30 absolute"></div>
        <img
          src="https://images.unsplash.com/photo-1575751639353-e292e76daca3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGlzbGFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="ads"
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full h-full flex flex-col gap-4 items-center justify-center">
          <h3 className="text-center text-light-primary text-[10px] px-4 leading-relaxed font-semibold">
            "Bagus-bagusnya orang itu ialah orang yang bertaqwa, yaitu tidak mau
            melakukan dosa, baik dosa kecil maupun besar semuanya ditinggal."
          </h3>
          <h5 className="text-light-primary text-sm font-semibold">
            KH. Maimun Zubair
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Ads;
