export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="celling" src={params.row.img} alt="Avator" />
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto",
    email: "Snow@example.com",
    age: 36,
  },
  {
    id: 2,
    username: "Snow",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto",
    email: "Snow@example.com",
    age: 36,
  },
  {
    id: 3,
    username: "Snow",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto",
    email: "Snow@example.com",
    age: 36,
  },
  {
    id: 4,
    username: "Snow",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto",
    email: "Snow@example.com",
    age: 36,
  },
  {
    id: 5,
    username: "Snow",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto",
    email: "Snow@example.com",
    age: 36,
  },
  {
    id: 6,
    username: "Snow",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto",
    email: "Snow@example.com",
    age: 36,
  },
  {
    id: 7,
    username: "Snow",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto",
    email: "Snow@example.com",
    age: 36,
  },
  {
    id: 8,
    username: "Snow",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto",
    email: "Snow@example.com",
    age: 36,
  },
  {
    id: 9,
    username: "Snow",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto",
    email: "Snow@example.com",
    age: 36,
  },
  {
    id: 10,
    username: "Snow",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto",
    email: "Snow@example.com",
    age: 36,
  },
  {
    id: 11,
    username: "Snow",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto",
    email: "Snow@example.com",
    age: 36,
  },
];
