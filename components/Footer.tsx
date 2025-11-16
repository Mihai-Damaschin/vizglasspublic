import Image from "next/image";
import { EnvironmentOutlined, PhoneOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-dark)] text-white px-6 md:px-[60px] pt-[60px] pb-[30px]">
      <div
        className="
      max-w-[88.5rem] mx-auto
      flex justify-between items-center flex-wrap gap-[40px]
    "
      >
        <div>
          <Image
            src="/viz-glass-logo.png"
            alt="VIZ GLASS"
            width={150}
            height={150}
            className="h-[150px]"
          />
        </div>

        <div className="flex flex-col gap-[10px]">
          <p className="m-0 text-[16px]">Moldova</p>

          <p className="m-0 opacity-80 flex items-start gap-1">
            <EnvironmentOutlined
              className="text-[20px] mt-[2px]"
              style={{ color: "var(--color-primary)" }}
            />
            Strada Codrilor 16, Chișinău
          </p>

          <p className="m-0 opacity-80 flex items-start gap-1">
            <PhoneOutlined
              className="text-[20px] mt-[2px]"
              style={{ color: "var(--color-primary)" }}
            />
            <a
              href="tel:+37379977227"
              className="text-[${colors.text.primary}]"
            >
              +373 79 977 227
            </a>
          </p>

          <p className="m-0 opacity-80 flex items-start gap-1">
            <PhoneOutlined
              className="text-[20px] mt-[2px]"
              style={{ color: "var(--color-primary)" }}
            />
            <a
              href="tel:+37369916008"
              className="text-[${colors.text.primary}]"
            >
              +373 69 916 008
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-[10px]">
          <p className="m-0 text-[16px]">Italy</p>

          <p className="m-0 opacity-80 flex items-start gap-1">
            <PhoneOutlined
              className="text-[20px] mt-[2px]"
              style={{ color: "var(--color-primary)" }}
            />
            <a
              href="tel:+393899188936"
              className="text-[${colors.text.primary}]"
            >
              +39 38 991 88 936
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-[10px]">
          <p className="m-0 text-[16px] font-semibold">Follow Us</p>

          <div className="flex gap-[15px]">
            <a
              href="https://www.facebook.com/p/Vizglass-100063707346313/"
              className="text-[var(--color-primary)]"
            >
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={20}
                height={20}
              />
            </a>
            <a
              href="https://www.instagram.com/vizglass.md/"
              className="text-[var(--color-primary)]"
            >
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>

      <div
        className="
      text-center mt-[40px] pt-[20px]
      border-t border-[${colors.background.overlay}]
      opacity-70
    "
      >
        © {new Date().getFullYear()} VIZ GLASS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
