import { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Container from './Container/Container';
import Section from './Section/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleBtnClick = data => {
    switch (data) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={handleBtnClick} />
        </Section>
        <Section title="Statistics">
          {total < 1 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    </>
  );
}
