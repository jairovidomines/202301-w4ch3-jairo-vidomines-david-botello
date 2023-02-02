import Key from "../Key/Key"


const Keyboard = () => {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        <Key className="" text="1"/>
        <Key className="" text="2"/>
        <Key className="" text="3"/>
        <Key className="" text="4"/>
        <Key className="" text="5"/>
        <Key className="" text="6"/>
        <Key className="" text="7"/>
        <Key className="" text="8"/>
        <Key className="" text="9"/>
        <Key className="" text="0"/>
        <Key className="big" text="delete"/>
      </ol>
    </div>
  )
};

export default Keyboard;
