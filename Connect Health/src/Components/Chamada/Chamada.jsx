import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const Chamada = () => {
  const { roomID } = useParams();

  const myMeeting = async (element) => {
    const appID = 432733439;
    const serverSecret = "1eb23befe3b3cb706f15dd3e19bf00ed";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
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
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };

  return (
    <div>
        <div ref={myMeeting} />
    </div>
  );
};

export default Chamada;
