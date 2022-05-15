import { UserProvider } from './contexts/UserContext';
import AuthRouter from './routes/AuthRouter';

function App() {
  return (
    <UserProvider>
      <AuthRouter />
    </UserProvider>
  );
}

export default App;
