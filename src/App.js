import "./App.css";
import NewsInfo from "./components/NewsInfo";
import Background from "./components/Background";

function App() {
  return (
    <div className="py-10 md:py-0 bg-primary w-full h-full md:h-[100vh] flex justify-center items-center">
      <div className="w-[90%] md:w-[60%] bg-bgColor py-8 px-8 rounded-3xl flex flex-col-reverse md:flex-row items-center justify-center gap-5">
        <div className="py-0 md:py-10 px-0 md:px-5">
          <NewsInfo />
        </div>
        <Background />
      </div>
    </div>
  );
}

export default App;
