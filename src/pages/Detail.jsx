import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PrintTodo from "../components/PrintTodo";

const Detail = () => {
  const param = useParams();
  const todos = useSelector((state) => state.todos);
  const detailTodo = todos.find((todo) => todo.id === param.id);
  const isDone = detailTodo.isDone;
  const btnType = detailTodo.isDone ? "취소" : "완료";
  return (
    <>
      <PrintTodo print={[detailTodo]} filter={isDone} btn={btnType} />
    </>
  );
};

export default Detail;
