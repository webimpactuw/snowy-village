import React from "react";
import Modal from "react-modal";

export default function MenuHeader() {
  function DividerBar() {
    return <p className="text-[#bc9a6c] text-xl">|</p>;
  }
  function MenuLink({ text }: { text: string }) {
    return (
      <a
        href={`#${text}`}
        className="text-white text-xs text-center tracking-wide hover:underline basis-0 flex-grow"
      >
        {text}
      </a>
    );
  }
  function UnderlineSVG() {
    return (
      <div className="h-px w-25">
        <svg
          width="100"
          height="1"
          viewBox="0 0 100 1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100" height="1" x="0" y="0" fill="#E6EFF8" />
        </svg>
      </div>
    );
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-dark-blue pt-12 pb-2 grid justify-center">
      <h1 className="text-center text-white font-fjalla-one text-6xl tracking-widest mb-1">
        MENU
      </h1>
      <div className="grid grid-flow-col justify-center items-center">
        <UnderlineSVG />
        <div className="w-3 h-3 mx-1">
          <svg viewBox="0 0 67 67" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M66.7951 41.1793C66.8823 41.5341 66.8989 41.9025 66.8437 42.2636C66.7885 42.6248 66.6628 42.9715 66.4736 43.284C66.2844 43.5965 66.0355 43.8687 65.7411 44.085C65.4467 44.3013 65.1126 44.4575 64.7578 44.5446L56.1916 46.6306L58.4374 55.0126C58.532 55.3655 58.5562 55.7336 58.5085 56.0958C58.4608 56.4581 58.3422 56.8074 58.1595 57.1238C57.9767 57.4402 57.7334 57.7175 57.4435 57.9398C57.1536 58.1622 56.8227 58.3252 56.4697 58.4196C56.2355 58.4871 55.9937 58.5245 55.75 58.5308C55.1382 58.5303 54.5436 58.328 54.0584 57.9553C53.5732 57.5825 53.2244 57.0602 53.0661 56.4692L50.3822 46.4567L36.2813 38.3181V54.5989L43.8115 62.1256C44.0699 62.384 44.2749 62.6908 44.4148 63.0284C44.5546 63.366 44.6266 63.7279 44.6266 64.0933C44.6266 64.4588 44.5546 64.8207 44.4148 65.1583C44.2749 65.4959 44.0699 65.8027 43.8115 66.0611C43.5531 66.3195 43.2463 66.5245 42.9087 66.6643C42.5711 66.8042 42.2092 66.8761 41.8438 66.8761C41.4783 66.8761 41.1165 66.8042 40.7789 66.6643C40.4412 66.5245 40.1345 66.3195 39.876 66.0611L33.5 59.6816L27.124 66.0611C26.8656 66.3195 26.5588 66.5245 26.2212 66.6643C25.8836 66.8042 25.5217 66.8761 25.1563 66.8761C24.7908 66.8761 24.429 66.8042 24.0914 66.6643C23.7537 66.5245 23.447 66.3195 23.1885 66.0611C22.9301 65.8027 22.7252 65.4959 22.5853 65.1583C22.4455 64.8207 22.3735 64.4588 22.3735 64.0933C22.3735 63.7279 22.4455 63.366 22.5853 63.0284C22.7252 62.6908 22.9301 62.384 23.1885 62.1256L30.7188 54.5989V38.3181L16.6213 46.4567L13.9374 56.4692C13.779 57.0608 13.4297 57.5835 12.9437 57.9563C12.4578 58.3291 11.8625 58.531 11.25 58.5308C11.006 58.5304 10.763 58.4989 10.5269 58.437C10.1739 58.3426 9.84303 58.1795 9.55309 57.9572C9.26315 57.7349 9.01987 57.4576 8.83713 57.1412C8.65439 56.8248 8.53579 56.4755 8.4881 56.1132C8.4404 55.751 8.46456 55.3829 8.55918 55.0299L10.805 46.648L2.23879 44.562C1.52236 44.3859 0.905234 43.9324 0.523173 43.3013C0.141112 42.6702 0.0254097 41.9131 0.20152 41.1967C0.37763 40.4803 0.831126 39.8632 1.46224 39.4811C2.09336 39.099 2.85041 38.9833 3.56683 39.1594L13.8053 41.673L27.9375 33.4996L13.8088 25.3436L3.57031 27.8571C3.35308 27.9109 3.13007 27.9378 2.90628 27.9371C2.22623 27.9376 1.56958 27.6889 1.06046 27.238C0.551348 26.7871 0.225063 26.1654 0.143295 25.4903C0.0615277 24.8151 0.229944 24.1335 0.616704 23.5741C1.00346 23.0147 1.58176 22.6164 2.24226 22.4546L10.8085 20.3686L8.56265 11.9692C8.37179 11.2565 8.47188 10.4971 8.8409 9.8582C9.20992 9.21925 9.81765 8.75307 10.5304 8.56221C11.2431 8.37135 12.0025 8.47144 12.6414 8.84046C13.2804 9.20948 13.7466 9.81721 13.9374 10.5299L16.6213 20.5424L30.7188 28.6811V12.4003L23.1885 4.87358C22.6667 4.3517 22.3735 3.64389 22.3735 2.90584C22.3735 2.5404 22.4455 2.17854 22.5853 1.84091C22.7252 1.50329 22.9301 1.19652 23.1885 0.938109C23.447 0.679702 23.7537 0.474723 24.0914 0.334875C24.429 0.195026 24.7908 0.123047 25.1563 0.123047C25.8943 0.123047 26.6021 0.416233 27.124 0.938109L33.5 7.3176L39.876 0.938109C40.3979 0.416233 41.1057 0.123047 41.8438 0.123047C42.5818 0.123047 43.2896 0.416233 43.8115 0.938109C44.3334 1.45998 44.6266 2.1678 44.6266 2.90584C44.6266 3.64389 44.3334 4.3517 43.8115 4.87358L36.2813 12.4003V28.6811L50.3787 20.5424L53.0627 10.5299C53.2535 9.81721 53.7197 9.20948 54.3586 8.84046C54.9976 8.47144 55.7569 8.37135 56.4697 8.56221C57.1824 8.75307 57.7901 9.21925 58.1592 9.8582C58.5282 10.4971 58.6283 11.2565 58.4374 11.9692L56.1916 20.3512L64.7578 22.4372C65.4367 22.5822 66.0369 22.9758 66.4403 23.5408C66.8438 24.1058 67.0213 24.8012 66.9381 25.4905C66.8549 26.1797 66.5169 26.8129 65.9906 27.2656C65.4643 27.7183 64.7877 27.9578 64.0938 27.9371C63.87 27.9378 63.647 27.9109 63.4298 27.8571L53.1913 25.3436L39.0625 33.4996L53.1913 41.6556L63.4298 39.1421C63.7845 39.0548 64.153 39.0383 64.5141 39.0934C64.8752 39.1486 65.2219 39.2744 65.5344 39.4635C65.847 39.6527 66.1191 39.9016 66.3354 40.196C66.5517 40.4904 66.7079 40.8246 66.7951 41.1793Z"
              fill="#E6EFF8"
            />
          </svg>
        </div>
        <UnderlineSVG />
      </div>
      <button
        className="bg-[#ff3008] text-center text-white font-fjalla-one text-2xs tracking-wider my-3 mx-auto py-1 px-3"
        onClick={() => setIsOpen(true)}
      >
        Order on Doordash
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "75%",
            height: "20%",
            backgroundColor: "#e6eff8",
          },
        }}
      >
        <div className="grid grid-flow-row grid-cols-2 items-center justify-around h-full">
          <a
            href="https://www.doordash.com/store/snowy-village-seattle-24422697/"
            className="bg-[#ff3008] text-center text-white font-fjalla-one text-sm tracking-wider my-3 mx-auto py-1 px-3 rounded-md border-2 border-dark-navy"
          >
            SEATTLE
          </a>
          <a
            href="https://www.doordash.com/en-US/store/snowy-village-bellevue-24422669/"
            className="bg-[#ff3008] text-center text-white font-fjalla-one text-sm tracking-wider my-3 mx-auto py-1 px-3 rounded-md border-2 border-dark-navy"
          >
            BELLEVUE
          </a>
          <a
            href="https://www.doordash.com/store/snowy-village-portland-24729927/"
            className="bg-[#ff3008] text-center text-white font-fjalla-one text-sm tracking-wider my-3 mx-auto py-1 px-3 rounded-md border-2 border-dark-navy"
          >
            PORTLAND
          </a>
        </div>
      </Modal>
      <div className="w-screen flex justify-around items-center px-2">
        <MenuLink text="BINGSOO" />
        <DividerBar />
        <MenuLink text="TAIYAKI" />
        <DividerBar />
        <MenuLink text="DRINKS" />
      </div>
    </div>
  );
}
