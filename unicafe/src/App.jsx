import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.function}>{props.text}</button>;
};

const StatisticLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </>
  );
};

const Statistics = (props) => {
  return (
    <div>
      <h2>statistics</h2>
      {props.good + props.neutral + props.bad == 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          {" "}
          <table>
            <StatisticLine text="good" value={props.good} />

            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine
              text="all"
              value={props.good + props.neutral + props.bad}
            />
            <StatisticLine
              text="average"
              value={
                (props.good - props.bad) /
                (props.good + props.neutral + props.bad)
              }
            />
            <StatisticLine
              text="positive"
              value={
                (props.good / (props.good + props.neutral + props.bad)) * 100 +
                "%"
              }
            />
          </table>
        </>
      )}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <Button function={() => setGood(good + 1)} text="good" />
      <Button function={() => setNeutral(neutral + 1)} text="neutral" />
      <Button function={() => setBad(bad + 1)} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

/*
<Button function = {() => setGood(good + 1)} text = "good" /> */
export default App;
