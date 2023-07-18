import React from "react";

const Roomselect = () => {
  return (
    <>
      <div
        className="container-fluid mt-4 py-2"
        style={{
          backgroundColor: "rgba(1, 25, 52, 0.9)",
          color: "bisque",
          width: "100%", // Changed width to 100% to make it full-width on all devices
          textAlign: "center",
          borderRadius: "5em",
        }}
      >
        <h4>Select Room No. from the available options.</h4>
      </div>
      <div
        className="container-fluid mt-5 d-flex flex-wrap justify-content-center"
        // Removed inline margin-right, and added a class mx-2 to add horizontal spacing between buttons
      >
        {Array.from({ length: 20 }, (_, index) => (
          // Used a loop to generate the buttons for room numbers
          <button
            key={index + 1}
            type="button"
            className="btn btn-dark mx-2 my-3"
            // Added min-width to ensure consistent button width
            style={{ minWidth: "50px" }}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div
        className="container-fluid text-center mt-5"
        style={{ color: "rgb(12, 0, 27)", fontSize: "largest" }}
      >
        <p>
          <b>Here you can see sample images of some rooms. </b>
        </p>
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        // Added style to limit the carousel width and center it
        style={{ width: "100%", maxWidth: "800px", margin: "auto" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div
          className="carousel-inner"
          // Added max-height to ensure the carousel doesn't take up too much vertical space
          style={{ maxHeight: "400px", overflow: "hidden" }}
        >
          <div className="carousel-item active">
            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill"
              className="d-block w-100 h-50"
              alt="room_img1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.parkregisbirmingham.co.uk/wp-content/uploads/2021/06/Untitled-design-15-2560x1280.jpg"
              className="d-block w-100 h-50"
              alt="room_img2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-mumbai/room-and-suites/luxury-room/detail/mumbai-luxury-rooms-suites-724x407.jpg?w=724&hash=eaf9e624eee9eabeaf5bb28dda72d6d9"
              className="d-block w-100 h-50"
              alt="room_img3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Roomselect;
