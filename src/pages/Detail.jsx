import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PrintTodo from "../components/PrintTodo";

const Detail = () => {
  const navigate = useNavigate();
  const param = useParams();
  const todos = useSelector((state) => state.todos);
  const detailTodo = todos.find((todo) => todo.id === param.id);
  const isDone = detailTodo.isDone;
  const btnType = detailTodo.isDone ? "취소" : "완료";
  return (
    <>
      <button onClick={() => navigate("/")}>홈으로</button>
      <PrintTodo
        print={[detailTodo]}
        filter={isDone}
        btn={btnType}
        detail={true}
      />
    </>
  );
};

export default Detail;
