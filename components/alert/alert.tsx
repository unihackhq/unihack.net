import './alert.scss';

type Props = {
  link: string;
  message: string;
};

const Alert = (props: Props) => {
  const { link, message } = props;
  return (
    <div class="alert">
      <a href={link}>{message}</a>
    </div>
  );
};

export default Alert;
