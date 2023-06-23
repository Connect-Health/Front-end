import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../AutoContext/AuthContext";
import logo from '../../../assets/logo_preta.png'

const Chamada = () => {
  const { roomID } = useParams();
  const { user } = useContext(AuthContext);

  
  const nomeUsuario = user?.nome || "";

  const myMeeting = async (element) => {
    const appID = 432733439;
    const serverSecret = "1eb23befe3b3cb706f15dd3e19bf00ed";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      nomeUsuario
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copiar Link",
          url: `https://connect-health.net.br/chamada/${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      showScreenshareBtn: false,
    });
  };

  return (
    <div className="pecinha ">
      <img src={logo} className="absolute z-50 top-1 left-1 w-20" alt="" />
      <div
        className=" bg-azulsite "
        ref={myMeeting}
        style={{ width: "100vw", height: "100vh" }}
      >
        
      </div>
    </div>
  );
};

export default Chamada;