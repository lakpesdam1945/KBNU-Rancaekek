type Props = {};

function CardKeislaman({}: Props) {
  return (
    <div className="flex flex-col overflow-hidden relative rounded-md w-52 bg-slate-200 flex-shrink-0 snap-center">
      <img
        src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXNsYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt="image"
        className="w-full h-full object-cover bg-cover inset-x-0"
      />
      <div className="p-2 mx-2 rounded-md h-auto absolute bottom-2 bg-black/50 backdrop-blur-sm">
        <p className="text-xs leading-relaxed text-light-primary">
          Rakernas Falakiyah Bahas Kriteria Rukyatul Hilal hingga Waktu Subuh
        </p>
      </div>
    </div>
  );
}

export default CardKeislaman;
