import "./Main.css";
import { Card } from "../Card/Card";
export function Main({ videos }) {
  return (
    <div className="cards-container abc">
      {videos.map((video) => (
        <Card video={video} />
      ))}
    </div>
  );
}
