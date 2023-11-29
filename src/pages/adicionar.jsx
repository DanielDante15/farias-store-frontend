import Card from "@/components/card";
import axios from "axios";
import { useEffect, useState } from "react";


function Adicionar() {



    return (<>
        <div className="flex flex-col justify-center items-center bg-[#222] h-screen w-screen">
            <h1 className="pb-7 text-[23px]">Cadastro de Produtos</h1>
            <form className="flex flex-col space-y-4 items-center bg-[#696868] p-4 rounded-lg shadow-md max-w-md">
                <label htmlFor="nome" className="text-white">Nome:</label>
                <input type="text" id="nome" placeholder="Nome" className="input input-bordered w-full max-w-xs mb-4" />

                <label htmlFor="preco" className="text-white">Preço:</label>
                <input type="text" id="preco" placeholder="Preço" className="input input-bordered w-full max-w-xs mb-4" />

                <label htmlFor="descricao" className="text-white">Descrição do Produto:</label>
                <input type="text" id="descricao" placeholder="Descrição" className="input input-bordered w-full max-w-xs mb-4" />

                <label htmlFor="imagem1" className="text-white">Imagem 1:</label>
                <input type="file" id="imagem1" className="file-input w-full max-w-xs mb-4" />

                <label htmlFor="imagem2" className="text-white">Imagem 2:</label>
                <input type="file" id="imagem2" className="file-input w-full max-w-xs mb-4" />
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Cadastrar</button>

            </form>
        </div>
    </>);
}

export default Adicionar;
    