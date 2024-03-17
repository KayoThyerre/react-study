import { useQuery } from "react-query";


const Main = () => {
    const fetchData = async () => {
        const response = await fetch('https://viacep.com.br/ws/01001000/json/');
        return await response.json();
    }

    const { data, isLoading, isError, error } = useQuery('cep', fetchData, {
        refetchOnWindowFocus: false,
    })

    console.log(data)

    if (isLoading) return <p>Está carregando as informações.</p>

    if (isError) return <p>Ocorreu um erro desconhecido {error}</p>

    return (
        <>
            <ul>
                <li>{data.logradouro}</li>
                <li>{data.bairro}</li>
                <li>{data.localidade}</li>
                <li>{data.uf}</li>
            </ul>
        </>
    )
}



export { Main }