import Icons from "../../assets/sprite.svg";

export const Icon = ({ id, className, size }) => {
  return (
    <svg className={className} height={size} width={size}>
      <use href={Icons + "#icon-" + id}></use>
    </svg>
  );
};
