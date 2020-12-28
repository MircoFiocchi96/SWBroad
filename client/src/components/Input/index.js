import React, { useEffect, useRef } from 'react';

export default function Input({ type, value = '', onChange, keyVal = '' }) {
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, [ref]);
  return (
    <input
      key={keyVal}
      type={type}
      value={value}
      onChange={onChange}
      ref={ref}
    />
  );
}
