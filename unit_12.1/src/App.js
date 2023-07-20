import './App.css';
import GoodsList from './containers/GoodsList';
import CartList from './containers/СartList';

function App() {
  return (
    <div>
      {/* Вывод данных из Хранилища */}
      <GoodsList />
      <CartList />
    </div>
  );
}

export default App;
