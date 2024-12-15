
import './App.css';
import { Button } from './button/Button';
import { Filter } from './filter/Filter';
import { Students } from './students/Students';
import { UseState } from './useState/UseState';

function App() {

  const Button1 = (subs: string, age: number) => {
    console.log(subs, age)
  }

  const Button2 = (subs: string) => {
    console.log(subs)
  }

  return (
    <>
      <Students />
      <Button name={'MySubs1'} callback={() => Button1('Im Di', 28)} />
      <Button name={'MySubs2'} callback={() => Button2('Im Va')} />

      <UseState />

    </>

  )


}

export default App;
