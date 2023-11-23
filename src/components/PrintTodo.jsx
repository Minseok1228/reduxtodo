import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { deleteTodo, switchTodo } from "../redux/modules/todos";

function PrintTodo({ print, filter, btn, detail }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onHandleNavigate = (id) => {
    const confirm = window.confirm("todo의 상세페이지로 이동하시겠습니까?");

    if (!confirm) return;
    navigate(`/${id}`);
  };
  return (
    <>
      {print
        .filter((todo) => {
          return todo.isDone === filter;
        })
        .map((todo) => {
          return (
            <Todo key={todo.id}>
              {detail ? (
                <NavSection $detail={detail}>
                  <p>{todo.title}</p>
                  <p>{todo.body}</p>
                </NavSection>
              ) : (
                <NavSection onClick={() => onHandleNavigate(todo.id)}>
                  <p>{todo.title}</p>
                  <p>{todo.body}</p>
                </NavSection>
              )}

              <button onClick={() => dispatch(switchTodo(todo))}>{btn}</button>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                삭제
              </button>
            </Todo>
          );
        })}
    </>
  );
}

export default PrintTodo;

const Todo = styled.li`
  width: 300px;
  height: 300px;
  background-color: green;
  margin: 10px;
  border: 3px solid yellow;
`;
const NavSection = styled.section`
  ${({ $detail }) => {
    if ($detail) {
      return;
    } else {
      return css`
        &:hover {
          transform: scale(1.05);
        }
      `;
    }
  }}
`;
