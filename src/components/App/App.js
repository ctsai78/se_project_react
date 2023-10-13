import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import api from "../../utils/api";
import auth from "../../utils/auth";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../Profile/EditProfileModal/EditProfileModal";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  /* ----------------------------- state variable ----------------------------- */
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [loggedIn, setloggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();
  /* -------------------------------- handlers -------------------------------- */
  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddItemSubmit = (item) => {
    api
      .addItem(item)
      .then((newItem) => {
        setClothingItems([newItem.data, ...clothingItems]);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleDeleteCard = (card, token) => {
    api
      .removeItem(card._id, token)
      .then(() => {
        setClothingItems((cards) => cards.filter((c) => c._id !== card._id));
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const handleSignupModal = () => {
    setActiveModal("signup");
  };

  const handleSignUp = (user) => {
    auth
      .creatUser(user)
      .then((newUser) => {
        console.log(newUser);
        setloggedIn(true);
        setCurrentUser(newUser.data);
        handleCloseModal();
        localStorage.setItem("jwt", newUser.token);
        console.log(currentUser);
      })
      .catch(console.error);
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleLogIn = (user) => {
    auth
      .login(user)
      .then((res) => {
        setCurrentUser(res.user);
        localStorage.setItem("jwt", res.token);
        setloggedIn(true);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleEditProfileModal = () => {
    setActiveModal("editProfile");
  };

  const handleUserChanges = (editUser) => {
    auth
      .editProfile(editUser)
      .then((newUser) => {
        console.log(newUser);
        setCurrentUser(newUser);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleLogOut = () => {
    setCurrentUser("");
    localStorage.removeItem("jwt");
    setloggedIn(false);
    history.push("/");
  };

  const handleLikeClick = (id, isLiked, user) => {
    const token = localStorage.getItem("jwt");
    isLiked
      ? api

          .removeCardLike(id, user, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard.data : c))
            );
          })
          .catch(console.error)
      : api

          .addCardLike(id, user, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard.data : c))
            );
          })
          .catch(console.error);
  };
  /* ----------------------------- useEffect Hooks ---------------------------- */
  useEffect(() => {
    api
      .getItemList()
      .then((items) => {
        setClothingItems(items);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!activeModal) return; // stop the effect not to add the listener if there is no active modal
    const handleEscClose = (e) => {
      // define the function inside useEffect not to lose the reference on rerendering
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      // add a clean up function for removing the listener
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]); // watch activeModal here

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .getContent(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setloggedIn(true);
          }
        })
        .catch(console.error);
    }
  }, []);
  // /* --------------------------------------------------------------------------- */

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          onCreateModal={handleCreateModal}
          onSignUpModal={handleSignupModal}
          onLogInModal={handleLoginModal}
          loggedIn={loggedIn}
        />
        <Switch>
          <Route exact path="/">
            <Main
              clothingItems={clothingItems}
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              onCardLike={handleLikeClick}
            />
          </Route>
          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Profile
              cards={clothingItems}
              onSelectCard={handleSelectedCard}
              onCreateModal={handleCreateModal}
              onEditProfile={handleEditProfileModal}
              onLogOut={handleLogOut}
              onCardLike={handleLikeClick}
            />
          </ProtectedRoute>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            onAddItem={handleAddItemSubmit}
            isOpen={activeModal === "create"}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onDeleteCard={handleDeleteCard}
          />
        )}
        {activeModal === "signup" && (
          <RegisterModal
            handleCloseModal={handleCloseModal}
            onSignUp={handleSignUp}
            onLogInModal={handleLoginModal}
          />
        )}
        {activeModal === "login" && (
          <LoginModal
            handleCloseModal={handleCloseModal}
            onLogin={handleLogIn}
            onSignUpModal={handleSignupModal}
          />
        )}
        {activeModal === "editProfile" && (
          <EditProfileModal
            handleCloseModal={handleCloseModal}
            onUserChanges={handleUserChanges}
          />
        )}
      </CurrentUserContext.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
