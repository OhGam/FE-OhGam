import NavBar from "./NavBar";

export default function Layout(props) {
  return (
    <div className="w-[390px] h-[844px] mx-auto flex justify-center items-center overflow-hidden">
      <div className="w-full h-full bg-st-gray-01 overflow-y-auto">
        <main>{props.children}</main>
      </div>
      <NavBar />
    </div>
  );
}
