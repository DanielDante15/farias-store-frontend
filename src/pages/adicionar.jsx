import Card from "@/components/card";
import axios from "axios";
import { useEffect, useState } from "react";


function Adicionar() {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [imagem1, setImagem1] = useState(null);
    const [imagem2, setImagem2] = useState(null);

    const handleNomeChange = (event) => {
        setNome(event.target.value);
      };
    
      const handleDescricaoChange = (event) => {
        setDescricao(event.target.value);
      };
    
      const handlePrecoChange = (event) => {
        setPreco(event.target.value);
      };
    
      const handleImagem1Change = (event) => {
        setImagem1(event.target.files[0]);
      };
    
      const handleImagem2Change = (event) => {
        setImagem2(event.target.files[0]);
      };


      const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('nomeProd', nome);
        formData.append('descProd', descricao);
        formData.append('precoProd', preco);
        formData.append('img1', imagem1, imagem1.name);
        formData.append('img2', imagem2, imagem2.name);
    
        try {
          const response = await axios.post('http://192.168.0.13:8000/tenis/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

        } catch (error) {
          console.error('Erro ao adicionar o produto:', error.message);
        }
      };




    return (<>
        <div className="flex flex-col justify-center items-center bg-[#222] h-screen w-screen">
            <h1 className="pb-7 text-[23px]">Cadastro de Produtos</h1>
            <form className="flex flex-col space-y-4 items-center bg-[#696868] p-4 rounded-lg shadow-md max-w-md">
                <label htmlFor="nome" className="text-white">Nome:</label>
                <input type="text" id="nome" placeholder="Nome" value={nome} onChange={handleNomeChange}  className="input input-bordered w-full max-w-xs mb-4" />

                <label htmlFor="preco" className="text-white">Preço:</label>
                <input type="text" id="preco" placeholder="Preço" value={preco} onChange={handlePrecoChange}  className="input input-bordered w-full max-w-xs mb-4" />

                <label htmlFor="descricao" className="text-white">Descrição do Produto:</label>
                <textarea className="input input-bordered w-full max-w-xs h-32 mb-4" value={descricao} onChange={handleDescricaoChange} />
               

                <label htmlFor="imagem1" className="text-white">Imagem 1:</label>
                <input type="file" id="imagem1"  onChange={handleImagem1Change} className="file-input w-full max-w-xs mb-4" />

                <label htmlFor="imagem2" className="text-white">Imagem 2:</label>
                <input type="file" id="imagem2" onChange={handleImagem2Change} className="file-input w-full max-w-xs mb-4" />

                <button  onClick={handleSubmit} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Cadastrar</button>

            </form>
        </div>
    </>);
}

export default Adicionar;
