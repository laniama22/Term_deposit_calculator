const banks = [ 
  {
    id: 1,
    name: "Moneta", // https://www.moneta.cz/sporeni-a-investice/terminovane-vklady
    interestRate: 3.2,
  },
  {
    id: 2,
    name: "Komerční banka", // https://www.kb.cz/cs/obcane/sporeni/terminovany-ucet?utm_source=google&utm_medium=cpc&utm_campaign=KB_PerformanceLT_020_010125__S1_PPC_google_Search_CONV_4-LT-sporeni-Terminovany-vklad&tgt=S1-22879537381-182310919823-777522405990&gad_source=1&gad_campaignid=22879537381&gbraid=0AAAAADGKebacy89bVU6l4-PTSsXMuZG0z&gclid=EAIaIQobChMI67GOuIndkAMVt5GDBx0XEgOXEAAYASAAEgKn6vD_BwE
    interestRate: 3.0,
  },
  {
    id: 3,
    name: "ČSOB", // https://www.csob.cz/lide/sporeni/terminovany-vklad
    interestRate: 2.15,
  },
  {
    id: 4,
    name: "Raiffeisenbank", // https://www.rb.cz/osobni/zhodnoceni-uspor/sporeni/terminovany-vklad
    interestRate: 2.15,
  },
  {
    id: 5,
    name: "Air Bank", // https://www.airbank.cz/produkty/terminovany-vklad/?utm_source=google&utm_medium=cpc&utm_campaign=14_INVESTMENTS_SR_Brand-Investice&utm_id=13880890069&gad_source=1&gad_campaignid=13880890069&gbraid=0AAAAADlQha7TBJtZnh74TR0EuFllLT912&gclid=EAIaIQobChMIjZ2LgozdkAMVUY6DBx30_DFoEAAYASAAEgJf-vD_BwE
    interestRate: 2.7,
  },
  {
    id: 6,
    name: "Fio banka", // https://www.fio.cz/bankovni-sluzby/sporeni/terminovy-vklad-s-obnovou
    interestRate: 2.7,
  },
  {
    id: 7,
    name: "Česká spořitelna", // https://www.csas.cz/cs/osobni-finance/sporeni/terminovany-vklad?utm_source=google&utm_medium=cpc&utm_campaign=25!1!investment!vkladovyucet!vkladovyucet-longterm!cz!csas!cz000034!brand!phrase!v10&utm_id=18038856122&gad_source=1&gad_campaignid=18038856122&gbraid=0AAAAADp2TiwIYxnB7EEip-BZ9N6pnteQf&gclid=EAIaIQobChMI_7GSzYjdkAMV6qaDBx2ynQn8EAAYASAAEgIj5fD_BwE
    interestRate: 1.85,
  }
];

const tax = 0.15; // 15% tax on interest earned

export { banks, tax };