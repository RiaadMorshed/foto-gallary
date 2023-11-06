interface NavbarProps {
  images: number[];
  handleDelete: (ids: number[]) => void;
}

const Navbar: React.FC<NavbarProps> = ({ images, handleDelete }) => {
  if (!images?.length) {
    return (
      <h1 className="flex justify-start mx-9 font-bold font-sans">Gallary</h1>
    );
  }
  return (
    <div className="flex justify-between mx-9 font-bold font-sans">
      <p>
        <input
          type="checkbox"
          className="mx-1 cursor-pointer bg-blue-700"
          checked={true}
        />
        {images.length || 0} image selected
      </p>
      <button
        className="text-red-700"
        onClick={() => handleDelete(images.map((image) => image))}
      >
        Delete files
      </button>
    </div>
  );
};

export default Navbar;
