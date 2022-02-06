import sample from "../media/gasandoil-vietnam-sample.mov";

function HeaderItem() {
  return (
    <div>
      <video className="videoTag" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
    </div>
  );
}

export default HeaderItem;
