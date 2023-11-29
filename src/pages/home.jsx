import Card from "@/components/card";
import axios from "axios";
import { useEffect, useState } from "react";


function HomeScreen() {
    const [tenisData, setTenisData] = useState([]);

    useEffect(() => {
        axios
            .get('http://192.168.0.13:8000/tenis/')
            .then(response => {
                setTenisData(response.data); // Atualize o estado com os dados recebidos
            })
            .catch(error => {
                // Lidar com erros aqui
                console.error('Erro na requisição:', error);
            });
    }, []);

    return (<>
        <div className=" flex justify-center bg-[#222] z-0 text-center h-full w-full  ">

            <div className="flex flex-wrap w-1/2">
                {tenisData.map((tenisItem, index) => (
                    <Card key={index} data={tenisItem} />
                ))}

            </div>
        </div>
    </>);
}

export default HomeScreen;
