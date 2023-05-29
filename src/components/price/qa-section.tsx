import React from 'react';

export default function QASection() {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  return (
    <section className="md:mt-[180px my-[120px] md:mb-40">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <h3 className="mb-12 text-heading06 font-bold md:text-heading03">
          常見問題
        </h3>
        <ul className="grid gap-10 md:col-span-2">
          {[
            {
              title: '如何選擇適合的AI模型？',
              description:
                '選擇適合的 AI 模型需要考慮您的應用場景、需要解決的問題、可用的資源以及預算等因素。可以通過對比不同模型的性能、準確率、速度等指標，以及與其他用戶的評價與反饋，來選擇最適合的模型。',
            },
            {
              title: '租用模型的費用是如何計算的？',
              description:
                '租用模型的費用通常會根據模型的性能和使用時間等因素進行計算。具體而言，模型的性能可以根據其精度、速度、佔用資源等指標來評估；而使用時間可以根據租用時間的長短來計算，通常會按小時、天或月來計算。綜合考慮這些因素，系統會自動算出對應的租用費用。',
            },
            {
              title: '如何進行付款？',
              description:
                '付款方式可以通過網站上提供的線上支付平台進行支付。具體而言，您可以選擇信用卡、銀行轉帳電子錢包等不同的支付方式進行支付。在支付前，您需要先登錄網站並選擇適合的租用方案，系統會自動計算出對應的租用費用和支付金額，然後您可以選擇適合的支付方式進行支付。完成支付後，系統會自動向您提供相應的服務。',
            },
            {
              title: '租用模型的期限是多久？',
              description:
                '租用模型的期限可以根據您的需求進行設置，通常可以選擇幾個小時、幾天或幾個月等不同的時間段。',
            },
            {
              title: '如果在使用過程中遇到問題，應該怎麼處理？',
              description:
                '如果在使用過程中遇到問題，您可以聯繫客服或技術支持人員進行諮詢或報告問題。您也可以通過網站上的幫助中心或社區論壇尋找相關的解決方案和回答。',
            },
          ].map(({ title, description }, index) => (
            <li key={title} className="rounded-2xl border border-black-80">
              <button
                type="button"
                className="w-full px-10 py-5 text-left"
                onClick={() =>
                  setSelectedIndex(index === selectedIndex ? null : index)
                }
              >
                <p className="flex gap-5">
                  <i className="material-icons text-icon-medium">add</i>
                  <span className="text-heading06 font-bold">{title}</span>
                </p>
                {selectedIndex === index && (
                  <p className="ml-11 mt-3">{description}</p>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
