import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import { addTitle } from "../redux/modules/title";
import { addBody } from "../redux/modules/body";
import shortid from "shortid";
import styled from "styled-components";
import PrintTodo from "../components/PrintTodo";

const Home = () => {
  const title = useSelector((state) => state.title);
  const body = useSelector((state) => state.body);
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const onHandleTodoSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: shortid.generate(),
      title,
      body,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
  };
  return (
    <>
      <h1>todos</h1>
      <form onSubmit={onHandleTodoSubmit}>
        <span>제목 :</span>
        <input
          value={title}
          onChange={(e) => dispatch(addTitle(e.target.value))}
        />
        <span>내용 :</span>
        <input
          value={body}
          onChange={(e) => dispatch(addBody(e.target.value))}
        />
        <button>제출하기</button>
      </form>
      <main>
        <ul>할 일</ul>
        <PrintTodo print={todos} filter={false} btn={"완료"} detail={false} />

        <ul>완료한 일</ul>
        <PrintTodo print={todos} filter={true} btn={"취소"} detail={false} />
      </main>
    </>
  );
};

export default Home;
