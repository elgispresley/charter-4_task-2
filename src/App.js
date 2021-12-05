import { NavBar } from "./shared/NavBar";
import { Route, Switch } from "react-router-dom";
import { BooksList } from "./BooksList";
import { CreateBook } from "./CreateBook";
import { UpdateBook } from "./UpdateBook";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/create-book">
          <CreateBook />
        </Route>
        <Route path="/update-book/:id">
          <UpdateBook />
        </Route>
        <Route path="/">
          <BooksList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
