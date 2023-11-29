import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/apiCalls"; // Substitua pelo caminho correto do seu arquivo de ações
import { RootState } from "../../redux/types";
import {
  getUserSuccess,
  getUserStart,
  getUserFailure,
} from "../../redux/usersRedux";
import Loading from "../../components/Loading/index";

const UserComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  const isFetching = useSelector((state: any) => state.users.isFetching);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getUserStart());
      try {
        const res = await getUser(dispatch);
        if (res && res.data) {
          // Atualiza o estado local apenas se a resposta contiver dados
          dispatch(getUserSuccess(res.data));
        }
      } catch (err) {
        dispatch(getUserFailure());
        console.error("erro", err);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      {isFetching ? (
        <Loading />
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.username} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserComponent;
