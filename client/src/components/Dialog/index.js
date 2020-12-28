import React from 'react';

export default function Dialog({ open, render, buttons }) {
  return (
    <dialog open={open}>
      <form method='dialog'>
        <section>{render()}</section>
        <menu>{buttons}</menu>
      </form>
    </dialog>
  );
}
