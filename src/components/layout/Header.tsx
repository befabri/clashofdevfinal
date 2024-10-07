import Navbar from "../Navbar";

export function Header() {
    return (
        <header class="fixed top-0 z-50 h-[39px] w-full sm:h-[39.4px]">
            <div class="flex flex-col items-center pt-[40px] sm:pt-[20px]">
                <Navbar />
            </div>
        </header>
    );
}
