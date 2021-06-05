import Loader from "react-loader-spinner";

export function SetLoader() {
  return (
    <div className="loader">
      <div>
        <Loader type="Puff" color="#dc2626" height={50} width={50} />
      </div>
    </div>
  );
}
