import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

function FormUpdate() {

    const router = useRouter()

    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [imagem1, setImagem1] = useState(null);
    const [imagem2, setImagem2] = useState(null);

    const { params } = router.query;
    const [parametros, setParametros] = useState(null);

    useEffect(() => {
        if (params) {
            try {
                const parametrosObj = JSON.parse(decodeURIComponent(params));
                setId(parametrosObj.id)
                setParametros(parametrosObj);
                setNome(parametrosObj.nome)
                setDescricao(parametrosObj.desc)
                setPreco(parametrosObj.preco)
                setImagem1(parametrosObj.img1)
                setImagem2(parametrosObj.img2)
            } catch (error) {
                console.error("Erro ao converter os parâmetros:", error);
            }
        }
    }, [params]);




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


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('nomeProd', nome);
        formData.append('descProd', descricao);
        formData.append('precoProd', preco);
       

        try {
            const response = await axios.patch(`http://127.0.0.1:8000/tenis/${id}/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then(() => { router.push('/') });


        } catch (error) {
            console.error('Erro ao atualizar o produto:', error.message);
        }
    };
    return (<>
        <div className="flex flex-col justify-center items-center bg-[#222] h-screen w-screen">
            <h1 className="pb-7 text-[23px]">Edição de Produtos</h1>
            <form className="flex flex-col space-y-4 items-center bg-[#696868] p-4 rounded-lg shadow-md max-w-md">
                <label htmlFor="nome" className="text-white">Nome:</label>
                <input type="text" id="nome" placeholder="Nome" value={nome} onChange={handleNomeChange} className="input input-bordered w-full max-w-xs mb-4" />

                <label htmlFor="preco" className="text-white">Preço:</label>
                <input type="text" id="preco" placeholder="Preço" value={preco} onChange={handlePrecoChange} className="input input-bordered w-full max-w-xs mb-4" />

                <label htmlFor="descricao" className="text-white">Descrição do Produto:</label>
                <textarea className="input input-bordered w-full max-w-xs h-32 mb-4" value={descricao} onChange={handleDescricaoChange} />


                <label htmlFor="imagem1" className="text-white">Imagem 1:</label>
                {!imagem1 && <input type="file" id="imagem1" onChange={handleImagem1Change} className="file-input w-full max-w-xs mb-4" />}
                {imagem1 && (
                    <div>
                        <p>{imagem1.name}</p>
                        <button onClick={() => setImagem1(null)}>Remover Imagem</button>
                    </div>
                )}

                <label htmlFor="imagem2" className="text-white">Imagem 2:</label>
                {!imagem2 && <input type="file" id="imagem2" onChange={handleImagem2Change} className="file-input w-full max-w-xs mb-4" />}
                {imagem2 && (
                    <div>
                        <p>{imagem2.name}</p>
                        <button onClick={() => setImagem2(null)}>Remover Imagem</button>
                    </div>
                )}


                <button onClick={handleSubmit} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Editar</button>

            </form>
        </div>
    </>);
}

export default FormUpdate;