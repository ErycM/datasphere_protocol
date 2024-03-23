import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import Modal from "../../components/structure/modalError";

interface Connector {
  id: string;
  name: string;
  type: string;
  uid: string;
}

interface Connection {
  accounts: string[];
  chainId: number;
  connector: Connector;
}

interface State {
  connections: Map<string, Connection>;
  chainId: number;
  current: string;
}

interface WalletInfo {
  state: State;
  version: number;
}

export function Purchase() {
  const [walletLinkSession, setWalletLinkSession] = useState<string>("");
  const [walletLinkId, setWalletLinkId] = useState<string>("");
  const [wagmiStoreInfo, setWagmiStoreInfo] = useState("");
  const [descriptionErrorModal, setDescriptionErrorModal] = useState("");
  const [showModal, setShowModal] = useState(false);

  function openModal(description: string) {
    setShowModal(true);
    setDescriptionErrorModal(description);
  }

  useEffect(() => {
    const storedSession = localStorage.getItem(
      "walletlink:https://www.walletlink.org:session:secret"
    );
    const walletLinkId = localStorage.getItem(
      "walletlink:https://www.walletlink.org:session:id"
    );
    const wagmiStoreInfo = localStorage.getItem("wagmi.store");

    if (storedSession) setWalletLinkSession(storedSession);
    if (walletLinkId) setWalletLinkId(walletLinkId);
    if (wagmiStoreInfo) setWagmiStoreInfo(wagmiStoreInfo);
  }, []);

  async function handleCreateContract() {
    const body = {
      fromAddress: walletLinkId,
      privateKey: walletLinkSession,
    };

    if (body.privateKey.length <= 1 || body.fromAddress.length <= 1) {
      openModal("Conecte a uma conta anetes de tentar efetuar o pagamento");
    } else {
      api.post("/create/contract", body).then(() => {});
    }
  }

  return (
    <div>
      <Modal
        description={descriptionErrorModal}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div className="flex justify-center mt-16 flex-wrap mb-16">
        <section className="w-[500px]">
          <div className="mb-12 flex justify-center flex-col">
            <h2 className="font-bold text-slate-800 mb-2">RS 400</h2>
            <h1 className="font-bold text-2xl text-slate-950">
              Dados de Ecommerce{" "}
            </h1>
          </div>
          <div>
            <img
              src="https://mercadoeconsumo.com.br/wp-content/uploads/2018/05/Varejo-brasileiro-cresce-21-em-abril.jpeg"
              className="h-[250px] w-[300px]"
              alt=""
            />
          </div>
        </section>
        <section className="w-[500px] flex flex-col mt-[100px]">
          <div>
            <p className="text-black text-[20px]">
              Abandonos de carrinhos em uma <br></br>grande varejista no
              segmento de moda
            </p>
          </div>
          <div>
            <button className="bg-yellow w-[150px] h-[45px] font-bold rounded-md mt-4 hover:bg-blue hover:text-white transition-colors">
              {" "}
              Comprar
            </button>
          </div>
        </section>
      </div>
      <section className="flex items-center justify-center flex-col">
        <div className="mb-12 mt-[-30px]">
          <h2 className="font-bold text-2xl">Informações dos dados</h2>
        </div>
        <iframe
          src="https://www.kaggle.com/embed/anshumoudgil/olist-ecommerce-analytics-quasi-poisson-poly-regs?kernelSessionId=28308821"
          height="800"
          className="w-[90%]"
          // frameborder="0"
          scrolling="auto"
          title="Olist eCommerce-Analytics, Quasi Poisson+Poly Regs"
        ></iframe>
      </section>
    </div>
  );
}
