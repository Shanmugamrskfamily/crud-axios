import React from "react";
import { useUserContext } from "./context/usercontext";

function Home() {
  const { name, setName, email, setEmail, phone, setPhone, handleFormSubmit } =
    useUserContext();
  const formId = 11;
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 ">
      <div className="row align-items-center g-lg-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h2 className="display-4 fw-bold lh-1 text-body-emphasis mb-1">
            Enter Your <span className="data">Data</span>
          </h2>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483604-2912020.png" />
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={(e) => handleFormSubmit(e, { name, email, phone }, formId)}>
            {/* Form inputs */}
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="nameInput" placeholder="Enter the Name" fdprocessedid="u4sm3c" value={name} onChange={(e) => setName(e.target.value)}/>
                    <label htmlFor="nameInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="emailInput" placeholder="name@gmail.com" fdprocessedid="u4sm3c" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="emailInput">Email</label>
                </div>
                <div className="form-floating mb-3 text-center">
                    <input type="number" className="form-control" id="floatingNumber" placeholder="Phone Number" fdprocessedid="4j7lvo" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <label htmlFor="floatingNumber">Phone Number</label>
                </div>
                <div className="checkbox mb-3">
                    <label><input type="checkbox" value="remember-me" /> Remember me</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit"> Add To List</button>
            </form>
            </div>
    </div>
</div>
  );
}

export default Home;