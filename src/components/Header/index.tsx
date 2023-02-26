import { Divider, HeaderContainer } from "./styles";
import Link from "next/link";

interface  HeaderProps{
  title: string;
  href: string;
}

export function Header({title, href}: HeaderProps) {
  return (
    <HeaderContainer>
      <Divider />
      <Link href={href} style={{ textDecoration: 'none' }}>
        <h1>
          {title}
        </h1>
      </Link>
    </HeaderContainer>
  )
}