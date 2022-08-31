import logo from './logo.png';
import heroImg from "./hero.jpg"

export const LogoIcon = ({ classes }) => {
    return <img className={classes} src={logo} alt="logo" />
}

export const HeroImg = () => {
    return <img
        className="h-full w-full object-cover rounded-2xl"
        src={heroImg}
        alt="hero img"
    />
}