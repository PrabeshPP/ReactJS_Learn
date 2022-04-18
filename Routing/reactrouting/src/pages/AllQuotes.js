import QuoteList from "../components/quotes/QuoteList";

const Dummy_Data = [
  { id: "q1", author: "Prabesh", text: "Winner never quit!!" },
  { id: "q2", author: "Prabesh the great", text: "Learner are the great leader!!" },
];

const AllQuotes = () => {
  return (
   <QuoteList quotes={Dummy_Data}/>
  );

};

export default AllQuotes;
