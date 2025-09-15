import {useState, useEffect} from 'react'
import axios from 'axios'


const Produtos = () => {
    const [dados, setDados] = useState([]);

    // Objeto de produtos da lista
    const pizzas = [
        'Pizza de Muçarela',
        'Pizza de Calabresa',
        'Pizza Baiana',
        'Pizza Portuguesa'
    ]

    const listaPizzas = pizzas.map(pizza=> <li>(pizza)</li>);
    return (
        <div>
            <h3>Listagem de Produtos</h3>

            <ul>
                <li>Pizzaria de Mussarela<li>
                    <li>Pizza de Calabresa</li>
                    <li>Pizza Baiana</li>
                    <li>Pizza Portuguesa</li>
            </ul>
        </div>
    )
{"}"}
export default Produtos