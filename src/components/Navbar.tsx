import Message from "./Message";
import Logo from "./ui/Logo";
import ToggleSwitch from "./ui/ToggleSwitch";

export default function Navbar() {
    return (
        <nav class="mx-auto flex h-[39px] w-full max-w-screen-2xl flex-row items-center px-3 transition-all duration-150 ease-in sm:h-[39.4px] sm:px-8">
            <div class="flex flex-1">
                <Logo />
            </div>
            <div class="flex flex-1 justify-center">
                <Message />
            </div>
            <div class="flex flex-1 justify-end">
                <ToggleSwitch />
            </div>
        </nav>
    );
}
