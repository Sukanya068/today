import React from "react";
import "./App.css";

import "todomvc-common/base.css";
import "todomvc-app-css/index.css";

// เขียน ทุก component รวมกันในไฟล์เดียว
// เพื่อความสะดวกในการเขียนบทความ
const TodoInput = () => <div />;
const TodoList = () => <div />;
const TodoCount = () => <div />;
const TodoFilters = () => <div />;
const Footer = () => <div />;

export default () => (
  <>
    <div className="App todoapp">
      <header className="header">
        <h1>TODAY</h1>

        <TodoInput />
      </header>
      <section className="main">
        <TodoList />
      </section>
      <footer className="footer">
        <TodoCount />
        <TodoFilters />
      </footer>
    </div>
    <Footer />
  </>
);