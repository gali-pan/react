import image from ".././assets/img/mount.jpg";
export const Main = () => {
  return (
    <>
      <h1 className="text-center">You are welcome!</h1>
      <div className="row mt-5">
        <div className="col-md-6">
          <img src={image} alt="" width="100%" height="300px" />
        </div>
        <div className="col-md-6">
          <p className="text-center"> User personal account</p>
        </div>
      </div>
    </>
  );
};
