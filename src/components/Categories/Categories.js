import "./Categories.css";
import { useVideo } from "../Reducer/Reducer";
import { useState } from "react";

export function Categories() {
  const [bgColor, setBgColor] = useState("white");
  const [clicked, setClicked] = useState(false);
  const { state, dispatch } = useVideo();
  const { videos, originalVideos } = state;
  let categories = ["All"];
  let classes = "categories-button";
  function bgColorHandler(category) {
    console.log("i cam eto change");
    classes = "categories-button enabled";
  }
  originalVideos.map((video) => {
    if (!categories.includes(video.category)) categories.push(video.category);
  });
  return (
    <div className="buttons-outer">
      {categories.map((category) => (
        <>
          <button
            onClick={() => (
              dispatch({
                type: "FILTER_OUT_CATEGORIES",
                payload: { category },
              }),
              bgColorHandler(category)
            )}
            className="categories-button"
          >
            {category}
          </button>
        </>
      ))}
    </div>
  );
}
