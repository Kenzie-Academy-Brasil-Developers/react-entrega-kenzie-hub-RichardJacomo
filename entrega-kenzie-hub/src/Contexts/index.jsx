import { createContext, useState, useEffect } from "react";
import { api } from "../Services/Api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const TechContext = createContext({});

export const Providers = ({ children }) => {
  // funções e estados de UserContext:
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalPlaceholder, setModalPlaceholder] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@TOKEN");
      if (!token) {
        navigate("/");
      } else {
        navigate("/home");
      }
      try {
        const { data } = await api.get("/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadUser();
  }, [refresh]);

  // funções de TechContext:

  async function deleteItem(id) {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await api.delete(`/users/techs/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (refresh === false) {
        setRefresh(true);
      } else {
        setRefresh(false);
      }
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <TechContext.Provider
        value={{
          user,
          deleteItem,
          modal,
          setModal,
          modalEdit,
          setModalEdit,
          modalPlaceholder,
          setModalPlaceholder,
          setUser,
          refresh,
          setRefresh,
        }}
      >
        {children}
      </TechContext.Provider>
    </UserContext.Provider>
  );
};
