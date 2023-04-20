import "./App.css";
import InputDemo from "./InputDemo";
import Input from "./Input";

function App() {
    const button = [
        {
            name: "Character counter",
            id: "max-length",
            active: false,
        },
        {
            name: "Helper text",
            id: "helper",
            active: false,
        },
        {
            name: "Error text",
            id: "error",
            active: false,
        },
    ];
    return (
        <div className="App">
            <InputDemo
                label="sssss"
                maxLength="30"
                helper="나는 헬퍼"
                error="에러남"
                buttons={button}
            />
            <Input id="outlined" label="Outlined" variant="outlined" />
            <Input id="filled" label="Filled" variant="filled" />
            <Input
                id="required"
                label="Required"
                variant="required"
                required={true}
            />
        </div>
    );
}

export default App;
