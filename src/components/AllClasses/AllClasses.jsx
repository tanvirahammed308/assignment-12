const AllClasses = ({ item }) => {
  const {
    image,
    name,
    instructorName,
    price,
    availableSeats,
    numberOfStudents,
  } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-40 ">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="pic"
          className="rounded-xl w-full md:w-[250px] md:h-[120px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Instructor :{instructorName}</p>
        <p>Price :{price}</p>
        <p>Number of students :{numberOfStudents}</p>
        <p>Available seats :{availableSeats}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Select </button>
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
