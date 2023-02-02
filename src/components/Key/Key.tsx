interface KeyProps {
  text: string;
  className: string;
}

const Key = ({text, className}: KeyProps): JSX.Element => {
  return (
    <>
    <li><button className={`key ${className}`}>{text}</button></li>
    </>
  )
}

export default Key;
