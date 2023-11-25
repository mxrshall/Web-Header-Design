import HeaderText from "./HeaderText"

function Header() {
  return (
    <div className="w-full h-[100vh] bg-[url('./images/background.gif')] bg-cover">
        <div className="w-full h-[100vh] bg-black opacity-50 flex items-center justify-center">
          <HeaderText/>
        </div>
    </div>
  )
}

export default Header