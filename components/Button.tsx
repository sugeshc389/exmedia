type ButtonProps = {
    type:'button'|'submit';
    title:string;
    icon?:string;
    variant:'btn_dark_green'

}
const Button = ({type,title,icon,variant}:ButtonProps) => {
  return <div>Button</div>;
};

export default Button;
