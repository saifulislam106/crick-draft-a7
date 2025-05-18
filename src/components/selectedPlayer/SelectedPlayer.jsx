const SelectedPlayer = ({ selectPlayer, handleDeletePlayer }) => {
  // console.log(selectPlayer, "sel");

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">
        Selected Player {selectPlayer.length} / 6
      </h2>

      {selectPlayer.map((p, index) => (
        <div
          key={index}
          className="flex items-center justify-between border-b py-2"
        >
          <div className="flex items-center gap-4">
            {/* <img
              src={p.country} // You might want to map this to a flag URL
              alt={p.name}
              className="w-12 h-8 object-cover rounded"
            /> */}
            <div>
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-gray-600">{p.batting_style}</p>
            </div>
          </div>
          <button onClick={()=>handleDeletePlayer(p.id)} className="text-red-500 hover:underline">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default SelectedPlayer;
