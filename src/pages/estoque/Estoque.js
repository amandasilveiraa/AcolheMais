import { Header } from "../../components/header/header";
import { Main } from "../../StyledGlobal.js";
import { BotaoFiltro, IconeFiltro, NavEstoque, Pesquisar, Tabela, TabelaDiv, TituloPagina } from "./Estoque.jsx";
import FiltroImg from "../../assets/FilterIcon.svg"

export default function Estoque(){
    return(
        <>
            <Header />
            <Main>
                <TituloPagina>ESTOQUE</TituloPagina>
                <NavEstoque>
                    <Pesquisar placeholder="Pesquisar" />
                    <BotaoFiltro><IconeFiltro src={FiltroImg} alt="icone de filtro" />Filtro</BotaoFiltro>
                </NavEstoque>
                <TabelaDiv>
                    <Tabela>
                        <tr>
                            <th>Item</th>
                            <th>Fornecedores</th>
                            <th>Categoria</th>
                            <th>Status</th>
                            <th>Entrada</th>
                        </tr>
                        <tr>
                            <td>asdasd</td>
                            <td>dsadasdas</td>
                            <td>dsdasd</td>
                            <td>dasdas</td>
                            <td>dsadasdas</td>
                        </tr>
                        <tr>
                            <td>asdasd</td>
                            <td>dsadasdas</td>
                            <td>dsdasd</td>
                            <td>dasdas</td>
                            <td>dsadasdas</td>
                        </tr>
                    </Tabela>
                </TabelaDiv>
            </Main>
            
        </>
    )
}