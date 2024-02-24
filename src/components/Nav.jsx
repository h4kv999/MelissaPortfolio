export function Nav(){
    return(
        <div className="h-11 flex items-center justify-center gap-7 text-purple-100">
            <a href="#artwork" className="hover:text-purple-500 transition">Artwork</a>
            <a href="#about-me" className="hover:text-purple-500 transition">About Me</a>
            <a href="#books-art" className="hover:text-purple-500 transition">Books Art</a>
        </div>
    )
}