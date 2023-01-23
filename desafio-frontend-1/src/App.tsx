import Global from './styles/global';
import { AppContainer } from './styles/style.app';
import RoutesMain from './routes';
import ModalDelete from './components/ModalDelete';
import { darkTheme, lightTheme } from './themes';
import { useDashboardContext } from './contexts/dashboard/dashboard';
import ModalEdit from './components/ModalEdit';

function App() {
  const { currentTheme } = useDashboardContext();

  return (

      <AppContainer>
        <Global />
        <ModalEdit />
        <ModalDelete />
        <RoutesMain />
      </AppContainer>
  );
}

export default App;

