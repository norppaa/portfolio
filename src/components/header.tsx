import "../styles/Menu.css";
import MobileHeader from "./mobileHeader";
import DesktopHeader from "./desktopHeader";
import useWindowWidth from "../util/hooks";

export default function Header() {
  if (useWindowWidth() <= 800) {
    return <MobileHeader></MobileHeader>;
  } else {
    return <DesktopHeader></DesktopHeader>;
  }
}
