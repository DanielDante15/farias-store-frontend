function Card() {
    return (
        <>
            <div className=" mx-2 cursor-pointer py-4 hover:flex w-72 flex-col transform transition-transform duration-300 ease-in-out">
                <div className=" hover:bg-transparent bg-transparent shadow-xl transform duration-300 ease-in-out hover:scale-95">
                    <img src="\images\Tenis\Air force 1 '07\Air force 1 07 (1).jpg" alt="Shoes" />
                </div>
                <div className="pt-2 w-full h-full">
                    <h4>Caio guei</h4>
                    <p>R$99.90</p>
                </div>
            </div>

        </>
    );
}

export default Card;