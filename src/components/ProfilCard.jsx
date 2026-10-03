const ProfilCard = () => {
  return (
    <div className="w-70 p-6 bg-[#fbebbf] rounded-3xl shadow-xl text-[#1f4e5f]">
      <div>
        <img
          src="/photo.png"
          alt="photo"
          className="w-full h-65 object-cover rounded-2xl block"
        />
      </div>

      <p className="mt-3 mb-4 text-center text-sm font-semibold tracking-widest uppercase text-[#7a1f1f]">
        Frontend Developer
      </p>

      <div>
        <h4 className="mb-2 text-[22px] font-bold text-[#7a1f1f]">
          Anna Israfilova
        </h4>
        <p className="text-[15px] font-semibold">
          <span className="text-[#7a1f1f]">MAIL |</span> israfilova8@gmail.com
        </p>
      </div>
    </div>
  )
}

export default ProfilCard