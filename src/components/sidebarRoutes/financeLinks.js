import { TbCurrencyNaira } from "react-icons/tb";
import { FinanceIcon } from "../../assets/svgs/svgs";

export const financeRoutes = {
  title: "Finance",
  // icon: <TbCurrencyNaira />,
  icon: <FinanceIcon />,
  link: "finance..",
  subNavs: [
    {
      title: "Revenue",
      link: "/finance/revenue",
    },
    {
      title: "Service Payment",
      link: "/finance/service-payment",
    },
    {
      title: "Wallet (chest)",
      link: "/finance/wallet",
    },
    {
      title: "Debt Service",
      link: "/finance/debt-service",
    },
    {
      title: "Disbursement",
      link: "/finance/disbursement",
    },
  ],
};
