export function Purchase() {
  return (
    <div className="flex justify-center mt-12 flex-wrap">
      <section className="w-[500px]">
        <div className="mb-12 flex justify-center flex-col">
          <h2 className="font-bold text-slate-400 mb-2">RS 400</h2>
          <h1 className="font-bold text-2xl text-white">Dados de Ecommerce </h1>
        </div>
        <div>
          <img
            src="https://mercadoeconsumo.com.br/wp-content/uploads/2018/05/Varejo-brasileiro-cresce-21-em-abril.jpeg"
            className="h-[300px] w-[400px]"
            alt=""
          />
        </div>
      </section>
      <section className="w-[500px] flex flex-col mt-[100px]">
        <div>
          <p className="text-[#B2B2B2] text-[20px]">
            Abandonos de carrinhos em uma <br></br>grande varejista no segmento
            de moda
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
  );
}
