import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const Chamada = () => {
  const { roomID } = useParams() || "random(5)";

  const myMeeting = async (element) => {
    const appID = 432733439;
    const serverSecret = "1eb23befe3b3cb706f15dd3e19bf00ed";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Usuario"
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
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      showScreenshareBtn: false,
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
