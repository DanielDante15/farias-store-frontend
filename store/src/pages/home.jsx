
function HomeScreen() {
    const usuarios = [
    {
        "nome": "Daniel",
        "idade": 20,
        "profissao": "desenvolvedor de sistemas"
    },
    {
        "nome": "Maria",
        "idade": 25,
        "profissao": "engenheira de software"
    },
    {
        "nome": "João",
        "idade": 30,
        "profissao": "analista de dados"
    },
    {
        "nome": "Ana",
        "idade": 28,
        "profissao": "designer gráfico"
    },
    {
        "nome": "Pedro",
        "idade": 22,
        "profissao": "estudante"
    },
    {
        "nome": "Carla",
        "idade": 35,
        "profissao": "médica"
    },
    {
        "nome": "Lucas",
        "idade": 28,
        "profissao": "contador"
    },
    {
        "nome": "Larissa",
        "idade": 23,
        "profissao": "professora"
    },
    {
        "nome": "Rafael",
        "idade": 32,
        "profissao": "engenheiro civil"
    },
    {
        "nome": "Julia",
        "idade": 26,
        "profissao": "arquiteta"
    },
   
];

console.log(usuarios);
    return (<>
        <div className="bg-[#222] z-0 text-center h-full  ">

            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Profissão</th>
                    </tr>
                </thead>
                <tbody id="resultados-tabela">
                {usuarios.map((usuario, index) => (
                        <tr key={index}>
                            <td className="id">{index}</td>
                            <td className="nome-usuario">{usuario.nome}</td>
                            <td className="idade-usuario">{usuario.idade}</td>
                            <td className="profissao-usuario">{usuario.profissao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    </>);
}

export default HomeScreen;