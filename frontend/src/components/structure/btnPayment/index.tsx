interface IButtonPayment {
  handleCreateContract: () => void;
}
export function ButtonPayment({ handleCreateContract }: IButtonPayment) {
  return (
    <button
      onClick={handleCreateContract}
      className="bg-yellow w-[150px] h-[45px] font-bold rounded-md mt-4 hover:bg-blue hover:text-white transition-colors"
    >
      Comprar
    </button>
  );
}
