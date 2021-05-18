import "./Categories.css";
import { useVideo } from "../Reducer/Reducer";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export function Categories() {
  const { state, dispatch } = useVideo();
  const { originalVideos } = state;
  let categories = ["All"];
  let classes = "categories-button";
  function bgColorHandler(category) {
    classes = "categories-button enabled";
  }
  originalVideos.map((video) => {
    if (!categories.includes(video.category)) categories.push(video.category);
  });
  return (
    <div className="buttons-outer">
      {categories.map((category) => (
        <>
          <NavLink to="/categories">
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
          </NavLink>
        </>
      ))}
    </div>
  );
}
