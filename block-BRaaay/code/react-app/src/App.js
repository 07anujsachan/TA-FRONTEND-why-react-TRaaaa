import Color  from "./Components/color";
import data from "./colors.json";

function App() {
  return (
    <>
      <h1>Color Pallete UI</h1>
      <Color color={data.gray} colorName="gray" />
      <Color color={data.red} colorName="red" />
      <Color color={data.yellow} colorName="yellow" />
      <Color color={data.green} colorName="green" />
      <Color color={data.pink} colorName="pink" />
      <Color color={data.lime} colorName="lime" />
      <Color color={data.orange} colorName="orange" />
      <Color color={data.teal} colorName="teal" />
      <Color color={data.cyan} colorName="cyan" />
      <Color color={data.blue} colorName="blue" />
      <Color color={data.violet} colorName="violet" />
      <Color color={data.indigo} colorName="indigo" />
      <Color color={data.grape} colorName="grape" />
    </>
  );
}

export default App;
