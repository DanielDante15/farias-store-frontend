function Card({data}) {
    return (
        <>
            <div className=" mx-2 cursor-pointer py-4 hover:flex w-72 flex-col transform transition-transform duration-300 ease-in-out">
                <div className=" hover:bg-transparent bg-transparent shadow-xl transform duration-300 ease-in-out hover:scale-95">
                    <img src={data.img2} alt="Shoes" />
                </div>
                <div className="pt-2 w-full h-full">
                    <h4>{data.nomeProd}</h4>
                    <p>R${data.precoProd}</p>
                </div>
            </div>

        </>
    );
}

export default Card;