import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import Modal from "../../components/structure/modalError";
import { ButtonPayment } from "../../components/structure/btnPayment";
import { sendTransaction } from "@wagmi/core";
import { parseEther } from "viem";
import { config } from "../../config/configContract";

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

  let fromAddress: string;

  useEffect(() => {
    const storedSession = localStorage.getItem(
      "-walletlink:https://www.walletlink.org:session:secret"
    );
    const walletLinkId = localStorage.getItem(
      "-walletlink:https://www.walletlink.org:session:id"
    );
    const wagmiStoreInfoString = localStorage.getItem("wagmi.store");

    if (storedSession) setWalletLinkSession(storedSession);
    if (walletLinkId) setWalletLinkId(walletLinkId);

    if (wagmiStoreInfoString) {
      const wagmiStoreInfoJson = JSON.parse(wagmiStoreInfoString);
      setWagmiStoreInfo(wagmiStoreInfoJson);
    }
    setTimeout(() => {
      if (wagmiStoreInfo) {
        fromAddress = wagmiStoreInfo.state.connections.value[0][1].accounts;
        console.log(fromAddress);
      } else {
        console.error("O objeto não possui a estrutura esperada.");
      }
    }, 1000);
  }, []);

  async function handleCreateContract() {
    const body = {
      fromAddress: fromAddress,
      privateKey: walletLinkSession,
    };

    if (
      body.privateKey.length <= 1 ||
      body.fromAddress.length <= 1 ||
      fromAddress == ""
    ) {
      openModal("Conecte a uma conta antes de tentar efetuar o pagamento");
    } else {
      const result = await api.post("/create/contract", body);
      if (result.status == 200) {
        const result = await sendTransaction(config, {
          data: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          to: "0xd2135CfB216b74109775236E36d4b433F1DF507B",
          value: parseEther("0.01"),
        });

        console.log(result);
      }
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
          <div className="mb-8 flex justify-center flex-col">
            <h2 className="font-bold text-slate-800 mb-2">RS 400</h2>
            <h1 className="font-bold text-2xl text-slate-950">
              Dados de Ecommerce{" "}
            </h1>
          </div>
          <div>
            <img
              src="https://seriedesign.com.br/wp/wp-content/uploads/2018/03/e-com.png"
              className="h-[200px] w-[320px]"
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
            <ButtonPayment handleCreateContract={handleCreateContract} />
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
          className="w-[100%]"
          // frameborder="0"
          scrolling="auto"
          title="Olist eCommerce-Analytics, Quasi Poisson+Poly Regs"
        ></iframe>
      </section>
    </div>
  );
}
