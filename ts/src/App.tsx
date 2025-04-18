import Card, { CardVariant } from "./component/Card";
import UserList from "./component/UserList";
import { IUser } from "./types/types";

function App() {
  const users: IUser[] = [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        city: "Gwenborough",
        zipcode: "92998-3874",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
      },
    },
  ];
  return (
    <>
      <Card
        onClick={() => console.log("click")}
        variant={CardVariant.outlined}
        width="121px"
        height="122px"
      >
        <button>Кнопка</button>
      </Card>
      <UserList users={users} />
    </>
  );
}

export default App;
