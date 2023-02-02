import Keyboard from "./components/Keyboard/Keyboard";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <span className="message off">Calling...</span>
      <main className="phone">
        <Keyboard />
        <div className="actions">
          <span className="number">667359961</span>
          <a href="call" className="call">
            Call
          </a>

          <a href="hang-up" className="hang active">
            Hang up
          </a>
        </div>
      </main>
    </div>
  );
};

export default App;
