import "./Main.css";
import { Card } from "../Card/Card";
export function Main({ videos }) {
  return (
    <div className="main-cards-container cards-margin">
      {videos.map((video) => (
        <Card video={video} />
      ))}
    </div>
  );
}
