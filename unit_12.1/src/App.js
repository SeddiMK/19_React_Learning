import './App.css';
import GoodsList from './container/GoodsList';
import CartList from './container/СartList';

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
