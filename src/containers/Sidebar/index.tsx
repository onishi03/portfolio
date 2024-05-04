import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'
const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Rodrigo Onishi</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Onishi03
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descricao>
      <BotaoTema>Troca tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
