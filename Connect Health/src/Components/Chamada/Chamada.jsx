import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../AutoContext/AuthContext";

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

    // Create instance object from Kit Token.
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
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };

  return (
    <div>
      <div
        className="myCallContainer"
        ref={myMeeting}
        style={{ width: "100vw", height: "100vh" }}
      ></div>
    </div>
  );
};

export default Chamada;