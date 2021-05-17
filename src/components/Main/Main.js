import "./Main.css";
import { Card } from "../Card/Card";
import { useVideo } from "../Reducer/Reducer";
export function Main() {
  const { state } = useVideo();
  const { videos, originalVideos } = state;
  //   if (videos.length !== originalVideos.length) {
  return (
    <div className="cards-container abc">
      {videos.map((video) => (
        <Card video={video} />
      ))}
    </div>
  );
  //   } else {
  //     return (
  //       <div className="cards-container abc">
  //         {originalVideos.map((video) => (
  //           <Card video={video} />
  //         ))}
  //       </div>
  //     );
  //   }
}
