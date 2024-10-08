import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";
import { Header } from "./components/layout/Header";
import { NotFound } from "./pages/_404.jsx";
import { Play } from "./pages/Play.js";
import { Home } from "./pages/Home.js";
import "./style.css";
import "@fontsource-variable/inter";

export function App() {
    return (
        <LocationProvider>
            <Header />
            <main class="relative mx-auto flex h-full w-full max-w-screen-custom flex-col items-center justify-center">
                <Router>
                    <Route path="/" component={Home} />
                    <Route path="/play" component={Play} />
                    <Route default component={NotFound} />
                </Router>
            </main>
        </LocationProvider>
    );
}

// @ts-ignore
render(<App />, document.getElementById("app"));
