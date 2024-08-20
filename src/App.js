import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Entry from "./page/entry/Entry.page";
import Dashboard from "./page/dashboard/Dashboard.page";
import AddTicket from "./page/new ticket/AddTicket.page";
import TicketLists from "./page/ticket-list/TicketLists.page";
import Ticket from "./page/ticket/Ticket.page";
import PrivateRoute from "./components/private-route/PrivateRoute.comp";
import { Registration } from "./page/registration/Registration.page";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Route publique */}
          <Route path="/" element={<Entry />} />
          <Route path="/registration" element={<Registration />} />

          {/* Routes protégées */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-ticket" element={<AddTicket />} />
            <Route path="/tickets" element={<TicketLists />} />
            <Route path="/ticket/:tId" element={<Ticket />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
