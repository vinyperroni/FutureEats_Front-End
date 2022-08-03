import logo from "../../assets/future-eats-logo.png";
import { DivBlackScreen } from './styled';

export default function BlackScreen(props) {
  
  return (
      <DivBlackScreen show={props.show}>
        
        <img src={logo} alt="Future Eats Logo" />
      </DivBlackScreen>
    );
  }