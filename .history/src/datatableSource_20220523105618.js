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
    status: "Approved",
  },
  {
    id: 2,
    username: "Bieber",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "bieber@bieber.com",
    age: 27,
    status: "Pending",
  },
  {
    id: 3,
    username: "Alaba",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "alaba@example.com",
    age: 43,
    status: "Pending",
  },
  {
    id: 4,
    username: "Perry",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "perry@example.com",
    age: 21,
    status: "Approved",
  },
  {
    id: 5,
    username: "Rihanna",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "rihanna@gamil.com",
    age: 32,
    status: "Approved",
  },
  {
    id: 6,
    username: "Trevor",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "trevornoah@daily.com",
    age: 31,
    status: "Pending",
  },
  {
    id: 7,
    username: "Becky",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "becky@gmail.com",
    age: 15,
    status: "Approved",
  },
  {
    id: 8,
    username: "Jonior",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "jonior@joni.com",
    age: 12,
    status: "Approved",
  },
  {
    id: 9,
    username: "Mosh",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "mosh@yahoo.com",
    age: 33,
    status: "Pending",
  },
  {
    id: 10,
    username: "Johny",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "johny@gmail.com",
    age: 16,
    status: "Pending",
  },
  {
    id: 11,
    username: "Natalie",
    img:
      "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    email: "natalie@net.com",
    age: 22,
    status: "Approved",
  },
];
