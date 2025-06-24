function Navbar(){

   return(
    <header className="flex flex-row justify-between bg-black h-[80px] items-center font-sans ">
        <div className="text-white ml-[10px] text-3xl font-bold">aeterna.</div>
        <div className="flex mx-[10px] text-white mr-[30px]">
            <button className="mx-[10px] font-semibold">Home</button>
            <button className="mx-[10px] font-semibold">Movies</button>
            <button className="mx-[10px] font-semibold">TV Shows</button>
            <button className="mx-[10px] font-semibold">Cartoon</button>
            <button className="mx-[10px] font-semibold">Anime</button>
            <button className="mx-[10px] font-semibold">Actors</button>
            <button className="mx-[10px] font-semibold">About</button>
        </div>
    </header>
   )

}
export default Navbar;