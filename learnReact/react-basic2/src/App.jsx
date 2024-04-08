import Counter from "./components/Counter";
import InputComponent from "./components/InputComponent";
import InputComponent2 from "./components/InputComponent2";
import CChild from "./components/CChild";

const App = () => {
    return (
        <div>
            <Counter/>
            <hr/>
            <InputComponent/>
            <hr/>
            <InputComponent2/>
            <hr/>
            <CChild/>
        </div>
    );
};

export default App;