import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { toast, Toaster } from "react-hot-toast";
import Curriculum from '../public/img/CVBrallan.pdf'
export const Footer = () => {
  return (
    <footer>
      <div className="social">
        <a href="#" className="social-icon" target="_blank" rel="noreferrer">
          <svg width={20} height={17} xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.51 4.968c0 .142.02.305.02.448 0 1.14-.221 2.32-.642 3.46-.622 1.71-1.725 3.299-3.23 4.46-1.525 1.16-3.45 1.893-5.817 1.893a9.521 9.521 0 0 1-4.033-.896 7.148 7.148 0 0 0 4.053-1.588l.742-.59-.943-.02a3.142 3.142 0 0 1-2.768-1.752h.14c.361 0 .702-.04 1.023-.142l1.364-.367-1.404-.285A3.146 3.146 0 0 1 3.19 8.47a3.373 3.373 0 0 1-.702-1.567c.38.142.782.224 1.203.244l1.164.04-.963-.65a3.261 3.261 0 0 1-1.023-1.14 3.327 3.327 0 0 1-.381-1.548c0-.428.08-.814.22-1.18 1.786 2.015 4.313 3.318 7.162 3.46l.441.02-.1-.447a3.04 3.04 0 0 1-.08-.733c0-.896.36-1.71.942-2.28a3.14 3.14 0 0 1 4.574.061l.12.142.18-.04a7.37 7.37 0 0 0 1.606-.51c-.06.122-.1.245-.18.346-.061.082-.121.143-.181.204-.08.061-.181.143-.301.224l-1.344.814 1.544-.183c.181-.02.321-.04.442-.04.06 0 .12-.021.16-.021-.32.366-.682.692-1.063.977l-.14.102.02.204zM20 3.095c0-.265-.08-.53-.2-.754a1.24 1.24 0 0 0-.302-.346c.02-.102.04-.203.04-.326 0-.427-.18-.834-.521-1.12a1.41 1.41 0 0 0-1.605-.101 5.847 5.847 0 0 1-1.143.53A4.983 4.983 0 0 0 13.32 0c-1.284 0-2.447.509-3.33 1.323a5.018 5.018 0 0 0-1.525 2.85 8.566 8.566 0 0 1-4.734-2.992A1.402 1.402 0 0 0 2.648.65h-.1c-.462.041-.883.306-1.104.713-.481.753-.702 1.629-.702 2.504 0 .57.1 1.12.281 1.65-.18.223-.28.529-.3.834v.082c0 1.262.46 2.443 1.263 3.338-.04.082-.04.163-.04.245 0 .142.02.285.06.427.26.794.682 1.507 1.264 2.057a5.412 5.412 0 0 1-1.003.081c-.22 0-.462-.02-.682-.04h-.16c-.582 0-1.104.366-1.325.915l-.1-.02.08.061c-.06.143-.08.306-.08.468 0 .469.24.937.642 1.202A11.256 11.256 0 0 0 6.8 17c1.765 0 3.37-.366 4.774-.998 2.106-.956 3.771-2.524 4.895-4.377a12.039 12.039 0 0 0 1.745-5.985 8.06 8.06 0 0 0 1.484-1.71c.2-.245.301-.53.301-.835z"
              fillRule="evenodd"
              fill="#F3F2F4"
            />
          </svg>
          Twitter
        </a>
        <div className="divider" />
        <a href="#" className="social-icon" target="_blank" rel="noreferrer">
          <svg
            width={20}
            height={20}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
              fill="#FFFF"
            />
          </svg>
          Facebook
        </a>

        <div className="divider" />
        <a href="#" className="social-icon" target="_blank" rel="noreferrer">
          <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.98 0C7.275 0 6.934.02 5.872.06 4.81.1 4.088.28 3.447.521a4.745 4.745 0 0 0-1.763 1.162A5.39 5.39 0 0 0 .52 3.447c-.26.641-.42 1.363-.46 2.425C.02 6.934 0 7.275 0 10s.02 3.046.06 4.128c.04 1.062.22 1.784.461 2.425.26.661.601 1.223 1.163 1.764.56.56 1.122.901 1.763 1.162.641.24 1.363.42 2.425.46C6.934 19.98 7.275 20 10 20s3.046-.02 4.128-.06c1.062-.04 1.784-.22 2.425-.461a4.747 4.747 0 0 0 1.764-1.162 5.087 5.087 0 0 0 1.162-1.764c.24-.641.42-1.363.46-2.425C19.98 13.066 20 12.725 20 10s-.02-3.046-.06-4.128c-.04-1.062-.22-1.784-.461-2.425a4.745 4.745 0 0 0-1.162-1.764A5.09 5.09 0 0 0 16.553.521c-.661-.24-1.383-.42-2.445-.46C13.046.02 12.706 0 9.98 0m0 1.804c2.665 0 2.986 0 4.048.06.982.04 1.503.2 1.864.34.46.18.801.401 1.142.742.34.34.561.681.742 1.142.14.36.3.882.34 1.864.06 1.062.06 1.383.06 4.048s0 2.986-.06 4.028c-.04.982-.2 1.503-.34 1.864-.18.46-.401.801-.742 1.142-.34.34-.681.561-1.142.742-.36.14-.882.3-1.864.34-1.062.04-1.363.06-4.048.06-2.665 0-2.986-.02-4.048-.06-.982-.04-1.503-.2-1.864-.34a3.13 3.13 0 0 1-1.142-.742 3.129 3.129 0 0 1-.741-1.142c-.14-.36-.301-.882-.341-1.864-.04-1.062-.06-1.363-.06-4.048 0-2.665.02-2.986.06-4.048.04-.982.2-1.503.34-1.864.18-.46.401-.801.742-1.142a3.13 3.13 0 0 1 1.142-.742c.36-.14.882-.3 1.864-.34 1.062-.04 1.383-.04 4.048-.04m0 3.066A5.14 5.14 0 0 0 4.85 10a5.14 5.14 0 0 0 5.13 5.13A5.14 5.14 0 0 0 15.11 10a5.115 5.115 0 0 0-5.13-5.13m0 8.457A3.318 3.318 0 0 1 6.653 10 3.318 3.318 0 0 1 9.98 6.673 3.319 3.319 0 0 1 13.307 10a3.319 3.319 0 0 1-3.327 3.327m6.533-8.658c0 .662-.541 1.203-1.202 1.203a1.206 1.206 0 0 1-1.203-1.203c0-.661.541-1.202 1.203-1.202.681 0 1.202.521 1.202 1.202"
              fillRule="evenodd"
              fill="#FFF"
            />
          </svg>
          Instagram
        </a>
      </div>
      <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
          <path
            id="textcircle"
            fill="none"
            d="M80 15.7c19.4 0 36.8 8.6 48.6 22.2 9.8 11.3 15.7 26 15.7 42.1 0 18.3-7.6 34.8-19.8 46.5-11.5 11-27.2 17.8-44.4 17.8-19.6 0-37.2-8.8-49-22.6-9.6-11.2-15.4-25.8-15.4-41.7 0-14.4 4.8-27.8 12.8-38.5C40.2 25.8 58.9 15.7 80 15.7m0-1c-20.8 0-39.8 9.5-52.3 26.2-8.5 11.4-13 24.9-13 39.1 0 15.5 5.5 30.5 15.6 42.3 12.4 14.6 30.6 23 49.7 23 16.9 0 32.9-6.4 45.1-18.1 13-12.4 20.2-29.2 20.2-47.2 0-15.7-5.6-30.9-15.9-42.7C117 22.9 99 14.7 80 14.7z"
          />
          <text>
            <textPath xlinkHref="#textcircle">
              <tspan>
                Portfolio Brallan Mosquera ; todo es posible si se desea
              </tspan>
            </textPath>
          </text>
        </svg>
      </div>
      <div className="comment">
        <a href={Curriculum} download="Curriculum vitae brallan mosquera"
          className="nueva"
          onClick={() => {
            toast.success("Curriculum descargado 🔥");
          }}
        >
          <svg
            style={{ marginRight: "5px" }}
            width={20}
            height={20}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              d="M572.6 270.3l-96 192C471.2 473.2 460.1 480 447.1 480H64c-35.35 0-64-28.66-64-64V96c0-35.34 28.65-64 64-64h117.5c16.97 0 33.25 6.742 45.26 18.75L275.9 96H416c35.35 0 64 28.66 64 64v32h-48V160c0-8.824-7.178-16-16-16H256L192.8 84.69C189.8 81.66 185.8 80 181.5 80H64C55.18 80 48 87.18 48 96v288l71.16-142.3C124.6 230.8 135.7 224 147.8 224h396.2C567.7 224 583.2 249 572.6 270.3z "
              fill="#FFF"
            />
          </svg>
          descargar currículum
        </a>
        <div className="divider" />

        <p>© 2023 Brallan Mosquera</p>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <ScrollToTop smooth color="#f5234c" />
    </footer>
  );
};
