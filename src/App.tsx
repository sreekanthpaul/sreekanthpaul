import { ConfigProvider, theme } from "antd";
import Message from "./Message";

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm, // switch to dark theme
      }}
    >
      <div>
        <Message />
      </div>
    </ConfigProvider>
  );
}

export default App;
