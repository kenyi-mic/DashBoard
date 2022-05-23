export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="Avator" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    cellRenderer: (params) => {
      return <div className="cellWithStatus">{params.row.status}</div>;
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "Snow@example.com",
    age: 36,
  },
  {
    id: 2,
    username: "Snow",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "Snow@example.com",
    age: 36,
  },
  {
    id: 3,
    username: "Snow",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "Snow@example.com",
    age: 36,
  },
  {
    id: 4,
    username: "Snow",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "Snow@example.com",
    age: 36,
  },
  {
    id: 5,
    username: "Snow",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "Snow@example.com",
    age: 36,
  },
  {
    id: 6,
    username: "Snow",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "Snow@example.com",
    age: 36,
  },
  {
    id: 7,
    username: "Snow",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "Snow@example.com",
    age: 36,
  },
  {
    id: 8,
    username: "Snow",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "Snow@example.com",
    age: 36,
  },
  {
    id: 9,
    username: "Snow",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "Snow@example.com",
    age: 36,
  },
  {
    id: 10,
    username: "Snow",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "Snow@example.com",
    age: 36,
  },
  {
    id: 11,
    username: "Snow",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "Snow@example.com",
    age: 36,
  },
];
