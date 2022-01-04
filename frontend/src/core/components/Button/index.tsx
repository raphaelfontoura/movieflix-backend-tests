import "./styles.css";

type Props = {
  label: string;
}

const Button = ({ label }: Props) => {
  return (
    <button className="button-default">
      {label}
    </button>
  )
}

export default Button
