import copyImg from "../../assets/images/copy.svg";
import { useTheme } from "../../hooks/useTheme";

import "./styles.scss";

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  const { theme } = useTheme();
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button onClick={copyRoomCodeToClipboard} className={`room-code ${theme}`}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
}
