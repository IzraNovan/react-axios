import { useState } from 'react';

function CommentForm() {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch('https://dummyjson.com/comments/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          body: comment,
          postId: 3,
          userId: 5,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col w-96'>
        <label
          htmlFor='Komentar'
          className='text-sm'>
          Komentar
        </label>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className='border'></textarea>

        <button
          type='submit'
          className='border p-2 rounded-xl text-xs'>
          Kirim
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
