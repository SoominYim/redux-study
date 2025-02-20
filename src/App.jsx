import "./App.css";
import store from "./modules/config/configStore";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";

function Main() {
  const counterStore = useSelector((state) => state); // 스토어를 조회합니다.
  console.log(counterStore);
  return <main></main>;
}

function App() {
  return (
    <Provider store={store}>
      <Main /> {/* Provider 내부에서 useSelector를 사용하는 컴포넌트를 추가 */}
    </Provider>
  );
}

export default App;
