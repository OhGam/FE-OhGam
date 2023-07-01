export default function Layout(props) {
  return (
    <div className="w-[390px] h-[844px] mx-auto flex justify-center items-center overflow-hidden">
      <div className="w-full h-full bg-st-gray-01 drop-shadow">
        <div className="overflow-y-scroll">
          <main>{props.children}</main>
        </div>
      </div>
    </div>
  );
}
