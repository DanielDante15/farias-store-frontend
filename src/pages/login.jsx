import { useState } from "react";
import { useRouter } from "next/router";

function Login() {

    const router = useRouter();

    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")

    const teste = () => {
        if (nome == 'caio' && senha == '123' || nome == 'dante' && senha == '123') {
            router.push('/')
        }
        else {
            document.getElementById('my_modal_1').showModal();
        }
    }

    return (
        <div className="w-screen h-screen bg-gray-600">
            <div className=" hero min-h-screen bg-base-200">
                <div className="hero-content flex-col h-1/2 lg:flex-row-reverse ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">StoreFarias</h1>
                        <p className="py-6">Bem-vindo à StoreFarias, o destino perfeito para os amantes de tênis que buscam estilo, conforto e qualidade! Na StoreFarias, não vendemos apenas tênis; oferecemos uma experiência única para os apaixonados por calçados esportivos.</p>
                    </div>
                    <div className="card flex-shrink-0 w-1/3 h-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Nome</span>
                                </label>
                                <input type="text" placeholder="Nome" onChange={(a) => setNome(a.target.value)} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" onChange={(a) => setSenha(a.target.value)} className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={teste} className="btn btn-primary">Login</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Usuário ou Senha Incorretos</h3>
                    <p className="py-4">Por favor tente fazer Login novamente</p>
                    <div className="modal-action">
                        <form method="dialog">  
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>);

}

export default Login;