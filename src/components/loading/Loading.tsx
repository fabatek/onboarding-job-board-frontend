import React from 'react';

const Loading: React.FC = () => {
  return (
    <>
      <div className='py-5 d-flex justify-content-center'>
        <button className='btn btn-primary' type='button' disabled>
          <span
            className='spinner-border spinner-border-sm'
            role='status'
            aria-hidden='true'
          ></span>
          Loading...
        </button>
      </div>
    </>
  );
};

export default Loading;
