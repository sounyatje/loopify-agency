import React from "react";

const CustomLayout = () => {
  return (
    <div className="h-[110vh] bg-[#e8cfbc] p-4 grid grid-rows-3 grid-cols-4 gap-4">
       {/* Div 1 (menu vertical à gauche) */}
       <div className="row-span-3 col-span-1 relative rounded-lg shadow-lg flex flex-col justify-between overflow-hidden">
        {/* Superposition beige clair */}
        <div className="absolute inset-0 bg-[#e8cfbc] opacity-60 z-10"></div>
        {/* Image de fond */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('../../public/manga.jpg')"
          }}
        ></div>
        {/* Contenu du menu */}
        <div className="relative z-20 p-4">
          <p className="text-[#c8814c] font-bold text-center">Menu</p>
        </div>
      </div>

      {/* Div 2 (large header en haut) */}
      <div className="row-span-1 col-span-2 bg-[#ffeff7] rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden">
  {/* Image de fond avec opacité */}
  <div className="absolute inset-0 bg-[url('../../public/bouffe.jpg')] bg-cover bg-center opacity-60"></div>

  {/* Superposition beige clair */}
  <div className="absolute inset-0 bg-[#ffefd5] opacity-60"></div>

  {/* Contenu au-dessus */}
  <p className="text-[#c8814c] font-bold relative z-10">Employee Photos</p>
</div>


      {/* Div 3 (petit en haut à droite) */}
      <div className="row-span-1 col-span-1 bg-[#d6e6ff] rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden">
  {/* Image de fond */}
  <div className="absolute inset-0 bg-[url('../../public/livres.jpg')] bg-cover bg-center opacity-60"></div>

  {/* Superposition beige clair */}
  <div className="absolute inset-0 bg-[#ffefd5] opacity-60"></div>

  {/* Contenu au-dessus */}
  <p className="text-[#c8814c] font-bold text-center relative z-10">Internal KPI's</p>
</div>


      {/* Div 4 (large central en bas à gauche) */}
      <div className="row-span-2 col-span-2 bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
        <div>
    
          <p className="text-[#c8814c] font-bold">animation </p>
          <p className="text-sm text-gray-600">animate </p>
        </div>
        
      </div>

      <div className="row-span-1 col-span-1 bg-[#d6e6ff] rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden">
  {/* Image de fond */}
  <div className="absolute inset-0 bg-[url('../../public/sport.png')] bg-cover bg-center opacity-60"></div>

  {/* Superposition beige clair */}
  <div className="absolute inset-0 bg-[#ffefd5] opacity-60"></div>

  {/* Contenu au-dessus */}
  <p className="text-[#c8814c] font-bold text-center relative z-10">Vacation</p>
</div>


      {/* Div 6 (petit en bas à droite) */}
      <div className="row-span-1 col-span-1 bg-[#fff7e6] rounded-lg shadow-lg flex items-center justify-center">
        <p className="text-[#c8814c] font-bold text-center">Sabbatical</p>
      </div>

     
    </div>
  );
};

export default CustomLayout;
