import { useState } from "react";
import { useRouter } from "next/router";

function Login() {

    const router = useRouter();

    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")

    const teste = ()=>{
        if(nome == 'dante' && senha == '123'){
            router.push('/')
        }
        else{
            alert('usuario ou senha incorretos')
        }
    }


    return (
        <div className="w-screen h-screen">
            <div  className=" hero min-h-screen bg-base-200">
                <div className="hero-content flex-col h-1/2 lg:flex-row-reverse ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login Poc Rafa Cavalcanti!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-1/3 h-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Nome</span>
                                </label>
                                <input type="text" placeholder="Nome" onChange={(a)=>setNome(a.target.value)} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" onChange={(a)=>setSenha(a.target.value)} className="input input-bordered" />
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
        </div>);
}

export default Login;