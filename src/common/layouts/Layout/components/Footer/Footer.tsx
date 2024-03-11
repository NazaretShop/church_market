import imageLogo from "@/assets/images/logo.png";
import { EmailIcon, PhoneIcon } from "@/common/components/icons";
import { social } from "./data";
import {
  Contact,
  ContactWrapper,
  Content,
  Description,
  Flex,
  Link,
  LogoIcon,
  Media,
  Slogan,
  Socials,
  Wrapper,
} from "./styles";

const Footer = () => {
  const renderIcons = () => {
    return social.map(({ Icon, link, title }, id) => (
      <Link key={id} href={link} target="_blank" title={title} rel="noreferrer">
        <Icon />
      </Link>
    ));
  };

  return (
    <Wrapper>
      <Content>
        <Flex>
          <LogoIcon src={imageLogo} alt="logo" />
          <Slogan>
            <Description className="desktop-description">
              Ласкаво просимо до нашого інтернет-магазину церковних товарів
              "Назарет"! Знайдіть тут все необхідне для вашого духовного життя:
              ікони, свічки, книги та багато іншого. Звертайтесь за
              консультацією або замовленнями
            </Description>
            <Media>
              <ContactWrapper>
                <Contact>
                  <PhoneIcon stroke="#191919" />
                  <a href="tel:+380500102420" target="_blank" rel="noreferrer">
                    +380500102420
                  </a>
                </Contact>
                <Contact>
                  <EmailIcon />
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:nazaretcerkovnyi@gmail.com"
                  >
                    nazaretcerkovnyi@gmail.com
                  </a>
                </Contact>
              </ContactWrapper>
              <Socials>{renderIcons()}</Socials>
            </Media>
          </Slogan>
        </Flex>
        <Description className="mobile-description">
          Ласкаво просимо до нашого інтернет-магазину церковних товарів
          "Назарет"! Знайдіть тут все необхідне для вашого духовного життя:
          ікони, свічки, книги та багато іншого. Звертайтесь за консультацією
          або замовленнями
        </Description>
      </Content>
    </Wrapper>
  );
};

export default Footer;
