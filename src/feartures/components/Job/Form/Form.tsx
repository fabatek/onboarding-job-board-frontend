import React from 'react';

function Form(props: any) {
  return (
    <div>
      <form>
        <input type="text" className="input-search" name="subreddit" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Form;
