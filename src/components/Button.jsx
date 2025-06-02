import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, childern, px, white }) => {
  const renderButton = () => (
    <button>
      <span>{childern}</span>
      {ButtonSvg(white)}
    </button>
  );

  return renderButton();
};

export default Button;
