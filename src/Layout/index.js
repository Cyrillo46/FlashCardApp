import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Deck from "./Deck";
import EditDeck from "./EditDeck";
import CreateDeck from "./CreateDeck";
import Study from "./StudyDeck";
import AddCard from "./AddCards";
import EditCard from "./EditCard";
// import DeckList from "./DeckList.js";
import Home from "./Home";
import NotFound from "./NotFound";

function Layout() {
  return (
    <section>
      <Header />
      <div className="Layout">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route exact path="/decks/:deckId">
            <Deck />
          </Route>
          <Route exact path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route exact path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default Layout;
