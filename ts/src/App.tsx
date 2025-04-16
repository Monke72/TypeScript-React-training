import Card, { CardVariant } from "./component/Card";

function App() {
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
    </>
  );
}

export default App;
