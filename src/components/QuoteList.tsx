import { useEffect, useState } from 'react';
import { request } from '../axios';

function QuoteList() {
  const [quoteList, setQuoteList] = useState([]);
  const [errorQuote, setErrorQuote] = useState(null);

  useEffect(() => {
    const getQuote = async () => {
      try {
        const response = await request.get('/quotes');
        setQuoteList(response.data.quotes);

        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (error) {
        setErrorQuote(error.message);
      }
    };

    getQuote();
  }, []);

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
      }}>
      {quoteList.length > 0 ? (
        quoteList.map((quote, index) => {
          return (
            <div
              key={index}
              style={{ width: '500px' }}>
              <i>"{quote.quote}"</i>
              <p>- {quote.author}</p>
            </div>
          );
        })
      ) : (
        <span>{errorQuote}</span>
      )}
    </section>
  );
}

export default QuoteList;
